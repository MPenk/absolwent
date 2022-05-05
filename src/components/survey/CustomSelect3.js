import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

const wielkoscMiastaTabela = [
    'Poniżej 10 000 mieszkańców',
    'Od 10 000 do 50 000 mieszkańców',
    'Od 50 000 do 100 000 mieszkańców',
    '100 000 do 250 000 mieszkańców',
    'Powyżej 250 000 mieszkańców'
];

export function CustomSelect3({nazwa, label, isDisabled, ...props}){

    const [data, setData] = useState({collected:wielkoscMiastaTabela, chosen:null});
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