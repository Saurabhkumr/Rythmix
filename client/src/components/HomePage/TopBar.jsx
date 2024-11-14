import { useCookies } from "react-cookie";
import { SkipPrevious, SkipNext } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function TopBar() {
  const [cookies] = useCookies(["token"]);
  const isLoggedIn = !!cookies.token;

  return (
    <div className="flex justify-between p-4 bg-gray-900">
      <div className="flex items-center">
        <button className="p-2 text-gray-400 hover:text-white">
          <SkipPrevious />
        </button>
        <button className="p-2 text-gray-400 hover:text-white ml-2">
          <SkipNext />
        </button>
      </div>
      <div className="flex items-center">
        {isLoggedIn ? (
          <div className="flex items-center">
            <Link
              to="/uploadSong"
              className="ml-4 text-white px-4 py-1 rounded-2xl hover:bg-gray-700"
            >
              Upload Song
            </Link>
          </div>
        ) : (
          <>
            <Link to="/signup" className="text-gray-400 hover:text-white">
              Sign up
            </Link>
            <Link
              to="/login"
              className="bg-white text-gray-900 ml-4 px-4 py-1 rounded-2xl hover:bg-gray-200"
            >
              Log in
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
