import React from "react";
import style from '../sevi/book slider/slider.scss'
import style1 from '../sevi/Login_v4/fonts/font-awesome-4.7.0/css/font-awesome.css'

class Carousel extends React.Component {
    constructor() {
        super();

        this.state = {
            currentIndex: 0,
            isTransitioning: false,
            goingLeft: false
        };
    }

    componentDidMount() {
        window.addEventListener('keyup', this.onKeyUp);
    }

    componentWillUnmount() {
        window.removeEventListener('keyup', this.onKeyUp);
    }

    onKeyUp = (e) => {
        if (e.keyCode) {
            if (e.keyCode === 39) {
                this.showNextSet();
            } else if (e.keyCode === 37) {
                this.showPrevSet();
            }
        }
    }

    render() {
        const fields: JSX.Element[] = [];
        const { books } = this.props;
        const { currentIndex, isTransitioning, goingLeft } = this.state;

        return (
            <div className="carousel__wrapper">
                <div className="carousel__container">
                    {this.props?.books?.data?.map((book, index) =>
                        {
                            let className = 'carousel__image'
                            if (index === currentIndex) className += ' active';
                            return <div className={className} key={`book-${index}`} style={{width: '100%'}} key={book.id}>
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
                                     aria-labelledby="heading1" data-bs-parent="#accordionExample" style={{height: '100%'}}>
                                    <div className="accordion-body">
                                        <div className="row justify-content-center-center" style={{display: "flex", flexWrap: "wrap"}}>

                                            <div className="col-12 col-sm-2" style={{width: '30%'}}><img
                                                className="img-fluid d-block mx-auto mx-sm-0"
                                                src={book.imageUrl}
                                                width="130" alt="..."/></div>
                                            <div style={{width: "30%"}} className="col-12 col-sm-9 mt-4 mt-sm-0 d-sm-block d-flex flex-column">
                                                <ul>
                                                    <li className="fw-semi-bold text-black">Sotilgan nusxalar: 0</li>
                                                </ul>
                                                <ul>
                                                    <li className="fw-semi-bold text-black">Mavjud nuxalar: {book.availableCopies}</li>
                                                </ul>
                                                <ul>
                                                    <li className="fw-semi-bold">Yuklagan muallif: {book.authorName}</li>
                                                </ul>
                                                <ul>
                                                    <li className="fw-semi-bold">O'qilgan: {book.reviews}</li>
                                                </ul>

                                                <a href="!#"><img className="my-1" src="assets/img/gallery/amazon.png"
                                                                  width="110" alt=""/></a>
                                            </div>
                                            <div style={{width: '40%'}}>
                                                <p><span className="fw-semi-bold text-black">Kitob haqida qisqacha:</span> {book.description}</p>

                                                <a href={book.pdfUrl}><button type="button"
                                                                              className="btn btn-link px-0 font-base">o'qing
                                                </button></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    )}
                    {/*{books.map((img, index) => {*/}
                    {/*    let className = 'carousel__image'*/}
                    {/*    if (index === currentIndex) className += ' active';*/}

                    {/*    return <img src={img} className={className} key={`img-${index}`} />;*/}
                    {/*})}*/}
                </div>
                <div className="carousel__controls">
                    <button className="carousel__button" onClick={this.showPrevSet}><i className="fa fa-arrow-left"></i></button>
                    <button className="carousel__button" onClick={this.showNextSet}><i className="fa fa-arrow-right"></i></button>
                </div>
            </div>
        );
    }

    showPrevSet = () => {
        const currentIndex = (this.state.currentIndex - 1 + this.props?.books?.data?.length) % this.props?.books?.data?.length;
        this.setState({ currentIndex });
    }

    showNextSet = () => {
        const currentIndex = (this.state.currentIndex + 1) % this.props?.books?.data?.length;
        this.setState({ currentIndex });
        console.log(this.state.currentIndex);
        console.log(this.props?.books?.data?.length);
    }
}

export default Carousel;
