import {
  Home,
  Search,
  LibraryAdd,
  AddCircle,
  Favorite,
  ExitToApp,
} from "@mui/icons-material";

export default function Sidebar() {
  return (
    <div className="w-64 bg-black text-white flex flex-col">
      <div className="p-4">
        <h1 className="text-xl font-semibold mb-6">Rythmix</h1>
        <nav className="space-y-2">
          <button className="flex items-center text-gray-400 w-full text-left hover:text-white">
            <Home className="mr-2" />
            Home
          </button>
          <button className="flex items-center text-gray-400 w-full text-left hover:text-white">
            <Search className="mr-2" />
            Search
          </button>
          <button className="flex items-center text-gray-400 w-full text-left hover:text-white">
            <LibraryAdd className="mr-2" />
            Your Library
          </button>
        </nav>
      </div>
      <div className="p-4 space-y-2">
        <button className="flex items-center w-full text-left text-gray-400 border border-gray-400 rounded p-2 hover:text-white hover:border-white">
          <AddCircle className="mr-2" />
          Create Playlist
        </button>
        <button className="flex items-center w-full text-left text-gray-400 border border-gray-400 rounded p-2 hover:text-white hover:border-white">
          <Favorite className="mr-2" />
          Liked Songs
        </button>
      </div>
      <div className="p-4">
        <button className="flex items-center text-gray-400 w-full text-left hover:text-white">
          <ExitToApp className="mr-2" />
          Log out
        </button>
      </div>
    </div>
  );
}
