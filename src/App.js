import Headercomp from "./HeaderComp/Headercomp";
import "antd/dist/antd.css";
import Comp from "./HeaderComp/Comp";
import SideBar from "./Ader/SideBar/SideBar";
import HeaderNav from "./Ader/HeaderNav";
import Thetwo from "./HeaderComp/Thetwo";
import Body from "./BodyComp/Body";
import About from "./Aboutcomp/About";
import HS from "./Firebase/HS";
import Card from "./Firebase/Card";
import Project from "./Roject/Project";
import You from "./Firebase/You";
import Tnput from "./Firebase/Tnput";


function App() {
  return (
    <div>
      {/* <Thetwo />
      <Body />
      <About /> */}
      <HS />
      <Tnput />
      <You />
      {/* <Project /> */}
    </div>
  );
}

export default App;
