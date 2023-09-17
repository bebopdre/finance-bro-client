import decisions from '../../data/decisions.json';
import { useState } from 'react';

import './Terminal.scss';
import Options from '../Options/Options';

function Terminal() {
    const [message, setMessage] = useState('Type Start to begin: ');
    const [path, setPath] = useState([]);
    const [showMessage, setShowMessage] = useState(false);
    const [next, setNext] = useState(false);
    const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);

    function handleSubmit(e) {
        e.preventDefault();
        let displayText = [];

        function doTheDamnThing(thing) {
            displayText = [];
            let printDecisions = thing.tree;
            displayText.push(thing.description);
            printDecisions.forEach( (dec, index) => (
                displayText.push(`${index+1}. ` + dec.option + `\n`)
            ));
            setPath(displayText);
            setMessage('Pick Another Path: ');
            setNext(true);
        }

        function cycleThrough(thing) {
            displayText = [];
            (thing.tree).forEach( dec => (
                displayText.push(dec.option)
            ));
            setPath(displayText);
        }

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
                (setNext) ? cycleThrough(decisions[0].decisions[0].tree[0]) : doTheDamnThing(decisions[0].decisions[0]);
                break;
            case '2':
                doTheDamnThing(decisions[0].decisions[1]);
                break;
            case '3':
                doTheDamnThing(decisions[0].decisions[2]);
                break;
            case '4':
                doTheDamnThing(decisions[0].decisions[3]);
                break;
            default:
                break;
        }
        e.target.reset();
    }

    const aligator = '>';

    return (
        <section className='terminal-window'>
            <div className={showWelcomeMessage ? 'terminal-window__welcome' : 'off'}>
                <p className='terminal-window__message'>
                    She wished she could protect you forever, but she did what she could.
                </p>
                <p className='terminal-window__message'>
                    She left you with a loving sum of $15,000, and it's up to you to figure out how you will
                </p>
                <p className='terminal-window__message'>
                    navigate the world with it.
                </p>
                <p className='terminal-window__message'>
                    ... What's your first move? Type Start below to begin your journey.
                </p>
            </div>
            <form onSubmit={handleSubmit}>
                <span className='terminal-window__message'> ={aligator} </span>
                <input className='terminal-window__input' type="text" name='userInput' placeholder='type something here'></input>
            </form>
            {/* <div className='typewriter'>
                <p className='typewriter__message'>
                    She wished she could protect you forever, but she did what she could.
                </p>
                <p className='typewriter__message'>
                    She left you with a loving sum of $15,000, and it's up to you to figure out how you will
                </p>
                <p className='typewriter__message'>
                    navigate the world with it.
                </p>
                <p className='typewriter__message'>
                    ... What's your first move?
                </p>
            </div> */}
            {/* <p className='typewriter'>She left you with a loving sum of $15,000, and it's up to you to figure out how you will</p>
            <p className='typewriter'>navigate the world with it.</p>
            <p className='typewriter'>... What's your first move?</p> */}
            {/* <h2 className='terminal-window__heading'>Hello! Welcome to Shell City Trails</h2>
            <div className={showMessage ? 'off' : ''}>
                <p className='terminal-window__message'>
                    Oh no... Your Grandmother has passed!
                </p>
                <p className='terminal-window__message'>
                    Fortunately for you, you were her favorite grandchild. 
                </p>
                <p className='terminal-window__message'>
                    So much so that she left you with a loving sum of $15,000
                </p>
                <p className='terminal-window__message'>
                    How are you going to spend it?
                </p>
            </div> */}
            
            {/* <p className='terminal-window__message'>{message}</p>
            <p className={showMessage ? 'terminal-window__options' : 'off'}>
                <Options options={path} />
            </p>
            
             */}
        </section>
    )
}

export default Terminal;