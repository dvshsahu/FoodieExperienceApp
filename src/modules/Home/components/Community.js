import React, { Component, Fragment } from 'react';
import '../styles/CommunityStyle.css';
import food from '../../../assets/images/food1.jpg';
import instagramPic from '../../../assets/images/instagram-btn.png';
import BG1 from '../../../assets/images/detail03.png';

const Community = ({ Post }) => {

    return (

        <Fragment>

            {(Post.UserID % 2 == 0) &&
                <div className="row">
                    <div className="column">
                        <div className="card1">
                        </div>
                    </div>
                    <div className="column">
                        <div className="">
                            <div style={{ fontSize: '24px' }} className="content-container">
                                {Post.MsgDesc}
                            </div>
                        </div>
                    </div>

                    <div style={{ flex: '2 2' }} className="column">
                        <div style={{ position: 'relative' }}>
                            <img src={BG1} className="details-bg" />
                        </div>
                        <div >
                            <div className="card inner-card">
                                <img src={instagramPic} className="insta-pic" />
                                <div className="community-container">
                                    <img src={require(`../../../assets/images/${Post.ItemImage}.jpg`)} className="community-pic" style={{ padding: '8px' }} />
                                </div>
                            </div>
                            <div className="card inner-card">
                                <div className="content-container">
                                    <div style={{ marginBottom: '8px' }}>
                                        {Post.UserName}
                                    </div>
                                    <br />
                                    {Post.UserMsg}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {(Post.UserID % 2 != 0 )&&
                <div className="row">
                    <div style={{ flex: '2 2' }} className="column">
                        <div style={{ position: 'relative' }}>
                            <img src={BG1} className="details-bg" />
                        </div>
                        <div >
                            <div className="inner-card card ">
                                <div className="content-container">
                                    <div style={{ marginBottom: '8px' }}>
                                        @buzzfeedfood
                                   </div>
                                    <br />
                                    It’s taco Tuesday! These tacos from @jesseszewczyk have no added sugars and are SO good .
                                    <br />
                                    Find the recipe from the link in our bio! : @taylormillerphoto

                                    </div>
                            </div>

                            <div className="inner-card card ">
                                <img src={instagramPic} className="insta-pic" />
                                <div className="community-container">
                                    <img src={food} className="community-pic" style={{ padding: '8px' }} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="column">
                        <div className="">
                            <div style={{ fontSize: '24px' }} className="content-container">
                                LOREM IPSUM DOLOR SIT AMET ERNUT
                                TEMPARTERO SERTU PER NABORE EN TORNA ENTALTO

                                </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card1">

                        </div>
                    </div>

                </div>

               }

        </Fragment>
    )

}


export default Community;
