import React from "react";
import { Container, Grid, Hidden, Typography } from "@material-ui/core";
import KevinProfilePicture from "../Images/KevinProfilePicture.jpg";
import KevinJapan from "../Images/KevinJapan.png";
import scale from "../Images/scale.png"
import handleViewport from 'react-in-viewport';

const MobileProfilePic = (props) => {
  const { inViewport, forwardedRef, enterCount, leaveCount } = props;

  const ProfilePic = () => {
    return(
      <Hidden smUp>
      <Grid
        item
        className="small-profile-photo-div"
        direction="column"
        xs={12}
        lg={4}
      >
        <img id="small-profile-image" className="profile-image" src={KevinProfilePicture} alt="Me!"></img>
      </Grid>
    </Hidden>
    )
  }
  
  if (inViewport && leaveCount === 0 ) {
      return (
          <div ref={forwardedRef}>
                <ProfilePic/>
          </div>
      )
  } 
  return (
      <div className="empty-container"ref={forwardedRef}>
          <div className="container">
           <Hidden smUp>
             <Grid
              item
              className="still-small-profile-photo-div"
              direction="column"
              xs={12}
              lg={4}
            >
              <img
                id="small-profile-image"
                className="profile-image"
                src={KevinProfilePicture}
                alt="Me!"
              ></img>
            </Grid>
          </Hidden>
        </div>
      </div>
  );
};

// const DesktopProfilePic = (props) => {
//   const { inViewport, forwardedRef, enterCount, leaveCount } = props;
//   if (inViewport && leaveCount === 0 ) {
//       return (
//           <div ref={forwardedRef}>
//               <div className="container">
//               <Hidden smUp>
//               <Grid
//                 item
//                 className="profile-photo-div"
//                 direction="column"
//                 xs={12}
//                 lg={4}
//               >
//                 <img id="profile-image" className="profile-image" src={KevinProfilePicture} alt="Me!"></img>
//               </Grid>
//             </Hidden>
//               </div>
//           </div>
//       )
//   }
//   return (
//       <div ref={forwardedRef}>
//           <div className="empty-container">
//               <Hidden smUp>
//               <Grid
//                 item
//                 className="still-profile-photo-div"
//                 direction="column"
//                 xs={12}
//                 lg={4}
//               >
//                 <img id="profile-image" className="profile-image" src={KevinProfilePicture} alt="Me!"></img>
//               </Grid>
//             </Hidden>
//               </div>
//       </div>
//   );
// };

const ViewportBlock = handleViewport(MobileProfilePic, /** options: {}, config: {} **/);
// const ViewportBlock2 = handleViewport(DesktopProfilePic, /** options: {}, config: {} **/);

