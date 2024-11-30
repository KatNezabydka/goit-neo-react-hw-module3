import React from 'react';
import css from './Contact.module.css';
import {FaPhone, FaUser} from 'react-icons/fa';

const Contact = ({id, name, number, onDelete}) => {
    return (
        <div className={css.contact}>
            <div className={css.contactInfo}>
                <div>
                    <FaUser className={css.icon}/> {name}
                </div>
                <div>
                    <FaPhone className={css.icon}/> {number}
                </div>
            </div>
            <button className={css.btn} onClick={() => onDelete(id)}>Delete</button>
        </div>
    );
};

export default Contact;