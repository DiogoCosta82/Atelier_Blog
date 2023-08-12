import { useState } from "react";
import Menu from "./Menu";
import Contenu from "./ContenuPrincipal";
import "./App.css";
import Footer from "./Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Menu />
      <Contenu />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Footer />
      </div>
    </>
  );
}

export default App;
