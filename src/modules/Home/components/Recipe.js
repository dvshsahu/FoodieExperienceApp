import React, { Fragment } from 'react';

import '../styles/RecipeStyle.css';
import forwardPic from '../../../assets/images/go-btn.png';
import ChefStamp from '../../../assets/images/chef-stamp.png';

const Recipe = ({recipe}) => {
    

        return (
            <Fragment>
            
                        <div className="column">
                                <img className="recipe-imgStyle" src={require(`../../../assets/images/${recipe.UserImage.toLowerCase()}.jpg`)}  />
                                <img src={forwardPic} className="forward-pic" />
                                {
                                    recipe.IsChefChoice && <img src={ChefStamp} className="chef-stamp" />
                                }
                                <div className="recipe-serving-box">
                                        {recipe.ServingCapacity}
                                        <br />
                                        SERVING
                                    </div>
                                <div style={{paddingBottom:'1px'}} className="card recipeCard">
                                   
                                    <div className="muted-text">{recipe.RecipeDifficultyLevel.toUpperCase()}</div>
                                    <div className="recipe-name">
                                   {recipe.RecipeName}
                                    </div>
                                    <div  className="recipe-desc">
                                   {recipe.RecipeDesc}
                                    </div>
                                </div>
                                <div style={{float:'right',marginTop:'8px'}} className="recipeCard">
                                    {recipe.UserFullName}
                                </div>
                            </div>
                         
            </Fragment>
        )
    
}

export default Recipe