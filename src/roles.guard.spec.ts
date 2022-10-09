import { RolesGuard } from './auth/Guards/roles.guard';

describe('RolesGuard', () => {
  it('should be defined', () => {
    expect(new RolesGuard()).toBeDefined();
  });
});
