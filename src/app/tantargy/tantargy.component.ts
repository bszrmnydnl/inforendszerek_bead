import {Component, Injectable, OnInit} from '@angular/core';
import {FormGroup, FormControl, AbstractControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {Tantargy} from '../models/Tantargy';
import {TantargyService} from '../services/tantargy.service';

@Component({
  selector: 'app-tantargy',
  templateUrl: './tantargy.component.html',
  styleUrls: ['./tantargy.component.css']
})
export class TantargyComponent implements OnInit {
  tantargyak$!: Observable<Tantargy[]>;
  form!: FormGroup;

  constructor(private tantargyService: TantargyService) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.tantargyak$ = this.fetchAll();

    this.form = new FormGroup(
      {
        targyKod: new FormControl(),
        nev: new FormControl()
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  fetchAll(): Observable<Tantargy[]> {
    return this.tantargyService.getTantargy();
  }

  delTantargy(kurzusKod: string): void {
    this.tantargyService.delTantargy(kurzusKod).subscribe(() => (
      this.tantargyak$ = this.fetchAll()
    ));
  }

  onSubmit(): void {
    this.tantargyService.addTantargy(this.form.value).subscribe(() => (
      console.log(this.form.value),
        this.tantargyak$ = this.fetchAll()
    ));
  }
}
