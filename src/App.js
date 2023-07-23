import logo from './logo.svg';
import './App.css';
import TopBar from './components/TopBar'
function App() {
  return (
    <div className="App">
      <TopBar />
      <div className='flex  flex-col justify-center items-center h-screen'>
        <h2 className='text-bold text-5xl text-center	'>This is a place where you can sign in, gather our own money know as scash coin and buy assets on our website. More comming up soon</h2>
      </div>
    </div>
  );
}

export default App;
