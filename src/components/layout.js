import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { Container, Row, Col, Image } from "react-bootstrap"
import Navbar from "./navBar"
import {Divider} from "theme-ui"
import Scroll from '../components/Scroll';

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
            <section id="thetop">
              <main>{children}</main>
            </section>   
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
              <Col lg={8} md={12}>
             <p>
             At SBL Computer Education, we aim to pursue excellence and provide equal opportunities to irrespective of cost creed and religion.
             We also aim to center to needs of the students especially physically challenged ones to literate them in Computer Education Giving accessibility and Platform to
             achieve their goals.
             </p> <br/>
            </Col>
            <Col lg={4} md={12}>
                  NIELIT Courses
                  <Divider />
                  <ul style={{listStyleType: "none"}}>
                    <li style={{marginBottom: "5px"}}><Link style={{color: "white"}} to='/ACC'>Awareness In Computer Concepts(ACC)</Link></li>
                    <li style={{marginBottom: "5px"}}><Link style={{color: "white"}} to='/BCC'>Basic Computer Course(BCC)</Link></li>
                    <li style={{marginBottom: "5px"}}><Link style={{color: "white"}} to='/CCC'>Course in Computer Concept(CCC)</Link></li>
                    <li style={{marginBottom: "5px"}}><Link style={{color: "white"}} to='/CCC-%20Plus'>Course in Computer Concept Plus(CCC-Plus)</Link></li>
                </ul>
                </Col>
                <Col lg={4} md={12}>
                  IT & Accounting Courses
                  <Divider />
                  <ul style={{listStyleType: "none"}}>
                    <li style={{marginBottom: "5px"}}><Link style={{color: "white"}} to='/TALLY'>Tally.ERP 9</Link></li>
                    <li style={{marginBottom: "5px"}}><Link style={{color: "white"}} to='/OTHER%20COURSES'>Web Designing</Link></li>
                    <li style={{marginBottom: "5px"}}><Link style={{color: "white"}} to='/COTHER%20COURSESCC'>Crash Courses in Programming</Link></li>
                    <li style={{marginBottom: "5px"}}><Link style={{color: "white"}} to='/OTHER%20COURSES'>Multimedia</Link></li>
                    <li style={{marginBottom: "5px"}}><Link style={{color: "white"}} to='/OTHER%20COURSES'>Software Basics</Link></li>
                    <li style={{marginBottom: "5px"}}><Link style={{color: "white"}} to='/OTHER%20COURSES'>Desktop Publishing</Link></li>
                    <li style={{marginBottom: "5px"}}><Link style={{color: "white"}} to='/OTHER%20COURSES'>Course In Computer Applications(CCA)</Link></li>
                </ul> 
                </Col>
                <Col lg={4} md={12}>
                  Institute Address
                  <Divider />
                  <br />
                  <p>
                  357 First Floor, FA-357, Radhey Shyam Mandir Marg, Block FA, Mansarover Garden, New Delhi, Delhi 110015
                  </p>
                </Col>
                <span className="copy">© Copyright - 2020 SBL Computer Education</span>
            </Row>
            <Row className="justify-content-center"><br />
            <Scroll type="id" element="thetop">
              <button className="button button4">Top</button>
            </Scroll> 
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
