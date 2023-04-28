import countComments from '../countComments.js';
/**
 * @jest-environment jsdom
 */

describe('Should show the exact number of comments', () => {
  it('Should show 2 comments in the list', () => {
    const comment = [{ id: 1 }, { id: 2 }];
    expect(countComments(comment, comment)).toEqual(2);
  });

  it('Should show 5 comments in the list', () => {
    const comment = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
    expect(countComments(comment, comment)).toEqual(5);
  });

  it('Should show 1 comments in the list', () => {
    const comment = [{ id: 1 }];
    expect(countComments(comment, comment)).toEqual(1);
  });

  it('Should show 0 comments in the list', () => {
    const comment = [];
    expect(countComments(comment, comment)).toEqual(0);
  });

  it('Should show 1 comments in the list', () => {
    const comment = [{}];
    expect(countComments(comment, comment)).toEqual(1);
  });
});