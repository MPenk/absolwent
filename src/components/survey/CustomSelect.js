import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

const zarobki = {
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

const wielkoscFirmy = {
    name: "Wielkość firmy", 
    values: [
        'Mikroprzedsiębiorstwo (poniżej 10 pracowników)',
        'Małe przedsiębiorstwo (poniżej 50 pracowników)',
        'Średnie przedsiębiorstwo (poniżej 250 pracowników)',
        'Duże przedsiębiorstwo (powyżej 250 pracowników)'
    ]
};

const wielkoscMiasta = {
    name: "Wielkość miasta", 
    values: [
        'Poniżej 10 000 mieszkańców',
        'Od 10 000 do 50 000 mieszkańców',
        'Od 50 000 do 100 000 mieszkańców',
        '100 000 do 250 000 mieszkańców',
        'Powyżej 250 000 mieszkańców'
    ]
};

const kategoriaFirmy = {
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

const czasSzukaniaPracy = {
    name: "Ile czasu zajęło Pani/Panu znalezienie pracy?", 
    values: [
        'Mniej niż 6 miesięcy',
        '6-12 miesięcy',
        '12-18 miesięcy',
        '18-24 miesiący',
        'powyżej 2 lat'
    ]
};

const stazPracy = {
    name: "Jaki jest Twój okres zatrudnienia w obecnej firmie?",
    values: [
        'Mniej niż rok',
        '1-3 lata',
        '3-5 lat',
        '5-10 lat',
        'Powyżej 10 lat'
    ]
};

export function CustomSelect({dataName, isDisabled, ...props }) {

    var table = {};
    
    switch (dataName) {
        case "przedzialZarobkow":
            table = zarobki;
            break;
        case "wielkoscFirmy":
            table = wielkoscFirmy;
            break;
        case "wielkoscMiasta":
            table = wielkoscMiasta;
            break;
        case "kategoriaFirmy":
            table = kategoriaFirmy;
            break;
        case "czasSzukaniaPracy":
            table = czasSzukaniaPracy;
            break;
        case "stazPracy":
            table = stazPracy;
            break;
    }

    const [data, setData] = useState({ collected: table.values, chosen: "" });
    const handleChange = (event) => {
        setData({ ...data, chosen: event.target.value });
    }

    return (
        <Select
            labelId="demo-simple-select-required-label"
            id="demo-simple-select-required"
            value={data.chosen}
            label={table.name}
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