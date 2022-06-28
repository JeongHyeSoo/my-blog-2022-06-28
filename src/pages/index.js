import { Link } from "gatsby"
import React from "react";

const IndexPage = () => {
  return (
    <main >
      <title>Home Page</title>
      <div style={{ gap: 20, display: "flex" }}>
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
        <Link to="/test-page">test-page</Link>
      </div>
      <h1>Home Page</h1>
    </main>
  )
}

export default IndexPage
