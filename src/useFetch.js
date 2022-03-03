import { useEffect, useState } from "react";
import axios from 'axios'
const useFtch = (url) => {
    const [data,setData]=useState(null)
    const [loading,setLoading]=useState("")
    const [error,setError]=useState(null)
    useEffect(()=>{
        setLoading("Loading...")
        setTimeout(() => {
            axios.get(url).then((response)=>{
                setData(response.data)
            }).catch((err)=>{
                setLoading(" ")
                setError(err.message)
            }).finally(()=>{
                setLoading("")
            }); 
        },3000)
      },[url]);
    //Return all the states of the data : loading ,data, errors
    return {loading,data,error,setData};
}
export default useFtch;