import { Link, useStaticQuery, graphql } from "gatsby"
import { container, heading, navLinks, navLinkItem, navLinkText, siteTitle } from "./layout.module.css"
import React from "react";

function Layout({ pageTitle, children }) {

    const data = useStaticQuery(graphql`
    query {
        site { 
            siteMetadata { 
                title 
            }
        }
    }
`)
    return (
        <div className={container}>
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            <header className={siteTitle}>{data.site.siteMetadata.title}</header>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link className={navLinkText} to="/">home</Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link className={navLinkText} to="/about">about</Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link className={navLinkText} to="/blog">blog</Link>
                    </li>
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