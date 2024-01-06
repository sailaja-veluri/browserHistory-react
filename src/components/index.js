import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails
  const onDelete = () => {
    deleteHistory(id)
  }
  return (
    <li className="history-card-container">
      <div className="history-details">
        <p className="time-details">{timeAccessed}</p>
        <img src={logoUrl} className="website-img" alt="domain logo" />
        <p className="history-title">{title}</p>
        <p className="history-domain-name">{domainUrl}</p>
      </div>
      <button
        data-testid="delete"
        type="button"
        className="delete-button"
        onClick={onDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}

export default HistoryItem
