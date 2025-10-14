import Card from "./Components/Card";
import Navbar from "./Components/Navbar";

const App = () => {
  const user = "Somu";
  let age = 25
  return (
    <div>
      <Navbar/>
     <Card number = '1'/>
     <Card number = '2'/>
    </div>
  );
};

export default App;
