import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

const kategoriaFirmyTablica = [
    'IT',
    'Mechaniczna',
    'Nawigacyjna',
    'Ekonomiczna',
    'Elektroniczna/Elektryczna',
    'Gastronomia',
    'Dietetyka',
    'Marketing',
    'Edukacja',
    'inna'
];

export function CustomSelect4({nazwa, label, isDisabled, ...props}){

    const [data, setData] = useState({collected:kategoriaFirmyTablica, chosen:null});
    const handleChange = (event) => {
        setData({...data, chosen:event.target.value});
    }

    return(
        <Select
            labelId="demo-simple-select-required-label"
            id="demo-simple-select-required"
            value={data.chosen}
            label="Wielkość miasta"
            onChange={handleChange}
            disabled={isDisabled}
        >
            {data.collected.map((item) => (
                <MenuItem key={item} value={item}>
                    {item}
                </MenuItem>
            ))}
        </Select>
    )
}