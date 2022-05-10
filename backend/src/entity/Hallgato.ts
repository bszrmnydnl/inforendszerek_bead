import {Entity, PrimaryGeneratedColumn, Column, PrimaryColumn} from 'typeorm';

@Entity()
export class Hallgato {

    @PrimaryColumn()
    neptunKod: string;

    @Column()
    nev: string;

    @Column()
    tankor: string;
}
