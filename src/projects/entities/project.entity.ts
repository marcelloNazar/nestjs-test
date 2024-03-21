import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  constructor(props: Partial<Project>) {
    Object.assign(this, props);
  }
}
