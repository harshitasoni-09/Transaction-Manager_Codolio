import React from 'react';

const TransactionFilter = ({ filter, onFilterChange }) => {
  const categories = [
    'Healthcare', 'Shopping', 'Travel', 'Investment', 'Entertainment', 
    'Food', 'Education', 'Rent', 'Dining Out', 'Insurance', 'Rental Income', 
    'Pet Care', 'Clothing', 'Utilities', 'Fitness', 'Personal Care', 
    'Transportation', 'Debt Payments', 'Gifts', 'Groceries', 
    'Freelance Income', 'Household Supplies'
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Filter Transactions</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Category</label>
        <select
          value={filter.category}
          onChange={(e) => onFilterChange('category', e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        >
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Type</label>
        <select
          value={filter.type}
          onChange={(e) => onFilterChange('type', e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        >
          <option value="">All Types</option>
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
        </select>
      </div>
    </div>
  );
};

export default TransactionFilter;
