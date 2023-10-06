import React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { MenuItem, Select } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function FilterCustom({filterListArray,filterKeysArray,setFilterKey,filterKey,label}) {
  // ********************************about props***********************************************
  // 1. filterListArray => This is an array of all possible filter option to display on ui.
  // 2. filterKeysArray => This is an array of all possible filterKeys with respect to all filter option.
  // 3. filterKey => This is a state variable of parent component to receive the key for filter.
  // 4. setFilterKey => This is a setter method of state variable of parent component to receive the key for filter.
  // 5. label => This is a label of filter component.
  const theme = useTheme();
  return (
    <FormControl sx={{ m: 1, width: "50%" }} size="small">
      <InputLabel id="demo-multiple-name-label">{label}</InputLabel>
      <Select
        labelId="demo-multiple-name-label"
        id="demo-multiple-name"
        value={filterKey}
        onChange={(e)=>setFilterKey(e.target.value)}
        input={<OutlinedInput label={label} />}
        MenuProps={MenuProps}
      >
        {
        filterListArray?.map((name,index) => (
          <MenuItem
            key={name}
            value={filterKeysArray?filterKeysArray[index]:name.split(" ").join("")}
            style={getStyles(name, filterKey, theme)}
          >
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
