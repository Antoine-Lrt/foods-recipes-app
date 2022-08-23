import {Action} from './actions'


const initialState = {
    recipes: [],
    categories: [],
    favList: [],
    users: [],
}

export default function (state = initialState, action){
    switch(action.type){
        

        case Action.GET_RECIPES:
            return {
                ...state,
                recipes: action.payload
            }
        case Action.GET_CATEGORY:
            return {
                ...state,
                categories: action.payload
            }
        case Action.ADD_TO_FAVORITES:
            return {
                ...state,
                favList: [...state.favList, action.payload]
            }
        case Action.REMOVE_FROM_FAVORITES:
            return {
                ...state,
                favList: state.favList.filter((recipe) => recipe.id !== action.payload.id)
            }
        default:
            return state
    }
}