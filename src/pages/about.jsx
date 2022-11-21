import { Link } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";

const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <p>Hi ! This is my site and I did it with Gatsby !</p>
        </Layout>
    );
};

export const Head = () => <title>About Me</title>;

export default AboutPage;
