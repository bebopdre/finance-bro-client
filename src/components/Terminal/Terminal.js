import decisions from '../../data/decisions.json';
import { useState } from 'react';

import './Terminal.scss';
import Options from '../Options/Options';

function Terminal() {
    const [message, setMessage] = useState('Type Start to begin: ');
    const [path, setPath] = useState([]);
    const [showMessage, setShowMessage] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        let displayText =[];

        // if(e.target.userInput.value === 'Start' || e.target.userInput.value === 'start') {
            
        // }

        switch (e.target.userInput.value) {
            case ('start' || 'Start'):
                let printDecisions = decisions[0].decisions;
                printDecisions.forEach( (dec, index) => (
                    displayText.push(`${index+1}. ` + dec.option + `\n`)
                ));
                setPath(displayText);
                setShowMessage(true);
                setMessage('Pick Your Path: ');
                break;
            case '1':
                displayText = [];
                let printDecisions2 = decisions[0].decisions[0].tree;
                printDecisions2.forEach( (dec, index) => (
                    displayText.push(`${index+5}. ` + dec.option + `\n`)
                ));
                setPath(displayText);
                setMessage('Pick Another Path: ');
                break;
            default:
                break;
        }
        e.target.reset();
    }

    const aligator = '>';

    return (
        <section className='terminal-window'>
            <h2 className='terminal-window__heading'>Hello! Welcome to Shell City Trails</h2>
            <p className='terminal-window__message'>{message}</p>
            <p className={showMessage ? 'terminal-window__options' : 'off'}>
                <Options options={path} />
            </p>
            
            <form onSubmit={handleSubmit}>
                <span className='terminal-window__message'> ={aligator} </span>
                <input className='terminal-window__input' type="text" name='userInput' placeholder='type something here'></input>
            </form>
        </section>
    )
}

export default Terminal;