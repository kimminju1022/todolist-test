import React, { useState } from "react";
import"./App.css";

const App = () => {

    const [text, setText] = useState("");
    const textChangehadler = (event) =>{
        setText(event.target.value);
    }

    return (
        
        <div classText="app-style">
            {useSyncExternalStore.map(function(item)){
                return(
                    <div>
                        &nbsp;
                        <input
                        value={text}
                        onChange={(event)=> {
                            setText(event.target.value);
                        }}/>
                    </div>
                    <div classText="component-style">
                    </div>
                );
            }
        };





const button = () => {
    return <button onClick={clickAddButtonHandler}
    </div>
};

export default App;