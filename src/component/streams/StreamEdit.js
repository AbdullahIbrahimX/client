import React from 'react';
import {connect} from "react-redux";
import {fetchStream} from "../../actions";

const StreamEdit = (props) => {
    console.log(props)
    return (
        <div>
            fs
        </div>
    );
};

const mapStateToProps = (state,ownProps) =>{
    console.log(state);
    console.log(ownProps)
    return{
        currentStream:state.fetchStream(state.match.params.id)

    }
}

export default connect(mapStateToProps,{fetchStream})(StreamEdit);
