import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionList';
import TransactionFilter from '../components/TransactionFilter';
import { deleteTransaction } from '../../actions';
import ThemeToggle from '../components/ThemeToggle'; // Import ThemeToggle
import { useTheme } from '../../contexts/ThemeContext'; // Import useTheme

const App = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingTransaction, setEditingTransaction] = useState(null);
  const [filter, setFilter] = useState({ type: '', category: '', title: '' });
  const transactions = useSelector((state) => state.transactions.transactions);
  const dispatch = useDispatch();
  const { theme } = useTheme(); // Access current theme

  const handleAddTransaction = () => {
    setIsFormOpen(true);
  };

  const handleEditTransaction = (transaction) => {
    setEditingTransaction(transaction);
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setEditingTransaction(null);
  };

  const handleFilterChange = (key, value) => {
    setFilter((prev) => ({ ...prev, [key]: value }));
  };

  const handleDeleteTransaction = (id) => {
    dispatch(deleteTransaction(id));
  };

  const filteredTransactions = transactions.filter((transaction) => {
    const typeMatch = filter.type === '' || transaction.type === filter.type;
    const categoryMatch = filter.category === '' || transaction.category === filter.category;
    const titleMatch = filter.title === '' || transaction.title === filter.title;
    return typeMatch && categoryMatch && titleMatch;
  });

  return (
    <div className={`min-h-screen p-8 ${theme}`}>
      <header className="text-center mb-6 relative">
        <ThemeToggle /> {/* Add the theme toggle button */}
        <h1 className="text-4xl font-extrabold text-gray-800">Transaction Manager</h1>
        <p className="text-lg text-gray-600 mt-2">Manage your income and expenses efficiently</p>
      </header>
      <button
        onClick={handleAddTransaction}
        className="py-2 px-4 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
      >
        + Add Transaction
      </button>
      <div className="my-6">
        <TransactionFilter filter={filter} onFilterChange={handleFilterChange} />
      </div>
      <div className="my-6">
        <TransactionList
          transactions={filteredTransactions}
          onEdit={handleEditTransaction}
          onDelete={handleDeleteTransaction}
        />
      </div>
      {isFormOpen && (
        <TransactionForm transaction={editingTransaction} onClose={handleCloseForm} />
      )}
    </div>
  );
};

export default App;
