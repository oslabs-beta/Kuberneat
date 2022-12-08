import { Box, Container } from "@mui/material";
import Header from "./Header";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import React, { useContext } from 'react'
import {Context} from "../Context";

import { AppProps } from '../interfaces';
import { ReactNode, ReactElement } from 'react';


import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { CenterFocusStrong } from "@mui/icons-material";



const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));


function FAQ(): ReactElement {

    const { darkModeOn } = useContext <AppProps> (Context);

    const PodColor: string = darkModeOn ? "#2c3639 !important" : "#344966 !important"
    const subTextColor: string = darkModeOn ? "white !important" : "#344966 !important"
    const textColor: string = darkModeOn ? "white !important" : "#344966 !important"
    const expBgColor: string = darkModeOn ? "purple !important" : "#344966 !important"
 
    const podDisplayWidth: number = 1; 
    const podWidth: string = "25%";

    const accordianColor: string = darkModeOn ? "#2c3639 !important" : "#344966 !important"
    // sets the color of the FAQ containers, chnages here get reflected to all

    const [expanded, setExpanded] = React.useState<string | false>('panel1');

    const handleChange =
      (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false);
      };


  return (
    <div className={darkModeOn ? "faq-dark" : "faq-light"}>

        <Box m="20px">
            {/* Header passing down props for title and subtitle */}
        <Header title="All Ze Pods" subtitle="Cluster Data" />


    <Container sx={{ display: 'flex', gap: 2, flexDirection: 'column',   }}>
        <Accordion sx={{ 
            bgcolor: PodColor, 
            marginBottom: 2,
            borderRadius: '10px !important', 
            width: podDisplayWidth,

            }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography sx={{ 
            width: podWidth, 
            flexShrink: 0, 
            color: textColor, 
            fontSize: 24, 
            fontWeight: 'bold' }}>
                Pod 1
            </Typography>
          <Typography sx={{ color: subTextColor }}>
            alertmanager-prometheus-kube-prometheus-alertmanager-0
            </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ bgcolor: expBgColor }}>
          <Typography>
          CPU Requests:
          </Typography>
          <Typography>
          CPU Limits:
          </Typography>
          <Typography>
          Memory Requests:
          </Typography>
          <Typography>
          Memory Limits:
          </Typography>
          <Typography>
          Age:
          </Typography>
        </AccordionDetails>
      </Accordion>
        <Accordion sx={{ 
            bgcolor: PodColor, 
            marginBottom: 2,
            borderRadius: '10px !important', 
            width: podDisplayWidth,

            }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography sx={{ 
            width: podWidth, 
            flexShrink: 0, 
            color: textColor, 
            fontSize: 24, 
            fontWeight: 'bold' }}>
                Pod 2
            </Typography>
          <Typography sx={{ color: subTextColor }}>
          prometheus-grafana-6fdd6868b4-bc5s6
            </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ bgcolor: expBgColor }}>
          <Typography>
          CPU Requests:
          </Typography>
          <Typography>
          CPU Limits:
          </Typography>
          <Typography>
          Memory Requests:
          </Typography>
          <Typography>
          Memory Limits:
          </Typography>
          <Typography>
          Age:
          </Typography>
        </AccordionDetails>
      </Accordion>
        <Accordion sx={{ 
            bgcolor: PodColor, 
            marginBottom: 2,
            borderRadius: '10px !important', 
            width: podDisplayWidth,

            }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography sx={{ 
            width: podWidth, 
            flexShrink: 0, 
            color: textColor, 
            fontSize: 24, 
            fontWeight: 'bold' }}>
                Pod 3
            </Typography>
          <Typography sx={{ color: subTextColor }}>
          prometheus-kube-prometheus-operator-6ffc69cf67-lrvng
            </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ bgcolor: expBgColor }}>
          <Typography>
          CPU Requests:
          </Typography>
          <Typography>
          CPU Limits:
          </Typography>
          <Typography>
          Memory Requests:
          </Typography>
          <Typography>
          Memory Limits:
          </Typography>
          <Typography>
          Age:
          </Typography>
        </AccordionDetails>
      </Accordion>
        <Accordion sx={{ 
            bgcolor: PodColor, 
            marginBottom: 2,
            borderRadius: '10px !important', 
            width: podDisplayWidth,

            }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography sx={{ 
            width: podWidth, 
            flexShrink: 0, 
            color: textColor, 
            fontSize: 24, 
            fontWeight: 'bold' }}>
                Pod 4
            </Typography>
          <Typography sx={{ color: subTextColor }}>
          prometheus-kube-state-metrics-6cfd96f4c8-lfgr6
            </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ bgcolor: expBgColor }}>
          <Typography>
          CPU Requests:
          </Typography>
          <Typography>
          CPU Limits:
          </Typography>
          <Typography>
          Memory Requests:
          </Typography>
          <Typography>
          Memory Limits:
          </Typography>
          <Typography>
          Age:
          </Typography>
        </AccordionDetails>
      </Accordion>

        <Accordion sx={{ 
            bgcolor: PodColor, 
            marginBottom: 2,
            borderRadius: '10px !important', 
            width: podDisplayWidth,

            }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography sx={{ 
            width: podWidth, 
            flexShrink: 0, 
            color: textColor, 
            fontSize: 24, 
            fontWeight: 'bold' }}>
                Pod 5
            </Typography>
          <Typography sx={{ color: subTextColor }}>
          prometheus-prometheus-kube-prometheus-prometheus-0
            </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ bgcolor: expBgColor }}>
          <Typography>
          CPU Requests:
          </Typography>
          <Typography>
          CPU Limits:
          </Typography>
          <Typography>
          Memory Requests:
          </Typography>
          <Typography>
          Memory Limits:
          </Typography>
          <Typography>
          Age:
          </Typography>
        </AccordionDetails>
      </Accordion>

        <Accordion sx={{ 
            bgcolor: PodColor, 
            marginBottom: 2,
            borderRadius: '10px !important', 
            width: podDisplayWidth,

            }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography sx={{ 
            width: podWidth, 
            flexShrink: 0, 
            color: textColor, 
            fontSize: 24, 
            fontWeight: 'bold' }}>
                Pod 6
            </Typography>
          <Typography sx={{ color: subTextColor }}>
          coredns-565d847f94-l5z28
            </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ bgcolor: expBgColor }}>
          <Typography>
          CPU Requests:
          </Typography>
          <Typography>
          CPU Limits:
          </Typography>
          <Typography>
          Memory Requests:
          </Typography>
          <Typography>
          Memory Limits:
          </Typography>
          <Typography>
          Age:
          </Typography>
        </AccordionDetails>
      </Accordion>
        <Accordion sx={{ 
            bgcolor: PodColor, 
            marginBottom: 2,
            borderRadius: '10px !important', 
            width: podDisplayWidth,

            }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography sx={{ 
            width: podWidth, 
            flexShrink: 0, 
            color: textColor, 
            fontSize: 24, 
            fontWeight: 'bold' }}>
                Pod 6
            </Typography>
          <Typography sx={{ color: subTextColor }}>
          coredns-565d847f94-l5z28
            </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ bgcolor: expBgColor }}>
          <Typography>
          CPU Requests:
          </Typography>
          <Typography>
          CPU Limits:
          </Typography>
          <Typography>
          Memory Requests:
          </Typography>
          <Typography>
          Memory Limits:
          </Typography>
          <Typography>
          Age:
          </Typography>
        </AccordionDetails>
      </Accordion>
        <Accordion sx={{ 
            bgcolor: PodColor, 
            marginBottom: 2,
            borderRadius: '10px !important', 
            width: podDisplayWidth,

            }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography sx={{ 
            width: podWidth, 
            flexShrink: 0, 
            color: textColor, 
            fontSize: 24, 
            fontWeight: 'bold' }}>
                Pod 6
            </Typography>
          <Typography sx={{ color: subTextColor }}>
          coredns-565d847f94-l5z28
            </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ bgcolor: expBgColor }}>
          <Typography>
          CPU Requests:
          </Typography>
          <Typography>
          CPU Limits:
          </Typography>
          <Typography>
          Memory Requests:
          </Typography>
          <Typography>
          Memory Limits:
          </Typography>
          <Typography>
          Age:
          </Typography>
        </AccordionDetails>
      </Accordion>
        <Accordion sx={{ 
            bgcolor: PodColor, 
            marginBottom: 2,
            borderRadius: '10px !important', 
            width: podDisplayWidth,

            }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography sx={{ 
            width: podWidth, 
            flexShrink: 0, 
            color: textColor, 
            fontSize: 24, 
            fontWeight: 'bold' }}>
                Pod 6
            </Typography>
          <Typography sx={{ color: subTextColor }}>
          coredns-565d847f94-l5z28
            </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ bgcolor: expBgColor }}>
          <Typography>
          CPU Requests:
          </Typography>
          <Typography>
          CPU Limits:
          </Typography>
          <Typography>
          Memory Requests:
          </Typography>
          <Typography>
          Memory Limits:
          </Typography>
          <Typography>
          Age:
          </Typography>
        </AccordionDetails>
      </Accordion>
        <Accordion sx={{ 
            bgcolor: PodColor, 
            marginBottom: 2,
            borderRadius: '10px !important', 
            width: podDisplayWidth,

            }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography sx={{ 
            width: podWidth, 
            flexShrink: 0, 
            color: textColor, 
            fontSize: 24, 
            fontWeight: 'bold' }}>
                Pod 6
            </Typography>
          <Typography sx={{ color: subTextColor }}>
          coredns-565d847f94-l5z28
            </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ bgcolor: expBgColor }}>
          <Typography>
          CPU Requests:
          </Typography>
          <Typography>
          CPU Limits:
          </Typography>
          <Typography>
          Memory Requests:
          </Typography>
          <Typography>
          Memory Limits:
          </Typography>
          <Typography>
          Age:
          </Typography>
        </AccordionDetails>
      </Accordion>
        <Accordion sx={{ 
            bgcolor: PodColor, 
            marginBottom: 2,
            borderRadius: '10px !important', 
            width: podDisplayWidth,

            }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography sx={{ 
            width: podWidth, 
            flexShrink: 0, 
            color: textColor, 
            fontSize: 24, 
            fontWeight: 'bold' }}>
                Pod 6
            </Typography>
          <Typography sx={{ color: subTextColor }}>
          coredns-565d847f94-l5z28
            </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ bgcolor: expBgColor }}>
          <Typography>
          CPU Requests:
          </Typography>
          <Typography>
          CPU Limits:
          </Typography>
          <Typography>
          Memory Requests:
          </Typography>
          <Typography>
          Memory Limits:
          </Typography>
          <Typography>
          Age:
          </Typography>
        </AccordionDetails>
      </Accordion>
        <Accordion sx={{ 
            bgcolor: PodColor, 
            marginBottom: 2,
            borderRadius: '10px !important', 
            width: podDisplayWidth,

            }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography sx={{ 
            width: podWidth, 
            flexShrink: 0, 
            color: textColor, 
            fontSize: 24, 
            fontWeight: 'bold' }}>
                Pod 6
            </Typography>
          <Typography sx={{ color: subTextColor }}>
          coredns-565d847f94-l5z28
            </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ bgcolor: expBgColor }}>
          <Typography>
          CPU Requests:
          </Typography>
          <Typography>
          CPU Limits:
          </Typography>
          <Typography>
          Memory Requests:
          </Typography>
          <Typography>
          Memory Limits:
          </Typography>
          <Typography>
          Age:
          </Typography>
        </AccordionDetails>
      </Accordion>
        <Accordion sx={{ 
            bgcolor: PodColor, 
            marginBottom: 2,
            borderRadius: '10px !important', 
            width: podDisplayWidth,

            }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography sx={{ 
            width: podWidth, 
            flexShrink: 0, 
            color: textColor, 
            fontSize: 24, 
            fontWeight: 'bold' }}>
                Pod 6
            </Typography>
          <Typography sx={{ color: subTextColor }}>
          coredns-565d847f94-l5z28
            </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ bgcolor: expBgColor }}>
          <Typography>
          CPU Requests:
          </Typography>
          <Typography>
          CPU Limits:
          </Typography>
          <Typography>
          Memory Requests:
          </Typography>
          <Typography>
          Memory Limits:
          </Typography>
          <Typography>
          Age:
          </Typography>
        </AccordionDetails>
      </Accordion>

    

      </Container>
        </Box>

    </div>
  );
};

export default FAQ;