export default function About() {
  return (
    <Container className="page-content">
      <h1 className="page-title">ABOUT</h1>
      <Grid container>
        <Grid container direction="row">
          <ViewportBlock disconnectOnLeave="true" />
          <Grid item id="about-text" direction="column" xs={12} md={6}>
            <p className="montserrat">
              Hello, I'm Kevin West, a Full Stack Developer based in Brooklyn,
              NY. With expertise in React, Javascript, Node, Express, and SQL, I
              have mastered the art of adapting to new technologies and
              delivering exceptional solutions.
              <br></br>
              <br></br>
              In the realm of web development, I derive great satisfaction from
              overcoming challenges and achieving significant milestones. During
              my tenure at Dealmed, I have had the opportunity to make impactful
              contributions, such as developing a robust order-tracking system.
              This system efficiently manages an average of 525 orders per week,
              ensuring smooth operations for our customers. Additionally, I
              successfully implemented a proof-of-delivery image preservation
              solution that processes over 700 images on a weekly basis,
              enhancing the reliability of crucial business processes.
              <br></br>
              <br></br>
              These accomplishments are just a glimpse into the broad range of
              value-adding initiatives I have undertaken at Dealmed. From
              integrating their CMS and PIMS to spearheading other feature
              enhancements, my time at the company has been truly rewarding and
              expansive. I take pride in my ability to tackle complex challenges
              head-on, constantly pushing the boundaries of my skill set.
              <br></br>
              <br></br>
            </p>
            <Hidden smDown>
            <div className="profile-photo-div" id="left-profile-photo">
            <img
                className="profile-image"
                src={KevinJapan}
                alt="Me!"
              ></img>
            </div>
            </Hidden>
          </Grid>
          <Hidden smDown>
            <Grid
              item
              
              direction="column"
              xs={12}
              sm={6}
            >
            <Grid direction="row" className="profile-photo-div">
              <img
                className="profile-image"
                src={KevinProfilePicture}
                alt="Me!"
              ></img>
              </Grid>
              <Grid direction="row">
              <br></br>
              <br></br>
              <p className="montserrat" id="about-text">
              My passion for innovation and problem-solving extends beyond my
              professional pursuits. In my personal time, I thrive on exploring
              new technologies, experimenting with creative projects, and
              seeking inspiration from various sources. This drive and curiosity
              fuel my continuous growth and commitment to delivering
              cutting-edge solutions.
              <br></br>
              <br></br>
              Beyond coding, I find inspiration in exploring the landscapes of
              NYC and beyond, foraging for nature's treasures like wild
              mulberries and pawpaws. This connection with nature brings fresh
              perspectives to my problem-solving approach. Additionally, when
              I'm not immersed in coding, you can find me performing improv,
              creating music, exercising, and playing sports, outlets that
              stimulate my creativity and add a touch of playfulness to my
              development work.
              <br></br>
              <br></br>
              When it comes to skills, I bring solid experience with React,
              Javascript, Node, Express, Prisma, and SQL to the table.
              Additionally, I have experience with HTML/CSS, MaterialUI, Azure,
              Netsuite, Cypress testing, blockchain integration, and Agile
              development methodologies.
              <br></br>
              <br></br>
              If you are seeking a collaborative partner for an exciting project
              or looking to explore innovative ideas, I am here to contribute my
              skills, passion, and unique perspective. Let's embark on this
              journey together!
              </p>
              </Grid>
            </Grid>
          </Hidden>
          <Hidden mdUp>
          <Grid direction="row">
              <p className="montserrat" id="about-text">
              My passion for innovation and problem-solving extends beyond my
              professional pursuits. In my personal time, I thrive on exploring
              new technologies, experimenting with creative projects, and
              seeking inspiration from various sources. This drive and curiosity
              fuel my continuous growth and commitment to delivering
              cutting-edge solutions.
              <br></br>
              <br></br>
              Beyond coding, I find inspiration in exploring the landscapes of
              NYC and beyond, foraging for nature's treasures like wild
              mulberries and pawpaws. This connection with nature brings fresh
              perspectives to my problem-solving approach. Additionally, when
              I'm not immersed in coding, you can find me performing improv,
              creating music, exercising, and playing sports, outlets that
              stimulate my creativity and add a touch of playfulness to my
              development work.
              <br></br>
              <br></br>
              When it comes to skills, I bring solid experience with React,
              Javascript, Node, Express, Prisma, and SQL to the table.
              Additionally, I have experience with HTML/CSS, MaterialUI, Azure,
              Netsuite, Cypress testing, blockchain integration, and Agile
              development methodologies.
              <br></br>
              <br></br>
              If you are seeking a collaborative partner for an exciting project
              or looking to explore innovative ideas, I am here to contribute my
              skills, passion, and unique perspective. Let's embark on this
              journey together!
              </p>
              </Grid>
              </Hidden>
        </Grid>
        <Grid id="language-container" direction="row">
              <Typography id="language-title">
                <b>I have experience with:</b>
              </Typography>
              <img
                id="scale"
                className="ten"
                src={scale}
                title="Experience Scale"
                alt="Experience Scale"
              />
              <img
                id="html-icon"
                className="icon-image eight"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                title="HTML"
                alt="HTML"
              />
              <img
                id="css-icon"
                className="icon-image eight"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                title="CSS"
                alt="CSS"
              />
              <img
                id="react-icon"
                className="icon-image eight"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                title="React"
                alt="React"
              />
              <img
                id="js-icon"
                className="icon-image eight"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                title="Javascript"
                alt="Javascript"
              />
              <img
                id="materialui-icon"
                className="icon-image eight"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
                title="MaterialUI"
                alt="MaterialUI"
              />
              <img
                id="node-icon"
                className="icon-image seven"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                title="Nodejs"
                alt="Nodejs"
              />
              <img
                id="github-icon"
                className="icon-image seven"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                title="Github"
                alt="Github"
              />
              <img
                id="express-icon"
                className="icon-image eight"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                title="Express"
                alt="Express"
              />
              <img
                id="postgresql-icon"
                className="icon-image seven"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                title="PostgreSQL"
                alt="PostgreSQL"
              />
              <img
                id="bootstrap-icon"
                className="icon-image five"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                title="Bootstrap"
                alt="Bootstrap"
              />
              <img
                id="redux-icon"
                className="icon-image five"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
                title="Redux"
                alt="Redux"
              />

              <img
                id="azure-icon"
                className="icon-image four"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"
                title="Azure"
                alt="Azure"
              />
              <img
                id="do-icon"
                className="icon-image four"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg"
                title="DigitalOcean"
                alt="DigitalOcean"
              />
              <img
                id="ruby-icon"
                className="icon-image four"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg"
                title="Ruby"
                alt="Ruby"
              />
              <img
                id="python-icon"
                className="icon-image four"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                title="Python"
                alt="Python"
              />
              <img
                id="typescript-icon"
                className="icon-image four"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                title="Typescript"
                alt="Typescript"
              />
              <img
                id="graphql-icon"
                className="icon-image four"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg"
                title="GraphQL"
                alt="GraphQL"
              />
              <img
                id="heroku-icon"
                className="icon-image four"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg"
                title="Heroku"
                alt="Heroku"
              />
              <img
                id="figma-icon"
                className="icon-image four"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                title="Figma"
                alt="Figma"
              />
              <img
                id="threejs-icon"
                className="icon-image four"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg"
                title="ThreeJS"
                alt="ThreeJS"
              />
            </Grid>
      </Grid>
    </Container>
  );
}
