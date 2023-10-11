'use client'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react'

function Insert() {
    const navi = useRouter();

    const insertFn= (e)=>{
        e.preventDefault();

        const formdata = new FormData(e.target)
        const values = Object.fromEntries(formdata);
        console.log(values);

        axios.post('/api',values)
        navi.push('./list')
    }
    return (
        <>
            <form onSubmit={insertFn}>
                <p><input type='text' name="id"></input></p>
                <p><input type='text' name="name"></input></p>
                <p><input type='text' name="e_mail"></input></p>

                <p><input type='submit' value="save"></input></p>
            </form>
        </>
    )
}

export default Insert