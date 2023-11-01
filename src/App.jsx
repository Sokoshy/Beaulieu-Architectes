import { ApolloProvider } from "@apollo/client/react";
import client from "./lib/apollo";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Prestation from "./pages/Prestation";
import Agence from "./pages/Agence";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/prestation",
    element: <Prestation />,
  },
  {
    path: "/agence",
    element: <Agence />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
]);

function App() {
  return (
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  );
}

export default App;
