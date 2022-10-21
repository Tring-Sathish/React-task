import './task/task4.css';
import Form from './task/form';

function App() {
  localStorage.setItem("Shop",JSON.stringify([
    {pro: "Realme", qua : "1", pri : 10000, tot : 10000 },
    {pro: "OnePlus", qua : "1", pri : 25000, tot : 25000 }, 
    {pro: "AC", qua : "1", pri : 20000, tot : 20000 }
  ]));


  return (
    <div className="App">
     <Form />
    </div>
  );
}

export default App;
