import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from './App';
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById('root'));

window.addEventListener("beforeunload",
  function (event) {
    event.preventDefault();
  })

window.addEventListener('unload', function () {
  if (/github.io/.test(this.location.host)) {
    const homePage = this.location.origin + '/team-international-react-bootcamp/';
    const currentPage = this.location.href;
    if (homePage !== currentPage) {
      this.location.href = homePage;
    }
  }
})

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
