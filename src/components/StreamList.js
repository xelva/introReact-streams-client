import React, { useEffect } from 'react';
import { connect, connet } from 'react-redux';
import { fetchStreams } from '../actions';
import { Link } from 'react-router-dom';

const StreamList = ({ streams, currentUserId, isSignedIn, fetchStreams }) => {
    useEffect(()=>{
        fetchStreams();
    }, [])

    const renderAdmin = (stream) => {
        if (stream.userId === currentUserId) {
            return (
                <div className="right floated content">
                    <Link to={`/edit/${stream.id}`} className="ui button primary">EDIT</Link>
                    <Link to={`/delete/${stream.id}`} className="ui button negative">DELETE</Link>
                </div>
            )
        }
    }

    const renderList = () => {
        return streams.map(stream => {
            return (
                <div className="item" key={stream.id}>
                    {renderAdmin(stream)}
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        <Link to={`/show/${stream.id}`}>{stream.title}</Link>
                        <div className="description">{stream.description}</div>
                    </div>
                    
                </div>
            )
        })
    }

    const renderCreate = () => {
        if (isSignedIn) {
            return (
                <div style={{ textAlign: 'right' }}>
                    <Link to="/new" className="ui button primary">
                        Create
                    </Link>
                </div>
            )
        }
    }

    return (
        <div>
            <h2>Streams</h2>
            <div className="ui celled list">
                {renderList()}
            </div>
            {renderCreate()}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);