import React from "react";
import AppRouter from "./routers/AppRouters";
import { AuthProvider } from "./contexts";

function App() {
  return <AuthProvider><AppRouter /></AuthProvider>;
}

export default App;
