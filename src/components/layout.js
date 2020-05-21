import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { Container, Row, Col, Image} from "react-bootstrap"
import Navbar from "./navBar"

const Layout = ({ children, pageInfo }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Container fluid className="px-0 main">
          <Row noGutters className="justify-content-center">
            <Col>
            </Col>
          </Row>
          <Navbar pageInfo={pageInfo} />
          <Row noGutters>
            <Col>
              <Container className="mt-5">
                <main>{children}</main>
              </Container>
            </Col>
          </Row>
        </Container>
        <Container fluid className="px-0">
          <Row noGutters >
            <Col>
              <footer>
              
             <Container>  
              <Row style={{marginTop: '30px'}}> 
              <Col sm={4}>
              <Image src="https://imgur.com/IFGVuO6.jpg"/>
              </Col>
              <Col sm={8}>
             <p>
             At SBL Computer Education, we aim to pursue excellence and provide equal opportunities to irrespective of cost creed and religion.
             We also aim to center to needs of the students especially physically challenged ones to literate them in Computer Education Giving accessibility and Platform to
             achieve their goals.
             </p> <br/>
             © Copyright - 2020 SBL Computer Education
            </Col>
            </Row>
            </Container>
            </footer>
            </Col>
          </Row>
        </Container>
      </>
    )}
  />
)

export default Layout
