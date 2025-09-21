import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import Simulation from './pages/Simulation.jsx';
import Drivers from './pages/Drivers.jsx';
import RoutesPage from './pages/Routes.jsx';
import Orders from './pages/Orders.jsx';
import Login from './pages/Login.jsx';

function App() {
  return (
    <div className="app-container">
      <Router>
        <Header />
        <Navbar />
        <div className="page-content">
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/simulation' element={<Simulation />} />
            <Route path='/drivers' element={<Drivers />} />
            <Route path='/routes' element={<RoutesPage />} />
            <Route path='/orders' element={<Orders />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
