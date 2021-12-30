import React, {useEffect, useState} from 'react';
import styles from '../sevi/public/assets/css/theme.css';
import heroSection from '../sevi/public/assets/img/illustrations/hero-section.png';
import heroBg from '../sevi/public/assets/img/illustrations/hero-bg.png';
import search from '../sevi/public/assets/img/illustrations/search.png';
import BeginSection from "./BeginSection";
import Libraries from "./Libraries";
import Books from "./Books";
import BottomContainer from "./BottomContainer";
import CategoryRepository from "../repo/CategoryRepository";
import BookRepository from "../repo/BookRepository";

const Home = (props) => {

    const [formData, updateFormData] = React.useState({
        search: '',
        result: [],
        books: [],
        filteredBooks: []
    });

    const handleChange = (e) => {
        updateFormData({
            search: e.target.value,
        });
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const search = formData.search;

        console.log(search);
        BookRepository.fetchBookByName(search)
            .then((r) => (
                updateFormData({
                    result: r.data
                })
            )).catch((err) => {
            window.alert(err.message)
        });
        // props.onCreateAuthor(firstName, lastName, slogan, username, password, email, phoneNumber, address, city, countryId);
    }
    console.log(formData.result);

    useEffect(() => CategoryRepository.fetchCategories().then(r => {
        BookRepository.fetchBookByName(search)
            .then(response => response.data)
            .then(books => updateFormData({
                books: books?.name
            }))
    }), []);

    console.log(formData.filteredBooks);

    return (
        <>
        <section className="py-0" id="home">
            <div className="bg-holder d-none d-md-block"
                 style={{backgroundImage: `url(${heroSection})`, backgroundPosition:`right bottom`, backgroundSize:`contain`}}>
            </div>

            <div className="bg-holder d-block d-md-none"
                 style={{backgroundImage: `url(${heroBg})`, backgroundPosition: `right top`, backgroundSize:`contain`}}>
            </div>

            <div className="container">
                <div className="row align-items-center min-vh-md-75">
                    <div className={`${styles.colMd7} ${styles.colLg6} ${styles.py6} ${styles.textSmStart} ${styles.textCenter}`}>
                        <h1 className={`${styles.mt6} ${styles.mbSm4} ${styles.display4} ${styles.fwSemiBold} ${styles.lhSm} ${styles.fs4} ${styles.fsLg6} ${styles.fsXxl7}`}>
                            Bugungi izlanish,
                           <br className={`${styles.dBlock} ${styles.dLgNone} ${styles.dXlBlock}`}/>ertangi innovatsiya</h1>
                        <p className={`${styles.mb4} ${styles.fs1}`}>Yaxshiroq kelajakni shakllantirish uchun izlanish jarayonini tezlashtirish</p>
                        <div className="pt-3">
                            <form onSubmit={onFormSubmit}>
                                <div className="input-group w-xl-75 w-xxl-50 d-flex flex-end-center">

                                    <input className="form-control rounded-pill border-0 font-base"
                                           id="formGroupExampleInput" type="text"
                                           placeholder="kitoblar, maqolalar qidiring"
                                           onChange={handleChange}/><button style={{border: 'none', backgroundColor: 'transparent', display:'inline'}} type="submit"><img
                                    className="input-box-icon me-3" src={`${search}`} width ="18"
                                    alt=""/></button>
                                    {console.log(formData.filteredBooks)}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            {/*<div style={{display: 'flex',*/}
            {/*    // justifyContent: 'center',*/}
            {/*    // alignItems: 'center',*/}
            {/*    flexWrap: 'nowrap',*/}
            {/*    paddingLeft: '14%',*/}
            {/*    marginTop: "-7%" }}><span style={{width: '60%'}}>{formData?.search?.length > 0} <Carousel books={formData.result}/></span></div>*/}
            <BeginSection/>
            <Libraries/>
            <Books books={formData.books}/>
            <BottomContainer/>
            </>
    )
}

export default Home;

