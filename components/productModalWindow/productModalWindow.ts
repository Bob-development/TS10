import { IComponent } from "../../src/interfaces";
import { Component, append, render } from "../../src/core";
import { Button } from "../../components/button/button";
import { Input } from "../input/input";
import { Product } from "../../schemas/product/product";

import { app } from "../../src/main";
import { getProducts } from "../../utils/getProducts";

import './productModalWindow.css'

export class productModalWindow implements IComponent {
    private component: Component;
    private products: [];
    private title: Input;
    private price: Input;
    private description: Component;
    private closeBtnWrapper: Component;
    private closeBtn: Button;
    private adminBtnsWrapper: Component;
    
    
    constructor(isAdmin:boolean, productInfo: object, clickedProductInDOM: HTMLElement){        
        this.products = getProducts(isAdmin);
        
        this.title = new Input({
            className: 'product-title',
            attrs: {
                value: `${productInfo.title}`
            }
        })

        this.price = new Input({
            className: 'product-price',
            attrs: {
                value: `${productInfo.price}`
            }
        })

        this.description = new Component({
            tagName: 'textarea',
            className: 'product-description',
            textContent: `${productInfo.description}`
        })

        this.closeBtn = new Button({
            className: 'closeBtn',
            textContent: 'X',
            events: {
                click: (e) => {                    
                    app?.removeChild(e.target.parentNode.parentNode)
                }
            }
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
        });        
        
        if(isAdmin){
            const clickedProductInData = getProducts(isAdmin).filter((el) => el.getTitle() === productInfo.title)[0];            
            
            this.updateIfIsAdmin(clickedProductInData, clickedProductInDOM, isAdmin);
            
            this.getPrice().classList.add('isAdmin');
            this.getTitle().classList.add('isAdmin');
            this.getDescription().classList.add('isAdmin');

        }
    }

    updateIfIsAdmin(clickedProductInData: Product, clickedProductInDOM: HTMLElement, isAdmin: boolean){
        const aplyBtn = new Button({
            className: 'aply-btn',
            textContent: 'Aply',
            events: {
                click: (e) => {
                    clickedProductInData.setTitle(this.getTitle().value);
                    clickedProductInData.setPrice(this.getPrice().value);
                    clickedProductInData.setDescription(this.getDescription().value);
                    

                    const newProduct = new Product(
                        clickedProductInData.getID(),
                        clickedProductInData.getTitle(),
                        clickedProductInData.getAvailability(),
                        clickedProductInData.getDescription(),
                        clickedProductInData.getPrice(),
                        clickedProductInData.getQuantity(),
                        clickedProductInData.getManufacturer(),
                        clickedProductInData.getImageURL(),
                        clickedProductInData.getIsAdmin()
                    )                    
                    
                    render(clickedProductInDOM, newProduct.getComponent())
                    app?.removeChild(e.target.parentNode.parentNode);
                }
            }
        }).getComponent();

        const deleteBtn = new Button({
            className: 'delete-btn',
            textContent: 'Delete',
            events: {
                click: (e) => {
                    // this.products = this.products.filter((el) => el.getTitle() !== clickedProductInData.getTitle());

                    this.products.forEach((el) => {
                        if(el.getTitle() === clickedProductInData.getTitle()){
                            const indexOfProductDelete = this.products.indexOf(el);
                            // console.log(indexOfProductDelete);
                            
                            getProducts(isAdmin, true, indexOfProductDelete);                            
                        }
                    })
                    
                    // console.log(getProducts(isAdmin));
                    

                    clickedProductInDOM.parentNode?.removeChild(clickedProductInDOM);

                    app?.removeChild(e.target.parentNode.parentNode);
                }
            }
        }).getComponent();
        
        this.adminBtnsWrapper = new Component({
            tagName: 'div',
            className: 'admin-btns-wrapper',
            children: [aplyBtn, deleteBtn]
        })

        append(this.getComponent(), this.getAdminBtnsWrapper())
    }

    getAdminBtnsWrapper(){
        return this.adminBtnsWrapper.getComponent();
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