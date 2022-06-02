import React,{useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Timepicker.css';

function Timepicker() {
    const [startDate,setStartDate]=useState(new Date());
  return (
        <DatePicker id='selectedDate' className='timepicker' selected={startDate} onChange={date=>setStartDate(date) } />
  )
  
}

export default Timepicker