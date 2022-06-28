import { Link } from "gatsby"
import React from "react";

function AboutPage() {
    return (<main>
        <title>자기소개</title>
        <div style={{ gap: 20, display: "flex" }}>
            <Link to="/">home</Link>
            <Link to="/about">about</Link>
            <Link to="/test-page">test-page</Link>
        </div>
        <h1>자기소개</h1>
    </main>
    )
}

export default AboutPage;