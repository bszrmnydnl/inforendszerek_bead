import {Component, Injectable, OnInit} from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {Oktato} from '../models/Oktato';
import {OktatoService} from '../services/oktato.service';

@Component({
  selector: 'app-oktato',
  templateUrl: './oktato.component.html',
  styleUrls: ['./oktato.component.css']
})
export class OktatoComponent implements OnInit {
  oktatok$!: Observable<Oktato[]>;
  form!: FormGroup;

  constructor(private oktatoService: OktatoService) { }
  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.oktatok$ = this.fetchAll();

    this.form = new FormGroup(
      {
        neptunKod: new FormControl(),
        nev: new FormControl(),
        tanszek: new FormControl()
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  fetchAll(): Observable<Oktato[]> {
    return this.oktatoService.getOktato();
  }

  delOktato(neptunKod: string): void {
    this.oktatoService.delOktato(neptunKod).subscribe(() => (
      this.oktatok$ = this.fetchAll()
    ));
  }

  onSubmit(): void {
    this.oktatoService.addOktato(this.form.value).subscribe(() => (
      console.log(this.form.value),
        this.oktatok$ = this.fetchAll()
    ));
  }


}
