import React from 'react';
import Modal from "../Modal";
import history from "../../history";
import {deleteStream, fetchStream} from "../../actions";
import {connect} from "react-redux";
import LoadingScreen from "./LoadingScreen";
import {Link} from "react-router-dom";

const StreamDelete = (props) => {

    props.fetchStream(props.match.params.id)

    const onDelete = () => {
        props.deleteStream(props.match.params.id)
    }
    const onDismiss = () => {
        history.push("/")
    }

    const renderActions = (
        <React.Fragment>
            <Link to={"/"} className={"ui button"}>Cancel</Link>
            <button className={"ui button negative"} onClick={onDelete}>Delete</button>
        </React.Fragment>
    )

    if (!props.stream){
        return (
            <div>
                <LoadingScreen
                    title={"Loading ... "}
                />
            </div>
        )
    }
    return (
        <div>
            <Modal
                title={"Delete Stream"}
                content={"Are you sure you want to delete the stream \"" + props.stream.title + "\""}
                actions={renderActions}
                onDismiss={onDismiss}
            />
        </div>
    );
};

const mapStateToProps = (state,ownProps) => {
    return{
        stream:state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps,{fetchStream,deleteStream})(StreamDelete);
