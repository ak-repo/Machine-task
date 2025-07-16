import { useReducer } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function formInput(state, action) {
  switch (action.type) {
    case "title":
      return { ...state, title: action.payload };
    case "para":
      return { ...state, paragraph: action.payload };
    case "reset":
      return { title: "", paragraph: "" };
    default:
      return state;
  }
}

const URL = "http://localhost:3000/Blogs";
function BlogForm() {
  const [text, dispatch] = useReducer(formInput, { title: "", paragraph: "" });

  function handleBlogSubmit() {
    axios.post(URL, text).then((res) => {
      alert(`Form Submited - Status Code=${res.status} `);
      dispatch({ type: "reset" });
    });
  }

  return (
    <div className="page">
      <form>
        <input
          type="text"
          value={text.title}
          placeholder="Blog Title"
          onChange={(e) => dispatch({ type: "title", payload: e.target.value })}
        />
        <textarea
          value={text.paragraph}
          placeholder="Type about title"
          onChange={(e) => dispatch({ type: "para", payload: e.target.value })}
        ></textarea>
        <Link to="/blogs">
          <button type="button" onClick={handleBlogSubmit}>
            Submit Blog
          </button>
        </Link>
      </form>
    </div>
  );
}

export default BlogForm;
