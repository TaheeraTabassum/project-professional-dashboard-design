
import './index.css'
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Layout/Root';
import Dashboard from './Layout/pages/Dashboard';
import CallLogs from './Layout/pages/CallLogs';
import Appointments from './Layout/pages/Appointments';
import Settings from './Layout/pages/Settings';
import LogOut from './Layout/pages/LogOut';
import Profile from './Layout/pages/SettingPages/Profile';
import Home from './Layout/pages/SettingPages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {index: true, element: <Dashboard></Dashboard>},
      {path: "/CallLogs", element: <CallLogs></CallLogs>},
      {path: "/Appointments", element: <Appointments></Appointments>},
      {path: "/Settings", element: <Settings></Settings>,
        children: [
           {index: true, element: <Home></Home>},
    {
      path: "profile", 
      element: <Profile></Profile>
    }
  ]
      },
      {path: "/LogOut", element: <LogOut></LogOut>}
    ]
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);
