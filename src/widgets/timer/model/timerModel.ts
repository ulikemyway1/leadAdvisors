import timerUI, { TimerUI } from "../UI/timerUI";

export class TimerModel {
  TARGET_TIME = new Date("2024-07-24T00:00:00").getTime();
  SECONDS_IN_MINUTE = 60;
  SECONDS_IN_HOUR = this.SECONDS_IN_MINUTE * 60;
  SECONDS_IN_DAY = this.SECONDS_IN_HOUR * 24;

  view: TimerUI;
  timeDiffInSeconds = this.calculateTimeDiffInSeconds();
  days = Math.floor(this.timeDiffInSeconds / this.SECONDS_IN_DAY);
  hours = Math.floor(
    (this.timeDiffInSeconds - this.days * this.SECONDS_IN_DAY) /
      this.SECONDS_IN_HOUR,
  );
  minutes = Math.floor(
    (this.timeDiffInSeconds -
      (this.days * this.SECONDS_IN_DAY + this.hours * this.SECONDS_IN_HOUR)) /
      this.SECONDS_IN_MINUTE,
  );
  seconds =
    this.timeDiffInSeconds -
    (this.days * this.SECONDS_IN_DAY +
      this.hours * this.SECONDS_IN_HOUR +
      this.minutes * this.SECONDS_IN_MINUTE);

  constructor(view: TimerUI) {
    this.view = view;
    if (!(this.days < 0)) {
      this.view.setDays(this.days);
      this.view.setHours(this.hours);
      this.view.setMinutes(this.minutes);
      this.view.setSeconds(this.seconds);
    }
  }

  public getActualTime(): void {
    const timerID = setInterval(() => {
      const timeDiffInSeconds = this.calculateTimeDiffInSeconds();
      if (timeDiffInSeconds <= 0) {
        clearInterval(timerID);
      }
      const days = Math.floor(timeDiffInSeconds / this.SECONDS_IN_DAY);
      const hours = Math.floor(
        (timeDiffInSeconds - days * this.SECONDS_IN_DAY) / this.SECONDS_IN_HOUR,
      );
      const minutes = Math.floor(
        (timeDiffInSeconds -
          (days * this.SECONDS_IN_DAY + hours * this.SECONDS_IN_HOUR)) /
          this.SECONDS_IN_MINUTE,
      );
      const seconds =
        timeDiffInSeconds -
        (days * this.SECONDS_IN_DAY +
          hours * this.SECONDS_IN_HOUR +
          minutes * this.SECONDS_IN_MINUTE);
      if (days >= 0) {
        if (days !== this.days) {
          this.view.setDays(days);
          this.days = days;
        }
        if (hours !== this.hours) {
          this.view.setHours(hours);
          this.hours = hours;
        }
        if (minutes !== this.minutes) {
          this.view.setMinutes(minutes);
          this.minutes = minutes;
        }
        if (seconds !== this.seconds) {
          this.view.setSeconds(seconds);
          this.seconds = seconds;
        }
      }
    }, 1000);
  }

  private calculateTimeDiffInSeconds(): number {
    const now = new Date().getTime();
    return Math.floor((this.TARGET_TIME - now) / 1000);
  }
}

const timerModel = new TimerModel(timerUI);
export default timerModel;
