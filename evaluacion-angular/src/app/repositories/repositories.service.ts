import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Repository } from './repository.model';

@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {
  private url = "https://gist.githubusercontent.com/caev03/628509e0b3fe41dd44f6a2ab09d81ef9/raw/f847eafbecca47287ff0faec4de1329b874f5711/repositories.json";

  constructor(private http: HttpClient) { }

getAllRepositories(): Observable<Repository[]>{
  return this.http.get<Repository[]>(this.url)

}

}
