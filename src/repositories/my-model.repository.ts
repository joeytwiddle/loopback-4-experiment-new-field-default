import {DefaultCrudRepository} from '@loopback/repository';
import {MyModel, MyModelRelations} from '../models';
import {MainDbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class MyModelRepository extends DefaultCrudRepository<
  MyModel,
  typeof MyModel.prototype.id,
  MyModelRelations
> {
  constructor(@inject('datasources.MainDB') dataSource: MainDbDataSource) {
    super(MyModel, dataSource);
  }
}
