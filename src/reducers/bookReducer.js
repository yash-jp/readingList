export const bookReducer = (state,action) => {
  switch(action.type){
    case 'ADD_BOOK':{
      return ([...state,{title:action.book.title,author:action.book.author,id:state.length}]);
    }

    case 'DELETE_BOOK':{
      return (
        state.filter(b=>b.id!==action.id)
      );
    }

    default:
      return state;
  }
}