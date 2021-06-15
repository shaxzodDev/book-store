import axios from "../custom-axios/axios";

const UserRepository = {
    signIn: (username, password) => {
        return axios.post("/api/auth/sign_in", {
            "username" : username,
            "password" : password,
        });
    }
}

export default UserRepository;