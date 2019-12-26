import { GET_MENU_LIST, GET_RECIPE_LIST, GET_USER_POSTS_LIST } from "../../../redux/ActionTypes";



export const getMenuItemList = () => async (dispatch) => {
    try {

        let data = await (await fetch('./Assets/json/MenuData.json')).json();
        // let data = 'enw';
        dispatch({ type: GET_MENU_LIST, payload: data });
    }
    catch (e) {
        console.log(e);
    }
};

export const getRecipeList = () => async (dispatch) => {
     try {
        let data = await (await fetch('./Assets/json/RecipesData.json')).json();
         dispatch({type : GET_RECIPE_LIST, payload : data});
     }
     catch(e) {
         console.log(e);
     }
};

export const getPostsList = () => async (dispatch) => {
    try{
        let data = await (await fetch('./Assets/json/CommunityData.json')).json();
        dispatch({type : GET_USER_POSTS_LIST, payload : data});
    }
    catch(e) {
        console.log(e);
    }
};