const countComments = (id, comment) => {
  const commentIdLength = id.length;
  const commentLength = comment.length;
  if (commentIdLength === commentLength) {
    return commentIdLength;
  }
  return 0;
};

export default countComments;