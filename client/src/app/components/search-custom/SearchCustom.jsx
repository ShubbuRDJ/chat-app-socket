import { Search } from "@mui/icons-material";
import { FormControl, InputAdornment, OutlinedInput } from "@mui/material";
import React from "react";

export default function SearchCustom({setSearchKey}) {
  // *******************************about props****************************************
  // 1. setSearchKey => This is a setter metthod of state variable for receive the search key in parent component
  return (
    <FormControl
      fullWidth
      sx={{ m: 1, width: "50%" }}
      size="small"
      variant="outlined"
    >
      <OutlinedInput
        id="outlined-adornment-weight"
        placeholder="Search"
        onChange={(e)=>setSearchKey(e.target.value)}
        startAdornment={
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        }
        aria-describedby="outlined-weight-helper-text"
        inputProps={{
          "aria-label": "weight",
        }}
      />
    </FormControl>
  );
}
