import React from 'react';
import {IWish} from "./Interfaces";

interface IProps {
    wish: IWish;
}

const WishListItem = (props: IProps) => {
    return (

        <div>
            {props.wish.name}: ${props.wish.price}/date: {props.wish.date}
        </div>

    );
};

export default WishListItem;
