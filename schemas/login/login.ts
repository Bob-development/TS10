import { IComponent } from "../../src/interfaces";

import { Component } from "../../src/core";
import { Button } from "../../components/button/button";
import { Input } from "../../components/input/input";

import { userData } from "../../utils/userData";

import './login.css'

export class LogIn implements IComponent{
    private component: Component;
    private loginInput: Input;
    private passInput: Input;
    private send: Button;
    private isAdmin: boolean;
    private isGuest: boolean;
    
    constructor(){        
        this.loginInput = new Input({
            className: 'login-input',
            attrs: {
                placeholder: 'Login'
            }
        })

        this.passInput = new Input({
            className: 'pass-input',
            attrs: {
                placeholder: 'Password'
            }
        })

        this.send = new Button({
            className: 'send-btn',
            textContent: 'Log In',
            events: {
                click: () => {
                    this.isValidData(this.getLoginInput().value, this.getPassInput().value);                    
                }
            }
        })

        this.component = new Component({
            tagName: 'div',
            className: 'login-form',
            children: [this.getLoginInput(), this.getPassInput(), this.getSendBtn()]
        })
    }

    private isValidData(log: string, pass: string){
        const isGuest = this.isGuestData(log, pass);
        const isAdmin = this.isAdminData(log, pass);

        if(isGuest || isAdmin){
            //load app
            
            console.log('zaebis`');
            
        }
    }

    private isGuestData(log: string, pass: string){
        const login = log === sessionStorage.getItem("guestLogin") ? true : false;
        const password = pass === sessionStorage.getItem("guestPass") ? true : false;

        if(login && password){
            this.isGuest = true;
            console.log('guest', this.isGuest);

            return this.isGuest;
        }
    }

    private isAdminData(log: string, pass: string){
        const login = log === sessionStorage.getItem("adminLogin") ? true : false;
        const password = pass === sessionStorage.getItem("adminPass") ? true : false;

        if(login && password){
            this.isAdmin = true;
            console.log('admin', this.isAdmin);

            return this.isAdmin;
        }
    }

    getLoginInput(){
        return this.loginInput.getComponent()
    }

    getPassInput(){
        return this.passInput.getComponent()
    }

    getSendBtn(){
        return this.send.getComponent()
    }

    getComponent(): HTMLElement {
        return this.component.getComponent();
    }
}