import { IComponent } from "../../src/interfaces";

import { Component, append, render} from "../../src/core";
import { Button } from "../../components/button/button";
import { getProducts } from "../../utils/getProducts";
import { Product } from "../../schemas/product/product";
import { Pagination } from "../../components/pagination/pagination";

import './shop.css'

export class Shop implements IComponent{
    private component: Component;
    private products: HTMLElement[];
    private productsCount = 5;
    private pagination: Pagination;
    
    constructor(){
        this.products = getProducts();

        this.pagination = new Pagination(this.productsCount);

        this.component = new Component({
            tagName: 'div',
            className: 'shop',
        })

        append(this.component.getComponent(), this.products)
    }

    getComponent(): HTMLElement {
        return this.component.getComponent();
    }
}