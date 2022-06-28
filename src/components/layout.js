import React from "react";
import { Link } from "gatsby"

import { container, heading, navLinks, navLinkItem, navLinkText } from "./layout.module.css"

function Layout({ pageTitle, children }) {
    return (
        <div className={container}>
            <title>{pageTitle}</title>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link className={navLinkText} to="/">home</Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link className={navLinkText} to="/about">about</Link>
                    </li>
                    <li></li>
                    <li></li>
                </ul>
            </nav>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main >
            <div>Copyright All Rights</div>
        </div>
    );
}

export default Layout;