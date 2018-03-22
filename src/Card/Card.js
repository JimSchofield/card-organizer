import React from 'react';
export default function Card(props) {
    return (
        <div {...props} className="card">
            <h1>{props.el.title}</h1>
            <div>{props.el.body}</div>
            <div className="move">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ cursor: 'move' }}>
                    <path d="M20 9H4v2h16V9zM4 15h16v-2H4v2z" />
                </svg>
                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24">
                    <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                </svg>
            </div>
        </div>
    )
}