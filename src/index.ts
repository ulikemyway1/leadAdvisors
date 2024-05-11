import App from "./app/app";
import eventsPage from "./pages/events";
import homeScreenContent from "./pages/home";

const app = new App();
app.addSection(homeScreenContent);
app.addSection(eventsPage);
app.run();
