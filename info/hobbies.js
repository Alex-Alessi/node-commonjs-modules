const hobbies = (...hobbies) => {
  const hobbiesArray = hobbies.map((hobby) => {
    return hobby;
  });
  return { hobbiesArray };
};

module.exports = hobbies;
