import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import AccommodationDetail from "./AccommodationDetail";
import NotFound from "./NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/accommodation/:id",
    element: <AccommodationDetail />,
    errorElement: <NotFound />,
  },
]);
