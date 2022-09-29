import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/esm/Button";
import axios from "axios";
import React from 'react';

function Login(){
    
    const [formValue, setformValue] = React.useState({
        username: '',
        password: ''
      });
    
      const handleSubmit = async() => {
        const loginFormData = JSON.stringify({ username : formValue.username, password : formValue.password});

  try {
    // make axios post request
    const response = await axios({
      method: "post",
      url: "http://localhost:5000/api/auth/login",
      data: loginFormData,
      headers: { "Content-Type": "application/json" },
    });
  } catch(error) {
    console.log(error)
  }
      }
    
      const handleChange = (event) => {
        setformValue({
          ...formValue,
          [event.target.name]: event.target.value
        });
      }


    return(
        
            <Form style={{padding : "10px","width":"100%"}} onSubmit={handleSubmit}>

                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter Username" name='username' value={formValue.username} onChange={handleChange}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password' value={formValue.password} onChange={handleChange}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
    
    )
}

export default Login;