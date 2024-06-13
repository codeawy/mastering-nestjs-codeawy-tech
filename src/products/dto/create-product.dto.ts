import { IsInt, Length } from 'class-validator';

export class CreateProductDto {
  @Length(10, 20)
  title: string;
  @IsInt()
  price: number;
}
