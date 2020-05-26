---
title: This is Tally Courses offered Page
pageInfo: TALLY
seoTitle: TALLY | SBL
thumbnail: https://i.imgur.com/vYx7uDE.jpg
id: 6
resizable: false
---

import {Container, Row, Navbar, Nav, Card } from "react-bootstrap";
import {Tabs, Tab} from 'react-bootstrap-tabs';

## Tally Courses offered

  <Container>
   <Row>
   <section>
   <Card>
  <Card.Header>
    <Nav variant="pills">
     <Nav.Item>
    <Tabs onSelect={(index, label) => console.log(`Selected Index: ${index}, Label: ${label}`)} >
    <Tab label="tab 1">This is Tab 1</Tab>
    <Tab label="tab 2">This is Tab 2</Tab>
    <Tab label="tab 3">This is Tab 3</Tab>
    </Tabs>
      </Nav.Item>
    </Nav>
  </Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</section>
</Row>
</Container>

<Card>
  <Card.Header>
    <Nav variant="pills">
      <Nav.Item>
        <Nav.Link href="#first">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#link">Link</Nav.Link>
      </Nav.Item>
    </Nav>
  
  </Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
