const blogs = ( state = [], action ) => {
  switch(action.type) {
    case 'BLOGS':
      return action.blogs
    case 'ADD_BLOG':
      return [action.blog, ...state];
    case 'EDIT_BLOG':
      return state.find( b => b.id === action.id )
    case 'DELETE_BLOG':
      return state.filter( b => b.id !== action.id )
    default:
      return state
  }
}

export default blogs;