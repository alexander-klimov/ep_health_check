const health = require('@cloudnative/health-connect');

let healthcheck = new health.HealthChecker();

exports.expressCreateServer = function(hook, context) {
    context.app.use('/live', health.LivenessEndpoint(healthcheck));
    context.app.use('/ready', health.ReadinessEndpoint(healthcheck));
    context.app.use('/health', health.HealthEndpoint(healthcheck));
}