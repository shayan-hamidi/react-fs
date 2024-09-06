import * as Sentry from '@sentry/react';

export function initializeSentry() {
  Sentry.init({
    dsn: 'https://5ab45afd6c5651522b22887d1da4b874@o1111502.ingest.us.sentry.io/4507905923743744',
    integrations: [
      Sentry.browserTracingIntegration(),
      Sentry.replayIntegration(),
    ],
    tracesSampleRate: 1.0,
    tracePropagationTargets: ['localhost', /^https:\/\/yourserver\.io\/api/],
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
  });
}
