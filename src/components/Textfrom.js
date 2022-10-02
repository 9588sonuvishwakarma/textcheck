 // https://quillbot.com/word-counter
import React,{ useState} from 'react'  //rf

export default function Textfrom(props) {  //props
    const handleupclick = ()=>{                        // function make
        console.log("upper case was clicked"+ text);
        let newtext  = text.toLocaleUpperCase();
        setText(newtext)     // on click button event occured
        props.showAlert("converet the upper case","success");
    }


    const handleloclick = ()=>{                        // function make
        console.log("upper case was clicked"+ text);
        let newtext  = text.toLocaleLowerCase();
        setText(newtext)     // on click button event occured
        props.showAlert("converet the lower case","success");
    }


    const handleclear = ()=>{                        // function make
        console.log("upper case was clicked"+ text);
        let newtext  = '';
        setText(newtext)     // on click button event occured
        props.showAlert("ClearText is Done","success");
    }
    const handlecopy = () =>{
        console.log(" i haved copied");
        let text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("CopyText is Done","success");


    }
    const hendleExtraspace =()=>{
        let newtext = text.split(/[ ]+/);    //here  (jeck in js)  is used . one or more than sapce that can be remove and join with one space
        setText(newtext.join(" "))
        props.showAlert("Extraspace is Removed","success");
    }

                                                   // functions
    const handleonchange= (event)=>{
        console.log("upper case was clicked");     // we make on change so that text can be written in the text 
        
        setText(event.target.value);
    }


const [text, setText] = useState(''); // hook   // to make state various 

//text= "new text" ; // wrong way to  change the state
// setText("new text "); // correct way to change the state


return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}} >
<h2 > {props.heading} </h2>
<div className="mb-3">
<label for="mybox" className="form-label"></label>
<textarea className="form-control" style={{background: props.mode==='dark'?'grey':'white' , color: props.mode==='dark'?'white':'#042743' }} id="mybox" value={text}   onChange={handleonchange} rows="7"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleupclick}>converet Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleloclick}>Converet lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleclear}>clear text</button>
<button className="btn btn-primary mx-2" onClick={handlecopy}>copy text</button>
<button className="btn btn-primary mx-2" onClick={hendleExtraspace}>Remove space</button>
</div>
<div className='container my-4'style={{color: props.mode==='dark'?'white':'#042743'}} >
    <h1> your text summery</h1 >
    <p> {text.split(" ").length-1} words, {text.length} charecters</p>
    <p>{0.008*text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in textbox above to preview it here"}</p>

</div>
</>

  )
}
