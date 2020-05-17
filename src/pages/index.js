import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {Container, Col, Row, Image} from "react-bootstrap";

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" />
    <Container>
  <Row>
    <Col xs={4}>
      <Image src="https://i.imgur.com/AhF9mZ6.jpg" thumbnail />
    </Col>
    <Col xs={8}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
   </Col>
   </Row>
</Container>
    
  </Layout>
)

export default IndexPage
