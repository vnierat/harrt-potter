import BooksCart from "./components/booksCart";
import BooksList from "./components/booksList";
import Navbar from "./components/Navbar";



  

function App() {
    return (
        
        <div className="App">
            <>
                
                    <Navbar />
                    <BooksList />
                    <BooksCart />
            </>
            
        </div>
  );
}

export default App;
