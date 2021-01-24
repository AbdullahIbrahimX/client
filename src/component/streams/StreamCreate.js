import React from 'react';
import {Field,reduxForm} from "redux-form";

class StreamCreate extends React.Component{
    renderedInput({input}){
        return(
            <input {...input}/>
        )
    }
    // renderedInput(formInput){
    //     console.log(formInput)
    //     return(
    //         <input {...formInput.input}/>
    //     )
    // }

    render() {
        return (
            <form>
                <Field name={"title"} component={this.renderedInput}/>
                <Field name={"description"} component={this.renderedInput}/>
            </form>
        );
    }
}

export default reduxForm({
    form:"streamCreate"
})(StreamCreate);
