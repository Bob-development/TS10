import { Form } from "../app/form/form";
import { Component, append } from "./core";
import { Reg } from "../schemas/registration/reg";
import { LogIn } from "../schemas/login/login";
import { userData } from "../utils/userData";
import { getProducts } from "../utils/getProducts";

import './style.css'
import { Shop } from "../app/shop/shop";

export const app = document.querySelector("#app");

//ADD ADMIN DATA
sessionStorage.setItem("adminLogin", "admin@admin.com");
sessionStorage.setItem("adminPass", "Admin@321");

//ADD GUEST DATA
// sessionStorage.setItem("guestLogin", "guest@guest.com");
// sessionStorage.setItem("guestPass", "Guest@321");

// const form = new Form()

// append(app, form.getComponent())

// const reg = new Shop(true); 
// append(app, reg.getComponent())

const huy = new Shop(true);
append(app, huy.getComponent())

