import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

const stazPracyTablica = [
    'Mniej niż rok',
    '1-3 lata',
    '3-5 lat',
    '5-10 lat',
    'Powyżej 10 lat'
];

export function CustomSelect6({nazwa, label, isDisabled, ...props}){

    const [data, setData] = useState({collected:stazPracyTablica, chosen:null});
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