
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './assets/pages/LandingPage';
import SignupPage from './assets/pages/SignupPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}

export default App;