"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function List() {
    const [data, setdata] = useState([]);

    const del = (num) => {
        axios.delete(`/api/${num}`)
            .then(res => {
                setdata(res.data);
            })
    }
    const edt = (num)=>{
        axios.put(`/api/${num}`,{name:'루루'})
        .then(res => {
            setdata(res.data);
        })
    }

    const getData = () => {
        axios.get('/api')
        .then(res => {
            setdata(res.data);
            console.log(res,"++++++++");
            })
    }


    useEffect(() => {

        getData();

    }, [])


    return (
        <>
            <ul>
                {
                    data.map(obj => (
                        <li key={obj.num}>
                            아이디:{obj.id}
                            이름:{obj.name}
                            이메일:{obj.e_mail}
                            <button onClick={() => { del(obj.num) }}>삭제</button>
                            <button onClick={() => { edt(obj.num) }}>수정</button>
                        </li>
                    ))
                }
            </ul>

        </>

    )
}

export default List