import React from 'react';
import BookTerm from "./BookTerm";
import Stars from "./Stars";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import AuthorRepository from "../repo/AuthorRepository";

class BookItems extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            size: 5
        }
    }

    getAuthorName = (authorId) => {
        return AuthorRepository.getAuthor(authorId)?.data?.name;
    }

    render() {

        const fields: JSX.Element[] = [];
        const count = this.props.books?.rate > 0 ? this.props.books?.rate : 0;

        for (let i = 1; i <= count; i++) {
            fields.push(<Stars id={i} key={i}/>);
        }

        return (
            <div className="col-lg-9">
                <div className="accordion" id="accordionExample">
                    {this.props.books?.data?.length > 0
                        ? this.props.books.data.map(book =>

                            <div key={book.id}
                                 className="accordion-item mb-5 border border-x-0 border-bottom-0 border-200">
                                <div className="accordion-header" id="heading1">
                                    <div className="accordion-button" role="button" data-bs-toggle="collapse"
                                         data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                        <div className="row w-100 justify-content-center">
                                            <div className="col-sm-6 font-base"><span
                                                className="mb-0 fw-bold text-start fs-1 text-1200">{book.name}</span>
                                                <p className="my-2">{book.author?.name}</p>
                                            </div>
                                            <div className="col-8 col-sm-4">
                                                {fields}
                                            </div>
                                            {/*<div className="col-4 col-sm-2 text-end">*/}
                                            {/*    <h5 className="mb-0 font-base fw-bold">{book.price}$</h5>*/}
                                            {/*</div>*/}
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-collapse collapse shadow-lg show" id="collapse1"
                                     aria-labelledby="heading1" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <div className="row justify-content-center-center">

                                            <div className="col-12 col-sm-2"><img
                                                className="img-fluid d-block mx-auto mx-sm-0"
                                                src={book.imageUrl}
                                                width="130" alt="..."/></div>
                                            <div className="col-12 col-sm-9 mt-4 mt-sm-0 d-sm-block d-flex flex-column">
                                                <ul>
                                                    <li className="fw-semi-bold text-black">Copies
                                                        Sold: 0</li>
                                                </ul>
                                                <ul>
                                                    <li className="fw-semi-bold text-black">Available
                                                        Copies: {book.availableCopies}</li>
                                                </ul>
                                                <ul>
                                                    <li className="fw-semi-bold">Uploaded By: {book.authorName}</li>
                                                </ul>
                                                <ul>
                                                    <li className="fw-semi-bold">Reviews: {book.reviews}</li>
                                                </ul>
                                                <p>{book.description}
                                                    <a href={book.pdfUrl}><button type="button"
                                                            className="btn btn-link px-0 font-base">read
                                                        more
                                                    </button></a>
                                                </p>
                                                <a href="!#"><img className="my-1" src="assets/img/gallery/amazon.png"
                                                                  width="110" alt=""/></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                        : ""}
                </div>
            </div>
        );
    }
}


export default BookItems;