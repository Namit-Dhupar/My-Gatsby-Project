import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Navbar, Nav } from "react-bootstrap";

const CustomNavbar = () => {
 
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: {fields: frontmatter___id, order: ASC}) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      logo: file(relativePath : {eq: "sbl-logo-final.jpg"}) {
        publicURL
      }
    }
  `)
 return (
    <>
      <Navbar expand="lg" id="site-navbar">
        {/* <Container> */}
        <Link to="/" className="link-no-style">
          <Navbar.Brand as="span"> 
          <img src={data.logo.publicURL} alt="my logo" />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" bg="white" />
        <Navbar.Collapse id="basic-navbar-nav">
          {data.allMdx.edges.map((edge) => {
          const { slug } = edge.node.fields;
          return(
            <Nav className="mr-auto">
            <Link to={`/${slug}`} className="link-no-style">
              <Nav.Link as="span">
               {slug}
              </Nav.Link>
            </Link>
          </Nav>
          )
          })}
       </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </>
  )
}

export default CustomNavbar
