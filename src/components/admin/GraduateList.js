import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import { execute } from "../../api/connection";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

export function GraduateList(_props) {
  const [graduates, setGraduates] = useState([]);
  const [refresh, setRefresh] = useState(-1);
  useEffect(() => {
    async function fetchData() {
      const response = await execute({
        path: "/admin/graduate/list",
        requestMethod: "GET",
      });
      if (response) {
        setGraduates(response.graduates);
      }
    }
    fetchData();
  }, [refresh]);

  const handleDelete = async (value) => {
    const response = await execute({
      path: "/admin/graduate/delete",
      requestMethod: "POST",
      data: { id: parseInt(value) },
    });
    if (response) {
      setRefresh(value);
    }
  };
  return (
    <>
      <Box sx={{ minWidth: "300px", width: "100%" }}>
        <Typography id="input-slider" gutterBottom>
          Lista absolwentów
        </Typography>
        <List sx={{ width: "100%" }}>
          {graduates.map((graduate, index) => {
            return (
              <Box key={index}>
                <ListItem alignItems="flex-start">
                  <ListItemText
                    primary={
                      graduate.faculty +
                      " - " +
                      graduate.field +
                      " " +
                      graduate.graduationYear
                    }
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {graduate.name + " " + graduate.lastName + " - "}
                        </Typography>
                        {graduate.title + " " + graduate.email}
                      </React.Fragment>
                    }
                  />
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => handleDelete(graduate.id)}
                    id="test"
                    name="test"
                    value="test"
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItem>
                <Divider variant="inset" component="li" />
              </Box>
            );
          })}
        </List>
      </Box>
    </>
  );
}
