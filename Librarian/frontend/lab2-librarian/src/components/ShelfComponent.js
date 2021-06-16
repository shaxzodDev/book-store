import React, {useEffect} from 'react';

import styles from '../sevi/shelf/css/main.scss';
// import styles1 from '../sevi/shelf/css/normalize.css';
import styles2 from '../sevi/shelf/css/button-custom.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import BookRepository from "../repo/BookRepository";
import ScrollTop from "../services/ScrollTop";

const categories = [
    {category: 'NOVEL', localization: 'Badiiy'},
    {category: 'HISTORY', localization: 'Tarixiy'},
    {category: 'FANTASY', localization: 'Fantastik'},
    {category: 'BIOGRAPHY', localization: 'Biografiya'},
    {category: 'CLASSICS', localization: 'Klassik'},
    {category: 'DRAMA', localization: 'Drama'},
];

const sort = [
    {sort: 'review'},
    {sort: 'rate'},
    {sort: 'created_date'}
];


const ShelfComponent = (props) => {

    const [activeTab, setActiveTab] = React.useState( {
        activeTab: null
    })

    const [books, setBooks] = React.useState({
        books: []
    })

    useEffect(() => BookRepository.fetchByCategory(activeTab.activeTab).then(r => {
        setBooks(r.data)
    }), [])

    const onClickTabItem = (e) => {
        console.log(books);
        setActiveTab(e.target.value);
        setBooks(BookRepository.fetchByCategory(e.target.value).then(r => {
            setBooks(r.data)
        }));
    }

    const handleReview = (e) => {
        BookRepository.incrementReview(e.target.value).then(r => r);
    }

    const flexStyle = {display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: '5%', padding: '0', height: '100%'}

    return (<>
        <div id="main-container" className="main-container nav-effect-1">

            <div className="main clearfix" style={flexStyle}>
                <div style={{width: '100%'}}>
                    <section id="book_list">
                        <div>
                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                {categories.map((category, key) =>
                                    <button className={`btn-custom ${activeTab===category.category ? 'active' : ''}`} key={key} value={category.category} style={{margin: '10px'}} onClick={onClickTabItem} >{category.localization}</button>
                                )}
                            </div>

                            {/*<div className="small-12 medium-3 columns">*/}
                            {/*    <select className="sort-options">*/}
                            {/*        <option value="" disabled selected>Sort by</option>*/}
                            {/*        <option value="">Featured</option>*/}
                            {/*        <option value="title">Alphabetical</option>*/}
                            {/*        <option value="date-created">Published</option>*/}
                            {/*    </select>*/}
                            {/*</div>*/}
                        </div>

                        <div  style={{width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                            {books?.data?.length > 0 ? books?.data?.map(book =>
                                <div key={book?.id} className="grid-shuffle" style={{width: '30%'}} >
                                    <ul id="grid" className="row">
                                        <li className="book-item small-12 medium-6 columns" data-groups='["classic"]'
                                            data-date-created='1937' data-title={`${book.name}`} data-color='#fcc278'>
                                            <div className="bk-img">
                                                <div className="bk-wrapper">
                                                    <div className="bk-book bk-bookdefault">
                                                        <div className="bk-front">
                                                            <div className="bk-cover"
                                                                 style={{ backgroundSize: 'cover'}}></div>
                                                        </div>
                                                        <div className="bk-back"></div>
                                                        <div className="bk-left"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item-details">
                                                <h3 className="book-item_title">{book.name}</h3>
                                                <p className="author">{book?.authorName} &bull; {book?.publishedDate}</p>
                                                <p>{book.description}</p>
                                                <button className="button" style={{color: 'white'}} value = {book.id} onClick={handleReview}><a href={book.pdfUrl}>Read</a></button>
                                            </div>
                                            <div className="overlay-details">
                                                <a href="#" className="close-overlay-btn">Close</a>
                                                <div className="overlay-image">
                                                    <img
                                                        src="http://interactivejoe.com/book-viewer/assets/images/bk_1-large.jpg"
                                                        alt="Book Cover"/>
                                                </div>
                                                <div className="overlay-desc activated">
                                                    <h2 className="overlay_title">{book.name}</h2>
                                                    <p className="author">{book?.author?.name}</p>
                                                    {/*<p className="published">1937</p>*/}
                                                    <p className="synopsis">{book.description}</p>
                                                    <a href="#" className="button preview">Preview</a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            ) : ""}

                        </div>
                    </section>
                </div>
            </div>
        </div>
    </>
)
}

export default ShelfComponent;
