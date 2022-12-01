import * as React from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import { CustomTextField } from "./CustomTextField";
import { CustomSelect } from "./CustomSelect";
import { execute } from "../../api/connection";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

export function SurveyForm() {
  let navigate = useNavigate();

  const handleSendButton = async (event) => {
    event.preventDefault();
    const response = await execute({
      path: "/survey",
      requestMethod: "POST",
      data: { ...data, token: searchParams.get("key") },
    });
    if (response) navigate("/survey/thanks");
  };
  let test = false;

  const [data, setData] = React.useState({
    graduationYear: "",
    field: "",
    faculty: "",
    title: "",
    gender: "",
  });
  const [searchParams] = useSearchParams();
  const [buttonDisable, setButtonDisable] = useState(true);
  const [radioValue, setRadioValue] = React.useState("nie");
  const [proffesionalActivity, setProffesionalActivity] = React.useState(true);
  const [selectValue, setSelectValue] = React.useState("");

  const handleChange = (event) => {
    data[event.target.name] = event.target.value;
    if (event.target.name === "proffesionalActivity") {
      setRadioValue(event.target.value);
      if (radioValue === "tak") {
        setProffesionalActivity(true);
        setSelectValue("on");
      } else {
        setProffesionalActivity(false);
        setSelectValue("");
      }
    }
  };

  React.useEffect(() => {
    if (!test) {
      test = true;
      async function fetchData() {
        const response = await execute({
          path: "/auth/survey",
          requestMethod: "POST",
          data: { token: searchParams.get("key") },
        });
        if (response) {
          setData(response.data);
          setButtonDisable(false);
        }
      }
      fetchData();
    }
  }, []);

  return (
    <div>
      <FormControl
        style={{ width: "100%", my: 3 }}
        component="form"
        onSubmit={handleSendButton}
      >
        <Typography variant="h6" gutterBottom>
          Ankieta
        </Typography>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            marginLeft: "20px",
          }}
        >
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <CustomTextField
            maxWidth= "225px"
            label="Rok ukończenia studiów"
            value={data.graduationYear}
          />
          <CustomTextField
            maxWidth= "275px"
            label="Tytuł zawodowy" 
            value={data.title} 
          />
          <CustomTextField
            maxWidth= "225px"
            label="Płeć" 
            value={data.gender} 
          />
        </Grid>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
        <CustomTextField 
            maxWidth= "370px"
            label="Kierunek studiów" 
            value={data.field} 
          />
          <CustomTextField
            maxWidth= "370px"
            label="Wydział studiów" 
            value={data.faculty} 
          />
          </Grid>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            minWidth: "200px",
            maxWidth: "685px"
          }}
        >
          <Box sx={{ m: 1, mx: 5 }}>
            <FormLabel id="akt_zawodowa">
              Czy jest Pani/Pan aktywny zawodowo?
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="akt_zawodowa"
              name="proffesionalActivity"
              value={radioValue}
              onChange={handleChange}
              style={{ width: "100%" }}
            >
              <FormControlLabel sx={{ minWidth: 70}}
                value="tak"
                name="proffesionalActivity"
                control={<Radio required={true} />}
                labelPlacement="start"
                label="Tak"
              />
              <FormControlLabel sx={{ minWidth: 100}}
                value="nie"
                name="proffesionalActivity"
                control={<Radio required={true} />}
                labelPlacement="start"
                label="Nie"
              />
            </RadioGroup>
          </Box>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <CustomSelect
            value={selectValue}
            dataName="earnings"
            isDisabled={proffesionalActivity}
            handleChangeParent={handleChange}
          />

          <CustomSelect
            value={selectValue}
            dataName="companySize"
            isDisabled={proffesionalActivity}
            handleChangeParent={handleChange}
          />
          <CustomSelect
            value={selectValue}
            dataName="townSize"
            isDisabled={proffesionalActivity}
            handleChangeParent={handleChange}
          />

          <CustomSelect
            value={selectValue}
            dataName="companyCategory"
            isDisabled={proffesionalActivity}
            handleChangeParent={handleChange}
          />
          <CustomSelect
            value={selectValue}
            dataName="jobSearchTime"
            isDisabled={proffesionalActivity}
            handleChangeParent={handleChange}
          />

          <CustomSelect
            value={selectValue}
            dataName="periodOfEmployment"
            isDisabled={proffesionalActivity}
            handleChangeParent={handleChange}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            minWidth: "200px",
            maxWidth: "695px",
          }}
        >
          <Box sx={{ m: 1, mx: 5 }}>
            <FormLabel id="akt_zawodowa">
              Czy pracuje Pan/Pani na terenie Polski?
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="akt_zawodowa"
              name="location"
              onChange={handleChange}
            >
              <FormControlLabel sx={{ minWidth: 70}}
                value="tak"
                control={<Radio required={true} />}
                label="Tak"
                labelPlacement="start"
                disabled={proffesionalActivity}
              />
              <FormControlLabel sx={{ minWidth: 100}}
                value="nie"
                control={<Radio required={true} />}
                label="Nie"
                labelPlacement="start"
                disabled={proffesionalActivity}
              />
            </RadioGroup>
          </Box>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            minWidth: "200px",
            maxWidth: "760px"
          }}
        >
          <Box sx={{ m: 1, mx: 5 }}>
            <FormLabel id="akt_zawodowa">
              Czy jest Pani/Pan zadowolona/y ze swojej pracy?
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="akt_zawodowa"
              name="jobSatisfaction"
              onChange={handleChange}
            >
              <FormControlLabel sx={{ minWidth: 100}}
                value="tak"
                control={<Radio required={true} />}
                label="Tak"
                labelPlacement="start"
                disabled={proffesionalActivity}
              />
              <FormControlLabel sx={{ minWidth: 100}}
                value="nie"
                control={<Radio required={true} />}
                label="Nie"
                labelPlacement="start"
                disabled={proffesionalActivity}
              />
              <FormControlLabel sx={{ minWidth: 200}}
                value="trudno_powiedziec"
                control={<Radio required={true} />}
                label="Trudno stwierdzić"
                labelPlacement="start"
                disabled={proffesionalActivity}
              />
            </RadioGroup>
          </Box>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            minWidth: "200px",
            maxWidth: "880px"
          }}
        >
          <Box sx={{ m: 1, mx: 5 }}>
            <FormLabel id="akt_zawodowa">
              Czy po ukończeniu studiów doszkalał/a się Pan/Pani w zawodzie?
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="akt_zawodowa"
              name="training"
              onChange={handleChange}
            >
              <FormControlLabel sx={{ minWidth: 70}}
                value="tak"
                control={<Radio required={true} />}
                label="Tak"
                labelPlacement="start"
                disabled={proffesionalActivity}
              />
              <FormControlLabel sx={{ minWidth: 100}}
                value="nie"
                control={<Radio required={true} />}
                label="Nie"
                labelPlacement="start"
                disabled={proffesionalActivity}
              />
            </RadioGroup>
          </Box>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Box sx={{ mb: 5, mx: 5 }}>
            <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
              disabled={buttonDisable}
            >
              Prześlij wypełnioną ankietę
            </Button>
          </Box>
        </div>
      </FormControl>
    </div>
  );
}
