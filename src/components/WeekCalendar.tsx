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
        date: startDate.format('D, MMMM'),
        day: startDate.format('ddd'),
        isCurrent: startDate.isSame(moment(), 'day'),
      }
      days.push(dayObj)
      startDate.add(1, 'day')
    }
    setDays(days)
  }, []);

  return (
    <Box sx={{ flexGrow: 1, position: 'relative' }}>
      <Grid container>
        {days.map((day, i) => {
          return (
            <Grid item key={i} xs={12 / 7}>
              <Paper square sx={{ px: 2, py: 1, height: 96, backgroundColor: day.isCurrent ? (theme) => theme.palette.primary['light'] : '#fff' }}>
                <Box sx={{ fontSize: (theme) => theme.typography.subtitle1 }}>{day.day}</Box>
                <Box sx={{ fontSize: (theme) => theme.typography.body2 }}>{day.date}</Box>
              </Paper>
            </Grid>
          )
        })}
        <Grid container sx={{
          position: 'absolute',
          bottom: 32
        }}>
          <Grid item xs={3 * 12 / 7}>
            <Box sx={{
              backgroundColor: (theme) => theme.palette.info['main'],
              color: (theme) => theme.palette.info['contrastText'],
              fontSize: (theme) => theme.typography.caption,
              px: 1,
              mx: 2,
              borderRadius: 1
            }}>Porucivanje</Box>
          </Grid>
        </Grid>
        <Grid container sx={{
          position: 'absolute',
          bottom: 8
        }}>
          <Grid item xs={2 * 12 / 7}></Grid>
          <Grid item xs={12 / 7}>
            <Box sx={{
              backgroundColor: (theme) => theme.palette.info['main'],
              color: (theme) => theme.palette.info['contrastText'],
              fontSize: (theme) => theme.typography.caption,
              px: 1,
              mx: 2,
              borderRadius: 1
            }}>Dan porucivanja</Box>
          </Grid>
          <Grid item xs={12 / 7}>
            <Box sx={{
              backgroundColor: (theme) => theme.palette.info['main'],
              color: (theme) => theme.palette.info['contrastText'],
              fontSize: (theme) => theme.typography.caption,
              px: 1,
              mx: 2,
              borderRadius: 1
            }}>Dan isporuke</Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};