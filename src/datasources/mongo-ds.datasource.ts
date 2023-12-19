import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'mongoDs',
  connector: 'mongodb',
  url: 'mongodb+srv://srishti:O0yGuoL4mvUfa8o3@cluster0.oowp1mh.mongodb.net/loopback',
  host: 'cluster0.oowp1mh.mongodb.net',
  port: 3306,
  user: 'srishti',
  password: 'O0yGuoL4mvUfa8o3',
  database: 'loopback',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MongoDsDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'mongoDs';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.mongoDs', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
