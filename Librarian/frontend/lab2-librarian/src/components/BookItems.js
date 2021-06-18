import React from 'react';
import BookTerm from "./BookTerm";
import Stars from "./Stars";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import AuthorRepository from "../repo/AuthorRepository";
import Carousel from "./Carousel";

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
                    <Carousel books={this.props.books}/>
                </div>
            </div>
        );
    }
}


export default BookItems;