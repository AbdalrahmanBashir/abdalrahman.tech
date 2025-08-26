import { Component, signal } from '@angular/core';
import { Header } from "./components/header/header";
import { Education } from "./components/education/education";
import { Projects } from './components/projects/projects';


@Component({
  selector: 'app-root',
  imports: [ Header, Education, Projects],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('portfolio');
}
