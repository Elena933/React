import React from 'react';
import WishListItem from "./WishListItem";
import {IWish} from "./Interfaces";
import CreateNewWish from "./CreateNewWish";



interface IProps {
    wishList: IWish[];
    creatNewWish: (newWish: IWish)=> void;
}

const WishList = (props: IProps) => {
    return (
        <div>
            <CreateNewWish creatNewWish={props.creatNewWish}/>
            <h1>Wish List</h1>
            {props.wishList.map(el=> <WishListItem key={el.id}
                                                   wish={el}

            /> )}

        </div>
    );
};

export default WishList;
