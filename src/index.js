import "./styles/news.css";
import "./styles/source.css";
import "./styles/index.css";

import AppController from "./AppController";

const root = document.createElement("div");
document.body.append(root);

const controller = new AppController(root);
controller.run();