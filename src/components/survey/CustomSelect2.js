import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

const wielkoscFirmyTabela = [
    'Mikroprzedsiębiorstwo (poniżej 10 pracowników)',
    'Małe przedsiębiorstwo (poniżej 50 pracowników)',
    'Średnie przedsiębiorstwo (poniżej 250 pracowników)',
    'Duże przedsiębiorstwo (powyżej 250 pracowników)'
];

export function CustomSelect2({nazwa, label, isDisabled, ...props}){

    const [data, setData] = useState({collected:wielkoscFirmyTabela, chosen:null});
    const handleChange = (event) => {
        setData({...data, chosen:event.target.value});
    }

    return(
        <Select
            labelId="demo-simple-select-required-label"
            id="demo-simple-select-required"
            value={data.chosen}
            label="Wielkość firmy"
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