
function OPJourneyCount(req) {
  // Intialise currentOPStep Count or increment
  if (typeof req.session.data.currentOPStep === 'undefined') {
      req.session.data.currentOPStep = 0;
    } else {
      req.session.data.currentOPStep++;
    }
    
  }
// module epxport start:
 
module.exports = function(router) {
 
//place routes here
router.post('/apply/february2025/better-information-for-tracing/op-question-list', function(req, res) {
  // restsart script
  delete req.session.data.currentOPStep
  const opData = req.session.data['op-details'];
 
const redirectMap = {
  "Name": "/apply/february2025/better-information-for-tracing/op-name",
  "Date of birth": "/apply/february2025/better-information-for-tracing/op-dob",
  "Address": "/apply/february2025/better-information-for-tracing/op-address-1",
  "Phone number": "/apply/february2025/better-information-for-tracing/op-phone",
  "National Insurance number": "/apply/february2025/better-information-for-tracing/op-nino",
  "Other information": "/apply/february2025/better-information-for-tracing/op-anything-else"
};
 
const requiredJourneyFlow = [];
 
for (const key of Object.keys(redirectMap)) {
  if (opData.includes(key)) {
    // Either build up journey array with future paths
    requiredJourneyFlow.push(redirectMap[key])
    // Or just redirect based off first answer (other logic handled in future routes)
    // return res.redirect(redirectMap[key]);
  }
}
OPJourneyCount(req);
req.session.data['op-journey-flow'] = requiredJourneyFlow;
 
const journeyFlow = req.session.data['op-journey-flow'];
const nextPage = journeyFlow[req.session.data.currentOPStep];
 
if (nextPage) {
return res.redirect(nextPage);
} else {
// End of journey — redirect to summary or final page
return res.redirect('/apply/february2025/better-information-for-tracing/check-your-answers');
}
 
// Optional: fallback if none matched or i do not know
// res.redirect("default-page");
 
});
 
router.post('/apply/february2025/better-information-for-tracing/op-name', function (req, res) {
  OPJourneyCount(req);
 
  const journeyFlow = req.session.data['op-journey-flow'];
  const nextPage = journeyFlow[req.session.data.currentOPStep];
 
  if (nextPage) {
  return res.redirect(nextPage);
  } else {
  // End of journey — redirect to summary or final page
  return res.redirect('/apply/february2025/better-information-for-tracing/check-your-answers');
  }
 
});
 
router.post('/apply/february2025/better-information-for-tracing/op-dob', function (req, res) {
  OPJourneyCount(req);
 
  const journeyFlow = req.session.data['op-journey-flow'];
  const nextPage = journeyFlow[req.session.data.currentOPStep];
 
  if (nextPage) {
  return res.redirect(nextPage);
  } else {
  // End of journey — redirect to summary or final page
  return res.redirect('/apply/february2025/better-information-for-tracing/check-your-answers');
  }
 
});

router.post('/apply/february2025/better-information-for-tracing/op-address-1', function (req, res) {
  OPJourneyCount(req);
 
  const journeyFlow = req.session.data['op-journey-flow'];
  const nextPage = journeyFlow[req.session.data.currentOPStep];
 
  if (nextPage) {
  return res.redirect(nextPage);
  } else {
  // End of journey — redirect to summary or final page
  return res.redirect('/apply/february2025/better-information-for-tracing/check-your-answers');
  }
 
});
 
router.post('/apply/february2025/better-information-for-tracing/op-phone', function (req, res) {
  OPJourneyCount(req);
 
  const journeyFlow = req.session.data['op-journey-flow'];
  const nextPage = journeyFlow[req.session.data.currentOPStep];
 
  if (nextPage) {
  return res.redirect(nextPage);
  } else {
  // End of journey — redirect to summary or final page
  return res.redirect('/apply/february2025/better-information-for-tracing/check-your-answers');
  }
 
});
 
router.post('/apply/february2025/better-information-for-tracing/op-nino', function (req, res) {
  OPJourneyCount(req);
 
  const journeyFlow = req.session.data['op-journey-flow'];
  const nextPage = journeyFlow[req.session.data.currentOPStep];
 
  if (nextPage) {
  return res.redirect(nextPage);
  } else {
  // End of journey — redirect to summary or final page
  return res.redirect('/apply/february2025/better-information-for-tracing/check-your-answers');
  }
 
});
 
router.post('/apply/february2025/better-information-for-tracing/op-anything-else', function (req, res) {
  OPJourneyCount(req);
 
  const journeyFlow = req.session.data['op-journey-flow'];
  const nextPage = journeyFlow[req.session.data.currentOPStep];
 
  if (nextPage) {
  return res.redirect(nextPage);
  } else {
  // End of journey — redirect to summary or final page
  return res.redirect('/apply/february2025/better-information-for-tracing/check-your-answers');
  }
 
});

router.post('/apply/february2025/better-information-for-tracing/op-previous-address', function (req, res, next) {
  // if selection is not full/partial address then move onto next journey from list

  const previosuAddressOptions = ["I know the town or city of the other parents previous address", "I know the area of the other parents previous address", "I don't know about the other parents previous address"]

  const selectedOption = req.body['op-prev-address'];

  if (previosuAddressOptions.some(option => selectedOption.includes(option))) {
    OPJourneyCount(req);
    const journeyFlow = req.session.data['op-journey-flow'];
    const nextPage = journeyFlow[req.session.data.currentOPStep];

    if (nextPage) {
    return res.redirect(nextPage);
    } else {
    // End of journey — redirect to summary or final page
    return res.redirect('/apply/february2025/better-information-for-tracing/check-your-answers');
    }

  } else {
    // No match
    console.log("Selected option does not match any known options.");
    next();
  }

});

router.post('/apply/february2025/better-information-for-tracing/op-previous-replay', function (req, res, next) {
    OPJourneyCount(req);
    const journeyFlow = req.session.data['op-journey-flow'];
    const nextPage = journeyFlow[req.session.data.currentOPStep];

    if (nextPage) {
    return res.redirect(nextPage);
    } else {
    // End of journey — redirect to summary or final page
    return res.redirect('/apply/february2025/better-information-for-tracing/check-your-answers');
    }


});

router.get('/apply/february2025/better-information-for-tracing/welcome', function(req, res) {
 
  delete req.session.data
 
  res.render('/apply/february2025/better-information-for-tracing/welcome');
 
})
 
}
// module export ends

