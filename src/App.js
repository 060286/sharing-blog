import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import RootLayout from "./pages/RootLayout";

import "./App.css";
import Posts from "./pages/Posts";

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
  return <RouterProvider router={router} />;
}

export default App;
