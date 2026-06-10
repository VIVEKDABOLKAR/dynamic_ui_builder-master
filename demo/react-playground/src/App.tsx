import React from 'react'
import { DynamicRenderer } from "dynamic-ui-builder";
import { pageForm } from './examples/pageForm';
import { basicFormSchema } from './examples/basicForm';


import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";


export default function App() {
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DynamicRenderer
          schema={pageForm}
          context={{}}
        />
      </LocalizationProvider>
    </div>
  );
}
