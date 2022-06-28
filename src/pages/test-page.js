import { Link } from "gatsby"
import React from "react";

function TestSpacePage() {
    return (
        <main>
            <title>테스트</title>
            <div style={{ gap: 20, display: "flex" }}>
                <Link to="/">home</Link>
                <Link to="/about">about</Link>
                <Link to="/test-page">test-page</Link>
            </div>
            <h1>테스트</h1>
        </main>
    )
}

export default TestSpacePage;