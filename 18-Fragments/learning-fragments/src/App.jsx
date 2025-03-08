import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Fooditems from "./components/Fooditems"; 
import ErrorMessage from "./components/ErrorMessage"
function App(){
   //let foodItems = [];


   let foodItems = ["Orange","Carrot","Apple","Beetroot","Cabage","PineApple"];
  // let emptyMessage = foodItems.length === 0 ? <h3>I am still hungry.</h3> : null;

  // if(foodItems.length === 0)
  // {
  //   return <h3>I am still hungry.</h3>;
  // }


  return (

   <>
   <h1>Healthy Vegitables/fruits</h1>


   
  <Fooditems></Fooditems>
  <ErrorMessage></ErrorMessage>
</>
 
  );
}
export default App;
