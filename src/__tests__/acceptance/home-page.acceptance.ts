import {Client} from '@loopback/testlab';
import {Lb4TestApplication} from '../..';
import {setupApplication} from './test-helper';

describe('HomePage', () => {
  let app: Lb4TestApplication;
  let client: Client;

  before('setupApplication', async () => {
    ({app, client} = await setupApplication());
  });

  after(async () => {
    await app.stop();
  });

  it('exposes a default home page', async () => {
    await client
      .get('/')
      .expect(200)
      .expect('Content-Type', /text\/html/);
  });

  it('exposes self-hosted explorer', async () => {
    await client
      .get('/explorer/')
      .expect(200)
      .expect('Content-Type', /text\/html/)
      .expect(/<title>LoopBack API Explorer/);
  });

  it('lets us create a model', async () => {
    const response = await client
      .post('/my-models')
      .send({
        name: 'Fred',
        age: 40,
      })
      .expect(200);
    const result = JSON.parse(response.text);
    console.log('result:', result);
  });

  it('exposes models', async () => {
    const response = await client.get('/my-models').expect(200);
    const result = JSON.parse(response.text);
    console.log('result:', result);
  });
});
