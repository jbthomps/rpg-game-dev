import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'initative-gauge',
  templateUrl: './initative-gauge.component.html',
  styleUrls: ['./initative-gauge.component.css']
})
export class InitativeGaugeComponent implements OnInit {

  timerWidth = 0
  _timer = 0;
  @Output('timer') timerEmitter = new EventEmitter();
  @Input() setTimer: EventEmitter<number>;

  //Should timer be an ngModel?  Not sure if I want outside components having direct control.  
  set timer(value) {
    this._timer = value;
    this.timerEmitter.emit(value);
    this.timerWidth = Math.ceil((value/this.maximium)*150)
  };
  get timer() {
    return this._timer;
  }
  @Input() threshold = 5000;
  @Input() maximium = 6000;
  @Input() tempo = 100;

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      if (this.timer >= 6000) {
        return;
      }
      this.timer += this.tempo;
    }, 100)
  }

  ngAfterViewInit() {
    if (this.setTimer) this.setTimer.subscribe(val => {
      this.timer = val
    })
  }

}
