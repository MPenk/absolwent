import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

const zarobkiTabela = [
    '3010-4400',
    '4400-5900',
    '5900-7400',
    '7400-8900',
    '8900-10400',
    '10400-11900',
    '11900-14900',
    '14900+'
];

export function CustomSelect({nazwa, label, isDisabled, ...props}){

    const [data, setData] = useState({collected:zarobkiTabela, chosen:null});
    const handleChange = (event) => {
        setData({...data, chosen:event.target.value});
    }

    return(
        <Select
            labelId="demo-simple-select-required-label"
            id="demo-simple-select-required"
            value={data.chosen}
            label="Przedział zarobkowy brutto"
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