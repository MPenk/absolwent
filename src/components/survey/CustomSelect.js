import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState, useEffect } from 'react';
import Box from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

const earning = {
    name: "Przedział zarobkowy brutto", 
    values: [
        '3010-4400',
        '4400-5900',
        '5900-7400',
        '7400-8900',
        '8900-10400',
        '10400-11900',
        '11900-14900',
        '14900+'
    ]
};

const companySize = {
    name: "Wielkość firmy", 
    values: [
        'Mikroprzedsiębiorstwo (poniżej 10 pracowników)',
        'Małe przedsiębiorstwo (poniżej 50 pracowników)',
        'Średnie przedsiębiorstwo (poniżej 250 pracowników)',
        'Duże przedsiębiorstwo (powyżej 250 pracowników)'
    ]
};

const townSize = {
    name: "Wielkość miasta", 
    values: [
        'Poniżej 10 000 mieszkańców',
        'Od 10 000 do 50 000 mieszkańców',
        'Od 50 000 do 100 000 mieszkańców',
        '100 000 do 250 000 mieszkańców',
        'Powyżej 250 000 mieszkańców'
    ]
};

const companyCategory = {
    name: "Kategoria firmy", 
    values: [
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
    ]
};

const jobSearchTime = {
    name: "Ile czasu zajęło Pani/Panu znalezienie pracy?", 
    values: [
        'Mniej niż 6 miesięcy',
        '6-12 miesięcy',
        '12-18 miesięcy',
        '18-24 miesiący',
        'powyżej 2 lat'
    ]
};

const periodOfEmployment = {
    name: "Jaki jest Twój okres zatrudnienia w obecnej firmie?",
    values: [
        'Mniej niż rok',
        '1-3 lata',
        '3-5 lat',
        '5-10 lat',
        'Powyżej 10 lat'
    ]
};

export function CustomSelect({value, dataName, isDisabled, handleChangeParent, maxWidth, ...props }) {

    var table = {};

    switch (dataName) {
        case "earnings":
            table = earning;
            break;
        case "companySize":
            table = companySize;
            break;
        case "townSize":
            table = townSize;
            break;
        case "companyCategory":
            table = companyCategory;
            break;
        case "jobSearchTime":
            table = jobSearchTime;
            break;
        case "periodOfEmployment":
            table = periodOfEmployment;
            break;
    }

    const [data, setData] = useState({ collected: table.values, chosen: "" });
    const handleChange = (event) => {
        setData({ ...data, chosen: event.target.value });
        handleChangeParent(event);
    }
    
    useEffect(() => {
        setData({ ...data, chosen: "" });
    }, [value])
    
    return (
        <Box sx={{ m: 1, width:"100%", maxWidth:"450px"}} required>
            <InputLabel id="demo-simple-select-error-label">{table.name}</InputLabel>
            <Select
                labelId="demo-simple-select-required-label"
                value={data.chosen}
                label={table.name}
                name={dataName}
                onChange={handleChange}
                disabled={isDisabled}
            >
                {data.collected.map((item) => (
                    <MenuItem key={item} value={item}>
                        {item}
                    </MenuItem>
                ))}
            </Select>
        </Box>
    )
}