import React, { useState } from 'react'

const Form = () => {
    const [taskName, setTaskName] = useState("");
    const [taskDes, setTaskDes] = useState("");
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [isFormCompleted, setFormCompleted] = useState()
    const handleInputChange = (e) => {
        console.log(e.target.value, e.target.name);
        if (e.target.name === "name") {
            setTaskName(e.target.value);
        } else {
            setTaskDes(e.target.value);
        }
    }
    const handleSubmit = () => {
        setIsFormSubmitted(true);
        console.log(taskName, taskDes);
        if (taskName === "" || taskDes === "") return;
        console.log(taskName, taskDes);
    }
    const checkBox = (e) => {
        if (e.target.checked) {
            setFormCompleted(true);
        } else {
            setFormCompleted(false);
        }
    }
    let Task = taskName;
    let desp = taskDes;
    let complete = isFormCompleted;
    const arrayObject = [
        {
            name: Task,
            desp: desp,
            isCompleted: complete
        }
    ];
    console.log(arrayObject);
  return (
    <>
        <h1>Form</h1>
        <form>
            <input name='name' onChange={handleInputChange}/>
            {taskName === "" && isFormSubmitted && <p>Task name is required.</p>}
            <input name='des' onChange={handleInputChange}/>
            {taskDes === "" && isFormSubmitted && <p>Task name is required.</p>}
            <input type={'checkbox'} name="box" onChange={checkBox}/>
            {/* <input type={'submit'} /> */}
        </form>
        <button onClick={() => handleSubmit()}>Submit</button>

        <div>
            {/* {`name: ${taskName} Descrption: ${taskDes} isCompleted: ${isFormCompleted}`} */}
            {arrayObject.map((value, index) => {
                return (
                    <div key={index}>
                        <h1>{value.name}: {value.desp} : {value.isCompleted ? "true": "false"}</h1>
                    </div>
                )
            })}
        </div>
    </>
  )
}

export default Form