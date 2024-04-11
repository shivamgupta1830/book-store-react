import Header from "./components/Header";
import Body from "./components/Body";
import Login from "./components/Login";
import BookDetails from "./components/BookDetails";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Error from "./components/Error";
import Cart from "./components/Cart";

import { Provider } from "react-redux";

import appStore from "./utils/appStore";
import Checkout from "./components/Checkout";

function App() {
  return (
    <div>
      <Provider store={appStore}>
        <Header />
        <Outlet />
      </Provider>
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
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
    errorElement: <Error />,
  },
]);
export { App, appRouter };
