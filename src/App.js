import logo from "./logo.svg";
import "./App.css";

import ComponentA from "./Components/ComponentA";
import PortalDemo from "./Components/PortalDemo";
import RefDemo from "./Components/RefDemo";
import PureComponentExample from "./Components/PureComponentExample";
import LifecycleMethods from "./Components/LifecycleMethods";
import Form from "./Components/Form";
import ModuleStyleSheet from "./Components/ModuleStyleSheet/ModuleStyleSheet";
import InlineStyle from "./Components/InlineStyle";
import StyleSheet from "./Components/StyleSheet";
import ListRendering from "./Components/ListRendering";
import ConditionalRendering from "./Components/ConditionalRendering";
import MethodsAsProps from "./Components/MethodsAsProps";
import EventBind from "./Components/ClassComponent/EventBind";
import Counter from "./Components/ClassComponent/Counter";
import Message from "./Components/ClassComponent/message";
import WellCome from "./Components/WellcomeComponent/Wellcome";
import ClickCounter from "./Components/ClickCounter";
import HoverCounter from "./Components/HoverCounter";
import RenderPropsDemo from "./Components/RenderPropsDemo";
import ClickCounterTwo from "./Components/ClickCounterTwo";
import HoverCounterTwo from "./Components/HoverCounterTwo";
import { UserProvider } from "./Components/userContext";
import HttpGetRequestDemo from "./Components/HttpGetRequestDemo";
import UseStateHook from "./Components/ReactHooksDemos/UseStateHook";
import UseEffectHook from "./Components/ReactHooksDemos/UseEffectHook";
import UseContextHook from "./Components/ReactHooksDemos/UseContextHook";
function App() {
  return (
    <div className="App">
      {/* Hoc Component As Render Props  */}
      {/* <RenderPropsDemo render={(counter, incrementCount) => <ClickCounterTwo count={counter} incrementCount={incrementCount} /> } /> */}
      {/* <RenderPropsDemo render={(counter, incrementCount) => <HoverCounterTwo count={counter} incrementCount={incrementCount} /> } /> */}

      {/* <UserProvider
        value={{ name: "Moooo", age: "24", title: "Front-end Developer" }}
      >
        <ComponentA />
      </UserProvider> */}
      {/* <HttpGetRequestDemo /> */}
      {/* <UseStateHook /> */}
      {/* <UseEffectHook />
      <UserProvider value={{name: "Mohamed Rawash", title: "Mobile Developer"}}>
        <UseContextHook />
      </UserProvider> */}
    </div>
  );
}

export default App;
