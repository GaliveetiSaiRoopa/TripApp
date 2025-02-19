import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

export default function SelectInput({
  name,
  value,
  error,
  helperText,
  label,
  handleChange,
  options,
  readOnly,
  disabled,
  bgColor,
}: any) {
  return (
    <Box sx={{ width: "100%" }}>
      <FormControl fullWidth>
        <InputLabel
          sx={{
            marginTop: "-3px",
            fontSize: "16px",
            color: "blue",
            // fontWeight: 500
          }}
          id="select-label"
        >
          {label}
        </InputLabel>
        <Select
          disabled={disabled}
          readOnly={readOnly}
          error={error}
          // helperText={helperText}
          labelId="select-label"
          id="select-value-comp"
          name={name}
          value={value}
          label={label}
          onChange={handleChange}
          sx={{
            textAlign: "start",
            borderRadius: "4px",
            height: "46px",
            backgroundColor: bgColor || "transparent",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#3F00FF",
            },
          }}
        >
          {React.Children.toArray(
            options?.length > 0 ? (
              options?.map((item: any) => (
                <MenuItem value={item.id || item?.name}>{item.name}</MenuItem>
              ))
            ) : (
              <p className="w-full text-center">Not Found..</p>
            )
          )}
        </Select>
      </FormControl>
      <p className="text-xs font-medium text-[#d32f2f] ml-4 mt-1">{error}</p>
    </Box>
  );
}
