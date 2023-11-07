import { createContext, useState } from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import RootLayout from "./pages/RootLayout";
import Posts from "./pages/Posts";

import { ENGLISH } from "./common/commonConstant";

import "./App.css";

export const LanguagesContext = createContext(null);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about-me" element={<About />} />
      <Route path="post/:id" element={<Posts />} />
    </Route>
  )
);

function App() {
  const [language, setLanguage] = useState(ENGLISH);

  const changeLanguages = (name) => {
    setLanguage(name);
  };

  return (
    <LanguagesContext.Provider value={{ language, changeLanguages }}>
      <RouterProvider router={router} />
    </LanguagesContext.Provider>
  );
}

export default App;
