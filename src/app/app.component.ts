import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public selectedAlphabet: string | undefined;
  public isSelectComponentSelected= true;
  title = 'mat-select-issues';

  public clickOnStar(): void {
    this.isSelectComponentSelected = true;
  }
  
  public clickOnTrash(): void {
    this.isSelectComponentSelected = false;
  }
}
