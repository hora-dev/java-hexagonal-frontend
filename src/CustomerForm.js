// CustomerForm.js
import React, { useState } from 'react';
import axios from 'axios';

const CustomerForm = () => {
    const [name, setName] = useState('');
    const [country, setCountry] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/customer/create', { name, country });
            console.log(response.data); // Aquí puedes manejar la respuesta como desees
        } catch (error) {
            console.error('Error creating customer:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Country" value={country} onChange={(e) => setCountry(e.target.value)} />
            <button type="submit">Create Customer</button>
        </form>
    );
};

export default CustomerForm;
