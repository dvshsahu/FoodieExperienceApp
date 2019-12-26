import React, { Fragment } from 'react';
import '../styles/MenuStyle.css';

import MenuCategory from './MenuCategory';

const MenuList = ({MenuData}) => {
    return (
        <Fragment>
            <div className="menu-main">
                <div className="menu-inner-main">
                    <section align="center" className="menu-title">
                        <div >OUR MENU</div>
                        <button style={{ margin: '2px 2px 2px 2px', paddingTop: '6px', paddingBottom: '6px' }} className="btn-style" >SEE ALL</button>
                    </section>
                    {/* ROW BEGINS */}
                    <div className="row">
                            {
                                MenuData.map(menuItem => <MenuCategory key={`${menuItem.type}`} menuItem = {menuItem}/>)
                            }
                        
                      </div>
                </div>
            </div>
        </Fragment>
    )
}

export default MenuList;