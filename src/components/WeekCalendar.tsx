import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import moment from 'moment'
import { useState, useEffect } from 'react';

interface iDayObj {
  fullDate: string
  date: string
  day: string
  isCurrent: boolean
}

export default () => {

  const [days, setDays] = useState<iDayObj[]>([])

  useEffect(() => {
    var currentDate = moment();
    var startDate = currentDate.clone().startOf('isoWeek');
    var endDate = currentDate.clone().endOf('isoWeek');

    var days = [];

    while (startDate.isSameOrBefore(endDate)) {
      const dayObj = {
        fullDate: startDate.format(),
        date: startDate.format('D'),
        day: startDate.format('ddd'),
        isCurrent: startDate.isSame(moment(), 'day'),
      }
      days.push(dayObj)
      startDate.add(1, 'day')
    }
    setDays(days)
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        {days.map((day, i) => {
          return (
            <Grid item key={i}>
              <Paper square sx={{ px: 4, py: 2 }}>
                <Box sx={{ fontSize: (theme) => theme.typography.subtitle1 }}>{day.day}</Box>
                <Box sx={{ fontSize: (theme) => theme.typography.body2   }}>{day.date}</Box>
              </Paper>
            </Grid>
          )
        })}
      </Grid>
    </Box>
  );
};