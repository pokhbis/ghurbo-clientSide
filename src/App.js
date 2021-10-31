import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AddTours from './components/AddTours/AddTours';
import Banner from './components/Banner/Banner';
// import Comments from './components/Comments/Comments';
import Booking from './components/Booking/Booking';
import BookingSuccess from './components/BookingSuccess/BookingSuccess';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Logout from './components/LogOut/Logout';
import MyBooking from './components/MyBooking/MyBooking';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Review from './components/Review/Review';
import Tours from './components/Tours/Tours';
import WhyUs from './components/WhyUs/WhyUs';
import AuthProvider from './Context/AuthProvider';
import initializeAuthentication from './Firebase/firebase.initialize';

initializeAuthentication();

function App() {
  return (
    <div className="App">
      <AuthProvider>

        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route path='/banner'>
              <Banner></Banner>
            </Route>
            <Route path='/tours'>
              <Tours></Tours>
            </Route>
            <PrivateRoute path='/booking'>
              <Booking></Booking>
            </PrivateRoute>
            <Route path='/whyus'>
              <WhyUs></WhyUs>
            </Route>
            <Route path='/review'>
              <Review></Review>
            </Route>
            <Route path='/addTours'>
              <AddTours></AddTours>
            </Route>
            <Route path='/myBooking'>
              <MyBooking></MyBooking>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/bookingSuccess'>
              <BookingSuccess></BookingSuccess>
            </Route>
            <Route path='/logout'>
              <Logout></Logout>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>


      </AuthProvider>
    </div>
  );
}

export default App;
