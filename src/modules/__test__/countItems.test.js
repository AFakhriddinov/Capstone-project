import countItems from '../countItems.js';
/**
 * @jest-environment jsdom
 */

describe('Should display the exact number of items', () => {
  it('Should display 3 items in the list', () => {
    const parentElement = document.createElement('div');
    parentElement.innerHTML = `
      <div></div>
      <div></div>
      <div></div>
    `;
    const elementHtml = document.createElement('span');
    countItems(parentElement.childElementCount, elementHtml);

    expect(elementHtml.innerHTML).toEqual(' (3)');
  });

  it('Should display 6 items in the list', () => {
    const parentElement = document.createElement('div');
    parentElement.innerHTML = `
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    `;
    const elementHtml = document.createElement('span');
    countItems(parentElement.childElementCount, elementHtml);

    expect(elementHtml.innerHTML).toEqual(' (6)');
  });

  it('Should display 1 items in the list', () => {
    const parentElement = document.createElement('div');
    parentElement.innerHTML = `
      <div></div>
    `;
    const elementHtml = document.createElement('span');
    countItems(parentElement.childElementCount, elementHtml);

    expect(elementHtml.innerHTML).toEqual(' (1)');
  });

  it('Should display 0 items in the list', () => {
    const parentElement = document.createElement('div');
    parentElement.innerHTML = '';
    const elementHtml = document.createElement('span');
    countItems(parentElement.childElementCount, elementHtml);

    expect(elementHtml.innerHTML).toEqual('(0)');
  });

  it('Should display 0 items in the list', () => {
    const parentElement = document.createElement('div');

    const elementHtml = document.createElement('span');
    countItems(parentElement.childElementCount, elementHtml);

    expect(elementHtml.innerHTML).toEqual('(0)');
  });
});
