import {Component, HostListener,} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public contentWidth: number = 0;
  public oldSize: number = 0;
  public screenWidth: number = 0;
  public separatorWidth: number = 15;
  private minSideBarWidth: number = 650;

  constructor() {
    this.onResize();
    this.contentWidth = this.screenWidth - this.minSideBarWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?: Event) {
    this.screenWidth = window.innerWidth - this.separatorWidth;
  }

  toggleSize() {
    if (this.contentWidth != this.screenWidth) {
      this.oldSize = this.contentWidth;
      this.contentWidth = this.screenWidth;
    } else {
      this.contentWidth = this.oldSize;
    }
  }
}
