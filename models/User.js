module.exports = (seqaulize) => {
  return sequelize.define('user', {
    googleId: Sequelize.STRING
  });
}
