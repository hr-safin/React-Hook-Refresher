import { Button } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';

const Home = () => {
    const [details, setDetails] = useState({counter : 0, name : "your text"})
    const [otherCount, setOtherCount] = useState(5)
    const handleIncrease = () => {
        setDetails((prev) => {
            return {
                ...prev,
                counter : details.counter + 1
            }
        })
    }

    useEffect(() => {
        document.title = `${details.counter} new message`
    }, [])
    

    // useEffect with a variable
    useEffect(() => {
        document.title = `${otherCount} new message`
    }, [otherCount])


    const handleIncrease2  = () => {
        setOtherCount(otherCount + 5)
    }
    
    return (
        <div className=' text-3xl flex flex-col gap-3 justify-center items-center h-screen'>
            <input className=' border-2' onBlur={(e) => setName(e.target.value)} type="text" />
            <h2>{details.name} has click {details.counter} </h2>
            <Button onClick={handleIncrease}>Increase</Button>
            <h2>{details.name} has click {otherCount} </h2>
            <Button onClick={handleIncrease2}>Increase</Button>
        </div>
    );
};

export default Home;