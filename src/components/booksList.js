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

        let components = books.map(book =>  
            <Book key={book.isbn} book={book} />
        )
        
        return (
        <div className="listItem">
            {components}
        </div>)
    }
}

export default BooksList;