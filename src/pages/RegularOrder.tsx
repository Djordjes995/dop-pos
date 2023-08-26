import React from 'react';
import Alert from '@mui/material/Alert';
import { useQuery } from "@tanstack/react-query"
import WeekCalendar from '../components/WeekCalendar'
import { getRegularOrderCheck } from '../api/ManageApi'
import RegularOrderTable from '../components/RegularOrderTable'

export default () => {

  // const orderQuery = useQuery({
  //   queryKey: ['order'],
  //   queryFn: getRegularOrderCheck,
  // })

  return (
    <div>
      <RegularOrderTable />
    </div>
  );
};