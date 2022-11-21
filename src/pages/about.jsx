import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <p>Hi ! This is my site and I did it with Gatsby !</p>
        </Layout>
    );
};

export const Head = () => <Seo title="About Me" />;

export default AboutPage;
