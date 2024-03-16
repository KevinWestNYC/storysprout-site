import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import plaster from './plaster.jpg'
import snakedemo from "../Images/snakedemo.gif"


const useStyles = makeStyles((theme) => ({
  root: {
    height: "97%",
    width: "97%",
    textAlign: "center",
    borderRadius: 15,
  },
  gif: {
    textAlign: "center",
    height: 350,
    width: 350,
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    border: "1px solid #F0f0f7",
    borderRadius: 5,
    [theme.breakpoints.down("768")]: {
      height: 250,
      width: 250,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  gifContainer: {},
}));

export default function ImgMediaCard({projectData}) {
  const classes = useStyles();
  

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.gif}
        // className="projects-gif"
        component="img"
        alt={projectData.title}
        image={projectData.imageLink}
        title={projectData.title}
      />

      <div className="card-content">
        <h2 className="lato" id="content-title">
          {projectData.title}
        </h2>
        <Typography
          className="montserrat"
          id="content-body"
          variant="body2"
          color="textSecondary"
          component="p"
        >
          {projectData.body}
        </Typography>
      </div>
      <div className="card-actions">
        { projectData.liveLink !== "" ?
        <Button
        className="project-button"
          size="small"
          color="primary"
          variant="outlined"
          target="_blank"
          href={projectData.liveLink}
        >
          Live
        </Button> :
        <Button
        className="project-button"

          size="small"
          color="primary"
          variant="outlined"
          target="_blank"
          disabled
          href={projectData.liveLink}
        >
          Not Live
        </Button> 

}
{ projectData.gitLink !== "" ?
        <Button
        className="project-button"

          size="small"
          color="primary"
          variant="outlined"
          target="_blank"
          href={projectData.gitLink}
        >
          Github
        </Button> :
        <Button
        className="project-button"

          size="small"
          color="primary"
          variant="outlined"
          target="_blank"
          disabled
          href={projectData.liveLink}
        >
          Private Git
        </Button> 
}
      </div>
    </Card>
  );
}


