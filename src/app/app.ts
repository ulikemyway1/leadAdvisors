import "./styles/style.scss";

export default class App {
  content: HTMLElement[] = [];

  public addSection(section: HTMLElement): void {
    this.content.push(section);
  }

  public run(): void {
    this.content.forEach((element) => {
      document.body.append(element);
      element.classList.add("at-loading");
    });
  }
}
