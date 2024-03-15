// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

commentItem = props => {
  const {commentDetails} = props
  const {id, username, comment, date, isLiked, initialClassName} =
    commentDetails

  const initial = username ? username[0].toUppercase() : ''
  const postedTime = formatDistanceToNow(date)
  const likeTextClassName = isLiked ? 'active-button' : 'button'
  const likeImgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const onDeleteComment = () => {
    const {deleteComment} = props
    deleteComment(id)
  }

  const onClickLike = () => {
    const {toggleIsLike} = props
    toggleIsLike(id)
  }
  return (
    <li className="comment-item">
      <div className="comment-container">
        <div className={initialClassName}>
          <p className="initial">{initial}</p>
        </div>
        <div>
          <div className="user-time-container">
            <p className="username"> {username} </p>
            <p className="time">{postedTime} ago</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="buttons-container">
        <div className="like-container">
          <img src={likeImgUrl} alt="like" className="like-icon" />
          <button type="button" className={likeTextClassName} onClick={onClickLike}>
            Like
          </button>
        </div>
        <button type="button" className="delete-btn" onClick={onDeleteComment}>
          <img src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png" alt="delete" className="delete-icon" />
        </button>
      </div>
    </li>
  )
}

export default commentItem
