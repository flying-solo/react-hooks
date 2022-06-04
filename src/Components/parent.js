import { useState, useCallback, useEffect, useRef } from "react";
import Count from "./count";
import Title from "./title";
import Buttons from "./button";

function Parent(){

    const [age, setAge]=useState(25);
    const [salary, setSalary]=useState(0);

    const incrAge = useCallback(() => {
        setAge(age+1);
    },[age]); 

    const incrSalary = useCallback(() => {
        setSalary(salary + 2000);
    },[salary]);

    const inputRef=useRef(null);

    useEffect(()=>{
        inputRef.current.focus();
    },[])
    return(
        <>
        <div className="">
            <Title />
            <Count text="Age" count={age} />
            <Buttons handleClick={incrAge}>Increase Age</Buttons>
            <Count text="Salary" count={salary} />
            <Buttons handleClick={incrSalary}>Increase Salary</Buttons>
        </div>
        <div className="">
            <input ref={inputRef} type="text" />
        </div>
        </>
    );
}

export default Parent;