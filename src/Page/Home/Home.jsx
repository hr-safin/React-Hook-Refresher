
import { Button } from '@material-tailwind/react';
import React, {  useReducer, useState } from 'react';

const initialState = { count : 0}

const ACTION = {
    INCREASE  : "increase",
    DECREASE : "decrease"
}

const reducer = (state,action) => {
    
    switch(action.type){
     
        case ACTION.INCREASE:
            return {count : state.count + 1}  
        case ACTION.DECREASE: 
            return {count : state.count - 1}
            
        default:
            return state
    }

}
const Home = () => {

    const [state, dispatch] = useReducer(reducer, initialState)


    const handleIncrease = () => {
        dispatch({type : ACTION.INCREASE})
    }

    const handleDecrease = () => {
        dispatch({type : ACTION.DECREASE})
    }
    
    

    return (
        <div className=' text-3xl flex flex-col   gap-3 justify-center items-center h-screen'>
            
            <h2>Count : {state.count}</h2>
            <div>
                <Button onClick={handleIncrease} color='green'>Increase</Button>
                <Button onClick={handleDecrease} color="red">Decrease</Button>
            </div>
            
        </div>
    );
};

export default Home;