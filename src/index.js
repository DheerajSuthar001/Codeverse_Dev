import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ToastContainer,Slide } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import {Provider} from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";
const root = ReactDOM.createRoot(document.getElementById("root"));
const store=configureStore({
  reducer:rootReducer
})
root.render(

  <React.StrictMode>
   <Provider store={store}>
   <BrowserRouter>
      <App />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
    </BrowserRouter>
   </Provider>
  </React.StrictMode>
);
