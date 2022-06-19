import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { useSearchParams } from 'react-router-dom';

import { CustomTextField } from './CustomTextField';
import { CustomSelect } from './CustomSelect';
import { execute } from '../../api/connection';

export function SurveyForm() {

    var test = false;
    const [data, setData] = React.useState({ 
        year: "", 
        field: "", 
        faculty: "", 
        title: "",
        gender: "" 
    });
    const [searchParams, setSearchParams] = useSearchParams();

    const [radioValue, setRadioValue] = React.useState('nie');
    const [proffesionalActivity, setProffesionalActivity] = React.useState(true);
    const handleChange = (event) => {

        data[event.target.name] = event.target.value;
        console.log(data);
        if (event.target.name == "radio-buttons-group") {
            setRadioValue(event.target.value);
            if (radioValue === "tak") {
                setProffesionalActivity(true);
            }
            else {
                setProffesionalActivity(false);
            }
        }
    }

    React.useEffect(() => {
        if (!test) {
            test = true;
            async function fetchData() {
                const response = await execute({ path: "/auth/survey", requestMethod: "POST", data: { token: searchParams.get("key") } });
                if (response)
                    setData(response.data);
            }
            fetchData();

        }
    }, [])

    return (
        <div>
            <FormControl>
                <Typography variant="h6" gutterBottom>
                    Ankieta
                </Typography>
                <Grid container spacing={3}>
                    <CustomTextField label="Rok ukończenia studiów" value={data.year} />
                    <CustomTextField label="Kierunek studiów" value={data.field} />
                    <CustomTextField label="Wydział studiów" value={data.faculty} />
                    <CustomTextField label="Tytuł zawodowy" value={data.title} />
                    <CustomTextField label="Płeć" value={data.gender} />
                </Grid>
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

            <br />
            <FormControl sx={{ m: 1, minWidth: 250 }} required>
                <InputLabel id="demo-simple-select-error-label">Przedział zarobkowy brutto</InputLabel>
                <CustomSelect dataName='earnings' isDisabled={proffesionalActivity} handleChangeParent={handleChange} />
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 400 }} required>
                <InputLabel id="demo-simple-select-error-label">Wielkość firmy</InputLabel>
                <CustomSelect dataName="companySize" isDisabled={proffesionalActivity} handleChangeParent={handleChange} />
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 300 }} required>
                <InputLabel id="demo-simple-select-error-label">Wielkość miasta</InputLabel>
                <CustomSelect dataName='townSize' isDisabled={proffesionalActivity} handleChangeParent={handleChange} />
            </FormControl>

            <br />
            <FormControl sx={{ m: 3 }}>
                <FormLabel id="akt_zawodowa">Czy pracujesz na terenie Polski?</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="akt_zawodowa"
                    name="location"
                >
                    <FormControlLabel value="tak" control={<Radio />} label="Tak" disabled={proffesionalActivity} />
                    <FormControlLabel value="nie" control={<Radio />} label="Nie" disabled={proffesionalActivity} />
                </RadioGroup>
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 300 }} required>
                <InputLabel id="demo-simple-select-error-label">Kategoria firmy</InputLabel>
                <CustomSelect dataName='companyCategory' isDisabled={proffesionalActivity} handleChangeParent={handleChange} />
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 300 }} required>
                <InputLabel id="demo-simple-select-error-label">Ile czasu zajęło Pani/Panu znalezienie pracy?</InputLabel>
                <CustomSelect dataName='jobSearchTime' isDisabled={proffesionalActivity} handleChangeParent={handleChange} />
            </FormControl>

            <br />
            <FormControl sx={{ m: 3 }}>
                <FormLabel id="akt_zawodowa">Czy jest Pani/Pan zadowolona/y ze swojej pracy?</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="akt_zawodowa"
                    name="jobSatisfaction"
                >
                    <FormControlLabel value="tak" control={<Radio />} label="Tak" disabled={proffesionalActivity} />
                    <FormControlLabel value="nie" control={<Radio />} label="Nie" disabled={proffesionalActivity} />
                    <FormControlLabel value="trudno_powiedziec" control={<Radio />} label="Trudno stwierdzić" disabled={proffesionalActivity} />
                </RadioGroup>
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 300 }} required>
                <InputLabel id="demo-simple-select-error-label">Jaki jest Twój okres zatrudnienia w obecnej firmie?</InputLabel>
                <CustomSelect dataName='periodOfEmployment' isDisabled={proffesionalActivity} handleChangeParent={handleChange} />
            </FormControl>
        </div>
    );
}