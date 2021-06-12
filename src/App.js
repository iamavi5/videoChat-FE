import React, {useState} from 'react'
import {Typography, AppBar,Button} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import Options from './components/Options'
import VideoPlayer from './components/VideoPlayer'
import Notification from './components/Notification'
import Footer from './components/footer'
import {
  ThemeProvider,
  createGlobalStyle
} from 'styled-components'
import style from 'styled-theming';

const getBackground = style('mode', {
  light: '#d1d1e0',
  dark: '#14141f'
});

const getForeground = style('mode', {
  light: '#111',
  dark: '#EEE'
});

const GlobalStyle = createGlobalStyle`
body {
  background-color: ${getBackground};
  color: ${getForeground};
}
`;

const useStyles = makeStyles((theme)=>({
    
    appBar: {
        borderRadius: 15,
        margin: '30px 100px',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor:'#33334d',
        justifyContent: 'center',
        alignItems: 'center',
        width: '600px',
        border: '2px solid black',
    
        [theme.breakpoints.down('xs')]: {
          width: '90%',
        },
      },


      image: {
        marginLeft: '15px',
      },
      wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
      }

}))

const App = ()=>{
  const [theme,setTheme] = useState({mode:'light'})
    const classes = useStyles();
    return(

      <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        
        <div className={classes.wrapper}>
            <AppBar className={classes.appBar} position='static' color='inherit'>
                
                <table>
                <tr><td>
                <Typography variant='h3' align='center' style={{width:'100%', float:'top',display:'block', color:'#3333ff'}}><b>Video Call</b></Typography>

                </td></tr>
                <tr><td style={{align:'center'}}>
                <Button style={{width:'100%', display:'block', marginBottom:'20px'}} onClick={e=>setTheme(theme.mode==='dark'?{mode:'light'}:{mode:'dark'} )} variant="outlined" color='secondary' >Toggle Theme</Button> 
                </td></tr>
                </table>
                
            </AppBar>
            <VideoPlayer />
            <Options>
                <Notification />
            </Options>


            <Footer />
        </div>

        </>
        </ThemeProvider>
    )
}

export default App