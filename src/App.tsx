import "./App.css";
import "./index.css";
import Header from "./components/header";
import Headshot from "./components/headshot";
import Socials from "./components/socials";

function App() {
  return (
    <div>
      <Headshot src="src/assets/headshot.jpg"/>
      <Header />
      <Socials />
    </div>
  );
}

export default App;
