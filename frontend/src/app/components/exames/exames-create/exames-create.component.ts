import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Exame } from './../exame.model';
import { ExameService } from './../exame.service';

@Component({
  selector: 'app-exames-create',
  templateUrl: './exames-create.component.html',
  styleUrls: ['./exames-create.component.css']
})
export class ExamesCreateComponent implements OnInit {

  Exame: Exame = {

    name:'',
    data_coleta:29.02
  }

  constructor(private exameService: ExameService,
    private router: Router ) { }

  ngOnInit(): void {
    
  }
  createExame(): void {
    this.exameService.create(this.Exame).subscribe(() => {

    this.exameService.showMassage('Exame incluído com sucesso')
    this.router.navigate(['/exames'])
  })

  }

  cancel(): void {
    this.router.navigate(['/exames'])
  }
 
}
