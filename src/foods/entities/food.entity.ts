import { Category } from 'src/categories/entities/category.entity';
import {
  BeforeInsert,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Food {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', { unique: true })
  name: string;

  @Column('float')
  price: number;

  @Column('text', { nullable: true })
  description: string;

  @Column('int4', { nullable: true })
  calories: number;

  @Column('time', { nullable: true })
  preparationTime: Date;

  @Column('bool', { default: true })
  isActive: boolean;

  @ManyToOne(() => Category, (category) => category.food, { eager: true })
  category: Category;

  @BeforeInsert()
  formatString() {
    this.name = this.name.toLowerCase();
    if (this.description) this.description = this.description.toLowerCase();
  }
}
