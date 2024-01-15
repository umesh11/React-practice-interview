import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = (props) => {
    const [data, setData] = useState([]);


    function getDummyData() {
        axios.get('https://jsonplaceholder.typicode.com/todos/1').then((res) => {
            if(!res.status == 200) return;
            setData(res.data);
        })
    }

    useEffect(() => {
       getDummyData();
    }, [])

    console.log({data})

    return (
        <>
        <h5>{data.title}</h5>
        <button>
         Click Me
        </button>
        </>
    )
}

export default Home;