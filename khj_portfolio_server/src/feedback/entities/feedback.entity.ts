import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Feedback {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 20 })
  author: string;

  @Column({ type: 'text' })
  content: string;

  @CreateDateColumn()
  createdAT: Date;
}
