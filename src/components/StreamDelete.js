import React, { useEffect } from 'react';
import Modal from './Modal';
import history from '../history';
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../actions'; 
import { Link } from 'react-router-dom';


const header = 'Delete Stream';


const StreamDelete = ({ stream, match, fetchStream, deleteStream }) => {
    
    const buttons = () => {
        return (
        <>
            <button onClick={() => deleteStream(match.params.id)} className="ui primary button">Delete</button>
            <Link to="/" className="ui button">Cancel</Link>
        </>
        )
    }

    const renderContent = () => {
        if (!stream) {
            return 'Are you sure you want to delete this stream?'
        }

        return `Are you sure you want to delete the stream with title: ${stream.title}`
    }


    return (
            <Modal 
                header={header} 
                content={renderContent()} 
                buttons={buttons()}
                onDismiss={() => history.push('/')}
            />
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);