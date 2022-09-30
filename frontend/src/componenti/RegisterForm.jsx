import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/esm/Button";
import axios from "axios";
import React from 'react';

function Register(){
    const [formValue, setformValue] = React.useState({
        username: '',
        email:'',
        password: ''
      });
    
      const handleSubmit = async() => {
        const loginFormData = JSON.stringify({ username : formValue.username,femail:formValue.email, password : formValue.password});

  try {
    // make axios post request
    const response = await axios({
      method: "post",
      url: "http://localhost:5000/api/auth/register",
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
        <Form style={{padding : "10px","width":"100%"}}>
                            <Form.Group className="mb-3" >
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter Username" name='username' value={formValue.username} onChange={handleChange}/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='email' value={formValue.email} onChange={handleChange}/>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password' value={formValue.password} onChange={handleChange}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
    )
}

export default Register;