import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../actions'; 
import StreamForm from './StreamForm';
import _ from 'lodash';



const StreamEdit = ({ stream, fetchStream, editStream, match }) => {
    
    useEffect(()=>{
        fetchStream(match.params.id);
    }, [])

    const onSubmit = (formValues) => {
        editStream(match.params.id, formValues)
    }

    if (!stream) {
        return <div>loading...</div>
    }
    return (
        <div>
           <h3>Edit a Stream</h3>
           <StreamForm 
           onSubmit={onSubmit} 
           initialValues={_.pick(stream, 'title', 'description')}/>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);