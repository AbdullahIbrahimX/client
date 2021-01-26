import React  from 'react';
import {connect} from "react-redux";
import {editStream, fetchStream} from "../../actions";
import {Field, reduxForm} from "redux-form";

class StreamEdit extends React.Component{
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    renderError ({error,touched}){
        if (error && touched){
            return(
                <div className={"ui error message"}>
                    <div className={"header"}>
                        {error}
                    </div>
                </div>
            )
        }
    }

    renderedInput = ({input,label,meta}) =>{
        if(this.props.streams) {
            console.log(input)
            const className = `field ${meta.error && meta.touched ? "error":""}`;
            return(
                <div className={className}>
                    <label>{label}</label>
                    <input {...input} autoComplete={"off"}/>
                    {this.renderError(meta)}
                </div>
            )
        }else{
           return null
        }
    }

    onSubmit = (formValues) =>{
        this.props.editStream(this.props.match.params.id,formValues)
    }

    render() {
        return (
            <form className={"ui form error"} onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field
                    name={"title"}
                    component={this.renderedInput}
                    label={"Title"}
                />
                <Field
                    name={"description"}
                    component={this.renderedInput}
                    label={"Description"}
                />
                <button className={"ui button secondary"}>Submit</button>
            </form>
        );
    }


};
const validate = (formValues)=>{
    const errors = {};
    if (!formValues.title ){
        errors.title = "please enter a value for title"
    }
    if (!formValues.description || formValues.description.length<25){
        errors.description = "It's ok to put no value here but I'm following instructions :)"
    }
    return errors;
}

const mapStateToProps = (state) =>{
    return{
        streams:Object.values(state.streams)
    }
}

const wrappedForm= reduxForm({
    form:"editStream",
    validate:validate
})(StreamEdit)
export default connect(mapStateToProps,{fetchStream,editStream})(wrappedForm);