import { Column, Entity, ObjectIdColumn, PrimaryColumn } from "typeorm";

@Entity()
export class Lesson{
    @ObjectIdColumn()
    _id:string;

    @PrimaryColumn()
    id:string;

    @Column()
    name:string;
    
    @Column()
    strDate:string;

    @Column()
    endDate:string;
}