import { Shop } from "../app/shop/shop";

let shop; 

export const setShop = () => {
    shop = new Shop()
}

export const getShop = () => shop;