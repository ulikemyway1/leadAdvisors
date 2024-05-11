import CreateElement from "../../../shared/element-create";
import "./subscribe.scss";

export class SubscibeView {
  private view: HTMLElement = new CreateElement({
    tag: "form",
    cssClasses: ["subscribe"],
  }).getHTMLElement();
  public input: HTMLInputElement = new CreateElement<HTMLInputElement>({
    tag: "input",
    cssClasses: ["subscribe__input"],
    attributes: {
      type: "email",
      required: "true",
      placeholder: "Enter your Email and get notified",
    },
  }).getHTMLElement();
  public submit: HTMLButtonElement = new CreateElement<HTMLButtonElement>({
    tag: "button",
    cssClasses: ["subscribe__submit"],
    attributes: {
      disabled: "true",
    },
  }).getHTMLElement();
  constructor() {
    this.view.append(this.input, this.submit);
  }

  public getView(): HTMLElement {
    return this.view;
  }
}

const subscribeView = new SubscibeView();
export default subscribeView;
