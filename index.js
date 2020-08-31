import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';
import React, { Component } from 'react';
import Slider from './Slider';
import SignUpBanner from '../SignUpBanner';
import NewLibrary from '../NewLibrary';
import { connect } from 'react-redux';
import { getGames } from '../../redux/actions';
import Link from 'next/link';
import VideoPopup from '../VideoPopup';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = {steamGame: '', epicGame: '', video: false, url: '', games: []}
  }

  componentDidMount() {
    fetch('https://the-gaming-project-241406.firebaseio.com/games/tgpGames2.json')
    .then(res => res.json())
    .then(res => {
      let allGames = [
        'SGW2',
        'LOTF',
        'Extinction',
        'Away',
        'Splasher',
        'Grip',
        'BoilingBolt',
        'SGW3',
        'SteelRats',
        'TFITF',
        'Impulsion',
        'Outcast',
        'WRC4',
        'Tempest',
        'Pankapu',
        'DragoDino',
        'Anarcute',
        'Supertrucks',
        'Strikers',
      ]
      let games = [];
      allGames.forEach(game => {
          games.push({appid: game, desc: res[game].desc, free: res[game].free, title: res[game].title})
      })
      this.setState({games});
    })
  }

  onSteamChange = event => {
    if (event.target && event.target.value !== 'on') this.setState({steamGame: event.target.value});        
  }

  onEpicChange = event => {
    if (event.target && event.target.value !== 'on') this.setState({epicGame: event.target.value});        
  }

  videoClick = (event) => {
    this.setState({url: 'https://storage.googleapis.com/thegamingproject/games/'+event.target.id+'.mp4', video: true})
  }

  closeVideo = () => {
    this.setState({video: false})
  }

  handleSteamClick = () => {
    if (this.props.auth.emailVerified) {
      this.props.showStream(true, this.state.steamGame)
    } else {
      alert('Please Verify your email before playing on Steam');
    }
  }

  handleEpicClick = () => {
    if (this.props.auth.emailVerified) {
      this.props.showStream(true, this.state.epicGame)
    } else {
      alert('Please Verify your email before playing on Epic');
    }
  }

  render() {
    const { auth, profile, ftpGames, mobileGames, epicGames, type} = this.props;
    const { steamGame, epicGame, games, video, url } = this.state;
    var tgpGames = [], tgpGames1 = [], tgpGames2 = [], tgpGames3 = [], tgpGames4 = [];
    const HtmlTooltip = withStyles((theme) => ({
      tooltip: {
        backgroundColor: 'white',
        color: 'black',
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(12),
        border: '1px solid #dadde9',
        interactive:'true',
        leaveDelay:100,
      },
    }))(Tooltip);
    if (games && type === 'Library') {
      games.forEach((game, index) => tgpGames.push({
        id: index,
        image: 'https://storage.googleapis.com/thegamingproject/games/' + game.appid + '/header.jpg',
        appid: game.appid,
        title: game.title,
        desc: game.desc,
        free: game.free,
        playable: false,
        overlay: true,
        videoBg: 'https://storage.googleapis.com/thegamingproject/games/' + game.appid + '/videoBg.mp4'
      }));
    } else if (games && profile){
      if (profile.plan !== 'basic'){
        games.forEach((game, index) => tgpGames.push({
          id: index,
          image: 'https://storage.googleapis.com/thegamingproject/games/' + game.appid + '/header.jpg',
          appid: game.appid,
          title: game.title,
          desc: game.desc,
          free: game.free,
          playable: true,
          overlay: true,
          videoBg: 'https://storage.googleapis.com/thegamingproject/games/' + game.appid + '/videoBg.mp4'
        }));
      } else {
        games.forEach((game, index) => tgpGames.push({
          id: index,
          image: 'https://storage.googleapis.com/thegamingproject/games/' + game.appid + '/header.jpg',
          appid: game.appid,
          title: game.title,
          desc: game.desc,
          free: game.free,
          playable: game.free,
          overlay: game.free,
          videoBg: 'https://storage.googleapis.com/thegamingproject/games/' + game.appid + '/videoBg.mp4'
        }));
      }
    }
    tgpGames1 = tgpGames.filter((game, index) => index <= 4)
    tgpGames2 = tgpGames.filter((game, index) => index > 4 && index <= 9)
    tgpGames3 = tgpGames.filter((game, index) => index > 9 && index <=14)
    tgpGames4 = tgpGames.filter((game, index) => index > 14)
    return (
      <div className="app">
        {
          type === 'Library'?
          <div>
            <Head>
              <title>Library | The Gaming Project | India's First Cloud Gaming Service</title>
              <meta name="description" content="Pricing for The Gaming Project. India's first cloud gaming service. Play any game you want, without having a gaming PC."></meta>
              <meta name="keywords" content="cloud gaming,cloud gaming India,game streaming,gaming" />
              <meta property="og:title" content="Library | The Gaming Project | India's First Cloud Gaming Service" />
              <meta property="og:description" content="Pricing for The Gaming Project. India's first cloud gaming service. Play any game you want, without having a gaming PC." />
              <meta property="og:url" content="https://thegamingproject.co/library" />
              <meta property="og:image" content="https://storage.googleapis.com/thegamingproject/blogs/library.jpg" />
              <meta property="og:type" content="website" />
              <link rel="canonical" href="https://thegamingproject.co/library" />
            </Head>
          </div>
          :<div />
        }
        <Header />
        {
          tgpGames1.length ?
          <div>
            <Slider startGame={this.props.showStream}>
              {tgpGames1.map(game => (<Slider.Item game={game} key={game.id} startGame={this.props.showStream}>item1</Slider.Item>))}
            </Slider>
            <Slider startGame={this.props.showStream}>
              {tgpGames2.map(game => (<Slider.Item game={game} key={game.id} startGame={this.props.showStream}>item1</Slider.Item>))}
            </Slider>
            <Slider startGame={this.props.showStream}>
              {tgpGames3.map(game => (<Slider.Item game={game} key={game.id} startGame={this.props.showStream}>item1</Slider.Item>))}
            </Slider>
            <Slider startGame={this.props.showStream}>
              {tgpGames4.map(game => (<Slider.Item game={game} key={game.id} startGame={this.props.showStream}>item1</Slider.Item>))}
            </Slider>
            { type === 'Library' && !auth.uid ? <SignUpBanner /> : <div /> }
          </div>:
          <div className="loaderforDatabase"/>
        }
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getGames: () => dispatch(getGames())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Library);









   