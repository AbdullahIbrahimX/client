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

const mapStateToProps = (state) =>{

}

export default connect(mapStateToProps,{fetchStream})(StreamEdit);
