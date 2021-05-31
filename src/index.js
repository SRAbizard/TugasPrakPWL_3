import './styles.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { FormProvider } from 'react-advanced-form'
import rules from './validation-rules'
import messages from './validation-messages'
import RegistrationForm from './RegistrationForm'
import logo from './user.png'

class App extends React.Component {
  state = {
    serialized: null
  }

  handleSubmitStart = ({ serialized }) => {
    this.setState({ serialized })
    alert('Registration successful^_^')
  }

  render() {
    return (
      <div className="container">
        <div className="Bg">
          <div className="logo">
            <img src={logo} />
          </div>
          <FormProvider rules={rules} messages={messages}>
            <div className="Judul">
              <h2>Registration</h2>
            </div>
            <div className="flex">
              <RegistrationForm onSubmitStart={this.handleSubmitStart} />
            </div>
          </FormProvider>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
