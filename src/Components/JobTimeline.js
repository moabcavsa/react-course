import React from "react";
import { useState } from "react";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";
import SchoolIcon from "@mui/icons-material/School";

function JobTimeline() {
  return (
    <div>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot variant="outlined">
              <img
                src="https://i.postimg.cc/VvQrtrR2/image-removebg-preview-3.png"
                width={24}
                height={24}
              />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span" color={"white"}>
              Ferriere Nord - Gruppo Pittini
            </Typography>
            <Typography color={"white"}>
              Sviluppo e commissioning del L2 di Danieli Automation 4.0
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot variant="outlined">
              <img
                src="https://i.postimg.cc/x1Kz0CTC/image-removebg-preview-2.png"
                width={24}
                height={24}
              />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span" color={"white"}>
              Nuovo WireRod Mill, Icdas Celik
            </Typography>
            <Typography color={"white"}>
              Sviluppo e commissioning del L2 di Danieli Automation (Tracking e
              Ritardi impianto)
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color={"white"}
          >
            Dicembre 2020 - Gennaio 2021
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot variant="outlined">
              <img
                src="https://i.postimg.cc/7L5r3CGP/image-removebg-preview.png"
                width={24}
                height={24}
              />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography
              variant="h6"
              component="span"
              color={"white"}
              fontsize={20}
            >
              Acciaierie Bertoli Safau S.p.A QWR 4.0
            </Typography>
            <Typography color={"white"} fontSize={15}>
              Sviluppo e commissioning del L2 di Danieli Automation
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color={"white"}
          >
            Settembre 2020 - Oggi
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              <img
                src="https://i.postimg.cc/bw6LrH40/image-removebg-preview-6.png"
                width={24}
                height={24}
              />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography
              variant="h6"
              component="span"
              color={"white"}
              fontSize={20}
            >
              Ingresso in 3EM Group
            </Typography>
            <Typography color={"white"}>
              Sviluppatore di applicativi Web e Desktop
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" fontSize={20} color={"white"}>
              Diploma di perito informatico
            </Typography>
            <Typography color={"white"} variant="p">
              2014-2019
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}

export default JobTimeline;
