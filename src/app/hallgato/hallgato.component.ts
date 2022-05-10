import {Component, Injectable, OnInit} from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {HallgatoService} from '../services/hallgato.service';
import {Hallgato} from '../models/Hallgato';

@Component({
  selector: 'app-hallgato',
  templateUrl: './hallgato.component.html',
  styleUrls: ['./hallgato.component.css']
})
export class HallgatoComponent implements OnInit {
  hallgatok$!: Observable<Hallgato[]>;
  form!: FormGroup;

  constructor(private hallgatoService: HallgatoService) { }
  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.hallgatok$ = this.fetchAll();

    this.form = new FormGroup(
      {
        neptunKod: new FormControl(),
        nev: new FormControl(),
        tankor: new FormControl()
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  fetchAll(): Observable<Hallgato[]> {
    return this.hallgatoService.getHallgato();
  }

  delHallgato(neptunKod: string): void {
    this.hallgatoService.delHallgato(neptunKod).subscribe(() => (
      this.hallgatok$ = this.fetchAll()
    ));
  }

  onSubmit(): void {
    this.hallgatoService.addHallgato(this.form.value).subscribe(() => (
      console.log(this.form.value),
      this.hallgatok$ = this.fetchAll()
    ));
  }


}
