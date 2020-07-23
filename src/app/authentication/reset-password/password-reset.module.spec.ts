import { AuthSignupModule } from './password-reset.module';

describe('AuthSignupModule', () => {
  let authSignupModule: AuthSignupModule;

  beforeEach(() => {
    authSignupModule = new AuthSignupModule();
  });

  it('should create an instance', () => {
    expect(authSignupModule).toBeTruthy();
  });
});
