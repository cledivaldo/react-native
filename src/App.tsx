import { AuthProvider } from "@/context/AuthContext";
// src/App.tsx
import React from "react";
import AppNavigator from "./navigation/AppNavigator";

const App = () => {
  return (
     <AuthProvider>
       <AppNavigator />
     </AuthProvider>
  );
};

export default App;
