import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared", "success");
    }
    const handleCopyToClipboardClick = () => {
        var txt = document.getElementById('mybox');
        txt.select();
        navigator.clipboard.writeText(txt.value)
        props.showAlert("Copied to clipboard", "success");
    }

    const handleOnChange = (e) => {
        setText(e.target.value)
    }

    return (
        <>
            <div className="container" style={{color: `${props.mode === 'dark' ? 'white' : 'light'}`}}>
                <h3>{props.heading}</h3>
                <div className="mb-3">
                    <textarea className="form-control" id="mybox" rows="12" value={text} onChange={handleOnChange} style={{
                        backgroundColor: `${props.mode === 'dark' ? '#101214' : 'white'}`,
                        color: `${props.mode === 'dark' ? 'white' : 'light'}`

                    }} placeholder="Start typing..."></textarea>
                    <button className="btn btn-outline-primary my-3" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className="btn btn-outline-primary my-3 mx-3" onClick={handleLowClick}>Convert to Lowercase</button>
                    <button className="btn btn-outline-primary my-3" onClick={handleClearClick}>Clear</button> 
                    <button className="btn btn-outline-primary my-3 mx-3" onClick={handleCopyToClipboardClick}>Copy to Clipboard</button> 
                </div>
            </div>

            <div className="container my-3"  style={{color: `${props.mode === 'dark' ? 'white' : 'light'}`}}>
                <h1>Your text summery</h1>
                <p>{text.split(' ').length - 1} words, {text.length} characters</p>
                <p>{Math.floor((0.008 * text.split(' ').length)/3)} Min read</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}
