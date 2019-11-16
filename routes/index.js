module.exports = app => {
  require('./pizzaRoutes.js')(app)
  require('./viewRoutes.js')(app)
}