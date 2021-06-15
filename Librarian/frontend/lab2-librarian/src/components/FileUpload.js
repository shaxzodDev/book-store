import React from 'react'
import axios from '../custom-axios/axios';
import FileRepository from "../repo/FileRepostiroy";

class FileUpload extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            file:null
        }
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.fileUpload = this.fileUpload.bind(this)
    }
    onFormSubmit(e){
        e.preventDefault() // Stop form submit
        this.fileUpload(this.state.file).then((response)=>{
            console.log(response.data);
        })
    }
    onChange(e) {
        this.setState({file:e.target.files[0]})
    }
    fileUpload(file){
        const formData = new FormData();
        formData.append('file',file)
        FileRepository.upload(file).then((r) => {
            r.status
            history.push("/author_");
        }).catch((err) => {
            window.alert(err.message)
            history.push("/sign_in");
        });
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <h1>File Upload</h1>
                <input type="file" onChange={this.onChange} />
                <button type="submit">Upload</button>
            </form>
        )
    }
}



export default FileUpload;