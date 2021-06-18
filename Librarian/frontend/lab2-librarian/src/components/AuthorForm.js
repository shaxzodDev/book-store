import React, {useEffect, useState} from 'react';
import AuthorRepository from "../repo/AuthorRepository";
import {BrowserRouter as Redirect, useHistory} from "react-router-dom";
import CountryRepository from "../repo/CountryRepository";

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

    let [countries, setCountries] = useState({
        categories: []
    });

    useEffect(() => CountryRepository.fetchCountries().then(r => {
        setCountries(r.data);
    }), []);

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
                        <label htmlFor="name">Ism</label>
                        <input type="text"
                               className="form-control"
                               id="firstName"
                               name="firstName"
                               required
                               placeholder="Ismni kiriting"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Sharif</label>
                        <input type="text"
                               className="form-control"
                               id="lastName"
                               name="lastName"
                               required
                               placeholder="Sharifingizni kiriting"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Shior (yoki o'zingiz ta'sirlanga hikmatli so'z)</label>
                        <input type="text"
                               className="form-control"
                               id="slogan"
                               name="slogan"
                               required
                               placeholder="Shioringizni kiriting"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Foydalanuvchi nomi</label>
                        <input type="text"
                               className="form-control"
                               id="username"
                               name="username"
                               required
                               placeholder="Foydalanuvchi nomingizni kiriting"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Parol</label>
                        <input type="text"
                               className="form-control"
                               id="password"
                               name="password"
                               required
                               placeholder="Parol o'ylab toping"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Elektron pochtangiz</label>
                        <input type="text"
                               className="form-control"
                               id="email"
                               name="email"
                               required
                               placeholder="Elektron pochtangizni kiriting"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Telefon raqam</label>
                        <input type="text"
                               className="form-control"
                               id="phoneNumber"
                               name="phoneNumber"
                               required
                               placeholder="Telefon raqamingizni kiriting"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Manzil</label>
                        <input type="text"
                               className="form-control"
                               id="address"
                               name="address"
                               required
                               placeholder="Manzilingizni kiriting"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Shahar</label>
                        <input type="text"
                               className="form-control"
                               id="city"
                               name="city"
                               required
                               placeholder="Shahringizni kiriting"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Mamlakat</label>

                        <select id="countryId" name="countryId" className="form-control" onChange={handleChange}>
                            {console.log(countries)}
                            {countries?.data?.length > 0 && countries.data.map((term) =>
                                <option key={term.id} value={term.id} id="countryId"
                                        name="countryId">{term.name}</option>
                            )}
                        </select>
                    </div>
                    <div style={flexContainer}>
                        <button id="submit" type="submit" className="btn btn-primary">Jo'nating</button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default AuthorForm;