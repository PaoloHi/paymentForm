import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit {


  ngOnInit(): void {
      

  import { Application } from '@splinetool/runtime';

  const canvas = document.getElementById('canvas3d');
  const app = new Application(canvas);
  app.load('Loading...');
  }

}
