import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import {Container, Col, Row, Image, Jumbotron, Carousel} from "react-bootstrap";
import {Divider} from "theme-ui";

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" />
    <Jumbotron fluid>
    <h2>SBL Computer Education</h2>
    <h3 style={{textAlign: "center" , marginTop: "0"}}>Authorized</h3>
    <Container style={{marginLeft: "10px"}}>
      <Row>
        <Col lg={3} md={6} sm={12}>
        <Image className="ignou" src="https://img.theweek.in/content/dam/week/news/world/2017/july/IGNOU-Logo.jpg"  rounded />
       <p style={{marginTop: "1rem"}}><b><i>MCA & BCA GOVT DEGREE PROGRAMMES</i></b></p>
        </Col>
        <Col lg={3} md={6} sm={12}>
        <Image className="ignou" src="https://www.jneath.com/uploads/courses/course1550324024.png"  rounded />
       <p style={{marginTop: "1rem"}}><b><i>ACC, BCC, CCC, CCC+ GOVT SHORT TERM CERTIFICATION</i></b></p>
        </Col>
        <Col lg={3} md={6} sm={12}>
        <Image className="ignou" src="https://logodix.com/logo/699656.png"  rounded />
       <p style={{marginTop: "1rem"}}><b><i>TRAINING CENTRE</i></b></p>
        </Col>
        <Col lg={3} md={6} sm={12}>
        <Image className="ignou" src="https://accountingsoftware.co.in/wp-content/uploads/2017/02/1462269125_BUSY-Logo-Vertical_mid-1024x618.jpg"  rounded />
       <p style={{marginTop: "1rem"}}><b><i>TRAINING CENTRE</i></b></p>
        </Col>
      </Row>
    </Container>
    </Jumbotron>
    
 <h2>Intro</h2>
 <Divider />
    <Carousel>
  <Carousel.Item style={{'height':"400px"}}>
    <img
      style={{'height':"400px"}}
      className="d-block w-100"
      src="https://www.smartinfotech.org/assets/images/banner/banner-3.jpg"
      alt="intro slide"
    />
  </Carousel.Item>    
  <Carousel.Item style={{'height':"400px"}}>
    <img
      style={{'height':"400px"}}
      className="d-block w-100"
      src="https://5.imimg.com/data5/WX/WL/IP/ANDROID-14913617/product-jpeg-500x500.jpg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item style={{'height':"400px"}}>
    <img
      style={{'height':"400px"}}
      className="d-block w-100"
      src="https://static.vecteezy.com/system/resources/previews/000/344/730/original/web-design-and-development-banner-computer-with-tools-and-constructor-site-vector-flat-illustration.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item style={{'height':"400px"}}>
    <img
      style={{'height':"400px"}}
      className="d-block w-100"
      src="https://xpertcomputerclasses.com/includes/images/banner1.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
<h2>IT & Accounting Courses</h2>
<Divider />
<Container>
  <Row className="justify-content-center">
  <div className="course-card">
    <Col lg={4} md={6} sm={12}>
      <Link className="bard" to="/TALLY" style={{borderColor: "#008080" ,textDecoration: "none" ,
      backgroundImage: "url(https://logodix.com/logo/699656.png)"}}>
      <div>
        <h1>Tally Course</h1>
      </div>   
      </Link>
    </Col>
    </div>
    <div className="course-card">
    <Col lg={4} md={6} sm={12}>
      <Link className="bard" to="/OTHER%20COURSES" style={{borderColor: "#183641" , textDecoration: "none" ,
      backgroundImage: "url(https://blog.galaxyweblinks.com/wp-content/uploads/2016/01/web-designing.jpg)"}}>
      <div>
      <h1>Web Designing</h1>
      </div>
      </Link>
    </Col>
    </div>
    <div className="course-card">
    <Col lg={4} md={6} sm={12}>
      <Link className="bard" to="/OTHER%20COURSES" style={{borderColor: "#00a8e6" , textDecoration: "none" ,
      backgroundImage: "url(https://www.houseofbots.com/images/news/3624/cover.png)"}}>
      <div>
      <h1>Crash Courses</h1>
      </div>
      </Link>
    </Col>
    </div>
    <div className="course-card">
    <Col lg={4} md={6} sm={12}>
      <Link className="bard" to="/OTHER%20COURSES" style={{ textDecoration: "none" ,
      backgroundImage: "url(https://i2.wp.com/www.bapugraphics.com/blog/wp-content/uploads/2016/12/multimedia-course-fees.jpg?fit=1024%2C768&ssl=1)"}}>
      <div>
      <h1>Multimedia</h1>
      </div>
      </Link>
    </Col>
    </div>
    <div className="course-card">
    <Col lg={4} md={6} sm={12}>
      <Link className="bard" to="/OTHER%20COURSES" style={{ textDecoration: "none" ,
      backgroundImage: "url(https://www.coursevidya.com/img/services/dtp-image-slider-2.jpg)"}}>
      <div>
      <h1>D.T.P</h1>
      </div>
      </Link>
    </Col>
    </div>
    <div className="course-card">
    <Col lg={4} md={6} sm={12}> 
      <Link className="bard" to="/OTHER%20COURSES" style={{borderColor: "#e1df1b" , textDecoration: "none" ,
      backgroundImage: "url(data:image/png;base64,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)"}}>
      <div>
      <h1>CCA</h1>
      </div>
      </Link>
    </Col>
    </div>
  </Row>
</Container>
<h2>NIELIT Courses</h2>
<Divider />
<Container>
  <Row className="justify-content-center">
  <div className="course-card">
    <Col lg={4} md={6} sm={12}>
      <Link className="bard" to="/ACC" style={{textDecoration: "none" ,
      backgroundImage: "url(https://www.researchgate.net/profile/Prema_Nedungadi/publication/326141291/figure/fig2/AS:656617917911041@1533561319950/Awareness-in-computer-concepts-along-with-other-digital-programs.png)"}}>
      <div>
      <h1>ACC</h1>
      </div>   
      </Link>
    </Col>
    </div>
    <div className="course-card">
    <Col lg={4} md={6} sm={12}>
      <Link className="bard" to="/BCC" style={{borderColor: "#183641" , textDecoration: "none" ,
      backgroundImage: "url(https://www.smartinfotech.org/assets/images/bcc.png)"}}>
      <div>
      <h1>BCC</h1>
      </div>
      </Link>
    </Col>
    </div>
    <div className="course-card">
    <Col lg={4} md={6} sm={12}>
      <Link className="bard" to="/CCC" style={{borderColor: "#00a8e6" , textDecoration: "none" ,
      backgroundImage: "url(https://www.smartinfotech.org/assets/images/ccc.png)"}}>
      <div>
      <h1>CCC</h1>
      </div>
      </Link>
    </Col>
    </div>
    <div className="course-card">
    <Col lg={4} md={6} sm={12}>
      <Link className="bard" to="/CCC-%20Plus" style={{ borderColor:"#64fbfb" ,textDecoration: "none" ,
      backgroundImage: "url(https://www.smartinfotech.org/assets/images/cccplus.png)"}}>
      <div>
      <h1>CCC- Plus</h1>
      </div>
      </Link>
    </Col>
    </div>
  </Row>
</Container>
 </Layout>
)

export default IndexPage
