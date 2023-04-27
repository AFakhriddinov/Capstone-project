const countItems = async (itemCount, elementHtml) => {
  if (itemCount === 0 || itemCount === null) {
    elementHtml.innerHTML = '(0)';
  } else {
    elementHtml.innerHTML = ` (${itemCount})`;
  }
};

export default countItems;
