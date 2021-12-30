import axios from "../custom-axios/axios";


const AuthorRepository = {
    createAuthor: (firstName, lastName, slogan, username, password, email, phoneNumber, address, city, countryId) => {
        return axios.post("/api/v1/author/sign_up", {
            "firstName" : firstName,
            "lastName" : lastName,
            "slogan" : slogan,
            "username" : username,
            "password" : password,
            "email" : email,
            "phoneNumber" : phoneNumber,
            "addressText" : address,
            "city" : city,
            "countryId" : countryId
        });
    },

    getAuthor: (authorId) => {
        return axios.get("/api/v1/author/" + authorId);
    }
}

export default AuthorRepository;