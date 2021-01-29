import React from 'react';
import {connect} from "react-redux";
import {fetchStreams} from "../../actions";
import {Link} from "react-router-dom";
import LoadingScreen from "./LoadingScreen";


class StreamList extends React.Component{
    componentDidMount() {
        this.props.fetchStreams();
    }

    renderCreateButton() {
        if (this.props.isSignedIn){
            return(
                <div style={{textAlign: "right"}}>
                    <Link to={"/streams/new"} className={"ui button primary"}>
                        Create A Stream
                    </Link>
                </div>
            )
        }
    }

    renderAdmin(stream) {
        if ( stream.userId === this.props.currentUserId){
            return(
                <div className={"right floated content"}>
                    <Link to={`/streams/edit/${stream.id}`} className={"ui button secondary"}>
                        Edit
                    </Link>
                    <Link to={`/streams/delete/${stream.id}`} className={"ui button negative"}>
                        Delete
                    </Link>
                </div>
            )
        }
    }

    renderList(){
        return this.props.streams.map( stream => {
            return(
                <div className={"item"} key={stream.id}>
                    {this.renderAdmin(stream)}
                    <i className={"large middle aligned  icon twitter"}/>
                    <div className={"content"}>
                        <Link to={`/streams/${stream.id}`} className={"header"}>
                            {stream.title}
                        </Link>
                        <div className={"description"}>
                            {stream.description}
                        </div>
                    </div>
                </div>
            )
        })
    }
    render() {
        if (this.props.streams.length === 0){
            return (
                <LoadingScreen title={"Loading Streams ..."}/>
            )
        }
        return(
            <div className={" ui celled list"}>
                {this.renderList()}
                {/*{this.props.isSignedIn ? <Link><button>Create A Stream</button></Link>:null}*/}
                <hr/>
                {this.renderCreateButton()}
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        streams:Object.values(state.streams),
        currentUserId:state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, {fetchStreams})(StreamList);
