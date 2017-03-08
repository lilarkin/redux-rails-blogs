import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const Blog = ({ id, title, body, dispatch }) => (
  <div>
    <Link to={`/editblog/${id}`}>{title}</Link> 
    <p>{body}</p>
  </div>
)

export default connect()(Blog)