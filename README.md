# Health check middleware for Etherpad
This is a simple plugin for Etherpad that exposes liveness/readiness endpoints (under /health/ prefix), using CloudNativeJS's cloud-health module.

# Usage
Use the following endpoints for probing:
- /health/liveness
- /health/readiness
- /health - the combined endpoint for both liveness and readiness (see https://github.com/CloudNativeJS/cloud-health-connect/blob/master/README.md#health-liveness-and-readiness-endpoints for details)
