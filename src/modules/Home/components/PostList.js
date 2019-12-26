import React, { Fragment } from 'react';
import '../styles/CommunityStyle.css';
import Community from './Community';

import food from '../../../assets/images/food1.jpg';
import instagramPic from '../../../assets/images/instagram-btn.png';
import BG1 from '../../../assets/images/detail03.png';
const PostList = ({ PostData }) => {
    return (
        <div className="community-main">
            <div className="community-inner-main">
                <section align="center" className="community-title">
                    <div>MEET OUR</div>
                    <div>COMMUNITY</div>
                </section>
               
               
                <div >
                    
                    {  PostData.map(post => <Community key={`${post.UserID}`} Post={post} />)}
             

                </div>

            </div>
        </div>

    )
}

export default PostList;