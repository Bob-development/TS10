import { IComponent } from "../../src/interfaces";
import { Component } from "../../src/core";
import { Button } from "../../components/button/button";
import { Input } from "../input/input";

import './productModalWindow.css'

export class productModalWindow implements IComponent {
    private component: Component;
    private title: Input;
    private price: Input;
    private description: Component;
    private closeBtnWrapper: Component;
    private closeBtn: Button;
    
    constructor(isAdmin?:boolean, product: object){
        this.title = new Input({
            className: 'product-title',
            attrs: {
                value: `${product.title}`
            }
        })

        this.price = new Input({
            className: 'product-price',
            attrs: {
                value: `${product.price}`
            }
        })

        this.description = new Component({
            tagName: 'textarea',
            className: 'product-description',
            textContent: `${product.description}`
        })

        this.closeBtn = new Button({
            className: 'closeBtn',
            textContent: 'X'
        })

        this.closeBtnWrapper = new Component({
            tagName: 'div',
            className: 'closeBtn-wrapper',
            children: [this.getCloseBtn()]
        })

        this.component = new Component({
            tagName: 'div',
            className: 'product-info',
            children: [this.getCloseBtnWrapper(), this.getTitle(), this.getPrice(), this.getDescription()]
        })   
    }

    getCloseBtn(){
        return this.closeBtn.getComponent()
    }

    getCloseBtnWrapper(){
        return this.closeBtnWrapper.getComponent()
    }

    getTitle(){
        return this.title.getComponent()
    }

    getPrice(){
        return this.price.getComponent()
    }

    getDescription(){
        return this.description.getComponent()
    }


    getComponent(): HTMLElement {
        return this.component.getComponent()
    }

}