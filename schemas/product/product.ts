import { IProduct } from "../../src/interfaces";
import { Component, append } from "../../src/core";
import { Button } from "../../components/button/button";
import { productModalWindow } from "../../components/productModalWindow/productModalWindow";

import { getStatus } from "../../utils/status";
import { app } from "../../src/main";
import './product.css'

export class Product implements IProduct {
  private component: Component;
  private productImg: Component;
  private productTitle: Component;
  private productPrice: Component;
  private buyBtn: Button;
  
  constructor(
    private id: string,
    private title: string,
    private isAvailable: boolean,
    private description: string,
    private price: number,
    private quantity: number,
    private manufacturer: string,
    private imageURL: string,
  ) {

    this.productImg = new Component({
      tagName: 'div',
      className: 'product-img',
      textContent: 'imageURL',
      events: {
        dblclick: (e) => {
          if(document.querySelector(".product-info")){
            app?.removeChild(document.querySelector(".product-info"));            
          }

          const info = {
            title: this.getTitle(),
            price: this.getPrice(),
            description: this.getDescription()
          }
                   
          const modalWindow = new productModalWindow(getStatus(), info, e.target.parentNode);
          append(app, modalWindow.getComponent());
        }
      }
    })

    this.productTitle = new Component({
      tagName: 'div',
      className: 'product-title',
      textContent: `${title}`
    })

    this.productPrice = new Component({
      tagName: 'div',
      className: 'product-price',
      textContent: `${price} ₴`
    })

    this.buyBtn = new Button({
      className: 'buy-btn',
      textContent: 'Buy'
    })

    this.component = new Component({
      tagName: 'div',
      className: 'product',
      children: [this.getproductImg(), this.getproductTitle(), this.getproductPrice(), this.getbuyBtn()]
    })

  }
  // --- get
  getComponent(){
    return this.component.getComponent()
  }

  getproductImg(){
    return this.productImg.getComponent()
  }

  getproductTitle(){
    return this.productTitle.getComponent()
  }

  getproductPrice(){
    return this.productPrice.getComponent()
  }

  getbuyBtn(){
    return this.buyBtn.getComponent()
  }

  getID(): string {
    return this.id;
  }
  getTitle(): string {
    return this.title;
  }
  getAvailability(): boolean {
    return this.isAvailable;
  }
  getDescription(): string {
    return this.description;
  }
  getPrice(): number {
    return this.price;
  }
  getQuantity(): number {
    return this.quantity;
  }
  getManufacturer(): string {
    return this.manufacturer;
  }
  getImageURL(): string {
    return this.imageURL;
  }
  // --- set
  setTitle(title: string): void {
    this.title = title;
    this.getComponent().children[1].textContent = this.title;
  }
  setAvailability(isAvailable: boolean): void {
    this.isAvailable = isAvailable;
  }
  setDescription(description: string): void {
    this.description = description;
  }
  setPrice(price: number): void {
    this.price = price;
    this.getComponent().children[2].textContent = `${price} $`;
  }
  setQuantity(quantity: number): void {
    this.quantity = quantity;
  }
  setManufacturer(manufacturer: string): void {
    this.manufacturer = manufacturer;
  }
  setImageURL(imageURL: string): void {
    this.imageURL = imageURL;
  }
}