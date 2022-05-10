import {Column, JoinTable, ManyToMany, ManyToOne, PrimaryColumn} from 'typeorm';
import {Tantargy} from '../../../backend/src/entity/Tantargy';
import {Hallgato} from '../../../backend/src/entity/Hallgato';

export interface Kurzus {
  kurzusKod: string;
  nev: string;
  tantargy: string;
  hallgatok: Hallgato[];
}
