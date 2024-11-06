import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import PlaybackControls from "./PlaybackControls";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen bg-blue-500 text-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopBar />
        <main className="flex-1 p-8 overflow-auto">{children}</main>
      </div>
      <PlaybackControls />
    </div>
  );
}
