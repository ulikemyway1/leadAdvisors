import CreateElement from "../../../shared/element-create";
import subcribeForm from "../../../features/subcribe";
import timer from "../../../widgets/timer";
import "./home.scss";
const logoIcon = require("./img/logo.svg");
const leftSide = require("./img/leftside.svg");
const rightSide = require("./img/rightside.svg");

class HomeScreen {
  private content: HTMLElement = new CreateElement({
    tag: "section",
    cssClasses: ["home"],
  }).getHTMLElement();
  private logoLinkWrapper: HTMLAnchorElement =
    new CreateElement<HTMLAnchorElement>({
      tag: "a",
      cssClasses: ["home__logo-link"],
      attributes: { href: "#" },
    }).getHTMLElement();
  private logoIcon: HTMLImageElement = new CreateElement<HTMLImageElement>({
    tag: "img",
    cssClasses: ["home__logo-icon"],
    attributes: { src: logoIcon },
  }).getHTMLElement();
  private title: HTMLElement = new CreateElement({
    tag: "h1",
    cssClasses: ["home__title"],
    textContent: "Under Construction",
  }).getHTMLElement();
  private subTitle: HTMLElement = new CreateElement({
    tag: "p",
    cssClasses: ["home__sub-title"],
    textContent: "We're making lots of improvements and will be back soon",
  }).getHTMLElement();
  private mainContent: HTMLElement = new CreateElement({
    tag: "div",
    cssClasses: ["home__main-content"],
  }).getHTMLElement();
  private footer: HTMLElement = new CreateElement({
    tag: "div",
    cssClasses: ["home__footer"],
  }).getHTMLElement();
  private leftSideImg: HTMLImageElement = new CreateElement<HTMLImageElement>({
    tag: "img",
    cssClasses: ["home__left-side-img"],
    attributes: { src: leftSide },
  }).getHTMLElement();
  private rightSideImg: HTMLImageElement = new CreateElement<HTMLImageElement>({
    tag: "img",
    cssClasses: ["home__right-side-img"],
    attributes: { src: rightSide },
  }).getHTMLElement();

  private wrapperEventLink: HTMLElement = new CreateElement({
    tag: "div",
    cssClasses: ["home__event-wrapper"],
    textContent: "Check our event page when you wait:",
  }).getHTMLElement();

  private eventLink: HTMLAnchorElement = new CreateElement<HTMLAnchorElement>({
    tag: "a",
    cssClasses: ["home__event-link"],
    attributes: { href: "#" },
    textContent: "Go to the event",
  }).getHTMLElement();

  private otherEventsLink: HTMLAnchorElement =
    new CreateElement<HTMLAnchorElement>({
      tag: "a",
      cssClasses: ["home__footer-link"],
      attributes: { href: "#" },
      textContent: "Other Events",
    }).getHTMLElement();

  constructor() {
    this.logoLinkWrapper.append(this.logoIcon);
    this.wrapperEventLink.append(this.eventLink);
    this.mainContent.append(
      this.logoLinkWrapper,
      this.title,
      this.subTitle,
      timer,
      this.wrapperEventLink,
    );

    this.footer.append(subcribeForm, this.otherEventsLink);

    this.content.append(
      this.leftSideImg,
      this.rightSideImg,
      this.mainContent,
      this.footer,
    );
  }

  public getContent(): HTMLElement {
    return this.content;
  }
}

const homeScreen = new HomeScreen();
export default homeScreen;
