import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { IUser } from './user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private usersUrl = 'api/users/users.json';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.usersUrl);
  }

  getUser(id: number): Observable<IUser | undefined> {
    return this.getUsers()
      .pipe(
        map((users: IUser[]) => users.find(u => u.id === id))
      );
  }

}
