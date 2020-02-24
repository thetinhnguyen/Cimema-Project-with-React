import * as Type from '../constants/ActionType'
const initialState={
    movies: [],
    moviesShow: []
}
const moviesReducers=(state=initialState,action)=>{
    switch(action.type){
        case Type.GET_MOVIES:
            
            state.movies=[...action.movies]
            state.moviesShow=[...action.movies.slice(0,12)]
            return {...state}
        case Type.SHOW_MOVIES:
            if(action.check===0){
                state.moviesShow=[...state.movies.slice(0,10)]
            }
            else{
                state.moviesShow=[...state.movies.slice(13,19)]
            }
        return {...state}
        default:
            return state
    }
}
export default moviesReducers 