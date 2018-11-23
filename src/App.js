import React, {Component} from 'react';
import {createMuiTheme, MuiThemeProvider, withStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import VideoApp from './Youtube/video-app';
import BookApp from './Library/book-app';
import WeatherApp from './Weather/weather-app';
import BlogApp from './Blog/blog-app';
import testApp from './testFRED/testApp';
import {BrowserRouter, Link, Route} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar/AppBar';
/*
import '../style/style.css';
*/
import {Switch} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'
import Tabs from "@material-ui/core/Tabs/Tabs";
import Tab from "@material-ui/core/Tab/Tab";
import NoMatch from "./noMatch";
import Home from "./home";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#4dabf5',
            main: '#2196f3',
            dark: '#1769aa',
            contrastText: '#fff',
        },
        secondary: {
            light: '#f05545',
            main: '#b71c1c',
            dark: '#7f0000',
            contrastText: '#ffffff',
        },
    },
});

const history = createBrowserHistory();

const styles = theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: '95%',
            marginTop: '10px',
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    menu: {
        textDecoration: 'none',
    }
});

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: window.location.pathname,
        };
    }

    handleChange = (event, value) => {
        this.setState({value});
    };

    render() {
        const {classes} = this.props;
        const {value} = this.state;

        return (
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <BrowserRouter basename={"/"} history={history}>
                    <Route
                        render={({ location }) => (
                            <div>
                                <AppBar position="static" className={'app-bar'}>
                                    <Tabs value={value} onChange={this.handleChange} className={classes.menu}>
                                        <Tab label="Home" value={"/"} component={Link} to="/"/>
                                        <Tab label="Video" value={"/video"} component={Link} to="/video"/>
                                        <Tab label="Book" value={"/book"} component={Link} to="/book"/>
                                        <Tab label="Weather" value={"/weather"} component={Link} to="/weather"/>
                                        <Tab label="Blog" value={"/blog"} component={Link} to="/blog"/>
                                        <Tab label="test bar" value={"/test"} component={Link} to="/test"/>
                                    </Tabs>
                                </AppBar>
                                <div className={classes.layout}>
                                    <TransitionGroup>
                                        <CSSTransition
                                            key={location.key}
                                            classNames="fade"
                                            timeout={300}
                                        >
                                            <Switch location={location}>
                                                <Route exact path="/" component={Home}/>
                                                <Route exact path="/video" component={VideoApp}/>
                                                <Route exact path="/book" component={BookApp}/>
                                                <Route exact path="/weather" component={WeatherApp}/>
                                                <Route path="/blog*" component={BlogApp}/>

                                                <Route exact path="/test" component={testApp}/>
                                                <Route component={NoMatch}/>
                                            </Switch>
                                        </CSSTransition>
                                    </TransitionGroup>
                                </div>
                            </div>
                            )
                        }/>
                </BrowserRouter>
            </MuiThemeProvider>
        );
    }
}

export default withStyles(styles)(App);

/*
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
*/
