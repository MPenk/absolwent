import * as React from "react";
import Container from "@mui/material/Container";
import { SendPool } from "../../components/admin/SendPool";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { RegisterGraduate } from "../../components/admin/RegisterGraduate";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export function Dashboard(props) {
  const [value, setValue] = React.useState(props.value);
  let navigate = useNavigate();
  const handleChange = (event, newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        navigate("/admin/graduate/register");
        break;
      case 1:
        navigate("/admin/suvery/send");
        break;
    }
  };

  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  }
  return (
    <>
      <Container maxWidth="sm">
        <Box sx={{ width: 500 }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="inherit"
            variant="fullWidth"
          >
            <Tab label="Rejestracja nowego absolwenta" {...a11yProps(0)} />
            <Tab label="Wysyłanie ankiety" {...a11yProps(1)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <RegisterGraduate />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <SendPool />
          </TabPanel>
        </Box>
      </Container>
    </>
  );
}
