import React from 'react';
import axios from "../custom-axios/axios";


const CategoryRepository = {
    fetchCategories: () => {
        return axios.get("/api/v1/category/list");
    }
}

export default CategoryRepository;