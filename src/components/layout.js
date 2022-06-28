import React from "react";
import { Link } from "gatsby"

function Layout({ children }) {
    return (
        <main>
            <>
                <div style={{ gap: 20, display: "flex" }}>
                    <Link to="/">home</Link>
                    <Link to="/about">about</Link>
                    <Link to="/test-page">test-page</Link>
                </div>
                {children}
                <div>
                    copyright...
                </div>
            </>
        </main>
    );
}

export default Layout;