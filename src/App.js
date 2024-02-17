import './App.css';
import AlertsPage from './Pages/AlertsPage';
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import NavBar from './Components/navBar';
import Filter from './Components/filter';



function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="page-container">

      
      <AlertsPage />
      <Filter/>
      </div>
      </div>

  );
}

export default App;
