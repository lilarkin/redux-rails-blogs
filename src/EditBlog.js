import React from 'react';
import { connect } from 'react-redux';

class EditBlog extends React.Component {
  constructor(props) {
    super(props)
    this.state = { blog: {} }
  }
  componentDidMount() {
    for(var i=0;i>this.props.blogs;i++) {
      if(this.props.params.id === this.props.blogs[i].id) {
        this.setState({ blog: this.props.blogs[i]})
      }
    }
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Edit Blog</h1>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return { blogs: state.blogs }
}

export default connect(mapStateToProps)(EditBlog);