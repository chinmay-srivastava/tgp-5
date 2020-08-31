import React, { Component } from 'react';

class Player extends Component {
    constructor (props) {
        super(props);

        this.state={ videoURL:this.props.url }
    }

    static getDerivedStateFromProps(nextProps, prevState){
        if (nextProps.url !== prevState.videoURL){
            console.log(nextProps.url);
            return { url: nextProps.url };
        }
        else return null;
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.videoURL !== this.props.url){
            console.log('setting state: ' + this.props.url)
            this.setState({videoURL: this.props.url})
        }
    }

    render() {
        return (
            <video key={this.state.videoURL} id="background-video" className="content__background__image" autoPlay>
                <source src={this.state.videoURL} type="video/mp4" />
                <source src={this.state.videoURL} type="video/ogg" />
                Your browser does not support the video tag.
            </video>
        );
    }
};

export default Player;