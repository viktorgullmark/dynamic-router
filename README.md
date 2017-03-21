# dynamic-router

Showcasing a solution on how to load routes dynamically, from any endpoint. 

How it works:

- Uses a wild-card route to catch unknown routes
- Whenever a unknown route is hit, the guard will fetch the routes and reset the config, and continue to load the request
- Stores the config across the scope inside a config-service

Built with angular-cli, get started:

- npm install -g @angular/cli@latest
- npm install (when inside proj-dir)
- ng serve
