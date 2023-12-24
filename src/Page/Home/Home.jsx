import { Button } from '@material-tailwind/react';
import React, { useState } from 'react';

const Home = () => {
    const [counter, setCounter] = useState(0)
    const handleIncrease = () => {
        setCounter(counter + 1)
    }
    
    return (
        <div className=' text-3xl flex flex-col gap-3 justify-center items-center h-screen'>
            <h2>Counter : {counter}</h2>
            <Button onClick={handleIncrease}>Increase</Button>
        </div>
    );
};

export default Home;