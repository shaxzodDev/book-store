import React from 'react';
import style from '../sevi/public/assets/css/profile.css';
import styles from '../sevi/public/assets/css/theme.css';
import avatar from '../sevi/public/assets/img/gallery/avatar.png';
import {Link, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import get from 'lodash/get';
const AuthorProfile = (props) => {


    ///abetga chiqib keyapman ok, man buni qilib turaman, profile danniylarni authdan olib ok? keyin profile ga otishini kechaklab qoyamiz kechaklab? rahmat
    const location = useLocation();
    const auth = useSelector(state => state.auth);

    const flexContainer = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: "2%",
        backgroundColor: 'transparent',
    }

    return (
        <div className="row" style={flexContainer}>
            <div style={{width: '70%', boxShadow:`0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`, marginTop:'3%'}}>
                <div className="profile-nav col-md-3" style={{width: '100%'}}>
                    <div className="panel">
                        <div className="user-heading round">
                            <a href="#">
                                <img src={`${avatar}`} alt=""/>
                            </a>
                            <h1 style={{color: 'white'}}>{get(auth, "user.firstName")} {get(auth, "user.lastName")}</h1>
                            <p style={{color: "white"}}>{get(auth, "user.email")}</p>
                        </div>

                    </div>
                </div>
                <div className="profile-info col-md-9" style={{width: '100%'}}>
                    <div className="panel">
                        <form style={flexContainer}>
                            <textarea placeholder="Whats in your mind today?" rows="2"
                                      className="form-control input-lg p-text-area" />

                            <div>
                                <button className="btn btn-lg rounded-pill btn-primary bg-gradient font-base order-0"
                                        type="submit">Post
                                </button>
                            </div>
                        </form>
                        <div style={flexContainer}>
                            <Link to={"/book_form"}>
                                <button className="btn btn-lg rounded-pill btn-primary bg-gradient font-base order-0"
                                        type="submit" >Share your book on the Platform
                                </button>
                            </Link>
                        </div>
                        <footer className="panel-footer" style={flexContainer}>

                            <ul className="nav nav-pills">
                                <li>
                                    <a href="#"><i className="fa fa-map-marker"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-camera"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className=" fa fa-film"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-microphone"></i></a>
                                </li>
                            </ul>
                        </footer>
                    </div>
                    <div className="panel" style={{borderRadius: '0!important'}}>
                        <div  className="font-base bio-graph-heading">
                            <p style={{color: "white"}}>
                                {get(auth, "user.slogan")}
                            </p>
                        </div>
                        <div className="panel-body bio-graph-info " style={{padding: "1%"}}>
                            <h1>Bio Graph</h1>
                            <div className="row">
                                <div className="bio-row">
                                    <p><span>First Name </span> {get(auth, "user.firstName")}</p>
                                </div>
                                <div className="bio-row">
                                    <p><span>Last Name </span> {get(auth, "user.lastName")}</p>
                                </div>
                                {/*<div className="bio-row">*/}
                                {/*    <p><span>Country </span> Australia</p>*/}
                                {/*</div>*/}
                                {/*<div className="bio-row">*/}
                                {/*    <p><span>Birthday</span> 13 July 1983</p>*/}
                                {/*</div>*/}
                                <div className="bio-row">
                                    <p><span>Occupation </span> Author</p>
                                </div>
                                <div className="bio-row">
                                    <p><span>Email </span> {get(auth, "user.email")}</p>
                                </div>
                                {/*<div className="bio-row">*/}
                                {/*    <p><span>Mobile </span> (12) 03 4567890</p>*/}
                                {/*</div>*/}
                                <div className="bio-row">
                                    <p><span>Phone </span> {get(auth, "user.phoneNumber")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="panel">
                                    <div className="panel-body">
                                        <div className="bio-chart">
                                            {/*<div style="display:inline;width:100px;height:100px;">*/}
                                            {/*    <canvas width="100" height="100px"></canvas>*/}
                                            {/*    <input className="knob" data-width="100" data-height="100"*/}
                                            {/*           data-displayprevious="true" data-thickness=".2" value="35"*/}
                                            {/*           data-fgcolor="#e06b7d" data-bgcolor="#e8e8e8"*/}
                                            {/*           style="width: 54px; height: 33px; position: absolute; vertical-align: middle; margin-top: 33px; margin-left: -77px; border: 0px; font-weight: bold; font-style: normal; font-variant: normal; font-stretch: normal; font-size: 20px; line-height: normal; font-family: Arial; text-align: center; color: rgb(224, 107, 125); padding: 0px; -webkit-appearance: none; background: none;">*/}
                                            {/*</div>*/}
                                        </div>
                                        <div className="bio-desk">
                                            <h4 className="red">We are together since</h4>
                                            <p>{get(auth, "user.createdDate")}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="panel">
                                    <div className="panel-body">
                                        <div className="bio-chart">
                                            {/*<div style="display:inline;width:100px;height:100px;">*/}
                                            {/*    <canvas width="100" height="100px"></canvas>*/}
                                            {/*    <input className="knob" data-width="100" data-height="100"*/}
                                            {/*           data-displayprevious="true" data-thickness=".2" value="63"*/}
                                            {/*           data-fgcolor="#4CC5CD" data-bgcolor="#e8e8e8"*/}
                                            {/*           style="width: 54px; height: 33px; position: absolute; vertical-align: middle; margin-top: 33px; margin-left: -77px; border: 0px; font-weight: bold; font-style: normal; font-variant: normal; font-stretch: normal; font-size: 20px; line-height: normal; font-family: Arial; text-align: center; color: rgb(76, 197, 205); padding: 0px; -webkit-appearance: none; background: none;">*/}
                                            {/*</div>*/}
                                        </div>
                                        {/*<div className="bio-desk">*/}
                                        {/*    <h4 className="terques">ThemeForest CMS </h4>*/}
                                        {/*    <p>Started : 15 July</p>*/}
                                        {/*    <p>Deadline : 15 August</p>*/}
                                        {/*</div>*/}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="panel">
                                    <div className="panel-body">
                                        <div className="bio-chart">
                                            {/*<div style="display:inline;width:100px;height:100px;">*/}
                                            {/*    <canvas width="100" height="100px"></canvas>*/}
                                            {/*    <input className="knob" data-width="100" data-height="100"*/}
                                            {/*           data-displayprevious="true" data-thickness=".2" value="75"*/}
                                            {/*           data-fgcolor="#96be4b" data-bgcolor="#e8e8e8"*/}
                                            {/*           style="width: 54px; height: 33px; position: absolute; vertical-align: middle; margin-top: 33px; margin-left: -77px; border: 0px; font-weight: bold; font-style: normal; font-variant: normal; font-stretch: normal; font-size: 20px; line-height: normal; font-family: Arial; text-align: center; color: rgb(150, 190, 75); padding: 0px; -webkit-appearance: none; background: none;">*/}
                                            {/*</div>*/}
                                        </div>
                                        {/*<div className="bio-desk">*/}
                                        {/*    <h4 className="green">VectorLab Portfolio</h4>*/}
                                        {/*    <p>Started : 15 July</p>*/}
                                        {/*    <p>Deadline : 15 August</p>*/}
                                        {/*</div>*/}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="panel">
                                    <div className="panel-body">
                                        <div className="bio-chart">
                                            {/*<div style="display:inline;width:100px;height:100px;">*/}
                                            {/*    <canvas width="100" height="100px"></canvas>*/}
                                            {/*    <input className="knob" data-width="100" data-height="100"*/}
                                            {/*           data-displayprevious="true" data-thickness=".2" value="50"*/}
                                            {/*           data-fgcolor="#cba4db" data-bgcolor="#e8e8e8"*/}
                                            {/*           style="width: 54px; height: 33px; position: absolute; vertical-align: middle; margin-top: 33px; margin-left: -77px; border: 0px; font-weight: bold; font-style: normal; font-variant: normal; font-stretch: normal; font-size: 20px; line-height: normal; font-family: Arial; text-align: center; color: rgb(203, 164, 219); padding: 0px; -webkit-appearance: none; background: none;">*/}
                                            {/*</div>*/}
                                        </div>
                                        {/*<div className="bio-desk">*/}
                                        {/*    <h4 className="purple">Adobe Muse Template</h4>*/}
                                        {/*    <p>Started : 15 July</p>*/}
                                        {/*    <p>Deadline : 15 August</p>*/}
                                        {/*</div>*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
)
}

export default AuthorProfile;
