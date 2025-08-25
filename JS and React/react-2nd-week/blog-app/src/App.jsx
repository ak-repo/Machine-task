import BlogForm from "./Components/BlogForm";
import BlogDetails from "./Components/BlogDetails";
import Blogs from "./Components/Blogs";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BlogForm />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/details/:blogID" element={<BlogDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
