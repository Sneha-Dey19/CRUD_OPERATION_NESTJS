import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TaskDesc
{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name: string;

    @Column()
    description: string;
}