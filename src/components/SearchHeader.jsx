import React, { useEffect, useState } from "react";
import { BsYoutube, BsSearch } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";

function Navbar(props) {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const { keyword } = useParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };

  useEffect(() => setText(keyword || ""), [keyword]);

  return (
    <header>
      <Link to="/">
        <BsYoutube />
        <h1>Youtube</h1>
      </Link>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          className="search"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button>
          <BsSearch />
        </button>
      </form>
    </header>
  );
}

export default Navbar;
