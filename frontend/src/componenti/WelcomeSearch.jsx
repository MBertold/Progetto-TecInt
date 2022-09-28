import  Button  from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';

function WelcomeSearch() {
  return (
    <Form  style={{border: "2px solid black",padding : "10px","width":"70vh"}}>
      <Form.Group className='mb-3'>
        <Form.Label>Cosa desideri mangiare</Form.Label>
        <Form.Select>
            <option value="1">Pizza</option>
            <option value="2">Pesce</option>
            <option value="3">Carne</option>
        </Form.Select>
      </Form.Group>
      <Form.Group>
        <Button variant="primary" type="submit">
          Cerca
        </Button>
      </Form.Group>
        
    </Form>
    
  );
}

export default WelcomeSearch;