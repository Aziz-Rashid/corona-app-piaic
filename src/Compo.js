import React,{useState,useEffect} from 'react'

import {fetchdata} from './component/Ap'

export const Compo = () =>{
    const [state,setstate] = useState({})
    useEffect(()=>{
        const getdata = async () =>{
            const {data:{confirmed,recovered,deaths}} = await fetchdata()
            setstate({
                state: data
            })
        }
        getdata()
       
        
    })

    return (
        <h1>hello world</h1>
    )
    
}