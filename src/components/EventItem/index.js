// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, onClickEvent} = props
  const {id, name, imageUrl, location, registrationStatus} = eventDetails

  const clickEvent = () => {
    onClickEvent(id, registrationStatus)
  }

  return (
    <button
      onClick={clickEvent}
      type="button"
      className="event-button-container"
    >
      <img alt="event" src={imageUrl} className="event-image" />
      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </button>
  )
}

export default EventItem
