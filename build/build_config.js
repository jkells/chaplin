({
  baseUrl: '../js/',
  name: "application",
  out: "build/chaplin.js",
  include: [
    "application",
    "lib/create_mediator",
    "lib/route",
    "lib/router",
    "lib/subscriber",
    "lib/sync_machine",
    "lib/utils",
    "controllers/application_controller",
    "controllers/controller",
    "models/collection",
    "models/model",
    "views/application_view",
    "views/collection_view",
    "views/view"
  ],
  paths: {
    jquery: 'empty:',
    underscore: 'empty:',
    backbone: 'empty:',
    mediator: 'empty:'
  }
})