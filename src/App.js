import "antd/dist/antd.css";
import Nav from "./Navigation/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Inputss from "./Input/Inputss";
import View from "./View/View";
import Ddetail from "./Detailed/Ddetail";
import Home from "./Home/Home";
import Sign from "./Sign/Sign";
import Chart from "./Chart/Chart";
import GenRand from "./Chart/GenRand";

function App() {
  return (
    // <Router>
    //   <div>
    //     <Nav />
    //   </div>
    //   <Switch>
    //     <Route exact path="/" component={Inputss} />
    //     <Route exact path="/View" component={View} />
    //     <Route exact path="/Ddetail" component={Ddetail} />
    //     <Route exact path="/Home" component={Home} />
    //     <Route exact path="/Sign" component={Sign} />
    //   </Switch>
    // </Router>
    <div>
      <Chart />
      {/* <GenRand /> */}
    </div>
  );
}

export default App;
