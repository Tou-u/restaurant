import { Food } from 'src/foods/entities/food.entity';
import {
  BeforeInsert,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('text', { unique: true })
  name: string;

  @OneToMany(() => Food, (food) => food.category)
  food: Food;

  @BeforeInsert()
  formatName() {
    this.name = this.name.toLowerCase();
  }
}
