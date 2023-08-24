import { useState } from "react";
import {Heading, FileInput } from "grommet";

export function useFileUpload({children}) {
    const [file, setFile] = useState();
    const [uploadedFile, setUploadedFile] = useState(); 
    const [error, setError] = useState(); 

    const handleChange = (e)=>{
        setFile(e.target.files[0]);
    }
    const handleSubmit=(e) => { 
        e.preventDefault();
    }
    const FileUpload=(
        <form onSubmit={handleSubmit}>
            <Heading level='2'>React File Upload</Heading>
            <FileUpload />
        </form>
    );

    return { 
        FileUpload,
        uploadedFile,
        file,
        error
    }

}