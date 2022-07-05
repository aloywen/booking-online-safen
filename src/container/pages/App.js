import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './Home';
import Booking from './Booking';
import Login from './Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="booking" element={<Booking />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
}

export default App;
