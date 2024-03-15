import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
 

import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {
    commentsList: [],
    username: '',
    comment: '',
  }

  deleteComment = id => {
    const {commentsList} = this.state
    const filteredCommentsList = commentsList.filter(
      eachComment => eachComment.id !== id
    )
    this.setState({commentsList: filteredCommentsList})
  }

  toggleIsLiked = id => {
    this.setstate(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id){
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
      })
    }))
  }

  onAddComment = event => {
    event.preventDefault()
    const {username, comment} = this.state
    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        math.ceil(
          math.random() * initialContainerBackgroundClassNames.length - 1
        ),
      ]
    }`

    const newComment = {
      id: uuidv4(),
      username,
      comment, 
      date: new Date(),
      isLiked: false,
      initialClassName: initialBackgroundColorClassName,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      username: '',
      comment: ''
    }))
  }

  renderCommentsList = () => {
    const {commentsList} = this.state

    return commentsList.map(eachComment => (
        <CommentItem 
          key = {eachComment.id}
          commentDtails = {eachComment}
          toggleIsLiked = {this.toggleIsLiked}
          deleteComment = {this.deleteComment}
        />
      )
    )
  }

  onChangeName = event => {
    this.setState({username: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  render() {
    const {username, comment, commentsList} = this.state
    return (
      <div className="app-container">
        <div className="comments-container">
          <h1 className="app-heading">Comments</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="comments-img"
          />
          <div className="form-container">
            <form className="comment-form-container" onSubmit={this.onAddComment}>
              <p className="form-description">
                Say Something about 4.0 Technologies
              </p>
              <input
                type="text"
                placeholder="Your Name"
                value={username}
                className="username"
                onChange={this.onChangeName}
              />
              <textarea
                placeholder="Your Comment"
                className="comment"
                onChange={this.onChangeComment}
              >
                {comment}
              </textarea>
              <button type="submit" className="comment-btn">
                Add Comment
              </button>
            </form>
            <hr className="line" />
            <p className="heading">
              <span className="comments.count">{commentsList.length}</span>
              Comments
            </p>
          </div>
          <ul className="comment-list-container">
            {this.renderCommentsList}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
