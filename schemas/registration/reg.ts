import { IComponent } from "../../src/interfaces";

import { Component } from "../../src/core";
import { Button } from "../../components/button/button";
import { Input } from "../../components/input/input";

import { userData } from "../../utils/userData";
import { specialSymbols, lowerCaseSymbols, upperCaseSymbols } from "../../utils/getSymbols";

import './reg.css'

export class Reg implements IComponent{
    private component: Component;
    private loginInput: Input;
    private passInput: Input;
    private send: Button;
    
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
            textContent: 'Register',
            events: {
                click: () => {
                    this.isValidData(this.getLoginInput().value, this.getPassInput().value)
                }
            }
        })

        this.component = new Component({
            tagName: 'div',
            className: 'reg-form',
            children: [this.getLoginInput(), this.getPassInput(), this.getSendBtn()]
        })
    }

    private isValidData(log: string, pass: string){
        const login = this.validateLogin(log);
        const password = this.validatePassword(pass);

        if(login && password){
            //add to session storage
            
        }
    }

    private validateLogin(login: string) {
        let isValidLogin = false;
    
        const symbolsBeforeAT = login.slice(0, login.indexOf("@"));
        const symbolsBeforeDot = login.slice(login.indexOf("@"), login.indexOf("."));
        const symbolsAfterDot = login.slice(login.indexOf(".") + 1);
    
        if (
          symbolsBeforeAT.length > 0 &&
          symbolsBeforeDot.length > 0 &&
          symbolsAfterDot.length > 0 &&
          login.includes(".") &&
          login.includes("@") &&
          !login.includes(" ")
        ) {
          isValidLogin = true;
        }
    
        console.log("isValidLogin", isValidLogin);
    
        return isValidLogin;
    }

    private validatePassword(password: string) {
        let isValidPass = false;
    
        if (password.length + 1 > 5 && password.length < 15) {
          let haveNum = false;

          //CHECK IF PASS CONTAINS SYMBOLS
          const haveSymbols = this.checkAssignment(specialSymbols, password);
        
          //CHECK IF PASS CONTAINS UPPERCASE LETTERS
          const haveUpperCaseLetters = this.checkAssignment(
            upperCaseSymbols,
            password
          );
    
          //CHECK IF PASS CONTAINS UPPERCASE LETTERS
          const haveLowerCaseLetters = this.checkAssignment(
            lowerCaseSymbols,
            password
          );
    
          //CHECK IF PASS CONTAINS NUMS
          for (const passwordsChar of password) {
            if (!isNaN(+passwordsChar)) {
              haveNum = true;
            }
          }
    
          if (
            haveLowerCaseLetters &&
            haveUpperCaseLetters &&
            haveSymbols &&
            haveNum
          ) {
            isValidPass = true;
          };
        }
    
        console.log("isValidPass", isValidPass);
    
        return isValidPass;
    }
    
    private checkAssignment(arr: string[], password: string) {
        return (
          arr.filter((symbol) => {
            if (password.includes(symbol)) {
              return symbol;
            }
          }).length > 0
        );
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