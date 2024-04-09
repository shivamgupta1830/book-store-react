import Header from "./components/Header";
import Body from "./components/Body";
import Login from "./components/Login";
import BookDetails from "./components/BookDetails";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Error from "./components/Error";

function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/home",
        element: <Body />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/book/:id",
        element: <BookDetails />,
      },
      // {
      //   path: "/cart",
      //   element: <Cart />,
      // },
    ],
    errorElement: <Error />,
  },
]);
export { App, appRouter };
