import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RespectivePage from "./pages/respectivePage";

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={ <HomePage />} />
    <Route path="/subject" element={ <RespectivePage />} />

    </Routes>
    </>
  );
}

export default App;
