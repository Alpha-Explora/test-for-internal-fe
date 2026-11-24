import { SERVICE_NAME } from '../../src/index';

describe('test-for-internal-frontend', () => {
  it('should export SERVICE_NAME', () => {
    expect(SERVICE_NAME).toBe('test-for-internal-frontend');
  });
});