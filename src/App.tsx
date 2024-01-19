import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home';
import Quiz from './pages/quiz/Quiz';
import Result from './pages/Result/Result';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result/:count" element={<Result />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
