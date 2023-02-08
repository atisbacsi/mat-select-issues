import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select-test',
  templateUrl: './select-test.component.html',
  styleUrls: ['./select-test.component.scss'],
})
export class SelectTestComponent implements OnInit {
  public alphabets: string[] = ['alfa', 'beta', 'gamma'];
  public alphabetControl = new FormControl();

  public _alphabet: string | undefined;

  @Input()
  public set alphabet(a: string | undefined) {
    this.alphabetControl.setValue(a);
  }

  public get alphabet(): string | undefined {
    return this._alphabet;
  }

  @Output()
  public alphabetChange = new EventEmitter<string>();

  ngOnInit(): void {
    this.alphabetControl.valueChanges.subscribe((value) => {
      this.alphabetChange.emit(value);
    });
  }
}
