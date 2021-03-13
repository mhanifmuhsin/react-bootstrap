import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import {
  Form, Col, Button, InputGroup,
  FormControl, Container, Navbar, Row, Table
} from 'react-bootstrap';

function App() {
  const [form, setForm] = React.useState({
    name:'',
    email:''
  })

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(form);
    
  }

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      </Navbar>

      <Container className="py">
        <Row className="justify-content-md-center">
          <Form onSubmit = {handleSubmit}>
            <Form.Row className="align-items-center">
              <Col xs="auto">
                <Form.Label htmlFor="inlineFormInput" srOnly>
                  Full Name
                </Form.Label>
                <Form.Control
                  className="mb-2"
                  id="inlineFormInput"
                  placeholder="Full Name" value={form.name} onChange={(e) => {
                    setForm({...form, name:e.target.value})
                  }}
                />
              </Col>
              <Col xs="auto">
                <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                  Email
                </Form.Label>
                <InputGroup className="mb-2">
                  <InputGroup.Prepend>
                    <InputGroup.Text>@</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl id="inlineFormInputGroup" placeholder="Email" type="email" value={form.email} 
                  onChange={(e)=>{setForm({...form,email:e.target.value})}} />
                </InputGroup>
              </Col>

              <Col xs="auto">
                <Button type="submit" variant="primary" className="mb-2" >
                  Submit
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Row>

        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Full Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Muhamad Hanif Muhsin</td>
              <td>m.hanif.muhsin@gmail.com</td>
            </tr>

          </tbody>
        </Table>
      </Container>


    </>
  );
}

export default App;
