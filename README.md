# Health check middleware for Etherpad
This is a simple plugin for Etherpad that exposes liveness/readiness endpoints (under /health/ prefix), using CloudNativeJS's cloud-health module.

# Usage
Use /health/liveness or /health/readiness for probing.
