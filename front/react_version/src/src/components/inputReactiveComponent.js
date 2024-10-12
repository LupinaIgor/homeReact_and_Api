import {useState} from "react";

export default () => {
    //let txtvalue="jjjjjj"
    const [txtValue, setTxtValue]=useState("jjjjjj")

    const myOnChange=(event)=>{
        setTxtValue(event.target.value);

        console.log("change")
    }

    return(<>
           <input type="text" value={txtValue} onChange={myOnChange}/>
           <input/>
        <div>{txtValue}</div>
        </>)
}