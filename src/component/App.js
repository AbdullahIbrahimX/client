import React from 'react';
import {Router,Route} from "react-router-dom";

import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";
import history from "../history"

const App = () => {
    return (
        <div className={"ui container"}>
            <Router history={history}>
                <Header/>
                <div>
                    <Route path={"/"} exact component={StreamList}/>
                    <Route path={"/streams/new"} component={StreamCreate}/>
                    <Route path={"/streams/edit/:id"} component={StreamEdit}/>
                    <Route path={"/streams/delete"} component={StreamDelete}/>
                    <Route path={"/streams/show"} component={StreamShow}/>
                </div>
            </Router>
        </div>
    );
};

export default App;

// const PageOne = () =>{
//     return(
//         <div>
//             <h1>Page One</h1>
//             {/*BAD!! You will lose all RAM data if you use this approach*/}
//             {/*<a href={"/pagetwo"}>go to page 2</a>*/}
//             <p>
//                 good!!
//                 <Link to={"/pagetwo"}>go to page 2</Link>
//             </p>
//         </div>
//     )
// }
// const PageTwo = () => {
//     return(
//         <div>
//             <h1>Page Two</h1>
//             <button>Click him</button>
//
//             {/*BAD!! You will lose all RAM data if you use this approach*/}
//             {/*<a href={"/"}>go to page 1</a>*/}
//             <p>
//                 good!!
//                 <Link to={"/"}>go to page 2</Link>
//             </p>
//         </div>
//     )
// }
