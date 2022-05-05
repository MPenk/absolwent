import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

const czasSzukaniaPracyTablica = [
    'Mniej niż 6 miesięcy',
    '6-12 miesięcy',
    '12-18 miesięcy',
    '18-24 miesiący',
    'powyżej 2 lat'
];

export function CustomSelect5({nazwa, label, isDisabled, ...props}){

    const [data, setData] = useState({collected:czasSzukaniaPracyTablica, chosen:null});
    const handleChange = (event) => {
        setData({...data, chosen:event.target.value});
    }

    return(
        <Select
            labelId="demo-simple-select-required-label"
            id="demo-simple-select-required"
            value={data.chosen}
            label="Ile czasu zajęło Pani/Panu znalezienie pracy?"
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