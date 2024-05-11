import popupView, { PopupView } from "../UI/popupUI";

export class PopupController {
  view: PopupView;

  constructor(view: PopupView) {
    this.view = view;
    this.view.view.addEventListener("click", (e) => {
      if (e.target instanceof HTMLButtonElement) {
        this.view.view.remove();
        this.view.background.remove();
        document.body.style.overflow = "auto";
      }
    });
  }

  public getViw(): HTMLElement {
    return this.view.getView();
  }

  public setStatus(status: "ok" | "fail") {
    if (status === "ok") {
      this.view.title.textContent = "Success!";
      this.view.view.classList.remove("fail");
      this.view.view.classList.add("success");
      this.view.descr.textContent =
        "You have successfully subscribed to the email newsletter";
    } else {
      this.view.title.textContent = "Fail :(";
      this.view.view.classList.add("fail");
      this.view.view.classList.remove("success");
      this.view.descr.textContent = "Something went wrong. Try again...";
    }
  }
}

const popupController = new PopupController(popupView);

export default popupController;
