import React from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData';
import './Timeline.css';
import Person from '../Person/Person';
import CountAll from '../CountAll/CountAll';

const Timeline = () => {
    const persons = fakeData;
    const [counter, setCounter] = useState([]);

    const handleAddPerson = (person) => {
        const newCounter = [...counter, person];
        if (counter.length > 0) {
            for (let i = 0; i < counter.length; i++) {
                if (counter[i].id === person.id) {
                    alert("Already Added");
                    return;
                }
            }
        }

        setCounter(newCounter);

    }


    return (
        <div className="timeline-container">

            <div className="person-container">
                {
                    persons.map(per => <Person person={per} handleAddPerson={handleAddPerson}></Person>)

                }

            </div>

            <div className="count-container">
                <CountAll counter={counter}></CountAll>
            </div>


        </div>
    );
};

export default Timeline;