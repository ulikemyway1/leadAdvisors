import subcribe from "../api/subscribe";
import subscribeView, { SubscibeView } from "../ui/subscribeUI";

class SubscibeController {
  private view: SubscibeView;

  constructor(view: SubscibeView) {
    this.view = view;

    this.view.input.addEventListener("input", (e) => {
      if (e.target instanceof HTMLInputElement) {
        if (e.target.validity.valid) {
          if (
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
              e.target.value,
            )
          ) {
            this.view.submit.disabled = false;
          }
        } else {
          this.view.submit.disabled = true;
        }
      }
    });

    this.view.submit.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target instanceof HTMLButtonElement) subcribe(e.target.value);
    });
  }

  public getView(): HTMLElement {
    return this.view.getView();
  }
}

const subscribeController = new SubscibeController(subscribeView);

export default subscribeController;
