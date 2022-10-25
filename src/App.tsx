import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Sample } from "./components/sample";
import { Foo } from "./components/foo";

function App() {
    const mainData: Array<number> = [];
    const otherData: Array<string> = ["Pepe", "Juan", "Elena"];
    return (
        <div className="App">
            <header className="App-header">
                <Sample user="Pepe" age={22} data={mainData}>
                    <Foo names={otherData}></Foo>
                </Sample>
                {/* sample('Pepe') */}
                <img src={logo} className="App-logo" alt="logo" />
                <p className="warning">
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
