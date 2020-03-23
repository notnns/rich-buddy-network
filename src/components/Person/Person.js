import React from 'react';
import "./Person.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'


const Person = (props) => {
    const { name, img, company, salary, email, phone } = props.person;
    return (
        <div>
            <div className="person">
                <div><img className="img-w" src={img} alt="" /></div>
                <div className="person-info">
                    <h3>Name: {name}</h3>
                    <p>Company: {company}</p>
                    <p>Email: {email}</p>
                    <p>Phone: {phone}</p>
                    <h3>Salary: ${salary}</h3>
                    <button className="add-button" onClick={() => props.handleAddPerson(props.person)} > <FontAwesomeIcon icon={faUserPlus} />  Add Friend</button>
            

                </div>

            </div>

        </div>
    );
};

export default Person;
