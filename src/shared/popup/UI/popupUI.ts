import CreateElement from "../../element-create";
import "./popup.scss";

export class PopupView {
  public view: HTMLElement = new CreateElement({
    tag: "section",
    cssClasses: ["popup"],
  }).getHTMLElement();

  public title: HTMLElement = new CreateElement({
    tag: "h2",
    cssClasses: ["popup__title"],
  }).getHTMLElement();

  public descr: HTMLElement = new CreateElement({
    tag: "p",
    cssClasses: ["popup__descr"],
  }).getHTMLElement();

  public crosBtn: HTMLButtonElement = new CreateElement<HTMLButtonElement>({
    tag: "button",
    cssClasses: ["popup__button", "popup__cross"],
    attributes: { title: "Close" },
  }).getHTMLElement();

  public closeBtn: HTMLButtonElement = new CreateElement<HTMLButtonElement>({
    tag: "button",
    cssClasses: ["popup__button", "popup__close"],
    textContent: "Close",
  }).getHTMLElement();

  public background: HTMLElement = new CreateElement({
    tag: "div",
    cssClasses: ["popup__background"],
  }).getHTMLElement();
  public getView(): HTMLElement {
    return this.view;
  }

  constructor() {
    this.view.append(this.crosBtn, this.title, this.descr, this.closeBtn);
  }
}

const popupView = new PopupView();
export default popupView;
