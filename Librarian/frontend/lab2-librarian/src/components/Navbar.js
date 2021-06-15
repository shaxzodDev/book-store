import React from 'react';
import styles from '../sevi/public/assets/css/theme.css';
import styleRtl from '../sevi/public/assets/css/theme-rtl.css';
import logo from '../sevi/public/assets/img/gallery/logo.png';
import {Link, useHistory} from "react-router-dom";
import { storage } from "services";
import {useSelector} from "react-redux";

const Navbar = (props) => {
    const auth = useSelector(state => state.auth);

    const history = useHistory();

    const handleLogout = () => {
        storage.remove('user');
        storage.remove('token');
        history.push('/');
        window.location.reload();
    }

    return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3 backdrop"
             data-navbar-on-scroll="data-navbar-on-scroll">
            <div className="container"><a className="navbar-brand d-flex align-items-center fw-semi-bold fs-3" href="#"> <img
                className="me-3" src={`${logo}`} width={100} alt=""/>
                <div className="text-primary font-base">Online Book Store</div>
            </a>
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto pt-2 pt-lg-0 font-base">
                        <Link className="nav-item nav-link fw-medium active" to="/">Home</Link>
                        <Link className="nav-item nav-link" to={"/books"}>Books</Link>
                        <Link className="nav-item nav-link" to={"/posts"}>Posts</Link>
                        <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" id="navbarDropdown" href="#"
                                                             role="button" data-bs-toggle="dropdown"
                                                             aria-expanded="false">More</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action </a></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="ps-lg-5">
                        <Link to={auth?.isAuthenticated ? "/author_profile" : '/sign_in'}>
                            <button className="btn btn-lg btn-primary rounded-pill bg-gradient font-base order-0"
                                    type="submit">
                                {auth?.isAuthenticated ? 'Profile' : 'Login'}
                            </button>
                        </Link>
                    </form>

                    {auth?.isAuthenticated ?
                        <button onClick={handleLogout} style={{marginLeft: '10px'}} className="btn btn-lg btn-primary rounded-pill bg-gradient font-base order-0" type="submit">
                            Log Out
                        </button> : ''}

                </div>
            </div>
        </nav>
    )
}

export default Navbar;

