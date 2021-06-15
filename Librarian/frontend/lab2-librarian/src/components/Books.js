import React from 'react';
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom'
import BookItems from "./BookItems";
import BookRepository from "../repo/BookRepository";
import BookTerm from "./BookTerm";

class Books extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            books: [],
            selectedBook: {}
        }
    }

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        BookRepository.fetchBooks()
            .then((data) => {
                this.setState({
                    books: data.data
                })
            });
    }


    addBook = (name, category, authorId, availableCopies) => {
        BookRepository.createBook(name, category, authorId, availableCopies)
            .then(() => {
                this.loadBooks();
            });
    }

    deleteBook = (id) => {
        BookRepository.deleteBook(id)
            .then(() => {
                this.loadBooks();
            });
    }

    editBook = (id, name, category, authorId, availableCopies) => {
        BookRepository.editBook(id, name, category, authorId, availableCopies)
            .then(() => {
                this.loadBooks();
            });
    }

    getBook = (id) => {
        BookRepository.getBookById(id)
            .then((data) => {
                this.setState({
                    selectedBook: data.data
                })
            })
    }

    markAsTaken = (id) => {
        BookRepository.markAsTaken(id)
            .then(() => {
                this.loadBooks();
            });
    }

    // getBooksPage = (offset, nextPageOffset) => {
    //     return this.props.books.map((term, index) => {
    //         return (
    //             <BookTerm term={term} onDelete={this.props.onDelete} onMarkAsTaken={this.props.onMarkAsTaken} onEdit={this.props.onEdit}/>
    //         );
    //     }).filter((product, index) => {
    //         return index >= offset && index < nextPageOffset;
    //     })
    // }

    render () {
        console.log(this.state.books);
        return (<section className="py-8" id="books">

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6 text-center mb-7">
                        <h1 className="fw-semi-bold text-warning">Best<span className="text-1100"> seller books</span>
                        </h1>
                    </div>
                    <Router>
                        <Route path={"/"}
                            render = {() =>
                                <BookItems books={this.state.books}
                                           onDelete={this.deleteBook}
                                           onEdit={this.getBook}
                                           onMarkAsTaken={this.markAsTaken}/>}/>
                    </Router>
                    <div className="col-lg-12 d-flex justify-content-center">
                        <button className="btn btn-lg btn-primary rounded-pill font-base" type="submit">Find More
                        </button>
                    </div>
                </div>
            </div>

        </section>)
    }
}

export default Books;

