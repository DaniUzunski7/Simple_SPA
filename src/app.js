import { page } from "./lib.js";
import { upadateNav } from "./util.js";
import { showCreateView } from "./views/showCreateView.js";
import { showDashboardView } from "./views/showDashboardView.js";
import { showDetailsView } from "./views/showDetailsView.js";
import { showEditView } from "./views/showEditView.js";
import { showHomeView } from "./views/showHomeView.js";
import { showLoginView } from "./views/showLoginView.js";
import { showLogoutView } from "./views/showLogoutView.js";
import { showRegisterView } from "./views/showRegisterView.js";

page("/", showHomeView);
page("/login", showLoginView);
page("/register", showRegisterView);
page("/logout", showLogoutView);
page("/dashboard", showDashboardView);
page("/details/:id", showDetailsView);
page("/create", showCreateView);
page("/edit/:id", showEditView);

upadateNav()
page.start()