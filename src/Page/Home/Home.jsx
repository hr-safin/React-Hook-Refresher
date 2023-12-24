import { Button } from '@material-tailwind/react';
import React, { useState } from 'react';

const Home = () => {
    const [counter, setCounter] = useState(0)
    const [name, setName] = useState("your text")
    const handleIncrease = () => {
        setCounter(counter + 1)
    }
    
    return (
        <div className=' text-3xl flex flex-col gap-3 justify-center items-center h-screen'>
            <input className=' border-2' onBlur={(e) => setName(e.target.value)} type="text" />
            <h2>{name} has click {counter} </h2>
            <Button onClick={handleIncrease}>Increase</Button>
        </div>
    );
};

export default Home;