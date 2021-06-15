import React from 'react';
import styles from '../sevi/public/assets/css/theme.css';
import styleRtl from '../sevi/public/assets/css/theme-rtl.css';
import logo from '../sevi/public/assets/img/gallery/logo.png';
import {Link, useHistory} from "react-router-dom";
import { storage } from "services";
import {useSelector} from "react-redux";
import Actions from "store/actions";
import {useDispatch} from "react-redux";
import ActionsAuth from "../store/actions";

const Navbar = (props) => {
    const auth = useSelector(state => state.auth);

    const history = useHistory();

    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(ActionsAuth.Logout.trigger());
        history.push('/');
    }

    return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3 backdrop"
             data-navbar-on-scroll="data-navbar-on-scroll">
            <div className="container"><a className="navbar-brand d-flex align-items-center fw-semi-bold fs-3" href="#"> <img
                className="me-3" src={`${logo}`} width={100} alt=""/>
                <div className="text-primary font-base">Onlayn vitrina</div>
            </a>
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto pt-2 pt-lg-0 font-base">
                        <Link className="nav-item nav-link fw-medium active" to="/">Asosiy</Link>
                        <Link className="nav-item nav-link" to={"/books"}>Kitoblar</Link>
                        <Link className="nav-item nav-link" to={"/posts"}>Postlar</Link>
                        <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" id="navbarDropdown" href="#"
                                                             role="button" data-bs-toggle="dropdown"
                                                             aria-expanded="false">Yana</a>
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
                                {auth?.isAuthenticated ? 'Profil' : 'Kirish'}
                            </button>
                        </Link>
                    </form>

                    {auth?.isAuthenticated ?
                        <button onClick={handleLogout} style={{marginLeft: '10px'}} className="btn btn-lg btn-primary rounded-pill bg-gradient font-base order-0" type="submit">
                            Chiqish
                        </button> : ''}

                </div>
            </div>
        </nav>
    )
}

export default Navbar;

