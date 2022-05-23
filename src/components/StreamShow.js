import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../actions';
import flv from 'flv.js';


const StreamShow = ({ fetchStream, stream, match, isLoaded }) => {
    const videoRef = useRef(null);
    let player = null;

    useEffect(() => {
        fetchStream(match.params.id);
        
    }, [])

    useEffect(() => {
        buildPlayer()
    }, [isLoaded])
   
    const buildPlayer = () => {
        if (player || !stream) {
            return;
        }
        player = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${match.params.id}.flv`
        })

        player.attachMediaElement(videoRef.current)
        player.load(); 
    }

    if (!stream) {
        return <div>loading...</div>
    }

    return (
        <div>
            <video ref={videoRef} style={{ width: '100%' }} controls/>
            <h1>{stream.title}</h1>
            <h5>{stream.description}</h5>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
   
    return {
        stream: state.streams[ownProps.match.params.id],
        isLoaded: state.isLoaded
    }
}

export default connect(mapStateToProps, { fetchStream })(StreamShow);