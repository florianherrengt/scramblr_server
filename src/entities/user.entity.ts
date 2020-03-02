import { ObjectType, Field } from 'type-graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
@ObjectType()
export class User {
    @Field()
    @PrimaryGeneratedColumn('uuid')
    username: string;

    @Column()
    password: string;
}