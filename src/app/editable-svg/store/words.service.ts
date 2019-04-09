import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
export class WordsService {
  constructor (private http: HttpClient) {}

  getSuggestion(text : string) {
    return this.http.get('https://api.datamuse.com/sug?s=' + text);
  }
}