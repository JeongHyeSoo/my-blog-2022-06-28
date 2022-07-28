import { Link } from "gatsby"
import React from "react";
function Head() {
    return (
        <div style={{ gap: 20, display: "flex" }}>
            <Link to="/">home</Link>
            <Link to="/about">about</Link>
            <Link to="/test-page">test-page</Link>
        </div>
    );
}

export default Head;