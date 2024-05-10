import CreateElement from "../../../shared/element-create";
import "./timer.scss";
export class TimerUI {
  private view: HTMLElement = new CreateElement({
    tag: "div",
    cssClasses: ["timer"],
  }).getHTMLElement();
  private days: HTMLElement = new CreateElement({
    tag: "span",
    cssClasses: ["timer__time", "days"],
    children: [
      new CreateElement({ tag: "div" }).getHTMLElement(),
      new CreateElement({ tag: "div" }).getHTMLElement(),
    ],
  }).getHTMLElement();
  private hours: HTMLElement = new CreateElement({
    tag: "div",
    cssClasses: ["timer__time", "hours"],
    children: [
      new CreateElement({ tag: "div" }).getHTMLElement(),
      new CreateElement({ tag: "div" }).getHTMLElement(),
    ],
  }).getHTMLElement();
  private minutes: HTMLElement = new CreateElement({
    tag: "div",
    cssClasses: ["timer__time", "minutes"],
    children: [
      new CreateElement({ tag: "div" }).getHTMLElement(),
      new CreateElement({ tag: "div" }).getHTMLElement(),
    ],
  }).getHTMLElement();
  private seconds: HTMLElement = new CreateElement({
    tag: "div",
    cssClasses: ["timer__time", "seconds"],
    children: [
      new CreateElement({ tag: "div" }).getHTMLElement(),
      new CreateElement({ tag: "div" }).getHTMLElement(),
    ],
  }).getHTMLElement();
  private divider1: HTMLElement = new CreateElement({
    tag: "span",
    cssClasses: ["timer__divider"],
    textContent: ":",
  }).getHTMLElement();
  private divider2: HTMLElement = new CreateElement({
    tag: "span",
    cssClasses: ["timer__divider"],
    textContent: ":",
  }).getHTMLElement();
  private divider3: HTMLElement = new CreateElement({
    tag: "span",
    cssClasses: ["timer__divider"],
    textContent: ":",
  }).getHTMLElement();

  constructor() {
    this.view.append(
      this.days,
      this.divider1,
      this.hours,
      this.divider2,
      this.minutes,
      this.divider3,
      this.seconds,
    );
  }

  public setDays(days: number): void {
    const str = days.toString().padStart(2, "0");
    if (this.days.firstElementChild && this.days.lastElementChild) {
      this.days.firstElementChild.textContent = str[0];
      this.days.lastElementChild.textContent = str[1];
    }
  }

  public setHours(hours: number): void {
    const str = hours.toString().padStart(2, "0");
    if (this.hours.firstElementChild && this.hours.lastElementChild) {
      this.hours.firstElementChild.textContent = str[0];
      this.hours.lastElementChild.textContent = str[1];
    }
  }

  public setMinutes(minutes: number): void {
    const str = minutes.toString().padStart(2, "0");
    if (this.minutes.firstElementChild && this.minutes.lastElementChild) {
      this.minutes.firstElementChild.textContent = str[0];
      this.minutes.lastElementChild.textContent = str[1];
    }
  }

  public setSeconds(seconds: number): void {
    const str = seconds.toString().padStart(2, "0");
    if (this.seconds.firstElementChild && this.seconds.lastElementChild) {
      this.seconds.firstElementChild.textContent = str[0];
      this.seconds.lastElementChild.textContent = str[1];
    }
  }

  public getView(): HTMLElement {
    return this.view;
  }
}

const timerUI = new TimerUI();
export default timerUI;
