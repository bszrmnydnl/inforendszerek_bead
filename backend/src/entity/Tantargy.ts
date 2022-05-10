import {Entity, Column, PrimaryColumn, OneToMany, JoinColumn, ManyToOne} from 'typeorm';
import {Kurzus} from './Kurzus';
import {Oktato} from './Oktato';

@Entity()
export class Tantargy {

    @PrimaryColumn()
    targyKod: string;

    @Column()
    nev: string;

    @OneToMany(() => Kurzus, (kurzus) => kurzus.tantargy)
    kurzusok: Kurzus[];

    @ManyToOne(() => Oktato, (oktato) => oktato.tantargyak)
    oktato: Oktato;
}
