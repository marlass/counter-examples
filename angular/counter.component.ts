import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  count = 0;
  increment() {
    this.count += 1;
  }

  decrement() {
    this.count -= 1;
  }
}
