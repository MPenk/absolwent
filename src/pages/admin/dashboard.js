import * as React from "react";
import Container from "@mui/material/Container";
import { SendPool } from "../../components/admin/SendPool";
import { useNavigate } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import { RegisterGraduate } from "../../components/admin/RegisterGraduate";
import { SendPoolNow } from "../../components/admin/SendPoolNow";
import { GraduateList } from "../../components/admin/GraduateList";

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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
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
  const handleChange = (_event, newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        navigate("/admin/graduate/register");
        break;
      case 1:
        navigate("/admin/suvery/send");
        break;
      case 2:
        navigate("/admin/suvery/send/now");
        break;
      case 3:
        navigate("/admin/graduate/list");
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
      <Container maxWidth="s">
        <Box sx={{ width: "100%" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="inherit"
            variant="scrollable"
          allowScrollButtonsMobile
          >
            <Tab label="Rejestracja nowego absolwenta" {...a11yProps(0)} />
            <Tab label="Wysy??anie ankiety" {...a11yProps(1)} />
            {process.env.REACT_APP_API_URL ==
              "https://absolwent.azurewebsites.net/api" && (
              <Tab label="[DEV] Wysy??anie ankiety" {...a11yProps(2)} />
            )}
            {process.env.REACT_APP_API_URL ==
              "https://absolwent.azurewebsites.net/api" && (
              <Tab label="[DEV] Lista Absolwent??w" {...a11yProps(3)} />
            )}
          </Tabs>
          <Container maxWidth="sm">
          <TabPanel value={value} index={0}>
            <RegisterGraduate />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <SendPool />
          </TabPanel>
          {process.env.REACT_APP_API_URL ==
            "https://absolwent.azurewebsites.net/api" && (
            <TabPanel value={value} index={2}>
              <SendPoolNow />
            </TabPanel>
          )}
          {process.env.REACT_APP_API_URL ==
            "https://absolwent.azurewebsites.net/api" && (
            <TabPanel value={value} index={3}>
              <GraduateList />
            </TabPanel>
          )}
          </Container>
        </Box>
      </Container>
    </>
  );
}
