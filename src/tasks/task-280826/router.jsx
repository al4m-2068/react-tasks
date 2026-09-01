import { createBrowserRouter } from "react-router";
import Dashboard from "./Dashboard";
import DaftarSantri from "./DaftarSantri";
import Tentang from "./Tentang";
import DetailSantri from "./DetailSantri";
import NotFound from "./NotFound";

export const pages = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard/>
  },
  {
    path: '/santri',
    element: <DaftarSantri/>
  },
  {
    path: '/santri/:id',
    element: <DetailSantri/>
  },
  {
    path: '/about',
    element: <Tentang/>
  },
  {
    path: '/*',
    element: <NotFound/>
  },
])