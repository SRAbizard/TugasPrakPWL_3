/**
 * Registration form.
 * The component we have built together as the part of
 * React Advanced Form presentation on Medium.
 */
import React from 'react'
import { Form, Field } from 'react-advanced-form'
import { Input, Button } from 'react-advanced-form-addons'

export default class RegistrationForm extends React.Component {
  registerUser = ({ serialized, fields, form }) => {
    return fetch('https://backend.dev', {
      body: JSON.stringify(serialized)
    })
  }
  
  render() {
    return (
      <Form
        action={this.registerUser}
        onSubmitStart={this.props.onSubmitStart}>
        
        <Field.Group name="primaryInfo">
          <Input
            name="firstName"
            type="text"
            placeholder="Name"
            required />
        </Field.Group>

        <Field.Group name="primaryInfo">
          <Input
            name="userEmail"
            type="email"
            placeholder="Username"
            required />
        </Field.Group>
        
        <Input
          name="userPassword"
          type="password"
          placeholder="Password"
          required />

        <Input
          name="confirmPassword"
          type="password"
          placeholder="Re-Password"
          required
          skip />

        <Button primary>REGISTER</Button>
      </Form>
    );
  }
}
