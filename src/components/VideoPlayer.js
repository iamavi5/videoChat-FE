import React, { useContext } from 'react'
import {Grid, Typography,Paper} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {SocketContext} from '../SocketContext'

const useStyles = makeStyles((theme) => ({
    video: {
      
      width: '550px',
      [theme.breakpoints.down('xs')]: {
        width: '300px',
      },
    },
    gridContainer: {
      justifyContent: 'center',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
      },
    },
    paper: {
      backgroundColor:'#74A18E',
      padding: '10px',
      border: '2px solid grey',
      margin: '10px',
    },
  }));

const VideoPlayer =()=>{

    const {name,callAccepted,MyVideo,userVideo,callEnded,stream,call} = useContext(SocketContext)
    const classes = useStyles()
    return(
        <Grid container className={classes.gridContainer}>
            {/*our own video*/}
            {
                stream && (
                    <Paper className={classes.paper}>
                        <Grid item xs={12} md={6}>
                            <Typography variant='h5' style={{ textAlign: 'center' ,color:'#000000', marginBottom:'15px', padding:'3px'}}><b>{name || "Name"}</b></Typography>
                            <video playsInline muted ref={MyVideo} autoPlay className={classes.video} />
                        </Grid>
                    </Paper>
                )
            }
            
            {/*user video*/}
            {
                callAccepted && !callEnded && (
                    <Paper className={classes.paper}>
                        <Grid item xs={12} md={6}>
                            <Typography variant='h5' gutterBottom>{call.name || "Name"}</Typography>
                            <video playsInline ref={userVideo} autoPlay className={classes.video} />
                        </Grid>
                    </Paper>
                )
            }
        </Grid>
    )
}
export default VideoPlayer