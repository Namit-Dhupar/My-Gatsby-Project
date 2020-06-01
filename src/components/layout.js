import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { Container, Row, Col, Image } from "react-bootstrap"
import Navbar from "./navBar"
import {Divider} from "theme-ui"
import Scroll from '../components/Scroll';
import { FaHome, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";

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
            <Col className="contact">
              <h1>Contact Us</h1>
            </Col>
          </Row>
        </Container>  
        <Container style={{ backgroundColor: "#ffffff" }}>
          <Row style={{ backgroundColor: "#ffffff" }}>
  <Col lg={6} sm={12} xs={12} style={{ backgroundColor: "#ffffff" }}>
    <h6>Send a message</h6>
  <div className="two-grids -contact">
        <div>
          <form className="form-container" action="https://sendmail.w3layouts.com/SubmitContactForm" method="post">
            <div>
              <input placeholder="name" type="text" name="myname" id="myname"/>
            </div>
            <div>
              <input placeholder="email address" type="email" name="email" id="email"/>
            </div>
            <div>
              <input placeholder="subject" type="text" name="subject" id="subject"/>
            </div>
            <div>
              <textarea placeholder="message" name="message" id="message"></textarea>
            </div>
            <div style={{display: "flex", justifyContent: "flex-end"}}>
              <input type="submit" className="button -primary" style={{marginRight: 0}} />
            </div>
          </form>
        </div>
      </div>
  </Col>
  <Col lg={6} sm={12} xs={12} style={{padding: "0"}}>
  <iframe title="sbl direction" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.4593495985505!2d77.12819195002713!3d28.645961690138748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0313c5f674a9%3A0x6e9747ac44dc47cc!2sSbl%20Computer%20Education!5e0!3m2!1sen!2sin!4v1591016822494!5m2!1sen!2sin" allowfullscreen="" aria-hidden="false"></iframe>
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
                  <ul style={{listStyleType: "none"}}>
                  <li style={{marginBottom: "5px"}}><FaHome />&nbsp;&nbsp; 357 First Floor, FA-357, Radhey Shyam Mandir Marg, Block FA, Mansarover Garden, New Delhi, Delhi 110015</li>
                  <li style={{marginBottom: "5px"}}><FaPhoneAlt />&nbsp;&nbsp;011-2593 6787</li>
                  <li style={{marginBottom: "5px"}}><MdEmail />&nbsp;&nbsp;eshu.sharma@gmail.com</li>
                  </ul>
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
