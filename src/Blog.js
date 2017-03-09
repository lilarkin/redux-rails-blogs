import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Blog extends React.Component {

  deleteBlog = () => {
    this.props.dispatch({ type: 'DELETE_BLOG', id: this.props.id })
  }

  render() {
    let blog = this.props
    return (
      <div>
        <Link to={`/editblog/${blog.id}`}>{blog.title}</Link> 
        <p>{blog.body}</p>
        <button onClick={ this.deleteBlog } className='btn'>Delete</button>
      </div>
    )
  }
}

export default connect()(Blog);
