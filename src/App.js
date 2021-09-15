import './App.css';
import 'materialize-css/dist/css/materialize.min.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Blog from './pages/Blog';
import Film from './pages/Film';
import Contact from './pages/Contact';
import About from './pages/About';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyCuVIRxvlwXfT2E040CLIVHnQRReMVe300",
    authDomain: "dev-isalzufari.firebaseapp.com",
    databaseURL: "https://dev-isalzufari.firebaseio.com",
    projectId: "dev-isalzufari",
    storageBucket: "dev-isalzufari.appspot.com",
    messagingSenderId: "460839476418",
    appId: "1:460839476418:web:5368ff19295a4fba8baf5b",
    measurementId: "G-F0DB4LHYL6"
  };

  const app = initializeApp(firebaseConfig);
  getAnalytics(app);
  
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/film' component={Film} />
          <Route exact path='/contact' component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
