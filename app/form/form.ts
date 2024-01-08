import { IComponent } from "../../src/interfaces";

import { Component } from "../../src/core";
import { Button } from "../../components/button/button";
import { Input } from "../../components/input/input";

import './form.css'

export class Form implements IComponent{
    private component: Component;
    private registrBtn: Button;
    private loginBtn: Button;
    
    constructor(){
        //ADD ADMIN DATA
        sessionStorage.setItem("adminLogin", "admin@admin.com");
        sessionStorage.setItem("adminPass", "Admin@321");

        //ADD GUEST DATA
        sessionStorage.setItem("guestLogin", "guest@guest.com");
        sessionStorage.setItem("guestPass", "Guest@321");

        this.registrBtn = new Button({
            className: 'register-btn',
            textContent: 'Reg'
        })

        this.loginBtn = new Button({
            className: 'login-btn',
            textContent: 'Log'
        })

        this.component = new Component({
            tagName: 'div',
            className: 'form',
            children: [this.getRegistrBtn(), this.getLoginBtn()]
        })
    }

    getRegistrBtn(){
        return this.registrBtn.getComponent();
    }

    getLoginBtn(){
        return this.loginBtn.getComponent();
    }

    getComponent(): HTMLElement {
        return this.component.getComponent();
    }
}