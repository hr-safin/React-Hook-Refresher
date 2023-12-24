import { Button } from '@material-tailwind/react';
import React, { useState } from 'react';

const Home = () => {
    const [details, setDetails] = useState({counter : 0, name : "your text"})
    const handleIncrease = () => {
        setDetails((prev) => {
            return {
                ...prev,
                counter : details.counter + 1
            }
        })
    }

    console.log(details)
    
    return (
        <div className=' text-3xl flex flex-col gap-3 justify-center items-center h-screen'>
            <input className=' border-2' onBlur={(e) => setName(e.target.value)} type="text" />
            <h2>{details.name} has click {details.counter} </h2>
            <Button onClick={handleIncrease}>Increase</Button>
        </div>
    );
};

export default Home;