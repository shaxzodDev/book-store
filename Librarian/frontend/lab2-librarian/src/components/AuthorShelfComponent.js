import React, {useEffect} from 'react';

import styles from '../sevi/shelf/css/main.scss';
// import styles1 from '../sevi/shelf/css/normalize.css';
import styles2 from '../sevi/shelf/css/button-custom.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import BookRepository from "../repo/BookRepository";
import ScrollTop from "../services/ScrollTop";
import {useSelector} from "react-redux";
import ActionsAuth from "../store/actions";

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


const AuthorShelfComponent = (props) => {

    const auth = useSelector(state => state.auth);

    const [activeTab, setActiveTab] = React.useState( {
        activeTab: null
    })

    const [books, setBooks] = React.useState({
        books: []
    })

    useEffect(() => BookRepository.fetchByCategory(activeTab.activeTab, auth?.user?.id).then(r => {
        setBooks(r.data)
    }), [])

    const onClickTabItem = (e) => {
        console.log(books);
        setActiveTab(e.target.value);
        setBooks(BookRepository.fetchByCategory(e.target.value, auth?.user?.id).then(r => {
            setBooks(r.data)
        }));
    }

    //TODO remove duplicates, have proper code later
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
                                                    <p>Kitob haqida: {book.description} <br/> O'qilgan: {book.reviews} marta <br/> Kateoriyasi: {categories.find(c => c.category === book.category).localization} </p>

                                                    <button className="button" style={{color: 'white'}}><a href={book.pdfUrl}>O'qing</a></button>
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

export default AuthorShelfComponent;

