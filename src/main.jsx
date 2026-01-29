
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {index: true, element: <Dashboard></Dashboard>},
      {path: "/CallLogs", element: <CallLogs></CallLogs>},
      {path: "/Appointments", element: <Appointments></Appointments>},
      {path: "/Settings", element: <Settings></Settings>},
      {path: "/LogOut", element: <LogOut></LogOut>}
    ]
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);
