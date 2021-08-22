import './App.css';
import Chart from './components/chart';
import Header from './components/header'
import InfoCards from './components/infoCards';

function App() {
  return (
    <div className="App-main">
      <Header/>
      <InfoCards/>
      <Chart/>
    </div>
  );
}

export default App;
