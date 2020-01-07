import {Entity, model, property} from '@loopback/repository';

@model()
export class MyModel extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'number',
    required: true,
  })
  age: number;


  constructor(data?: Partial<MyModel>) {
    super(data);
  }
}

export interface MyModelRelations {
  // describe navigational properties here
}

export type MyModelWithRelations = MyModel & MyModelRelations;
