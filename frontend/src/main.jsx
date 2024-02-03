import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/main.layout.jsx";
import Home from "./pages/Home/Home.jsx";
import BookDetails from "./pages/bookDetails/BookDetails.jsx";
import { Provider } from "react-redux";
import store from "./store.js";
import BookEdit from "./pages/BookEdit/BookEdit.jsx";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/books/:id", element: <BookDetails /> },
      {path:"/books/:id/edit",element : <BookEdit/>}
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);
