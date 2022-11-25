import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";

// can refer to MUI docs for Accordian
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import Typography from "@mui/material/Typography";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { tokens } from "../../theme";
import React from 'react'

const FAQ = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (

    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What is Zeus?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            What are kubernetes?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What kinds of queries can I make?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            How do I use the command line interface feature?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What is minikube and kubectl?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            How many users can Zeus have?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Can there be more than 1 administrator?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Can I add my own charts?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Who's your Daddy?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donde esta la biblioteca?
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>

  );
};

export default FAQ;