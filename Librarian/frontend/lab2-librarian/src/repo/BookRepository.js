import axios from '../custom-axios/axios';
import storage from "../services/storage";

const BookRepository = {
    fetchBooks: () => {
        return axios.get("/api/v1/book/list");
    },
    fetchAuthors: () => {
        return axios.get("/api/author");
    },

    fetchBookByName: (name) => {
        console.log(name);
        return axios.get("/api/v1/book/list", {params: {name: name}});
    },

    createBook: (name, category, availableCopies, authorId, description, price, pdfFile, image) => {
        let token = storage.get('token');
        const config = { headers: { 'Content-Type': `multipart/form-data`, 'Authorization': `Bearer ${token}`} };

        let fd = new FormData();
        fd.append('pdfFile', pdfFile);
        fd.append('image', image);
        fd.append('name', name);
        fd.append('category', category);
        fd.append("authorId", authorId);
        fd.append("availableCopies", availableCopies);
        fd.append("description", description);
        fd.append("price", price);
    return axios.post("/api/v1/author/book", fd, config);
    },
    editBook: (id, name, category, author, availableCopies) => {
        return axios.put(`/api/book/edit/${id}`, {
            "name" : name,
            "category" : category,
            "authorId" : author,
            "availableCopies" : availableCopies,
        });
    },
    deleteBook: (id) => {
        return axios.delete(`/api/book/delete/${id}`);
    },
    getBookById: (id) => {
        return axios.get(`/api/book/${id}`)
    },
    markAsTaken: (id) => {
        return axios.post(`/api/book/markAsTaken/${id}`)
    }

};

export default BookRepository;