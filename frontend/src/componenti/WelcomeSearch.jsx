import  Button  from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ElencoTag from './ElencoTag';

function WelcomeSearch() {
  return (
    <Form  style={{border: "2px solid black",padding : "10px","width":"70vh"}}>
      <Form.Group className='mb-3'>
        <Form.Label>Cosa desideri mangiare</Form.Label>
        <ElencoTag/>
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