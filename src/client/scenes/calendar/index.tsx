import React, { useState } from "react";

import FullCalendar, { formatDate } from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";

import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";

import listPlugin from "@fullcalendar/list";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";

import Header from "../../components/Header";
import { tokens } from "../../theme";

const Calendar = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [currentEvents, setCurrentEvents] = useState([]);

  // selected comes with alot of props you can use, try console loggin it
  const handleDateClick = (selected: any) => {

    // prompt is native way of sending alerts like modals
    const title = prompt("Please enter a new title for your event"); // typically would just create a modal
    const calendarApi = selected.view.calendar;
    calendarApi.unselect(); // makes sure once we click on the date it gets unselected immediately

    if (title) {
      calendarApi.addEvent({ // adds the event into the calendar app
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  // 
  const handleEventClick = (selected: any) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'` // prompt, could also do a modal
      )
    ) {
      selected.event.remove(); // whenever you click an event it will prompt you 
    }
  };

  return (

    <Box m="20px">
      <Header title="Calendar" subtitle="Full Calendar Interactive Page" />

      <Box display="flex" justifyContent="space-between">
        {/* CALENDAR SIDEBAR - left side*/}
        <Box
          flex="1 1 20%" // shorthand for grow, shrink, space
          bgcolor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
        >
          <Typography variant="h5">Events</Typography>

          <List>
            {currentEvents.map((event) => ( // map over currenEvents and render list item for each
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px 0", // 10 top/bott, 0 left/right
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* CALENDAR */}
        <Box flex="1 1 100%" ml="15px">

          <FullCalendar // FullCalendar component passing in all the props that gives us lots of funtionality
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth", // no space in-between
            }}
            initialView="dayGridMonth" // default setting for the month
            editable={true} // options...
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}

            select={handleDateClick} // runs event handler when clicked
            eventClick={handleEventClick} // handles the vents too

            eventsSet={(events: any) => setCurrentEvents(events)}// what is saving the events that we created into state using 
            // the calendarApi

            initialEvents={[ // default intial events so it doesn;t just look empty
              {
                id: "12315",
                title: "All-day event",
                date: "2022-09-14",
              },
              {
                id: "5123",
                title: "Timed event",
                date: "2022-09-28",
              },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;