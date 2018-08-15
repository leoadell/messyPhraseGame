import { Component, OnInit } from '@angular/core';
import { CursoInterface } from '../../models/cursoInterface';
import { CursoService } from '../../services/curso.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  cursos: CursoInterface[];
  editState: boolean = false;
  cursoToEdit: CursoInterface;
  constructor(private cursoService: CursoService) { }

  ngOnInit() {
    this.cursoService.getCursos().subscribe(cursos => {
      this.cursos = cursos;
    });
  }
  editCurso(event, curso: CursoInterface) {
    this.editState = true;
    this.cursoToEdit = curso;
  }
  onUdpdateCurso(curso: CursoInterface) {
    this.cursoService.updateCurso(curso);
    this.clearState();
  }
  deleteCurso(event, curso: CursoInterface) {
    this.cursoService.deleteCurso(curso);
    this.clearState();
  }
  clearState() {
    this.editState = false;
    this.cursoToEdit = null;
  }

}
