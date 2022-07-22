import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Homepage } from "../src/pages/homepage/Homepage";
import { Rules } from './pages/rules/Rules';
import { Quiz } from './pages/quiz/Quiz';
import { Result } from "./pages/result/Result";

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/quiz-page" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
