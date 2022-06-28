import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/Layout";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>My Little Home Page</p>
    <StaticImage alt=""
    src="https://images.mypetlife.co.kr/content/uploads/2021/10/19151330/corgi-g1a1774f95_1280.jpg"
    />
    </Layout>
  )
}

export default IndexPage
