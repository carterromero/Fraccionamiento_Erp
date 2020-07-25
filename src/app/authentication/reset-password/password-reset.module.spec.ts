import { ResetPasswordModule } from './password-reset.module';

describe('AuthSignupModule', () => {
  let authSignupModule: ResetPasswordModule;

  beforeEach(() => {
    authSignupModule = new ResetPasswordModule();
  });

  it('should create an instance', () => {
    expect(authSignupModule).toBeTruthy();
  });
});
