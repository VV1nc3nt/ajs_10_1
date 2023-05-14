import GameSavingLoader from '../GameSavingLoader';

test('Testing app.js', async () => {
  const expected = await GameSavingLoader.load();
  const recieved = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
  expect(expected).toBe(recieved);
});
