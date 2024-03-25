"use client";

import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";
import { useState } from "react";

type DateReserveProps = {
  onDateChange: Function;
};

function DateReserve({ onDateChange }: DateReserveProps) {
  const [date, setDate] = useState<Dayjs | null>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        onChange={(value: Dayjs | null) => {
          setDate(value);
          onDateChange(value);
        }}
      />
    </LocalizationProvider>
  );
}

export default DateReserve;
