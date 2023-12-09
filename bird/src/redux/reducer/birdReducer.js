import {ADD_BIRD,DELETE_BIRD,LIKE_BIRD} from "../action/actionTypes";

const initialstate=[];

const birdReducer=(state=initialstate,action)=>{
    if(action.type==ADD_BIRD){
        return[...state,action.payload];
    }
    else if(action.type==LIKE_BIRD){
        // let newarr=JSON.stringify(state);
        // let arr=JSON.parse(newarr);
        
        // arr.forEach(val=>{
        //     if(val.id==Number(action.payload)){
        //         val.likes++;
        //     }
        // })
        // return arr;
        let new_arr=JSON.stringify(state);
        let arr=JSON.parse(new_arr)
        arr.map((value)=>{
            if(value.id===action.payload){
                value.likes++
            }

        })
        return arr;
    }
    else if(action.type==DELETE_BIRD){
        // return state.filter(val=>Number(action.payload)!=val.id);
        return state.filter((value)=>value.id!==action.payload)
    }
    return state;
}
export default birdReducer;