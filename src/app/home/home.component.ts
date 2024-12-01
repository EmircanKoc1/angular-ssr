import { afterNextRender, AfterRenderOptions, AfterViewInit, Component, ElementRef, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {

  @ViewChild("defaultComponentParagraph", {
    read: ElementRef,
    static: true
  }) contentRef!: ElementRef;



  constructor(private renderer: Renderer2) {
    afterNextRender(() => {
      console.log("afternextrender method was executed.")
      console.log(window.screen.height);
      console.log(window.screen.width);
     
    });
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit was executed");
    this.renderer.setStyle(this.contentRef.nativeElement, "color", "red");
    // console.log(window.screen.height);
    // console.log(window.screen.width);
    //errors because window is  a client api.
  }

}
