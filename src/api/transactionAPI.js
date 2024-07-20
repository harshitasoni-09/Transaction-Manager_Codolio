// Mock API functions for demonstration
export const fetchTransactions = async () => {
    return [
      { id: 1, type: 'Income', date: '2024-07-20', amount: 200, category: 'Food', currency: 'USD', title: 'Salary', note: 'Monthly salary' },
      // Add more sample transactions as needed
    ];
  };
  
  export const saveTransaction = async (transaction) => {
    // Save the transaction
    console.log('Saving transaction', transaction);
  };
  