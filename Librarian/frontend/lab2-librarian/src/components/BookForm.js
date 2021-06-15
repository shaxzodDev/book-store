import React, {useEffect, useState} from 'react';
import AuthorRepository from "../repo/AuthorRepository";
import {BrowserRouter as Redirect, useHistory} from "react-router-dom";
import BookRepository from "../repo/BookRepository";
import FileRepository from "../repo/FileRepostiroy";
import CategoryRepository from "../repo/CategoryRepository";

const BookForm = (props) => {

    const history = useHistory();
    const [formData, updateFormData] = React.useState({
        name: "",
        category: "",
        availableCopies: 0,
        description: "",
        authorId: -1,
        price: 0.0,
        pdfFile: null,
        image: null
    })

    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name;
        const category = formData.category;
        const availableCopies = formData.availableCopies;
        const description = formData.description;
        const authorId = formData.authorId;
        const pdfFile = formData.pdfFile;
        const image = formData.image;
        const price = formData.price;
        console.log(name, category, availableCopies, authorId, description, price, pdfFile, image);

        BookRepository.createBook(name, category, availableCopies, authorId, description, price, pdfFile, image)
            .then((r) => {
                history.push("/author_profile");
            }).catch((err) => {
            window.alert(err.message)
            history.push("/book_form");
        });
        // props.onCreateAuthor(firstName, lastName, slogan, username, password, email, phoneNumber, address, city, countryId);
    }

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleChange1 = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.files[0]
        })
    }

    const flexContainer = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: "8%"
    }

    let [categories, setCategories] = useState({
        categories: []
    });

    useEffect(() => CategoryRepository.fetchCategories().then(r => {
        setCategories(r.data);
    }), []);

    return (

        <div className="accordion" id="accordionExample" style={flexContainer}>
            <div className="accordion" id="accordionExample" style={{width: '50%'}}>
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               required
                               placeholder="Enter Name"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Category</label>

                        <select id="category" name="category" className="form-control" onChange={handleChange}>
                            {console.log(categories)}
                            {categories?.data?.length > 0 && categories.data.map((term) =>
                                <option key={term.order} value={term.name} id="category"
                                        name="category">{term.name}</option>
                            )}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Available Copies</label>
                        <input type="text"
                               className="form-control"
                               id="availableCopies"
                               name="availableCopies"
                               required
                               placeholder="Enter the number of available copies"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Description</label>
                        <input type="text"
                               className="form-control"
                               id="description"
                               name="description"
                               required
                               placeholder="Enter Description"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Price</label>
                        <input type="text"
                               className="form-control"
                               id="price"
                               name="price"
                               required
                               placeholder="Enter the Price"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">PDF</label>
                        <input type="file"
                               className="form-control"
                               id="pdfFile"
                               name="pdfFile"
                               required
                               placeholder="Choose the pdf file of the Book"
                               onChange={handleChange1}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Image</label>
                        <input type="file"
                               className="form-control"
                               id="image"
                               name="image"
                               required
                               placeholder="Choose the image of the Book"
                               onChange={handleChange1}
                        />
                    </div>
                    <div style={flexContainer}>
                        <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default BookForm;