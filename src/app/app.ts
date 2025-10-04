import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarMain } from "./shared/components/navbar/navbar-main/navbar-main";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarMain],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'articlefe';

}
