import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (e) => {
        setText(e.target.value)
    }

    return (
        <>
            <div className="container">
                <h3>{props.heading}</h3>
                <div className="mb-3">
                    <textarea className="form-control" id="mybox" rows="12" value={text} onChange={handleOnChange} placeholder="Start typing..."></textarea>
                    <button className="btn btn-outline-primary my-3 mx-3" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className="btn btn-outline-info my-3" onClick={handleLowClick}>Convert to Lowercase</button>
                </div>
            </div>

            <div className="container my-3">
                <h1>Your text summery</h1>
                <p>{text.split(' ').length - 1} words, {text.length} characters</p>
                <p>{Math.floor((0.008 * text.split(' ').length)/3)} Min read</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}
