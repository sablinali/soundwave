import { Route, Routes} from "react-router-dom"
import { BrowserRouter as Router } from 'react-router-dom';
import Discover from "./pages/Discover/Discover"
import Homepage from "./pages/Homepage/Homepage"
import Join from "./pages/Join/Join"
import Layout from "./components/Layout"
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'


function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/discover" element={<Discover/>}/>
          <Route path="/join" element={<Join/>}/>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
