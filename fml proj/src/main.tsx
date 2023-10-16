import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { Root } from "./pages/root";
import ErrorPage from "./error-page";
import { QueryClient, QueryClientProvider } from "react-query";
import { Home } from "./pages/home/home";
import { StorePage } from "./pages/store/StorePage";
import { ItemPagePublic } from "./pages/item/itemPagePublic";
import { StyledEngineProvider } from "@mui/material";
import { StrictMode } from "react";

const queryClient = new QueryClient();
const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "store/id/:storeID",
        element: <StorePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "store/id/:storeID/item/id/:itemID",
        element: <ItemPagePublic />,
        errorElement: <ErrorPage />,
      },
      // {
      //   path: "profile/",
      //   element: (
      //     <Protected>
      //       <Profile />
      //     </Protected>
      //   ),
      //   errorElement: <ErrorPage />,
      // },
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </StyledEngineProvider>
  </StrictMode>
);
