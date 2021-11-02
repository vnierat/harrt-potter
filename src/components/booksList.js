import React from "react";
import { getAllBooks } from "../helpers/api";
import BookArticle from "./book";

class BooksList extends React.Component {
    constructor(props){
        super();
        this.state = {
            isLoaded: false,
            books: null
        }
    }

    fetchData = () => {
        getAllBooks()
            .then(result => this.setState({
                isLoaded: true,
                books: result
            }))
    }

    componentDidMount() {
        this.fetchData()
    }


    render() {
        const { isLoaded,books} = this.state;
        if(!isLoaded){
            return <div>Chargement...</div>
        }
        
        return (
            <div className="listContainer">
                <div className="listItems">
                    {books.map((book) => {
                        return(
                            <BookArticle key={book.isbn} book={book}/>
                        )
                    })}

                </div>
            </div>
        )
            
            
            
        
    }
}

export default BooksList;