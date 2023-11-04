import './App.css';
import Counter from "./components/Counter";
function App() {

  // const [data, setData] = React.useState(null);

  var counter = 0;
  const handleCounterClick = () =>{
    console.log("click")
    counter ++;
  }

  // React.useEffect(()=> {
  //   fetch("/api")
  //   .then((res) => res.json())
  //   .then((data) => setData(data.message))
  //   .catch(err => setData(err.message) )
  // })
  return (
    <Counter />
  );
}

export default App;
