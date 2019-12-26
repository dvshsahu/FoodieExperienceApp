import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { getMenuItemList,getRecipeList, getPostsList } from '../actions/HomeAction';
import '../styles/HomeStyle.css';
import stamp from '../../../assets/images/stamp.png';
import HeaderComponent from '../../shared/components/HeaderComponent';
import RecipeList from './RecipeList';
import MenuList from './MenuList';
import PostList from './PostList';

class Home extends React.Component {

    componentDidMount() {
        this.getPostsData();
        this.getMenuData();
        this.getRecipeData();
    }

    getMenuData = () => {
        this.props.getDataForMenu();
    }

    getRecipeData = () => {
        this.props.getDataForRecipe();
    }

    getPostsData = () => {
        this.props.getDataForPosts();
    }

    render() {
        return (
            <Fragment>
                <div className="foodie-home">
                    <HeaderComponent />
                    <img src={stamp} className='stamp' alt="Stamp logo" />
                    <section align="center" className="title-tag">
                        <div className="title-1">THE BEST FOODIE </div>
                        <div className="title-2">EXPERIENCE </div>
                        <div className="title-3">NOW IN LONDON </div>
                    </section>
                </div>
                <PostList PostData = {this.props.PostsList}/>
                <MenuList MenuData = {this.props.MenuList} />
                <RecipeList RecipeList = {this.props.RecipeList}/>
            </Fragment>
        )
    }
}

const mapDispatchToProps = {
    getDataForMenu: getMenuItemList,
    getDataForRecipe : getRecipeList,
    getDataForPosts : getPostsList
};

const mapStateToProps = (state) => ({
    MenuList: state.home.MenuList,
    RecipeList : state.home.RecipeList,
    PostsList : state.home.PostsList
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);