import { logout } from "../data/userService.js";

import { page } from "../lib.js";
import { upadateNav } from "../util.js";

export async function showLogoutView(){
    await logout();
    upadateNav()
    page.redirect("/")
}