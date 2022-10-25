import React from 'react'
import Form from 'react-bootstrap/Form';

export default function ElencoTag(props) {
  return (
    <Form.Select aria-label="Default select example" onChange={props.onChange}>
      <option value="">Seleziona tipo di cucina</option>
      <option value="Pizza">Pizza</option>
      <option value="Pesce">Pesce</option>
      <option value="Carne">Carne</option>
      <option value="Vegetariano">Vegetariano</option>
      <option value="Vegano">Vegano</option>
      <option value="Etnico">Etnico</option>
      <option value="Panini">Panini</option>
    </Form.Select>
  )
}
