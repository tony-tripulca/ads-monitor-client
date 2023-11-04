import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Ads from "./modules/ads/Ads";

function AppRouter() {
  return (
    <Routes>
      {dashboard()}

      {/* Fallback */}
      <Route exact path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

function dashboard() {
  return (
    <React.Fragment>
      <Route exact path="/" element={<Navigate to="/ads" />} />
      <Route exact path="/ads" element={<Ads />} />
    </React.Fragment>
  );
}

export default AppRouter;
