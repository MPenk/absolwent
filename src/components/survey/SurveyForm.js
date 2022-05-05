import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

import { CustomTextField } from './CustomTextField';
import { CustomSelect } from './CustomSelect';
import { CustomSelect2 } from './CustomSelect2';
import { CustomSelect3 } from './CustomSelect3';
import { CustomSelect4 } from './CustomSelect4';
import { CustomSelect5 } from './CustomSelect5';
import { CustomSelect6 } from './CustomSelect6';

export function SurveyForm() {
    
    const [radioValue, setRadioValue] = React.useState('nie');
    const [czyAktywnyZawodowo, setCzyAktywnyZawodowo] = React.useState(true);
    const handleChange = (event) => {
        setRadioValue(event.target.value);

        if (radioValue === "tak") {
            setCzyAktywnyZawodowo(true);
        }
        else {
            setCzyAktywnyZawodowo(false);
        }
    }

    return (
        <div>
        <FormControl maxWidth="sm">
            <Typography variant="h6" gutterBottom>
                Ankieta
            </Typography>
            <Grid container spacing={3}>
                <CustomTextField label="Rok ukończenia studiów" defaultValue="2022"/>
                <CustomTextField label="Kierunek studiów" defaultValue="Informatyka"/>
                <CustomTextField label="Wydział studiów" defaultValue="Elektryczny"/>
                <CustomTextField label="Tytuł zawodowy" defaultValue="Inżynier"/>
            </Grid>
        </FormControl>
        <FormControl sx={{ m: 3 }}>
            <FormLabel id="demo-row-radio-buttons-group-label">Płeć</FormLabel>
            <RadioGroup
                row
                aria-labelledby="plec"
                name="radio-buttons-group"
            >
                <FormControlLabel value="kobieta" control={<Radio />} label="Kobieta" />
                <FormControlLabel value="mezczyzna" control={<Radio />} label="Mężczyzna" />
            </RadioGroup>
        </FormControl>
            
        <FormControl sx={{ m: 3 }}>
            <FormLabel id="akt_zawodowa">Czy jest Pani/Pan aktywny zawodowo?</FormLabel>
            <RadioGroup
                row
                aria-labelledby="akt_zawodowa"
                name="radio-buttons-group"
                value={radioValue}
                onChange={handleChange}
            >
                <FormControlLabel value="tak" control={<Radio />} label="Tak" />
                <FormControlLabel value="nie" control={<Radio />} label="Nie" />
            </RadioGroup>
        </FormControl>
        
        <br/>
        <FormControl sx={{ m: 1, minWidth: 250 }} required>
            <InputLabel id="demo-simple-select-error-label">Przedział zarobkowy brutto</InputLabel>
            <CustomSelect nazwa='przedzialZarobkow' isDisabled={czyAktywnyZawodowo} />
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 400 }} required>
            <InputLabel id="demo-simple-select-error-label">Wielkość firmy</InputLabel>
            <CustomSelect2 nazwa="wielkoscFirmy" isDisabled={czyAktywnyZawodowo} />
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 300 }} required>
            <InputLabel id="demo-simple-select-error-label">Wielkość miasta</InputLabel>
        <CustomSelect3 nazwa='wielkoscMiasta' isDisabled={czyAktywnyZawodowo} />
        </FormControl>
    
        <br/>
        <FormControl sx={{ m: 3 }}>
            <FormLabel id="akt_zawodowa">Czy pracujesz na terenie Polski?</FormLabel>
            <RadioGroup
                row
                aria-labelledby="akt_zawodowa"
                name="radio-buttons-group"
            >
                <FormControlLabel value="tak" control={<Radio />} label="Tak" />
                <FormControlLabel value="nie" control={<Radio />} label="Nie" />
            </RadioGroup>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 300 }} required>
            <InputLabel id="demo-simple-select-error-label">Kategoria firmy</InputLabel>
        <CustomSelect4 nazwa='wielkoscMiasta' isDisabled={czyAktywnyZawodowo} />
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 300 }} required>
            <InputLabel id="demo-simple-select-error-label">Ile czasu zajęło Pani/Panu znalezienie pracy?</InputLabel>
        <CustomSelect5 nazwa='wielkoscMiasta' isDisabled={czyAktywnyZawodowo} />
        </FormControl>

        <br/>
        <FormControl sx={{ m: 3 }}>
            <FormLabel id="akt_zawodowa">Czy jest Pani/Pan zadowolona/y ze swojej pracy?</FormLabel>
            <RadioGroup
                row
                aria-labelledby="akt_zawodowa"
                name="radio-buttons-group"
            >
                <FormControlLabel value="tak" control={<Radio />} label="Tak" />
                <FormControlLabel value="nie" control={<Radio />} label="Nie" />
                <FormControlLabel value="nie" control={<Radio />} label="Trudno stwierdzić" />
            </RadioGroup>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 300 }} required>
            <InputLabel id="demo-simple-select-error-label">Jaki jest Twój okres zatrudnienia w obecnej firmie?</InputLabel>
        <CustomSelect6 nazwa='wielkoscMiasta' isDisabled={czyAktywnyZawodowo} />
        </FormControl>
    </div>
  );
}