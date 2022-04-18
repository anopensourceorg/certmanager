import {Routes,Route} from "react-router-dom";
import Certificate from "./components/Certificate";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/:id" element={<Certificate/>}/>

      </Routes>
    </div>
  );
}

export default App;
