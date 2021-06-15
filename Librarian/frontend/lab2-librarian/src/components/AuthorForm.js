import React from 'react';
import AuthorRepository from "../repo/AuthorRepository";
import {BrowserRouter as Redirect, useHistory} from "react-router-dom";

const AuthorForm = (props) => {

    const history = useHistory();
    const [formData, updateFormData] = React.useState({
        firstName: "",
        lastName: "",
        slogan: "",
        username: "",
        password: "",
        email: "",
        phoneNumber: "",
        address: "",
        city: "",
        countryId: 1
    })

    const onFormSubmit = (e) => {
        e.preventDefault();
        const firstName = formData.firstName;
        const lastName = formData.lastName;
        const slogan = formData.slogan;
        const username = formData.username;
        const password = formData.password;
        const email = formData.email;
        const phoneNumber = formData.phoneNumber;
        const address = formData.address;
        const city = formData.city;
        const countryId = formData.countryId;
        console.log(firstName, lastName, username, slogan, password, email, phoneNumber, address, city, countryId);

        AuthorRepository.createAuthor(firstName, lastName, slogan, username, password, email, phoneNumber, address, city, countryId)
            .then((r) => {
                history.push("/author_profile");
            }).catch((err) => {
            history.push("/author_form");
        });
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
        marginTop: "8%"
    }
    return (


        <div className="accordion" id="accordionExample" style={flexContainer}>
            <div className="accordion" id="accordionExample" style={{width: '50%'}}>
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">First Name</label>
                        <input type="text"
                               className="form-control"
                               id="firstName"
                               name="firstName"
                               required
                               placeholder="Enter First Name"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Last Name</label>
                        <input type="text"
                               className="form-control"
                               id="lastName"
                               name="lastName"
                               required
                               placeholder="Enter Last Name"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Slogan (Or quote that you find impressive)</label>
                        <input type="text"
                               className="form-control"
                               id="slogan"
                               name="slogan"
                               required
                               placeholder="Enter Slogan"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Username</label>
                        <input type="text"
                               className="form-control"
                               id="username"
                               name="username"
                               required
                               placeholder="Enter Username"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Password</label>
                        <input type="text"
                               className="form-control"
                               id="password"
                               name="password"
                               required
                               placeholder="Enter Password"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Email</label>
                        <input type="text"
                               className="form-control"
                               id="email"
                               name="email"
                               required
                               placeholder="Enter Email"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Phone Number</label>
                        <input type="text"
                               className="form-control"
                               id="phoneNumber"
                               name="phoneNumber"
                               required
                               placeholder="Enter Phone Number"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Address</label>
                        <input type="text"
                               className="form-control"
                               id="address"
                               name="address"
                               required
                               placeholder="Enter Address"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">City</label>
                        <input type="text"
                               className="form-control"
                               id="city"
                               name="city"
                               required
                               placeholder="Enter City"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Country</label>

                        <select id="countryId" name="countryId" className="form-control" onChange={handleChange}>
                            {console.log(props.countries)}
                            {props.countries?.data?.length > 0 && props.countries.data.map((term) =>
                                <option key={term.id} value={term.id} id="countryId"
                                        name="countryId">{term.name}</option>
                            )}
                        </select>
                    </div>
                    <div style={flexContainer}>
                        <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default AuthorForm;