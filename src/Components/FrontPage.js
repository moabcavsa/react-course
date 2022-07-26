import React, { useEffect } from "react";
import { useState } from "react";
import { BottomNavigationAction, Slider } from "@mui/material";
import { getFrameworks } from "../Services/apiAxios";
import { getProjects } from "../Services/apiAxios";
import { Paper } from "@mui/material";
import { Avatar } from "@mui/material";
import { Divider } from "@mui/material";
import { Snackbar } from "@mui/material";
import { Alert } from "@mui/material";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TimelineIcon from '@mui/icons-material/Timeline';
import { flexbox } from "@mui/system";
import { Tooltip } from "@mui/material";
import { Switch } from "@mui/material";
import { BottomNavigation } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

function FrontPage() {
  const [DescFrameWork, setDescFrameWork] = useState([
    { id: 0, date: "", Image: "", Cliente: "", DescProgetto: "" },
  ]);

  const readProjects = () => {
    getProjects().then((data) => {
      setDescFrameWork(data.data);
      console.log(DescFrameWork);
    });
  };

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

  const [openSwipe, setOpenSwipe] = useState(false);

  const toggleDrawer = (newOpenSwipe) => () => {
    setOpenSwipe(newOpenSwipe);
  };
  

  const [navValue, setValue]  = useState(true)

  const [openSnackbar, setSnackbar] = useState(false);

  const showSnackbar = (val) => {
    setSnackbar(val);
  };

  const handleCloseSnackBar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbar(false);
  };

  const HandleClick = () => {
    window.open("https://www.linkedin.com/in/giuseppe-causa-9ba57719b/");
  };

  const HandleGitClick = () => {
    window.open("https://github.com/moabcavsa");
  };

  const maxHeighStyle = { marginTop: "0.5%" };
  const swipemaxWidth = { width: "150px" };
  useEffect(() => {
    readFrameworks();
    readProjects();
    showSnackbar(true);
  }, []);

  return (
    <div>
      <div className={"centerDiv"} style={{ marginTop: "1%" }}>
        <GitHubIcon
          color="primary"
          fontSize="small"
          onClick={HandleGitClick}
        ></GitHubIcon>
        <LinkedInIcon color="primary" onClick={HandleClick}></LinkedInIcon>
        <div onClick={toggleDrawer(true)}>
          <Tooltip placement="right" title="Clicca per informazioni" arrow>
            <Avatar
              alt="Giuseppe Causa"
              src="https://i.postimg.cc/kG7DFmQJ/119671166-174861487508120-8677453376464519009-n.jpg"
              sx={{ width: 35, height: 35 }}
            />
          </Tooltip>
        </div>
      </div>
      <Divider variant="middle" color="#ba68c8" style={{ marginTop: "1%" }} />
      <p className={"Title"}>Framework Utilizzati</p>
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
      <p className={"Title"}>Progetti</p>
      <div className={"centerFrameworks"}>
        <Swiper
          slidesPerView={5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            // when window width is >= 640px
            360: {
              width: 360,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 2,
            },
          }}
        >
          {DescFrameWork.map((desc, index) => (
            <SwiperSlide>
              <div className={"Projects"} key={index}>
                <img src={desc.Image} className={"ImagePaper"} />
                <br></br>
                <p className={"AboutMe"}>
                  {desc.Cliente}
                  <br></br>
                  <br></br>
                  {desc.Descrizione}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <SwipeableDrawer
        anchor="bottom"
        open={openSwipe}
        style={swipemaxWidth}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: {
            width: "50%",
            alignItems: "center",
            display: flexbox,
            justifyContent: "center",
            marginTop: "auto",
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: "10px",
            backgroundColor: "black",
            border: "solid",
            borderColor: "#ba68c8",
            borderWidth: "thin",
          },
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          component="div"
          className="AboutMe"
        >
          About me
        </Typography>
        <Divider
          variant="middle"
          color="secondary"
          style={{ width: "inherit" }}
        />
        <Typography
          variant="body1"
          gutterBottom
          marginLeft={"5%"}
          style={{ wordWrap: "break-word" }}
          className={"AboutMe"}
        >
          Full Stack Developer, sviluppo di applicativi di Automazione e
          controllo.<br></br>Da fine 2020, in 3EM Group con cliente finale
          Danieli Automation, BU Long Products L2, per lo sviluppo e
          commissioning del modulo di L2.<br></br>
          Il modulo L2 DA prevede:
          <br></br>
          <span>&#8226;</span> Gestione setup delle macchine del treno di
          laminazione, forno di riscaldo, area di finitura
          <br></br>
          <span>&#8226;</span> Tracciamento in tempo reale del materiale
          laminato all'interno del forno di riscaldo, treno di laminazione ed
          area di finitura.
          <br></br>
          <span>&#8226;</span> Modelli matematici e interfacce con sistemi
          esterni dei clienti finali (e.g MES,SAP)
        </Typography>
      </SwipeableDrawer>

  
      <Snackbar
        autoHideDuration={10000}
        open={openSnackbar}
        onClose={handleCloseSnackBar}
        className={"SnackbarPos"}
      >
        <Alert
          onClose={handleCloseSnackBar}
          severity="info"
          sx={{ width: "100%"}}
        >
          Clicca sulla icona profilo per più dettagli
        </Alert>
      </Snackbar>
    </div>
  );
}

export default FrontPage;
