import Sidebar from "./sidebar";
import './sidebar/sidebar.css'

function RootLayout({ children }) {
  return (
    <div className="flex gap-2">
      <span className="sidebarContainer mt-10 fixed z-[10000] left-0">
        <Sidebar />
      </span>
      <main className="max-w-5xl flex-1 mx-auto py-4 mt-11">{children}</main>
    </div>
  );
}

export default RootLayout;
