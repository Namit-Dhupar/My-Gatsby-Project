import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout";
import SEO from "../components/seo";

export const query = graphql`
query($slug: String!) {
  mdx(fields: { slug: { eq: $slug } }) {
   frontmatter {
       title
       pageInfo
       seoTitle
       thumbnail
       resizable
  }
  body
}
}
`
export default function Blogpage(props) {
    const {title, pageInfo, seoTitle, thumbnail, resizable} = props.data.mdx.frontmatter; 
    
    const getStyle = () =>{
      return{
        backgroundImage: `url(${thumbnail})`,
        backgroundSize: resizable ? '100% auto' : ''
      }
    }
    return (
    <Layout pageInfo={{ pageName: {pageInfo} }}>
    <SEO title={seoTitle} />
    <div className="blog-post-container">
        <article className="post">
        <div className="post-thumbnail" style={getStyle()}>
        <h1 className="post-title">{title}</h1>
       </div>
            <div className="blog-post-content">
              <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
            </div>
        </article>
      </div>
  </Layout>
  )
}
