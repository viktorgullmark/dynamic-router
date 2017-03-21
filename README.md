# dynamic-router

Showcasing a solution on how to load routes dynamically, from any endpoint. 

How it works:

- Uses a wild-card route to catch unkown routes
- Whenever a unknown route is hit, the guard will fetch the routes and reset the config, and continue to load the request
- Stores the config across the scope inside a config-service