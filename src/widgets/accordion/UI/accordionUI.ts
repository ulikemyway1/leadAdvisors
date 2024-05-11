import "./accordion.scss";
import CreateElement from "../../../shared/element-create";
import accordgionIMG, {
  AccordionData,
  AccordionItem,
} from "../model/accordionModel";

export class AccordionView {
  private view: HTMLElement = new CreateElement({
    tag: "div",
    cssClasses: ["accordion"],
  }).getHTMLElement();

  private data: AccordionData;

  private items: HTMLElement[] = [];

  constructor(data: AccordionData) {
    this.data = data;
    this.data.forEach((item, index) => {
      this.view.append(this.createItem(item, index));
    });
    this.items[0].classList.remove("collapsed");
  }

  public getView(): HTMLElement {
    return this.view;
  }

  private createItem(itemData: AccordionItem, index: number): HTMLElement {
    const item = new CreateElement({
      tag: "div",
      cssClasses: ["accordion__item", "collapsed"],
    }).getHTMLElement();
    const root = new CreateElement({
      tag: "div",
      cssClasses: ["accordion__root"],
    }).getHTMLElement();
    const number = new CreateElement({
      tag: "div",
      cssClasses: ["accordion__number"],
      textContent: (index + 1).toString().padStart(2, "0"),
    }).getHTMLElement();
    const descr = new CreateElement({
      tag: "div",
      cssClasses: ["accordion__descr"],
      textContent: itemData.title,
    }).getHTMLElement();
    root.append(descr, number);
    const main = new CreateElement({
      tag: "div",
      cssClasses: ["accordion__main"],
    }).getHTMLElement();
    const img = new CreateElement<HTMLImageElement>({
      tag: "img",
      cssClasses: ["accordion__img"],
      attributes: { src: `${itemData.src}` },
    }).getHTMLElement();
    main.append(img);
    item.append(root, main);
    item.addEventListener("click", () => {
      if (!item.classList.contains("collapsed")) {
        const index = this.items.indexOf(item);
        this.items.forEach((item) => {
          item.classList.add("collapsed");
        });
        if (this.items[index - 1]) {
          this.items[index - 1].classList.remove("collapsed");
        }
      } else {
        this.items.forEach((item) => {
          item.classList.add("collapsed");
        });
        item.classList.remove("collapsed");
      }
    });
    this.items.push(item);
    return item;
  }
}

const accordionView = new AccordionView(accordgionIMG);
export default accordionView;
