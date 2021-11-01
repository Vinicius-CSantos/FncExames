import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exames-crud',
  templateUrl: './exames-crud.component.html',
  styleUrls: ['./exames-crud.component.css']
})
export class ExamesCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToExameCreate(): void {
    this.router.navigate (['/exames/create'])

  }

}
  