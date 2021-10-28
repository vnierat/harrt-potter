import React from "react";
import { getAllBooks } from "../helpers/api";
import Book from "./book";

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
        const { isLoaded, books } = this.state;
        if(!isLoaded){
            return <div>Chargement...</div>
        }
        
        return (
            <div className="listItem">
                {books.map((book, index) => {
                    return(
                       <Book key={index} book={book}/> 
                    )
                })}

            </div>
        )
            
            
            
        
    }
}

export default BooksList;