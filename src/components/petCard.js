import {
  Avatar,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Button,
  Collapse,
  Container,
} from "@material-ui/core"
import Card from "@material-ui/core/Card"
import { makeStyles } from "@material-ui/core/styles"
import PetsIcon from "@material-ui/icons/Pets"
import React from "react"

const useStyles = makeStyles({
  avatar: {
    backgroundColor: "white",
    border: "1px solid black",
    color: "black",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  flexSpace: {
    flex: 1,
  },
  cardStyle: {
    backgroundColor: "lightBlue",
    border: "1px solid black",
    boxShadow: "1px 2px 2px black",
  },
  descStyle: {
    fontSize: "20px",
  },
  buttonStyle: {
    padding: "7px",
    margin: "20px",
    textAlign: "center",
    fontWeight: "bold",
    width: "50%",
  },
})

export default function PetCard(props) {
  const [show, setShow] = React.useState(false)
  const handleShowClick = () => {
    setShow(!show)
  }

  const classes = useStyles()

  return (
    <Card className={classes.cardStyle}>
      <CardHeader
        className={classes.title}
        avatar={
          <Avatar aria-label={props.name} className={classes.avatar}>
            {props.initial}
          </Avatar>
        }
        title={props.name}
        subheader={props.shortDesc}
      ></CardHeader>

      <CardMedia
        className={classes.media}
        image={props.path}
        title={props.name}
      />
      <Container style={{ textAlign: "center" }}>
        <Button
          className={classes.buttonStyle}
          onClick={handleShowClick}
          size="small"
          color="primary"
          variant="contained"
        >
          <PetsIcon />
          Scopri di più!
        </Button>
      </Container>

      <Collapse in={show} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph className={classes.descStyle}>
            {props.desc}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}
