import React from "react";



function InputElement({newTask}){

    function handleInput(event){
        event.preventDefault();

        const input = document.getElementById("input").value;
       
        if(input!=="")
        {
            newTask(input);
            document.getElementById("input").value = ""
    }
    }




    return(
        <div className="input-element">
            <form>
           <input type="text" name="input" id="input" placeholder="Today's Task" className="input"></input>
            <button type="submit" className="submit-button" onClick={handleInput}>Add Task</button>
           </form>
        </div>
    )
}

export default InputElement;