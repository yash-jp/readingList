import React,{createContext,useReducer,useEffect} from 'react'
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

function BookContextProvider(props) {
  const [books, dispatch]=useReducer(bookReducer,[],()=>{
    const localData = localStorage.getItem('books');
    return localData ? JSON.parse(localData) : [];
  });


  // first time AND every tome books updated this effect will run
  useEffect(() => {
    localStorage.setItem('books',JSON.stringify(books));
  }, [books]);

  // // to add book
  // const addBook = (book)=>{
  //   console.table(book);
  //   setBooks((prev)=>{
  //     return(
  //       [
  //         ...prev,
  //         {title:book.title,author:book.author,id:books.length}
  //       ]
  //     );
  //   })
  // }

  // // to remove book
  // const removeBook = (id) => {
  //   let newBookArray = books.filter(b=>b.id!==id);
  //   setBooks(newBookArray);
  // }

  return (
    <BookContext.Provider value={{books,dispatch}}>
      {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider;
