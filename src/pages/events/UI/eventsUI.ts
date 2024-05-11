import "./events.scss";
import CreateElement from "../../../shared/element-create";
import accordion from "../../../widgets/accordion";

export class EventsUI {
  private view: HTMLElement = new CreateElement({
    tag: "section",
    cssClasses: ["events"],
    id: "events",
  }).getHTMLElement();
  private tittle: HTMLElement = new CreateElement({
    tag: "h2",
    cssClasses: ["events__title"],
    textContent: "All events",
  }).getHTMLElement();

  constructor() {
    this.view.append(this.tittle, accordion);
  }

  public getView(): HTMLElement {
    return this.view;
  }
}

const eventsView = new EventsUI();
export default eventsView;
