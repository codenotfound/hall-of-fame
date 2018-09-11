import React from "react";
import { Col, Form, FormGroup, Label, Input, Container, Row } from "reactstrap";

class Admin extends React.Component {
  render() {
    return (
      <Container>
        <h1 className="mt-5 mb-3">Add a new tournament</h1>
        <Form>
          <FormGroup row>
            <Label sm={2} for="title">
              Title
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="title"
                id="title"
                placeholder="tournament title"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2} for="date">
              Date
            </Label>
            <Col sm={10}>
              <Input
                type="date"
                name="date"
                id="date"
                placeholder="tournament date"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="video" sm={2}>
              Video
            </Label>
            <Col sm={10}>
              <Input type="text" name="video" id="video" placeholder="video" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="bracket" sm={2}>
              Bracket
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="bracket"
                id="bracket"
                placeholder="bracket"
              />
            </Col>
          </FormGroup>
          <Row>
            <Col sm={4}>
              <FormGroup>
                <Label for="exampleSelect">Diamond 1st place</Label>
                <Input type="select" name="select" id="exampleSelect">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup>
            </Col>
            <Col sm={4}>
              <FormGroup>
                <Label for="exampleSelect">Diamond 2nd place</Label>
                <Input type="select" name="select" id="exampleSelect">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup>
            </Col>
            <Col sm={4}>
              <FormGroup>
                <Label for="exampleSelect">Diamond 3rd place</Label>
                <Input type="select" name="select" id="exampleSelect">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
              <FormGroup>
                <Label for="exampleSelect">Diamond 1st prize</Label>
                <Input type="text" name="select" id="exampleSelect" />
              </FormGroup>
            </Col>
            <Col sm={4}>
              <FormGroup>
                <Label for="exampleSelect">Diamond 2nd prize</Label>
                <Input type="text" name="select" id="exampleSelect" />
              </FormGroup>
            </Col>
            <Col sm={4}>
              <FormGroup>
                <Label for="exampleSelect">Diamond 3rd prize</Label>
                <Input type="text" name="select" id="exampleSelect" />
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}

export default Admin;
