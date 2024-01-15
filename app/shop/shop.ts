import { IComponent } from "../../src/interfaces";

import { Component, append, render} from "../../src/core";
import { Button } from "../../components/button/button";
import { getProducts } from "../../utils/getProducts";
import { getStatus } from "../../utils/status";

import './shop.css'

export class Shop implements IComponent{    
    private component: Component;
    private productsWrapper: Component;
    private products: HTMLElement[] = [];
    private productsCount = 5;
    private pageCountWrapper: Component;

    private DEFAULT_PAGE_NUM = 1;
    
    constructor(){
        this.isAdmin = getStatus();
        
        getProducts().forEach((el)=>{
            this.products.push(el.getComponent());
        });

        this.productsWrapper = new Component({
            tagName: 'div',
            className: 'products-wrapper'
        })

        this.setPagination(this.products, this.DEFAULT_PAGE_NUM, this.productsCount)

        this.pageCountWrapper = new Component({
            tagName: 'div',
            className: 'pageCount-btn'
        })

        this.component = new Component({
            tagName: 'div',
            className: 'shop',
            children: [this.getProductsWrapper(), this.getPageCount()]
        })
        
        this.setPageCount(this.productsCount)
    }

    showProducts(){
        this.products = getProducts().map((el) => el.getComponent());

        this.setPagination(this.products, this.DEFAULT_PAGE_NUM, this.productsCount);
    }

    setPageCount(productsCount: number){
        const pageCount = Math.ceil(this.products.length / productsCount);
        
        for(let i = 1; i < pageCount + 1; i++){
            const pageBtn = new Button({
                className: 'page-num-btn',
                textContent: `${i}`,
                events: {
                    click: (e) => {
                        this.setPagination(this.products, e.target.textContent, productsCount)
                    }
                }
            }).getComponent();   

            append(this.getPageCount(), pageBtn)
        }
    }

    setPagination(products: HTMLElement[], pageNum: number, productsCount: number){
        const startPoint = (pageNum - 1) * productsCount;
        const endPoint = pageNum * productsCount;

        const paginateProducts = products.slice(startPoint, endPoint);

        render(this.getProductsWrapper(), paginateProducts);
    }

    getProductsWrapper(){
        return this.productsWrapper.getComponent();
    }

    getPageCount(){
        return this.pageCountWrapper.getComponent();
    }

    getComponent(): HTMLElement {
        return this.component.getComponent();
    }
}