// Q9) Write a function to count the number of words in a paragraph.

function countWords(paragraph) {
  let words = paragraph.trim().split(/\s+/);

  return words.length;
}

const paragraph =
  "Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges. The writer can use the paragraph as the first one of a short story and build upon it. A second option is to use the random paragraph somewhere in a short story they create. ";
console.log(countWords(paragraph));
