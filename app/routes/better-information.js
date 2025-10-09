'use strict';

// Helper: increment or initialise the OP journey step counter
function OPJourneyCount(req) {
  if (!req.session.data) req.session.data = {};
  if (typeof req.session.data.currentOPStep === 'undefined') {
    req.session.data.currentOPStep = 0;
  } else {
    req.session.data.currentOPStep++;
  }
}

// Define all internal routes that this file is ever allowed to redirect to.
// Nothing outside this set will be redirected to.
const ALLOWED_PATHS = new Set([
  '/apply/february2025/better-information-for-tracing/op-name',
  '/apply/february2025/better-information-for-tracing/op-dob',
  '/apply/february2025/better-information-for-tracing/op-address-1',
  '/apply/february2025/better-information-for-tracing/op-phone',
  '/apply/february2025/better-information-for-tracing/op-nino',
  '/apply/february2025/better-information-for-tracing/op-anything-else',
  '/apply/february2025/better-information-for-tracing/op-previous-address',
  '/apply/february2025/better-information-for-tracing/op-previous-replay',
  '/apply/february2025/better-information-for-tracing/check-your-answers',
  '/apply/february2025/better-information-for-tracing/welcome'
]);

// Helper: perform a safe internal redirect to a known-good path only
function safeRedirect(res, targetPath) {
  if (typeof targetPath !== 'string') {
    return res.status(400).send('Invalid redirect target');
  }

  // Only allow absolute, same-site paths we control
  const looksInternal =
    targetPath.startsWith('/') &&
    !targetPath.startsWith('//') &&
    !/^https?:/i.test(targetPath);

  if (looksInternal && ALLOWED_PATHS.has(targetPath)) {
    return res.redirect(303, targetPath);
  }

  // Block anything not on the allowlist
  return res.status(400).send('Invalid redirect target');
}

// Helper: get the next page from the session-controlled flow,
// but only if it is in our allowlist. Otherwise, fall back to CYA.
function getNextAllowedPage(req) {
  const flow = Array.isArray(req.session?.data?.['op-journey-flow'])
    ? req.session.data['op-journey-flow']
    : [];

  const stepIndex = Number(req.session?.data?.currentOPStep ?? 0);
  const candidate = flow[stepIndex];

  if (typeof candidate === 'string' && ALLOWED_PATHS.has(candidate)) {
    return candidate;
  }

  // End of journey or invalid entry, go to summary
  return '/apply/february2025/better-information-for-tracing/check-your-answers';
}

// Module export start
module.exports = function (router) {
  // POST: build journey based on selected OP details
  router.post(
    '/apply/february2025/better-information-for-tracing/op-question-list',
    function (req, res) {
      if (!req.session.data) req.session.data = {};

      // Restart script
      delete req.session.data.currentOPStep;

      const opData = req.session.data['op-details'];
      const selectedKeys = Array.isArray(opData) ? opData : [];

      // Fixed map of labels to internal routes
      const redirectMap = {
        'Name': '/apply/february2025/better-information-for-tracing/op-name',
        'Date of birth': '/apply/february2025/better-information-for-tracing/op-dob',
        'Address': '/apply/february2025/better-information-for-tracing/op-address-1',
        'Phone number': '/apply/february2025/better-information-for-tracing/op-phone',
        'National Insurance number': '/apply/february2025/better-information-for-tracing/op-nino',
        'Other information': '/apply/february2025/better-information-for-tracing/op-anything-else'
      };

      // Build the required journey flow strictly from our known-good map
      const requiredJourneyFlow = [];
      for (const key of Object.keys(redirectMap)) {
        if (selectedKeys.includes(key)) {
          const path = redirectMap[key];
          if (ALLOWED_PATHS.has(path)) {
            requiredJourneyFlow.push(path);
          }
        }
      }

      // Persist the flow in session
      OPJourneyCount(req);
      req.session.data['op-journey-flow'] = requiredJourneyFlow;

      // Decide next page safely
      const nextPage = getNextAllowedPage(req);
      return safeRedirect(res, nextPage);
    }
  );

  // POST: OP Name
  router.post(
    '/apply/february2025/better-information-for-tracing/op-name',
    function (req, res) {
      OPJourneyCount(req);
      const nextPage = getNextAllowedPage(req);
      return safeRedirect(res, nextPage);
    }
  );

  // POST: OP DOB
  router.post(
    '/apply/february2025/better-information-for-tracing/op-dob',
    function (req, res) {
      OPJourneyCount(req);
      const nextPage = getNextAllowedPage(req);
      return safeRedirect(res, nextPage);
    }
  );

  // POST: OP Address line 1
  router.post(
    '/apply/february2025/better-information-for-tracing/op-address-1',
    function (req, res) {
      OPJourneyCount(req);
      const nextPage = getNextAllowedPage(req);
      return safeRedirect(res, nextPage);
    }
  );

  // POST: OP Phone
  router.post(
    '/apply/february2025/better-information-for-tracing/op-phone',
    function (req, res) {
      OPJourneyCount(req);
      const nextPage = getNextAllowedPage(req);
      return safeRedirect(res, nextPage);
    }
  );

  // POST: OP NINO
  router.post(
    '/apply/february2025/better-information-for-tracing/op-nino',
    function (req, res) {
      OPJourneyCount(req);
      const nextPage = getNextAllowedPage(req);
      return safeRedirect(res, nextPage);
    }
  );

  // POST: OP Anything else
  router.post(
    '/apply/february2025/better-information-for-tracing/op-anything-else',
    function (req, res) {
      OPJourneyCount(req);
      const nextPage = getNextAllowedPage(req);
      return safeRedirect(res, nextPage);
    }
  );

  // POST: OP Previous address
  router.post(
    '/apply/february2025/better-information-for-tracing/op-previous-address',
    function (req, res, next) {
      const previousAddressOptions = [
        'I know the town or city of the other parents previous address',
        'I know the area of the other parents previous address',
        "I don't know about the other parents previous address"
      ];

      const selectedOption = String(req.body['op-prev-address'] || '');

      if (previousAddressOptions.some(option => selectedOption.includes(option))) {
        OPJourneyCount(req);
        const nextPage = getNextAllowedPage(req);
        return safeRedirect(res, nextPage);
      } else {
        // No match, continue middleware chain
        // Optionally log for diagnostics
        // console.log('Selected option does not match any known options.');
        return next();
      }
    }
  );

  // POST: OP Previous replay
  router.post(
    '/apply/february2025/better-information-for-tracing/op-previous-replay',
    function (req, res) {
      OPJourneyCount(req);
      const nextPage = getNextAllowedPage(req);
      return safeRedirect(res, nextPage);
    }
  );

  // GET: Welcome
  router.get(
    '/apply/february2025/better-information-for-tracing/welcome',
    function (req, res) {
      // Reset session data for a fresh start
      req.session.data = {};
      // Render the welcome page template.
      // If your templating expects a name without a leading slash, adjust accordingly.
      return res.render('/apply/february2025/better-information-for-tracing/welcome');
    }
  );
};
// Module export ends