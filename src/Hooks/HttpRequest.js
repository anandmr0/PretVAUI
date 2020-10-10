import React, { useEffect, useState } from 'react'
import axios from 'axios'
export function useAxiosGet(url)
{
    const[requests,setRequests]=useState({
       
        data:null,
        error:false
    });
    useEffect(()=>{
        setRequests({
           
            data:null,
            error:false
        });
        axios.get(url).then(response=>{
            console.log(response)
            setRequests({
               
                data:response.data.product,
                error:false,
            })
            
        }).catch(()=>{
            setRequests({
               
                data:null,
                error:true,
            })
        })
    },url)

    return requests
}

