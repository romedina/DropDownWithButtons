import React, { useState } from "react";
import {
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
  Button,
  MenuItem,
  OutlinedInput
} from "@material-ui/core";

import { makeStyles } from "@material-ui/styles";

const wdLightBlue = "#41B8F9";
const useStyles = makeStyles(theme => ({
  wdBtnItem: {
    border: "solid",
    borderWidth: 1,
    borderRadius: 50,
    borderColor: wdLightBlue,
    fontWeight: 700,
    transition: "0.2 s"
  }
}));

export const DropdownWithButtons = props => {
  const classes = useStyles();

  //props data
  const buttons = props.buttons;
  const vectorA = props.dataA;
  const vectorB = props.dataB;

  // hooks
  const [dropdownVal, setDropDownVal] = useState(vectorA[0]);
  const [isButtonClicked, setButtonClicked] = useState(false);

  //handlers
  const handleDropDownChange = event => {
    return setDropDownVal(event.target.value);
  };

  //functions
  const renderSelectableData = vector => {
    return vector.map(element => {
      return <MenuItem value={element}>{element}</MenuItem>;
    });
  };

  //console.log(vectorA)
  console.log(renderSelectableData(vectorA));

  const renderButtons = () => {
    return (
      <React.Fragment>
        {buttons.map(element => {
          return (
            <Grid item xs={6}>
              <Button
                fullWidth
                className={classes.wdBtnItem}
                variant="outlined"
                size="large"
              >
                {element}
              </Button>
            </Grid>
          );
        })}
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <Grid container spacing={2}>
        {/* Left Side use it for Rendering buttons */}
        <Grid item xs={6}>
          <Grid container spacing={1}>
            {renderButtons()}
          </Grid>
        </Grid>

        {/* Rigth Side use it for Rendering dropdown */}
        <Grid item xs={6}>
          <Select
            value={dropdownVal}
            name="drodownComponent"
            onChange={handleDropDownChange}
            fullWidth
            input={<OutlinedInput />}
          >
            {renderSelectableData(vectorA)}
          </Select>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
