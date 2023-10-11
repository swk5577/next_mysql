"use client"

import axios from "axios";
import { useEffect, useState } from "react";

function Upload() {
    const [imageView, setImageView] = useState();
    const [data, setData] = useState([]);

    const uploadFile = (e) => {
        e.preventDefault();
        const formdata = new FormData(e.target)
        const obj = Object.fromEntries(formdata);

        const fr = new FileReader();
        fr.readAsDataURL(obj.upload);

        fr.addEventListener('load',()=>{

            axios.post('./api/upload/files',{
                title:obj.title,
                imgUrl:fr.result
            })
        })

    }

    const get_file = async ()=>{
        const get_data = await axios.get('/api/upload/files');
        console.log(get_data.data);
        setData(get_data.data)
    }

    useEffect(()=>{
        get_file();
    },[])

    return (
        <div>
            <h2>파일 업로드</h2>
            <form onSubmit={uploadFile}
                method="post"
                encType="multipart/form-data">
                <p><input type='text' name='title' /></p>
                <p><input type='file' name='upload'
                    onChange={(e) => {
                        const file = e.target.files[0];
                        file && setImageView(URL.createObjectURL(file))
                    }} />
                </p>
                    <p><img src={imageView} width="200"></img></p>
                <p><input type='submit' value='저장' /></p>
            </form>

            <div>
            {
                data.map(obj=>(
                <figure key={obj.name}>
                    <img src={obj.imgUrl} alt={obj.title} width="200"/>
                    <figcaption>{obj.title}</figcaption>
                </figure>
                ))
                }
            </div>
        </div>
    )
}

export default Upload