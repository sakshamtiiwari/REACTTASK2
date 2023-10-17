import {useState} from 'react';

function TextForm(props){

    const[text, SetText]=useState("");

    const countHandler=function(event){
        SetText(event.target.value);
    }
    return(
        <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={countHandler} id="exampleFormControlTextarea1" rows="8"></textarea>
        {/* <button className="btn btn-primary">Count</button> */}
        <p className='my-4'>Word Count : {text.split(" ").length}</p>
        </div></div>
    )

}

export default TextForm;
