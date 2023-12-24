
import { Button } from '@material-tailwind/react';
import React, {  useState } from 'react';

const Home = () => {
    
    const [count, setCount] = useState(0)

    const increaseCount = () => {
        setCount(prev => prev + 1)
    }

    const decreaseCount = () => {
        setCount(prev => prev -1)
    }

    return (
        <div className=' text-3xl flex flex-col   gap-3 justify-center items-center h-screen'>
            <h2>Count : {count}</h2>
            <div className=' flex gap-5'>
            <Button onClick={increaseCount}  color='green'>Increase</Button>
            <Button onClick={decreaseCount}  color='red'>Decrease</Button>
            </div>
            
        </div>
    );
};

export default Home;