import { setShop } from "../utils/getShop";
import { Form } from "../app/form/form";
import { append } from "./core";

import './style.css'

export const app = document.querySelector("#app");

//ADD ADMIN DATA
sessionStorage.setItem("adminLogin", "admin@admin.com");
sessionStorage.setItem("adminPass", "Admin@321");

//ADD GUEST DATA
// sessionStorage.setItem("guestLogin", "guest@guest.com");
// sessionStorage.setItem("guestPass", "Guest@321");

setShop();

const form = new Form();
append(app, form.getComponent());

