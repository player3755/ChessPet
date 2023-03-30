import React, { useEffect, useState } from 'react';
import "./App.css";
import BoardComponent from './components/BoardComponent';
import { Board } from './models/Board';

const App = () => {
    const [board, setBoard] = useState(new Board());

    useEffect( () => {
        
    })

    return (
        <div className='app'>
            <BoardComponent/>
        </div>
    )
}

export default App;
