import React, { useEffect } from "react";
import { useState } from "react";
import { Slider } from "@mui/material";
import { getFrameworks } from "../Services/apiAxios";
import { Paper } from "@mui/material";

function FrontPage() {
  const [Frameworks, setFrameworks] = useState([
    { id: 0, Logo: "", Technolgies: "" },
  ]);
  const [SelectedFramework, setSelectedFramework] = useState(0);

  const readFrameworks = () => {
    getFrameworks().then((data) => {
      setFrameworks(data.data);
      console.log(Frameworks);
    });
  };


  const maxHeighStyle = { marginTop: '10%'};

  useEffect(() => {
    readFrameworks();
  }, []);

  return (
    <div style={maxHeighStyle}>
      <Paper elevation={0} className={"PaperClass"} variant="outlined">
        <img
          className={"ImagePaper"}
          src={Frameworks[SelectedFramework].Logo}
        />
        <p className={"Title"}>{Frameworks[SelectedFramework].Technolgies}</p>
      </Paper>
      <div className="SliderCenter">
        <Slider
          size="small"
          defaultValue={0}
          max={Frameworks.length - 1}
          color="secondary"
          aria-label="Temperature"
          valueLabelDisplay="off"
          onChange={(_, v) => {
            setSelectedFramework(v);
          }}
        />
      </div>
    </div>
  );
}

export default FrontPage;
