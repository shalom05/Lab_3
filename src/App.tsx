
import React from 'react';
import Header from './Components/Header/Header';
import BudgetForm from './Components/BudgetForm/BudgetForm';
import './App.css'

const App: React.FC = () => {
  return (
    <div className="app">
      <Header/>
      <BudgetForm/>
    </div>
  );
};

export default App;
