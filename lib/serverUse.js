exports.on = function(app) {
  let express = require('express');
  let path = require('path');
  app.use('/resource', express.static(path.join(__dirname, '../client/resource')))
  app.use('/scripts', express.static(path.join(__dirname, '../client/scripts')))
  app.use('/stylesheets', express.static(path.join(__dirname, '../client/stylesheets')))
}
