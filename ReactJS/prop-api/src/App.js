import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Component/Layout";
import Home from "./Component/Home";
import PropesWonders from "./Component/PropesWonders";
import Api from './Component/api';
import './App.css';

export default function App() {
  return (
    <>
    <div className="App">

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="api" element={<Api />} />
          <Route path="worldwonder" element={<PropesWonders />} />
        </Route>
      </Routes>
    </BrowserRouter>

    </div><br /><br />

    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
