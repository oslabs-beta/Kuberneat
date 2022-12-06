import { Box } from "@mui/material";
import Header from "./Header";
// can refer to MUI docs for Accordian
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import React, { useContext } from 'react'
import {Context} from "../Context";


const FAQ = () => {

    const { darkModeOn } = useContext(Context);
    const accordianColor = darkModeOn ? "#2c3639 !important" : "#344966 !important"
    // sets the color of the FAQ containers, chnages here get reflected to all

  return (
    <div className={darkModeOn ? "faq-dark" : "faq-light"}>
        <Box m="20px">
            {/* Header passing down props for title and subtitle */}
        <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

        {/* Can replace placeholder questions with real ones later */}
        <Accordion defaultExpanded sx={{ bgcolor: accordianColor, borderRadius: '10px !important'}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h5">
                What is Zeus?
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                What are kubernetes?
            </Typography>
            </AccordionDetails>
        </Accordion>
        
        <Accordion defaultExpanded sx={{ bgcolor: accordianColor, borderRadius: '10px !important'}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h5">
                What kinds of queries can I make?
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                How do I use the command line interface feature?
            </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded sx={{ bgcolor: accordianColor, borderRadius: '10px !important'}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h5">
                What is minikube and kubectl?
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                How many users can Zeus have?
            </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded sx={{ bgcolor: accordianColor, borderRadius: '10px !important'}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h5">
                Can there be more than 1 administrator?
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                Can I add my own charts?
            </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded sx={{ bgcolor: accordianColor, borderRadius: '10px !important'}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h5">
                What's next for Zeus?
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                Where can i get more info?
            </Typography>
            </AccordionDetails>
        </Accordion>

        </Box>
    </div>
  );
};

export default FAQ;