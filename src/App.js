import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import News from "./components/News";

export default class App extends Component {
  render() {
    const apiKey = process.env.REACT_APP_NEWS_API;

    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <News country="in" category="general" apiKey={{ apiKey }} />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
