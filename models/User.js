module.exports = (dodo, type) => {
  let User = dodo.define('user', {
    googleId: type.STRING
  });
  return User;
}
