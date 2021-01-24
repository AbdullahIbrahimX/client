import {SIGN_IN,SIGN_OUT} from "./types";

export const signIn = (currentUserId) =>{
    return{
        type:SIGN_IN,
        payload:currentUserId
    }
}

export const signOut = () =>{
    return{
        type:SIGN_OUT
    }
}
