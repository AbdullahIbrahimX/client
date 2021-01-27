import React  from 'react';
import {connect} from "react-redux";
import {editStream, fetchStream} from "../../actions";
import {reduxForm} from "redux-form";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component{
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    onSubmit = ({title,description}) =>{
        this.props.editStream(this.props.match.params.id,{title,description})
    }

    render() {
        if (!this.props.stream){
            return (
                <div className={"ui active inverted dimmer"}>
                    <div className={"ui text loader"}>
                        Loading ...
                    </div>
                </div>
            )
        }

        return (
            <div>
                <StreamForm onSubmit={this.onSubmit} initialValues={this.props.stream}/>
            </div>
        );
    }


};

const mapStateToProps = (state,ownProps) =>{
    return{
        stream: state.streams[ownProps.match.params.id]
    }
}

const wrappedForm= reduxForm({
    form:"editStream"
})(StreamEdit)
export default connect(mapStateToProps,{fetchStream,editStream})(wrappedForm);
