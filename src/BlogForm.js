import React from 'react';
import { connect } from 'react-redux';

const BlogForm = ({ dispatch, nextId }) => {
  let titleInput;
  let bodyInput;

  return (
   <div>
       <form
        onSubmit={ e => {
          e.preventDefault();
          dispatch({ 
            type: 'ADD_BLOG', 
            blog: { title: titleInput.value, id: nextId, body: bodyInput.value }
          })
          dispatch({ type: 'INC_ID' })
          titleInput.value = null;
          bodyInput.value = null;
        }}
       >
         <h3>Add a Blog Title</h3>
         <input ref={ n => titleInput = n } autoFocus />
         <h3>Add Blog Content</h3>
         <textarea ref={ n => bodyInput = n} ></textarea>
         <br />
         <input type='submit' className='btn' />
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { nextId: state.nextId }
}

export default connect(mapStateToProps)(BlogForm);