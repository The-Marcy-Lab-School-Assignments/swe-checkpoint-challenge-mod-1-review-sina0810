const {
  createUser,
  incrementLogin,
  deactivateUser,
  printUserInfo,
  cloneUser,
} = require('../src/2-user-profile');

describe('createUser', () => {
  it('returns a user object with the provided username and email', () => {
    const user = createUser('coder123', 'coder@example.com');
    expect(user.username).toBe('coder123');
    expect(user.email).toBe('coder@example.com');
  });

  it('sets isActive to true by default', () => {
    const user = createUser('coder123', 'coder@example.com');
    expect(user.isActive).toBe(true);
  });

  it('sets loginCount to 0 by default', () => {
    const user = createUser('coder123', 'coder@example.com');
    expect(user.loginCount).toBe(0);
  });

  it('creates different user objects for different inputs', () => {
    const user1 = createUser('alice', 'alice@test.com');
    const user2 = createUser('bob', 'bob@test.com');
    expect(user1.username).toBe('alice');
    expect(user2.username).toBe('bob');
  });
});

describe('incrementLogin', () => {
  it('increases loginCount by 1', () => {
    const user = createUser('coder123', 'coder@example.com');
    incrementLogin(user);
    expect(user.loginCount).toBe(1);
  });

  it('increases loginCount multiple times', () => {
    const user = createUser('coder123', 'coder@example.com');
    incrementLogin(user);
    incrementLogin(user);
    incrementLogin(user);
    expect(user.loginCount).toBe(3);
  });
});

describe('deactivateUser', () => {
  it('sets isActive to false', () => {
    const user = createUser('coder123', 'coder@example.com');
    deactivateUser(user);
    expect(user.isActive).toBe(false);
  });

  it('deletes the email property', () => {
    const user = createUser('coder123', 'coder@example.com');
    deactivateUser(user);
    expect(user.email).toBeUndefined();
    expect('email' in user).toBe(false);
  });

  it('returns the updated user object', () => {
    const user = createUser('coder123', 'coder@example.com');
    const result = deactivateUser(user);
    expect(result).toBe(user);
  });

  it('preserves other properties', () => {
    const user = createUser('coder123', 'coder@example.com');
    user.loginCount = 5;
    deactivateUser(user);
    expect(user.username).toBe('coder123');
    expect(user.loginCount).toBe(5);
  });
});

describe('printUserInfo', () => {
  it('prints each property and value in the correct format', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    const user = createUser('coder123', 'coder@example.com');

    printUserInfo(user);

    expect(consoleSpy).toHaveBeenCalledWith('username: coder123');
    expect(consoleSpy).toHaveBeenCalledWith('email: coder@example.com');
    expect(consoleSpy).toHaveBeenCalledWith('isActive: true');
    expect(consoleSpy).toHaveBeenCalledWith('loginCount: 0');

    consoleSpy.mockRestore();
  });

  it('prints updated values after modifications', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    const user = createUser('testuser', 'test@test.com');
    incrementLogin(user);
    incrementLogin(user);

    printUserInfo(user);

    expect(consoleSpy).toHaveBeenCalledWith('loginCount: 2');

    consoleSpy.mockRestore();
  });
});

describe('cloneUser (BONUS)', () => {
  it('returns a new object with the same properties', () => {
    const user = createUser('coder123', 'coder@example.com');
    const clone = cloneUser(user);

    expect(clone.username).toBe('coder123');
    expect(clone.email).toBe('coder@example.com');
    expect(clone.isActive).toBe(true);
    expect(clone.loginCount).toBe(0);
  });

  it('returns a different object reference (not the same object)', () => {
    const user = createUser('coder123', 'coder@example.com');
    const clone = cloneUser(user);

    expect(clone).not.toBe(user);
  });

  it('modifying the clone does not affect the original', () => {
    const user = createUser('coder123', 'coder@example.com');
    const clone = cloneUser(user);

    clone.username = 'changedname';
    clone.loginCount = 100;

    expect(user.username).toBe('coder123');
    expect(user.loginCount).toBe(0);
  });
});
