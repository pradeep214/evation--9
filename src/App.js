
import './App.css';
import {useState} from "react"
import Counter from './redux/Counter';
function App() {

 const [count, setCount] = useState(0)

 function add(){
  setCount(count +1)
 }
 function remove(){
  setCount(count -1)
 }
  return (
    <div className="App">
     <h1> Counter -App</h1>
<button onClick={add}>Increment</button>
<h3>{count}</h3>
<button  onClick={remove} >Decrement</button>

<Counter />

    </div>
  );
}

export default App;
