// App.js
import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Navbar from "./layouts/navbar/navbar";
import User from "./pages/User/User";
import ChartOfAccount from "./pages/Accounts/chartOfAccount";
import GroupFile from "./pages/Project/groupFile";
import GroupHead from "./pages/Accounts/groupHead";
import ProjectFile from "./pages/Project/projectFile";
import SubHead from "./pages/Accounts/subHead";
import AddUser from "./pages/User/addUser";

const Dashboard = () => <h1>DashBoard</h1>

const App = () => {
  return (
    <>
      <Navbar />
      <RootLayout>
        <Routes>
          <Route path="/user/user" element={<User />} />
          <Route path="/projectcosting/projectfile" element={<ProjectFile />} />
          <Route path="/projectcosting/groupfile" element={<GroupFile />} />
          <Route path="/account/chartofaccount" element={<ChartOfAccount />} />
          <Route path="/account/grouphead" element={<GroupHead />} />
          <Route path="/account/subhead" element={<SubHead />} />
          <Route path="/user/user/adduser" element={<AddUser />} />
          {/* <Route path="*" element={<Dashboard />} /> */}
        </Routes>
      </RootLayout>
    </>
  );
};

export default App;
