import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignupForm from './components/(frontend)/(signup)/signup';
import LoginForm from './components/(frontend)/(signup)/login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />

      </Routes>
    </Router>
  )
}

export default App
