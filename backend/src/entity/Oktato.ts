import {Entity, Column, PrimaryColumn, OneToMany} from 'typeorm';
import {Tantargy} from './Tantargy';

@Entity()
export class Oktato {

    @PrimaryColumn()
    neptunKod: string;

    @Column()
    nev: string;

    @Column()
    tanszek: string;

    @OneToMany(() => Tantargy, (tantargy) => tantargy.oktato)
    tantargyak: Tantargy[];
}
