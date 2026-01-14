import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import * as Sentry from "@sentry/react";
// import React from 'react'

// Sentry.init({
//   dsn: "https://6ffac7d5227d3f5ab23841513c25600e@o4509581022068736.ingest.us.sentry.io/4509581110673408",
//   // Setting this option to true will send default PII data to Sentry.
//   // For example, automatic IP address collection on events
//   integrations: [
//     Sentry.browserTracingIntegration(),
//     // Sentry.metrics.metricsAggregatorIntegration(),
//     Sentry.reactRouterV6BrowserTracingIntegration({
//       useEffect: React.useEffect,
//     }),
//     Sentry.replayIntegration({
//       maskAllText: false,
//       blockAllMedia: false,
//     }),
//   ],
//   tracesSampleRate: 1.0,
//   tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
//   replaysSessionSampleRate: 0.1,
//   replaysOnErrorSampleRate: 1.0,
//   sendDefaultPii: true,
// });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
