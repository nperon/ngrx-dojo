import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'https://api.datamuse.com';

@Injectable({
    providedIn: 'root'
  })
export class WordsService {
  constructor (private http: HttpClient) {}

  getSuggestion(text : string) {
    return this.http.get(BASE_URL + '/sug?s=' + text);
  }
}