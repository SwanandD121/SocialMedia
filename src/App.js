import "./App.css"
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";


function App() {
  return (
    <div className="App overflow-hidden text-gray-800 bg-gray-200 p-4">
        <div className="blur-3xl absolute bg-blue-200 w-80 h-56 rounded-full" style={{top: '-18%', right: '1rem'}}></div>
        <div className="blur-3xl absolute bg-blue-200 w-64 h-56 rounded-full" style={{top: '36%', left: '-8rem'}}></div>
        <div className="blur-3xl absolute bg-blue-200 w-64 h-56 rounded-full" style={{top: '85%', right: '21rem'}}></div>

        {/* <Home/> */}

        <Profile/>

    </div>
  );
}

export default App;
