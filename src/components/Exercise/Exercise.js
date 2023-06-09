import React from 'react';
import './Exercise.css';

const Exercise = (props) => {
    const {addToButton, exercise} = props;
    const {name, img, time, detail, age} = exercise;
    return (
        <div className='exercise'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p className='detail'>{detail.slice(0,60)}</p>
            <p className='age'>For Age: {age}</p>
            <p className='time'>Time required: {time}</p>
            <button onClick={() => addToButton(exercise)} className='add-to-list'>Add to list</button>
        </div>
    );
};

export default Exercise;