import './App.css';
import Expense from './components/Expenses/Expense';

function App() {
  const expenses  = [
    { id: 'e1', title: 'Car Insurance', amount: 244, date: new Date(1996,4,29) },
    { id: 'e1', title: 'Bike', amount: 255, date: new Date(2021, 0, 12) },
    { id: 'e1', title: 'Bicycle ', amount: 211, date: new Date(2021,4, 12) },
    { id: 'e1', title: 'New Tv ', amount: 222, date: new Date(2021, 7, 12) }
  ]
 
  return (
    <div className="App">
      <Expense items={expenses}/>
    </div>
  );
}

export default App;
