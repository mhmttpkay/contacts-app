import { useState, useEffect } from 'react';

import List from './List';
import Form from './Form';
import './styles.css'

function Contacts() {
    const [contacts, setContacts] = useState([
        {
            fullname: "Leanne Graham",
            phone_number: 5486572135
        },
        {
            fullname: "Ervin Howell",
            phone_number: 5741234568
        },
        {
            fullname: "Clementine Bauch",
            phone_number: 5100315478
        },
        {
            fullname:"Chelsey Dietrich",
            phone_number: 5471354879
        }

    ]);

    useEffect(() => {
        console.log(contacts);
    }, [contacts]);

    return (
        <div id="container">
            <h2>Contacts</h2>
            <List contacts={contacts} />
            <Form addContacts={setContacts} contacts={contacts} />
        </div>
    )
}

export default Contacts;