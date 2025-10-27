import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Todo } from './todo/todo/todo';

@Component({
  selector: 'app-root',
  imports: [Todo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-angular-app');
}
