import React from 'react';
import styles from '../sevi/public/assets/css/theme.css';
// import styleRtl from '../sevi/public/assets/css/theme-rtl.css';
import heroSection from '../sevi/public/assets/img/illustrations/hero-section.png';
import heroBg from '../sevi/public/assets/img/illustrations/hero-bg.png';
import search from '../sevi/public/assets/img/illustrations/search.png';
import BeginSection from "./BeginSection";
import Libraries from "./Libraries";
import Books from "./Books";
import BottomContainer from "./BottomContainer";

const Home = (props) => {
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
                            <h1 className={`${styles.mt6} ${styles.mbSm4} ${styles.display4} ${styles.fwSemiBold} ${styles.lhSm} ${styles.fs4} ${styles.fsLg6} ${styles.fsXxl7}`}>Today's
                                research, <br className={`${styles.dBlock} ${styles.dLgNone} ${styles.dXlBlock}`}/>tomorrow's innovation</h1>
                            <p className={`${styles.mb4} ${styles.fs1}`}>Accelerating research discovery to shape a better future </p>
                            <div className="pt-3">
                                <form>
                                    <div className="input-group w-xl-75 w-xxl-50 d-flex flex-end-center">
                                        <input className="form-control rounded-pill border-0 font-base"
                                               id="formGroupExampleInput" type="text"
                                               placeholder="Search books, articles, keywords"/><img
                                        className="input-box-icon me-3" src={`${search}`} width="18"
                                        alt=""/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <BeginSection/>
            <Libraries/>
            <Books/>
            <BottomContainer/>
        </>
    )
}

export default Home;

