import axios from '../custom-axios/axios';
import storage from "../services/storage";

const PostRepository = {

    createPost: (post) => {
        let token = storage.get('token');
        const config = { headers: {'Authorization': `Bearer ${token}`} };
        return axios.post("/api/v1/post", {content: post}, config);
    },

    fetchPosts: () => {
        let token = storage.get('token');
        const config = { headers: {'Authorization': `Bearer ${token}`} };
        return axios.get("/api/v1/posts", config);
    }
};

export default PostRepository;