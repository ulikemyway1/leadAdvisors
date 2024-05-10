import App from "./app/app";
import homeScreenContent from "./pages/home";

const app = new App();
app.addSection(homeScreenContent);
app.run();
