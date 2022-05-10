import {Component, Injectable, OnInit} from '@angular/core';
import {FormGroup, FormControl, AbstractControl, NgForm} from '@angular/forms';
import {Observable} from 'rxjs';
import {KurzusService} from '../services/kurzus.service';
import {Kurzus} from '../models/Kurzus';
import {TantargyService} from '../services/tantargy.service';
import {Tantargy} from '../models/Tantargy';

@Component({
  selector: 'app-kurzus',
  templateUrl: './kurzus.component.html',
  styleUrls: ['./kurzus.component.css']
})
export class KurzusComponent implements OnInit {
  kurzusok$!: Observable<Kurzus[]>;
  tantargyak$!: Observable<Tantargy[]>;
  tantargy: string;
  form!: FormGroup;

  constructor(private kurzusService: KurzusService, private tantargyService: TantargyService) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.kurzusok$ = this.fetchAll();
    this.tantargyak$ = this.tantargyService.getTantargy();

    this.form = new FormGroup(
      {
        kurzusKod: new FormControl(),
        nev: new FormControl(),
        tantargy: new FormControl()
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  fetchAll(): Observable<Kurzus[]> {
    return this.kurzusService.getKurzus();
  }

  delKurzus(kurzusKod: string): void {
    this.kurzusService.delKurzus(kurzusKod).subscribe(() => (
      this.kurzusok$ = this.fetchAll()
    ));
  }

  onSubmit(): void {
    this.kurzusService.addKurzus(this.form.value).subscribe(() => (
      console.log(this.form.value),
        this.kurzusok$ = this.fetchAll()
    ));
  }


}
