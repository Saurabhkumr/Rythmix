import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import HomePage from "./components/HomePage/HomePage";
import Login from "./components/Routes/Login";
import Signup from "./components/Routes/Signup";
import UploadSong from "./components/Routes/UploadSong";
import { useCookies } from "react-cookie";

function App() {
  const [cookie, setCookie] = useCookies(["token"]);
  console.log(cookie.token);
  return (
    <Router>
      {cookie.token ? (
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/uploadSong" element={<UploadSong />} />{" "}
          {/* Ensure correct path */}
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
