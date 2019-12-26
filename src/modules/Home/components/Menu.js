import React, { Fragment } from 'react';

const Menu = ({MenuItem}) => {
    return (
        <div style={{marginTop:'40px'}} >
            <div className="menuitem-name">{MenuItem.ItemName}</div>
            <div className="menuitem-desc">{MenuItem.ItemDesc}</div>
            <div className="menuitem-price">
                <span>£{MenuItem.ItemPrice}</span>
            </div>
        </div>

    )
}
export default Menu;