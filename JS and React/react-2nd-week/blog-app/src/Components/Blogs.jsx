import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const URL = "http://localhost:3000/Blogs";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios(URL)
      .then((res) => {
        // console.log(res)
        setBlogs(res.data);
      })
      .catch((error) => setBlogs(error.message));
  }, []);
  console.log(blogs);

  return (
    <div style={{ padding: "60px" }}>
      <h1>Blogs</h1>
      <ul>
        {blogs.map((blog) => {
          return (
            <li style={{ padding: "30px" }} key={blog.id}>
              <small>Blog published ID: {blog.id}</small>
              <Link to={`/details/${blog.id}`}>
                <h3>{blog.title}</h3>
              </Link>
              <p>{blog.paragraph}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Blogs;
