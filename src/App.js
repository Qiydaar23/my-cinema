import './App.css';
import './index.css';
import AllRoutes  from './routes/AllRoutes';
import Header from "./componets/Header"
import Footer from "./componets/Footer"


function App() {
  return (
    <div className="App">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
