import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react';
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    const [mode, setMode] = useState('light');

    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    }

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = '#101214';
            showAlert("Dark mode has been enabled", "success");
            document.title = 'Text-utils - Dark mode enabled';

        } else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
            showAlert("Light mode has been enabled", "success");
            document.title = 'Text-utils - Light mode enabled';
        }
    }

    return (
        <>
            <Router>
                <Navbar mode={mode} toggleMode={toggleMode} />
                <Alert alert={alert} />
                <div className="container my-3">
                    <Switch>
                        <Route path="/about">
                            <About aboutText="About" />
                        </Route>
                        
                        <Route exact path="/">
                            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </>
    )
}

export default App
