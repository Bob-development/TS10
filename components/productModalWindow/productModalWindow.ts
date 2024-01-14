import { IComponent } from "../../src/interfaces";
import { Component } from "../../src/core";
import { Button } from "../../components/button/button";
import { Input } from "../input/input";

import './productModalWindow.css'

export class productModalWindow implements IComponent {
    private component: Component;
    private title: Input;
    private price: Input;
    
    constructor(isAdmin?:boolean, product: object){
        this.title = new Input({
            className: 'product-title',
            attrs: {
                value: ``
            }
        })

        this.component = new Component({
            tagName: 'div',
            className: 'product-info'
        })   
    }


    getComponent(): HTMLElement {
        return this.component.getComponent()
    }

}