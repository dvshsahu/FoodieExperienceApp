import React from 'react';
import Menu from './Menu';
const MenuCategory = (props) => {
    return (
        <div className="column menuitem">
            <div className="menuitem-heading">{props.menuItem.type}</div>
            {
                props.menuItem.item.map(menuItem => <Menu key={`${menuItem.ItemID}`} MenuItem={menuItem} />)
            }
        </div>
    )
}

export default MenuCategory;