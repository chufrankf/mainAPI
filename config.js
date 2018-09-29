/*
 * Environment Configurations 
 */
var config = {
  // Development mode
  dev: {
    mongo: "mongodb://localhost:27017/apidev",
    port: 3000
  },
  
  // Staging mode
  stg: {
    mongo: "mongodb://localhost:27017/apistg",
    port: 3000
  },
  
  // Production mode
  prod: {
    mongo: "mongodb://localhost:27017/apiprod",
    port: 3000
  }
}

// Export out the configuration based off the environment
exports.config = (env) => config[env] || config.dev;
