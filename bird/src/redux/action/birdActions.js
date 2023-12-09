import {ADD_BIRD,DELETE_BIRD,LIKE_BIRD} from "./actionTypes"

export const add_bird=(data)=>{
    return{
        type:ADD_BIRD,
        payload:data
    }
}
export const delete_bird=(data)=>{
    return{
        type:DELETE_BIRD,
        payload:data
    }
}
export const like_bird=(data)=>{
    return{
        type:LIKE_BIRD,
        payload:data
    }
}