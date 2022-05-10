import {Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, ManyToOne, ManyToMany, JoinTable} from 'typeorm';
import {Tantargy} from './Tantargy';
import {Hallgato} from './Hallgato';

@Entity()
export class Kurzus {

    @PrimaryColumn()
    kurzusKod: string;

    @Column()
    nev: string;

    @ManyToOne(() => Tantargy, (tantargy) => tantargy.kurzusok)
    tantargy: Tantargy;

    @ManyToMany(() => Hallgato)
    @JoinTable()
    hallgatok: Hallgato[];
}
