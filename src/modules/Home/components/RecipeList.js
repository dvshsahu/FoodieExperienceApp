import React from 'react';
import Recipe from './Recipe';

const RecipeList = (props) => {

    return (
        <div className="recipe-main">
            <div className="community-inner-main">
                <section className="recipe-title" style={{ float: 'left' }}>
                    <div>POPULAR</div>
                    <div>RECIPES</div>
                    <button style={{ margin: '2px 2px 2px 2px', paddingTop: '6px', paddingBottom: '6px' }} className="btn-style" >SEE ALL</button>
                </section>
                <div className="recipe-right-content">
                    DO YOU WANT TO SHARE YOUR OWN RECIPE?
                            <br />
                    <div align="right">
                        <button style={{ margin: '2px 2px 2px 2px', paddingTop: '6px', paddingBottom: '6px' }} className="btn-style" >SEND IT NOW</button>
                    </div>
                </div>
                {/* ROW BEGINS */}
                <div className="row recipe">
                    {
                        props.RecipeList.map(recipeItem => <Recipe recipe={recipeItem} key={`${recipeItem.RecipeId}`} />)
                    }
                </div>

            </div>
        </div>

    )
}


export default RecipeList;