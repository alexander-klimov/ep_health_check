const health = require('@cloudnative/health-connect');

let healthcheck = new health.HealthChecker();

exports.expressCreateServer = function(hook, context) {
    context.app.use('/liveness', health.LivenessEndpoint(healthcheck));
    context.app.use('/readiness', health.ReadinessEndpoint(healthcheck));
    context.app.use('/health', health.HealthEndpoint(healthcheck));
}