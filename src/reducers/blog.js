const blog = ( state = [], action ) => {
  switch(action.type) {
    case 'BLOG': 
      return action.blog
    default:
      return state
  }
}

export default blog;