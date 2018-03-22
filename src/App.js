import './App.css';

import React from 'react';
import Draggable from 'react-draggable';

import Card from './Card/Card'


const cards = [
    {
        title: 'Hi there',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, error adipisci quasi reprehenderit ad minima iure id, nesciunt saepe modi recusandae, harum non dolore hic cum asperiores ab fugit vitae.',
        position: {
            x: Math.random() * 500,
            y: Math.random() * 500
        },
        zIndex: 1
    },
    {
        title: 'Hi there numba 2',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, error adipisci quasi reprehenderit ad minima iure id, nesciunt saepe modi recusandae, harum non dolore hic cum asperiores ab fugit vitae.',
        position: {
            x: Math.random() * 500,
            y: Math.random() * 500
        },
        zIndex: 1
    },
    {
        title: 'Hi there numba 3',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, error adipisci quasi reprehenderit ad minima iure id, nesciunt saepe modi recusandae, harum non dolore hic cum asperiores ab fugit vitae.',
        position: {
            x: Math.random() * 500,
            y: Math.random() * 500
        },
        zIndex: 1
    },
]


export default class App extends React.Component {

    constructor() {
        super();
        this.state = {
            cards: cards
        }
    }

    render() {
        return (
            <div className="container">

                {cards.map((el, i) => {
                    return <Draggable
                        key={i}
                        defaultPosition={{ x: el.position.x, y: el.position.y }}
                        position={null}
                        handle={'.move'}
                        // grid={[100, 100]}
                        onStart={this.handleStart}
                        onDrag={this.handleDrag}
                        onStop={this.handleStop}
                        >
                        <Card el={el} {...this.props} />
                    </Draggable>
                })}

            </div>
        )
    }
}