import React, { useState } from 'react';
import './App.css';

function App() {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleAddTask = () => {
        if (inputValue.trim() !== '') {
            setTasks([...tasks, inputValue]);
            setInputValue('');
        }
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div className="App">
            <h1>Todo List</h1>
            <div className="input-container">
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="할 일을 입력하세요"
                />
                <button onClick={handleAddTask}>추가하기</button>
            </div>
            <div className="task-list">
                {tasks.map((task, index) => (
                    <div key={index} className="task-card">
                        {task}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
