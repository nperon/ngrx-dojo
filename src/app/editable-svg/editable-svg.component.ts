import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'; 
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-editable-svg',
  templateUrl: './editable-svg.component.html',
  styleUrls: ['./editable-svg.component.css']
})
export class EditableSvgComponent implements OnInit {
  editableSvgState: Observable<{ xCoordinate: number, yCoordinate: number }>;
  xCoordinate: number;
  yCoordinate: number;
  radius = 50;
  userText: string;

  constructor(
    private store: Store<{editableSvg: { xCoordinate: number, yCoordinate: number }}>
  ) { }

  ngOnInit() {
    this.editableSvgState = this.store.select('editableSvg');
  }

  onKey(event: any) {
    this.userText = event.target.value;
  }

  onActionButton() {
    console.log(this.userText);
  }
}