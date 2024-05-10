import timerUI, { TimerUI } from "../UI/timerUI";
import timerModel, { TimerModel } from "./timerModel";

class TimerController {
  private model: TimerModel;
  private view: TimerUI;

  constructor(model: TimerModel, view: TimerUI) {
    this.model = model;
    this.view = view;
  }

  public getView(): HTMLElement {
    this.model.getActualTime();
    return this.view.getView();
  }
}

const timerController = new TimerController(timerModel, timerUI);
export default timerController;
