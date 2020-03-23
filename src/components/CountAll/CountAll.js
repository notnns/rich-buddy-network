import React from 'react';
import './CountAll.css';

const CountAll = (props) => {

    const counter = props.counter;
    
    let totalSalary = 0;
    let friendsCount = 0;
    for (let i = 0; i < counter.length; i++) {
        const person = counter[i];
        totalSalary += person.salary;
        friendsCount++;
    }
    return (
        <div className="counterStyle">
            <h3>Friends Added: {friendsCount}</h3>
            <h3>Total Salary: {totalSalary}</h3>
        </div>
    );
};

export default CountAll;