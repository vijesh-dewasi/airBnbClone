import {React,useState} from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs, { Dayjs } from 'dayjs';
  
  const CheckinDialog = () => {
   
    let now = dayjs(); 
    let d1 = now.add('1', 'month');
  const [value3,setValue3]=useState();
  const [value4,setValue4]=useState();
  return (
    <div className='z-50 mx700:w-64 mx700:overflow-x-scroll mx700:h-64 absolute -translate-x-1/4 tab2:w-min bg-white rounded-xl p-10 flex justify-between items-center mx700:flex-wrap'>
     <LocalizationProvider dateAdapter={AdapterDayjs}>
     <DateCalendar 
      minDate={now}
     views={['day']}
     value={value3} 
     onChange={(newValue) => setValue3(newValue)}/>
    </LocalizationProvider>
    
    <LocalizationProvider dateAdapter={AdapterDayjs}>
     <DateCalendar 
     minDate={now}
     maxDate={now.add('6', 'month')}
     views={['day']}
     value={value4}
     defaultValue={d1}
     onChange={(newValue) => setValue4(newValue)}/>
    </LocalizationProvider>
    </div>
  )
}

export default CheckinDialog