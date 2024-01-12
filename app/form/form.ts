import { IComponent } from "../../src/interfaces";

import { Component, render } from "../../src/core";
import { Button } from "../../components/button/button";
import { Reg } from "../../schemas/registration/reg";
import { LogIn } from "../../schemas/login/login";

import { app } from "../../src/main";

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
            textContent: 'Reg',
            events: {
                click: () => {
                    render(app, new Reg().getComponent())
                }
            }
        })

        this.loginBtn = new Button({
            className: 'login-btn',
            textContent: 'Log',
            events: {
                click: () => {
                    render(app, new LogIn().getComponent())
                }
            }
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