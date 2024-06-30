import React from "react";
import ReactDOM from "react-dom";
import "regenerator-runtime/runtime";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App/App";
import reportWebVitals from "./reportWebVitals";
import { Toaster } from "react-hot-toast";


// subscribe to visibility change events
document.addEventListener('visibilitychange', () => {
  // fires when user switches tabs, apps, goes to homescreen, etc.
  if (document.visibilityState === 'hidden') {
    localStorage.setItem('Mine', 'false');
  }

  // fires when app transitions from prerender, user returns to the app / tab.
  if (document.visibilityState === 'visible') {
    localStorage.setItem('Mine', 'false');
  }

});

ReactDOM.render(
  <React.StrictMode>
    <Toaster position="top-center" reverseOrder={false} containerStyle={{}} toastOptions={{ duration: 4000, style: { fontSize: "1.6rem", maxWidth: "450px" } }} />
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.info))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
