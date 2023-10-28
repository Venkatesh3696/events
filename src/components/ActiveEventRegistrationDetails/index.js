// Write your code here
import './index.css'

const registrationStatusConstants = {
  yetToRegister: 'YET_TO_REGISTER',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
  registered: 'REGISTERED',
}

const ActiveEventRegistrationDetails = props => {
  const renderNoView = () => (
    <div className="registration-status-container">
      <p>Click on an event, to view its registration details</p>
    </div>
  )
  const renderYetToRegister = () => (
    <div className="registration-status-container">
      <img
        className="registration-image"
        alt="yet to register"
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
      />
      <h1>Registrations are closed now</h1>
      <p>
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button className="register-button" type="button">
        Register Here
      </button>
    </div>
  )

  const renderRegistrationsClosedView = () => (
    <div className="registration-status-container">
      <img
        className="registration-image"
        alt="registrations closed"
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned. we will reopen the registrations soon</p>
    </div>
  )

  const renderRegisteredView = () => (
    <div className="registration-status-container">
      <img
        className="registration-image"
        alt="registered"
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
      />
      <h1>You have already Registered for the event</h1>
    </div>
  )
  const renderRegistrationStatus = () => {
    const {registrationStatus} = props
    console.log(registrationStatus)

    switch (registrationStatus) {
      case registrationStatusConstants.registered:
        return renderRegisteredView()
      case registrationStatusConstants.yetToRegister:
        return renderYetToRegister()
      case registrationStatusConstants.registrationsClosed:
        return renderRegistrationsClosedView()
      default:
        return renderNoView()
    }
  }
  return renderRegistrationStatus()
}

export default ActiveEventRegistrationDetails
