import React from 'react';
import { Switch } from '@mui/material';
import axios from 'axios'; // Import Axios
import './dish.css'



const Dish = ({ details }) => {
    const [checked, setChecked] = React.useState(details.isPublished);

    const handleChange = async () => {
        console.log(details.dishId);
        try {
            // Update the checked state locally first
            setChecked(!checked);

            // Update MongoDB via Axios
            const res = await axios.post(`http://localhost:8000/update/${details.dishId}`);
            console.log(res.data); // Log the response from the server
        } catch (error) {
            console.error('Error updating data:', error);
        }
    };

    return (
        <div className='dish'>
           <img src={details.imageUrl} alt={details.dishName} className='imgDish' />
            <h1>{details.dishName}</h1>
            <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
            />
        
        </div>
    );
};

export default Dish;
