
import { Button } from '@material-tailwind/react';
import React, {  useReducer, useState } from 'react';


const ACTION = {
    INCREASE : "increase",
    DECREASE : "decrease"
}
const initialState = {count : 0}

const reducer = (state, action) => {
    console.log(action)
    switch(action.type){

        case ACTION.INCREASE : 
            return {count : state.count +  1}
        
        case ACTION.DECREASE : 
            return {count : state.count -  1}

        default:
            return state
    }
    
}
const Home = () => {
    
    // const [count, setCount] = useState(0)

    const [state, dispatch]  = useReducer(reducer, initialState )

    const increaseCount = () => {
        dispatch({type : ACTION.INCREASE})
    }

    const decreaseCount = () => {
        dispatch({type : ACTION.DECREASE})
    }

    return (
        <div className=' text-3xl flex flex-col   gap-3 justify-center items-center h-screen'>
            <h2>Count : {state.count}</h2>
            <div className=' flex gap-5'>
            <Button onClick={increaseCount}  color='green'>Increase</Button>
            <Button onClick={decreaseCount}  color='red'>Decrease</Button>
            </div>
            
        </div>
    );
};

export default Home;