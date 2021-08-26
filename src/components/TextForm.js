import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
        document.title = 'Converted to uppercase';
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
        document.title = 'Converted to lowercase';
    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared", "success");
        document.title = 'Text-utils - Homepage'
    }
    const handleCopyToClipboardClick = () => {
        var txt = document.getElementById('mybox');
        txt.select();
        navigator.clipboard.writeText(txt.value)
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipboard", "success");
        document.title = 'Text copied to clipboard';
    }

    const handleOnChange = (e) => {
        setText(e.target.value)
    } 

    return (
        <>
            <div className="container" style={{color: `${props.mode === 'dark' ? 'white' : 'black'}`}}>
                <h3>{props.heading}</h3>
                <div className="mb-3">
                    <textarea className="form-control" id="mybox" rows="12" value={text} onChange={handleOnChange} style={{
                        backgroundColor: `${props.mode === 'dark' ? '#101214' : 'white'}`,
                        color: `${props.mode === 'dark' ? 'white' : 'light'}`

                    }} placeholder="Start typing..."></textarea>
                    <button disabled={text.length === 0} className="btn btn-outline-primary my-1 mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button disabled={text.length === 0} className="btn btn-outline-primary my-1 mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
                    <button disabled={text.length === 0} className="btn btn-outline-primary my-1 mx-1" onClick={handleClearClick}>Clear</button> 
                    <button disabled={text.length === 0} className="btn btn-outline-primary my-1 mx-1" onClick={handleCopyToClipboardClick}>Copy to Clipboard</button> 
                </div>
            </div>

            <div className="container my-3"  style={{color: `${props.mode === 'dark' ? 'white' : 'black'}`}}>
                <h1>Your text summery</h1>
                <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words, {text.length} characters</p>
                <p>{Math.floor((0.008 * text.split(' ').length)/3)} Min read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text: "Nothing to preview"}</p> {/* if text .length is greater than 0 then print text else print other msg */}
            </div>
        </>
    )
}
