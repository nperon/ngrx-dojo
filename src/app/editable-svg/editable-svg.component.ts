import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store'; 
import { Observable } from 'rxjs/Observable';
import { moveLeftAction } from './store/editable-svg.reducer';
import { interval } from 'rxjs';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-editable-svg',
  templateUrl: './editable-svg.component.html',
  styleUrls: ['./editable-svg.component.css']
})
export class EditableSvgComponent implements OnInit, OnDestroy {
  editableSvgState: Observable<{ xCoordinate: number, yCoordinate: number }>;
  xCoordinate: number;
  yCoordinate: number;
  radius = 50;
  subscription: Subscription;

  constructor(
    private store: Store<{editableSvg: { xCoordinate: number, yCoordinate: number }}>
  ) { }

  ngOnInit() {
    this.editableSvgState = this.store.select('editableSvg');
  }

  onMouseDown() {
    const clock = interval(400);
    this.store.dispatch(new moveLeftAction(4));
    this.subscription = clock.subscribe((number: Number) => { this.store.dispatch(new moveLeftAction(4)) });
  }

  onMouseUpOrOut() {
    if (this.subscription !== undefined) { this.subscription.unsubscribe() };
  }

  ngOnDestroy() {
    if (this.subscription !== undefined) { this.subscription.unsubscribe() };
  }
}
