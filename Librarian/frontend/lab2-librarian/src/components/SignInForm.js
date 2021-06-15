import React from 'react';
import style from '../sevi/Login_v4/css/main.css';
import utilCSS from '../sevi/Login_v4/css/util.css';
import {Link, useHistory} from "react-router-dom";
import BookRepository from "../repo/BookRepository";
import UserRepository from "../repo/UserRepository";
import {useDispatch} from "react-redux";
import ActionsAuth from "store/actions";

const SignInForm = (props) => {

    const history = useHistory();
    const dispatch = useDispatch();
    const [formData, updateFormData] = React.useState({
        username: "",
        password: "",
    })

    const onFormSubmit = (e) => {
        e.preventDefault();
        const username = formData.username;
        const password = formData.password;
        console.log(username, password);

        let values = {username, password}
        let payload = {
            cb: {
                onSuccess: ()=>{
                    history.push('/author_profile')
                },
                onError: (error)=> {

                }
            },
            values
        }


        dispatch(ActionsAuth.Login.trigger(payload));


        // UserRepository.signIn(username, password)
        //     .then((r) => {
        //         history.push({pathname: "/author_profile", state: {detail: r.data}});
        //     }).catch((err) => {
        //     window.alert(err.message)
        //     history.push("/sign_in");
        // });
        // props.onCreateAuthor(firstName, lastName, slogan, username, password, email, phoneNumber, address, city, countryId);
    }

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const flexContainer = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: "5%",
        backgroundColor: 'transparent',
    }

    return (
        <div className="limiter" style={flexContainer}>
            <div className="container-login100">
                <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
                    <form className="login100-form validate-form" onSubmit={onFormSubmit}>
					<span className="login100-form-title p-b-49">
						Login
					</span>

                        <div className="wrap-input100 validate-input m-b-23" data-validate="Username is reauired">
                            <span className="label-input100">Username</span>
                            <input className="input100" type="text" id="username" name="username"
                                   placeholder="Type your username" onChange={handleChange}/>
                            <span className="focus-input100" data-symbol="&#xf206;"></span>
                        </div>

                        <div className="wrap-input100 validate-input" data-validate="Password is required">
                            <span className="label-input100">Password</span>
                            <input className="input100" type="password" id="password" name="password"
                                   placeholder="Type your password" onChange={handleChange}/>
                            <span className="focus-input100" data-symbol="&#xf190;"></span>
                        </div>

                        <div className="text-right p-t-8 p-b-31">
                            <a href="#">
                                Forgot password?
                            </a>
                        </div>

                        <div className="container-login100-form-btn">
                            <div className="wrap-login100-form-btn">
                                <div className="login100-form-bgbtn"></div>
                                <button className="login100-form-btn">
                                    Sign In
                                </button>
                            </div>
                        </div>

                        <div className="txt1 text-center p-t-54 p-b-20">
						<span>
							Or Sign Up Using
						</span>
                        </div>

                        <div className="flex-c-m">
                            <a href="#" className="login100-social-item bg1">
                                <i className="fa fa-facebook"></i>
                            </a>

                            <a href="#" className="login100-social-item bg2">
                                <i className="fa fa-twitter"></i>
                            </a>

                            <a href="#" className="login100-social-item bg3">
                                <i className="fa fa-google"></i>
                            </a>
                        </div>

                        <div className="flex-col-c p-t-155">
						<span className="txt1 p-b-17">
							Or Sign Up Using
						</span>

                            <Link to={"/author_form"} className="txt2">
                                Sign Up
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default SignInForm;