/* eslint-env jest */
import { hello } from './index';

test('Returns greeting', () => {
  expect(hello()).toBe('Hello, World!');
});
