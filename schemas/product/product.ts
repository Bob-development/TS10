import { IProduct } from "../../src/interfaces";
import { Component } from "../../src/core";
import { Button } from "../../components/button/button";

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
    private imageURL: string
  ) {

    this.productImg = new Component({
      tagName: 'div',
      className: 'product-img',
      textContent: 'imageURL'
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
  }
  setAvailability(isAvailable: boolean): void {
    this.isAvailable = isAvailable;
  }
  setDescription(description: string): void {
    this.description = description;
  }
  setPrice(price: number): void {
    this.price = price;
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