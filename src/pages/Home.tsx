import React from 'react';
import Alert from '@mui/material/Alert';
import { useQuery } from "@tanstack/react-query"
import WeekCalendar from '../components/WeekCalendar'
import { getRegularOrderCheck } from '../api/ManageApi'

export default () => {

  const orderQuery = useQuery({
    queryKey: ['order'],
    queryFn: getRegularOrderCheck,
  })

  return (
    <div>
      <WeekCalendar />
      <Alert severity="info">
        Promeni redovnu porudzbinu ako nisi siguran do srede u 10h (22.04.2022). Kada promenis redovnu porudzbinu imas opciju da je opet promenis do srede (22.04.2022) u 10h.
      </Alert>
    </div>
  );
};