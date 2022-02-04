import './App.css';
import Dialogs from './contentsJSX/Dialogs/dialog';
import Header from './contentsJSX/Hader/header';
import Navbar from './contentsJSX/Navbar/navbar';
import Profile from './contentsJSX/Profile/profile';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Video from './contentsJSX/Video/video';
import News from './contentsJSX/News/news';
import Contact from './contentsJSX/Contact/contact';
import Friends from './contentsJSX/Navbar/Friends/friends';
import { addPost } from './redux/stata';




function App(props) {

  return (

    <Router>

      <div className='app-wrapper'>
        <Header />
        <Navbar />

        <div className='app-wrapper-content'>
          <Switch>
            <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage.postsData} addPost={props.addPost} />}></Route>
            <Route path='/dialogs' render={() => <Dialogs dialogData={props.state.messagePage.dialogData} messagData={props.state.messagePage.messagData} />}></Route>
            <Route path='/news'> <News /> </Route>
            <Route path='/video'> <Video /> </Route>
            <Route path='/contact'><Contact /></Route>


            <Route path='/friends'><Friends /></Route>
            {/* <Route path='/dialogs'><Dialogs /></Route> */}
          </Switch>
        </div>
      </div>

    </Router >




  )
};





export default App;
