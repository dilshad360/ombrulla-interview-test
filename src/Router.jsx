
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Discover from './pages/Discover';
import Deals from './pages/Deals';
import Contact from './pages/Contact';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
