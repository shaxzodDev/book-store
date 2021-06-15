import React from 'react';
import axios from '../custom-axios/axios';

const FileRepository = {
    upload: (file) => {

        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }

        return axios.post("/api/v1/file/upload",
            file,
            config)
    }
}

export default FileRepository;