import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parallax-screen',
  templateUrl: './parallax-screen.component.html',
  styleUrls: ['./parallax-screen.component.sass']
})
export class ParallaxScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.Init();
  }

  private Init(){
    let scene = document.getElementById('scene');
    const Parallax = require('parallax-js')
    let parallax = new Parallax(scene);
  }

}
