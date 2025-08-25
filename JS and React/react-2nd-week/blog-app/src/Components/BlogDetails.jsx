import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const URL = "http://localhost:3000/Blogs";

function BlogDetails() {
  const blogId = useParams();
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    axios(URL).then((res) => {
      const item = res.data.find(
        (perBlog) => perBlog.id === Number(blogId.blogID)
      );
      setBlog(item);
    });
  }, [blogId]);
  console.log(blog);

  return (
    <div>
      <h2 style={{ padding: "30px" }}>Blog in detailed</h2>
      <hr />
      <h3 style={{ padding: "30px" }}>{blog.title}</h3>
      <div style={{ padding: "30px" }}>
        <small>Blog post ID:{blog.id}</small>
        <p>{blog.paragraph}</p>
      </div>
    </div>
  );
}

export default BlogDetails;
