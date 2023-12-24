
import React, { useEffect, useRef, useState } from 'react';

const Home = () => {
    // const [count, setCount] = useState(0)
    const [name, setName] = useState("")
    const inputElement = useRef(0)
    // const [details, setDetails] = useState({counter : 0, name : "your text"})
    // const [otherCount, setOtherCount] = useState(5)
    // const handleIncrease = () => {
    //     setDetails((prev) => {
    //         return {
    //             ...prev,
    //             counter : details.counter + 1
    //         }
    //     })
    // }
    // useEffect(() => {
    //     document.title = `${details.counter} new message`
    // }, [])
    // // useEffect with a variable
    // useEffect(() => {
    //     document.title = `${otherCount} new message`
    // }, [otherCount])
    // const handleIncrease2  = () => {
    //     setOtherCount(otherCount + 5)
    // }


    const handleRef = () => {
        console.log(inputElement)
        inputElement.current.style.width = "800px"
        inputElement.current.style.height = "200px"
        inputElement.current.focus()
    }
    



    
    return (
        <div className=' text-3xl flex flex-col gap-3 justify-center items-center h-screen'>
            <input className=' border-2' type="text"  ref={inputElement} />
           <button className=' py-2 px-3 rounded-md text-white bg-black' onClick={handleRef} >Click Me</button>
        </div>
    );
};

export default Home;