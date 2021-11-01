import { Exame } from './exame.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})

export class ExameService {

  baseUrl ="http://localhost:3001/exames"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMassage(msg: string): void {
    this.snackBar.open(msg,'X',{
      duration: 3000,
      horizontalPosition:"right",
      verticalPosition:"top"
    })
    }

    create(Exame: Exame): Observable<Exame>{
      return this.http.post<Exame>(this.baseUrl, Exame)
    }

  }
