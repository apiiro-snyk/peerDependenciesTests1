import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>Welcome to Angular 10 App!</h1>
      <p>{{ message }}</p>
      <button (click)="onClick()">Click Me</button>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message: string = 'Hello from Angular 10!';

  // Method to handle button click
  onClick() {
    this.message = 'Button clicked! Message updated!';
  }
}