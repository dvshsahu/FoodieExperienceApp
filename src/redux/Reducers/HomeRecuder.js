 import { GET_MENU_LIST,GET_RECIPE_LIST, GET_USER_POSTS_LIST } from '../ActionTypes';
 
 let initialState = {
     MenuList : [],
     RecipeList : [],
     PostsList : []

 }

 const HomeRecuder = (state = initialState, action) => {
    switch(action.type) {
        case GET_MENU_LIST: {
            return {...state, MenuList : action.payload} ;
        }
        case GET_RECIPE_LIST: {
            return {...state, RecipeList : action.payload} ;
        }
        case GET_USER_POSTS_LIST: {
            return {...state, PostsList : action.payload} ;
        }
        default : {
            return {...state};
        }

    }
}
export default HomeRecuder;