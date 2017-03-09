import React from 'react';
import { connect } from 'react-redux';

class EditBlog extends React.Component {
  componentWillMount() {
    let id = parseInt(this.props.params.id)
    this.props.dispatch({type: 'EDIT_BLOG',
                         id: id
                        })
  }

  render() {
    return (
      <div>
        <h1>Edit Blog</h1>
        <form>
          <h5>Edit Blog Title</h5>
          <input type='text' autoFocus value={this.props.blogs.title} />
          <h5>Edit Blog Content</h5>
          <textarea value={this.props.blogs.body}></textarea>
          <br />
          <input type='submit' className='btn' />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return { blogs: state.blogs }
}

export default connect(mapStateToProps)(EditBlog);
