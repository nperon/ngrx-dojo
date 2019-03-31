import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { WordsService } from './words.service';
import { updateTextAction } from './editable-svg.reducer'

const FETCH_SUGGESTION_AND_UPDATE_TEXT = 'FETCH_SUGGESTION_AND_UPDATE_TEXT';

export class fetchWordAndUpdateText {
    readonly type = FETCH_SUGGESTION_AND_UPDATE_TEXT;
    constructor(public word: string) {}
}

@Injectable()
export class WordEffects {

    @Effect()
    fetchAndUpdate = this.actions$.pipe(
        ofType(FETCH_SUGGESTION_AND_UPDATE_TEXT),
        mergeMap((action: fetchWordAndUpdateText) => {
            const obs: Observable<any> = this.wordsService.getSuggestion(action.word);
            return this.wordsService.getSuggestion(action.word) 
        })        
    ).pipe(map(data => {
        const action = new updateTextAction(data[0].word);
        return action;
    }));

    constructor(
        private actions$: Actions,
        private wordsService: WordsService
    ) {}    
}