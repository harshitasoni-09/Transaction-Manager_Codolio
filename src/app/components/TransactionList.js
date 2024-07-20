import React from 'react';

const TransactionList = ({ transactions, onEdit, onDelete }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Transaction List</h2>
      {transactions.length > 0 ? (
        <ul>
          {transactions.map((transaction) => (
            <li
              key={transaction.id}
              className="border-b border-gray-200 py-4 flex justify-between items-center"
            >
              <div>
                <div className="font-medium text-gray-900">{transaction.title}</div>
                <div className="text-gray-600">{transaction.category}</div>
                <div className="text-gray-600">{transaction.date}</div>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => onEdit(transaction)}
                  className="py-1 px-3 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(transaction.id)}
                  className="py-1 px-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition duration-300"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No transactions found.</p>
      )}
    </div>
  );
};

export default TransactionList;
