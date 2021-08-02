import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from 'axios';

function AddAluno() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [checkbox, setCheckbox] = useState(false)

  const postData = () => {
    axios.post(`https://6101ed0927d22500174b226c.mockapi.io/reactcrud/AlunoAprender`, {
      firstName,
      lastName,
      checkbox
    });
    alert('Salvo com sucesso!');
  }

  return (
    <Form className="create-form">
      <Form.Field>
        <label>First Name</label>
        <input placeholder='First Name' onChange={(_event) => setFirstName(_event.target.value)} />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input placeholder='Last Name' onChange={(_event) => setLastName(_event.target.value)} />
      </Form.Field>
      <Form.Field>
        <Checkbox label='I agree to the Terms and Conditions' onChange={(_event) => setCheckbox(!checkbox)}/>
      </Form.Field>
      <Button onClick={postData} type='submit'>Submit</Button>
    </Form>
  )
}

export default AddAluno;