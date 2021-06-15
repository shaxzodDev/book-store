import React from 'react';
import axios from "../custom-axios/axios";


const CountryRepository = {
    fetchCountries: () => {
        return axios.get("/api/v1/country/list");
    }
}

export default CountryRepository;