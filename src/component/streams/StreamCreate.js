import React from 'react';
import {Field,reduxForm} from "redux-form";
import {connect} from "react-redux";

import {createStream} from "../../actions";

class StreamCreate extends React.Component{
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
        const className = `field ${meta.error && meta.touched ? "error":""}`;
        return(
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete={"off"}/>
                {this.renderError(meta)}
            </div>
        )
    }

    onSubmit = (formValues) =>{
        // formValues.preventDefault() you don't need this
        console.log(formValues)
        this.props.createStream(formValues)
    }

    // renderedInput(formInput){
    //     console.log(formInput)
    //     return(
    //         <input {...formInput.input}/>
    //     )
    // }

    render() {
        return (
            <form className={"ui form error"} onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field
                    name={"title"}
                    component={this.renderedInput}
                    label={"Title *"}
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
}

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

const mapStateToProps = () =>{
    return {}
}

const formWrapped =  reduxForm({
    form:"streamCreate",
    validate:validate
})(StreamCreate);

export default connect(mapStateToProps, {createStream})(formWrapped)
