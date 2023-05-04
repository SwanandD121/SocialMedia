import "./App.css"
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";


function App() {
  return (
    <div className="App overflow-hidden text-gray-800 bg-gray-200 dark:bg-black/90 p-4">
        <div className="blur-3xl absolute bg-blue-200 dark:bg-blue-800/30 w-80 h-56 rounded-full" style={{top: '-18%', right: '1rem'}}></div>
        <div className="blur-3xl absolute bg-blue-200 dark:bg-blue-800/30 w-64 h-56 rounded-full" style={{top: '36%', left: '-8rem'}}></div>
        <div className="blur-3xl absolute bg-blue-200 dark:bg-blue-800/30 w-64 h-56 rounded-full" style={{top: '85%', right: '21rem'}}></div>

        {/* <Home/> */}

        <Profile/>

        {/* <Auth/> */}

    </div>
  );
}

export default App;
