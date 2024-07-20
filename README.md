### Project Summary: Transaction Manager with Theme Toggle



**Project Overview:**
![Screenshot 2024-07-20 144119](https://github.com/user-attachments/assets/34ae84d0-a774-4f3c-8e2f-ad21867794ae)

This project is a **Transaction Manager** application that enables users to manage their financial transactions efficiently. The application supports both light and dark themes, allowing users to switch between them for a personalized viewing experience. 

**Key Features:**
- **Transaction Management**: Add, edit, and delete transactions.
- **Filtering**: Filter transactions by type, category, and title.
- **Responsive Design**: The application is designed to be responsive and user-friendly, with a gradient background that adjusts based on the selected theme.
- **Theme Toggle**: A toggle button in the top right corner allows users to switch between light and dark modes. The dark mode features a dark gradient background and white text for improved readability in low-light environments.
- **Redux Integration**: The application uses Redux for state management, handling transactions and UI states effectively.
- **Persistent Theme**: User’s theme preference is stored in local storage, ensuring that their choice persists across sessions.

**Technologies Used:**
- **Frontend**: React, Tailwind CSS
- **State Management**: Redux
- **Styling**: Custom CSS for theme management and transitions
- **Build Tools**: Webpack, Babel

**File Structure:**
- `src/` contains the core of the application, including:
  - `app/` for components and containers
  - `api/` for API interactions
  - `contexts/` for managing theme state
  - `reducers/` and `actions/` for Redux setup
  - `utils/` for constants and helper functions
  - `index.js` and `index.css` for entry point and global styles

**How to Run:**
1. Clone the repository: `git clone <repo-url>`
2. Navigate to the project directory: `cd <project-directory>`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`

**Screenshots:**
- Light Theme: [Include a screenshot]
- Dark Theme: [Include a screenshot]

**Future Enhancements:**
- Implement additional filters for more granular transaction management.
- Enhance accessibility features.
- Improve performance and scalability.

Feel free to explore the repository, contribute, and provide feedback.

