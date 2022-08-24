import axios from 'axios';
import { collection, getDoc } from 'firebase/firestore';
import { BASE_URL } from '../../utils/baseUrl';
import { db } from '../../utils/firebase-config';


export const Action = {
    GET_RECIPES : 'fetch_recipes',
    GET_CATEGORY : 'fetch_categories',
    ADD_TO_FAVORITES: 'add_to_fav',
    REMOVE_FROM_FAVORITES: 'remove_fav',
    ON_ERROR: 'on_error',

}

export const fetchRecipes = () => {
    
    try{
        return async(dispatch) => {
            const response = await axios.get(`${BASE_URL}/recipes`)

             console.log(response);

            if(response.data){
                dispatch({
                    type: Action.GET_RECIPES,
                    payload: response.data
                })
            }else {
                dispatch({
                    type: Action.ON_ERROR,
                    payload: 'Unable to fetch Recipes'
                })
            }
        }
    } catch(err){
        dispatch({
            type: Action.ON_ERROR,
            payload: 'Unable to fetch Recipes'
        })
    }
}

export const fetchCategory = () => {

    try{
        return async(dispatch) => {
            
            const response = await axios.get(`${BASE_URL}/category`);

            //  console.log(response);

            if(response.data){
                dispatch({
                    type: Action.GET_CATEGORY,
                    payload: response.data
                })
            }else {
                dispatch({
                    type: Action.ON_ERROR,
                    payload: 'Unable to fetch Recipes'
                })
            }
        }
    } catch(err){
        dispatch({
            type: Action.ON_ERROR,
            payload: 'Unable to fetch Recipes'
        })
    }
}


export const addToFavorites = (recipe) => (dispatch) => {

    dispatch({
        type: Action.ADD_TO_FAVORITES,
        payload: recipe
    })
    
}


export const removeFromFavorites = (recipe) => (dispatch) =>{

    dispatch({
        type: Action.REMOVE_FROM_FAVORITES,
        payload: recipe
    })
    
}


