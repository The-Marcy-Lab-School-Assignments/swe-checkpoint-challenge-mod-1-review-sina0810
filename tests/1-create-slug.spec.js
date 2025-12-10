const { createSlug } = require('../src/1-create-slug');

describe('createSlug', () => {
  it('converts a simple two-word title to a slug', () => {
    expect(createSlug('Hello World')).toBe('hello-world');
  });

  it('converts a multi-word title to a slug', () => {
    expect(createSlug('My First Blog Post')).toBe('my-first-blog-post');
  });

  it('converts uppercase letters to lowercase', () => {
    expect(createSlug('JavaScript Is AWESOME')).toBe('javascript-is-awesome');
  });

  it('returns null if the title contains "!"', () => {
    expect(createSlug('Hello World!')).toBe(null);
  });

  it('returns null if the title contains "#"', () => {
    expect(createSlug('Hello #World')).toBe(null);
  });

  it('returns null if the title contains "?"', () => {
    expect(createSlug('What is JavaScript?')).toBe(null);
  });

  it('returns null if the title contains multiple banned characters', () => {
    expect(createSlug('JavaScript Is #AWESOME!?')).toBe(null);
  });

  it('handles a single word title', () => {
    expect(createSlug('JavaScript')).toBe('javascript');
  });
});
