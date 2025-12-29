
const radioButtonRedirect = require('radio-button-redirect')
const util = require('util')


module.exports = function(router) {

router.use(radioButtonRedirect)

// routes go here...

//February 2025 routes start:
//Section 1: Start Eligability
router.post('/apply/february2025/1-start-eligibility/urn', function (req, res) {
    res.redirect('/apply/february2025/3-applicant-info/pp-name.html')

    
});


router.post('/apply/february2025/1-start-eligibility/urn-rp', function (req, res) {
    res.redirect('/apply/february2025/3-applicant-info-RP/rp-name')
});



//Section 2: Fees
//paying parent check age

router.post('/apply/february2025/2-fees/check-age', function(req, res) {
    if (req.body['applicant-date-of-birth-year'] > '2002') {``
      res.redirect('/apply/february2025/3-applicant-info/pp-nino');
    } else {
      res.redirect('/apply/february2025/3-applicant-info/pp-nino');
    }
  });

//   router.post('/apply/february2025/2-fees-rp/check-age', function(req, res) {
//     if (req.body['applicant-date-of-birth-year'] > '2002') {``
//       res.redirect('/apply/february2025/3-applicant-info-rp/rp-nino');
//     } else {
//       res.redirect('/apply/february2025/3-applicant-info-rp/rp-nino');
//     }
//   });

  router.post('/apply/february2025/2-fees-rp/check-age', function (req, res) {
    res.redirect('/apply/february2025/3-applicant-info-RP/rp-nino')
});


router.post('/apply/february2025/2-fees/no-fee-under-19', function (req, res) {
    res.redirect('/apply/february2025/2-fees/domestic-abuse-under-19')
});

router.post('/apply/february2025/2-fees/tell-someone-under-19', function (req, res) {
    res.redirect('/apply/february2025/3-applicant-info/pp-name')
});

router.post('/apply/february2025/2-fees/tell-someone', function (req, res) {
    res.redirect('/apply/february2025/3-applicant-info/check-ans.html')
});

router.post('/apply/february2025/2-fees/no-fee', function (req, res) {
    res.redirect('/apply/february2025/3-applicant-info/pp-nino')
});

//RP
router.post('/apply/february2025/2-fees-rp/no-fee-under-19', function (req, res) {
    res.redirect('/apply/february2025/2-fees-rp/domestic-abuse-under-19')
});

router.post('/apply/february2025/2-fees-rp/tell-someone-under-19', function (req, res) {
    res.redirect('/apply/february2025/3-applicant-info-RP/rp-nino')
});

router.post('/apply/february2025/2-fees-rp/tell-someone', function (req, res) {
    res.redirect('/apply/february2025/3-applicant-info-RP/check-ans')
});

router.post('/apply/february2025/2-fees-rp/no-fee', function (req, res) {
    res.redirect('/apply/february2025/3-applicant-info-RP/rp-nino')
});

router.post('/apply/february2025/2-fees-rp/no-fee', function (req, res) {
    res.redirect('/apply/february2025/3-applicant-info-RP/rp-nino')
});


//Section 3: Applicant Info
// router.post('/apply/february2025/3-applicant-info/pp-name', function (req, res) {
//     res.redirect('/apply/february2025/3-applicant-info/pp-nino')
// });

router.post('/apply/february2025/3-applicant-info/pp-nino', function (req, res) {
    res.redirect('/apply/february2025/3-applicant-info/pp-address-1')
});


router.post('/apply/february2025/3-applicant-info/pp-confirm-nino', function (req, res) {
    res.redirect('/apply/february2025/3-applicant-info/equality/extra-question')
});

router.post('/apply/february2025/3-applicant-info/pp-postal', function (req, res) {
    res.redirect('/apply/february2025/3-applicant-info/pp-postal-2')
});

router.post('/apply/february2025/3-applicant-info/pp-postal-2', function (req, res) {
    res.redirect('/apply/february2025/3-applicant-info/pp-home')
});

router.post('/apply/february2025/3-applicant-info/pp-address-1', function (req, res) {
    res.redirect('/apply/february2025/3-applicant-info/pp-home')
});

router.post('/apply/february2025/3-applicant-info/pp-home-2', function (req, res) {
    res.redirect('/apply/february2025/3-applicant-info/pp-phone')
});

router.post('/apply/february2025/3-applicant-info/pp-home-3', function (req, res) {
    res.redirect('/apply/february2025/3-applicant-info/check-ans')
});

router.post('/apply/february2025/3-applicant-info/check-ans', function (req, res) {
    res.redirect('/apply/february2025/3-applicant-info-RP/equality/extra-question-pp')
}); 


router.post('/apply/february2025/3-applicant-info/pp-address-2', function (req, res) {
    res.redirect('/apply/february2025/3-applicant-info/check-ans')
});

//Section 3: Applicant Info RP
router.post('/apply/february2025/3-applicant-info-RP/rp-name', function (req, res) {
    res.redirect('/apply/february2025/2-fees-rp/check-age')
});

router.post('/apply/february2025/3-applicant-info-RP/rp-nino', function (req, res) {
    res.redirect('/apply/february2025/3-applicant-info-RP/rp-address-1')
});


// router.post('/apply/february2025/3-applicant-info-RP/rp-nino', function (req, res) {
//     res.redirect('/apply/february2025/3-applicant-info-RP/rp-postal')
// });

router.post('/apply/february2025/3-applicant-info-RP/rp-confirm-nino', function (req, res) {
    res.redirect('/apply/february2025/3-applicant-info-RP/equality/extra-question')
});

router.post('/apply/february2025/3-applicant-info-RP/rp-postal', function (req, res) {
    res.redirect('/apply/february2025/3-applicant-info-RP/rp-postal-2')
});

router.post('/apply/february2025/3-applicant-info-RP/rp-postal-2', function (req, res) {
    res.redirect('/apply/february2025/3-applicant-info-RP/rp-home')
});

router.post('/apply/february2025/3-applicant-info-RP/rp-address-1', function (req, res) {
    res.redirect('/apply/february2025/3-applicant-info-RP/rp-home')
});

router.post('/apply/february2025/3-applicant-info-RP/rp-home-2', function (req, res) {
    res.redirect('/apply/february2025/3-applicant-info-RP/rp-phone')
});

router.post('/apply/february2025/3-applicant-info-RP/rp-home-3', function (req, res) {
    res.redirect('/apply/february2025/3-applicant-info-RP/check-ans')
});

router.post('/apply/february2025/3-applicant-info-RP/rp-address-2', function (req, res) {
    res.redirect('/apply/february2025/3-applicant-info-RP/check-ans')
});

router.post('/apply/february2025/3-applicant-info-RP/check-ans', function (req, res) {
    res.redirect('/apply/february2025/3-applicant-info-RP/equality/extra-question.html')
});

//Section 4: PP Income

router.post('/apply/february2025/4-pp-income/1-income-query', function (req, res) {
    var income = req.session.data['income']
    if (income.includes('benefits')){
      res.redirect('2-benefit-list')
    } else if (income.includes ('employment')){
      res.redirect('3-job-details')
    } else if (income.includes ('self-employment')){
     res.redirect('4-company-details')
  } else {
    res.redirect('/apply/february2025/5-all-children/1-name.html')
  }
  });

  router.post('/apply/february2025/4-pp-income/universal-credit', function (req, res) {
    res.redirect('/apply/february2025/4-pp-income/2-benefit-list')
});


router.post('/apply/february2025/4-pp-income/2-benefit-list', function (req, res) {
    var benefit = req.session.data['benefit']
    if (benefit.includes('income-support')){
      res.redirect('2-shared-benefit')
    } else if (benefit.includes ('jobseekers-allowance-2')){
      res.redirect('2-shared-benefit')
    } else if (benefit.includes ('income-related-employment')){
      res.redirect('2-shared-benefit')
    } else if (benefit.includes ('pension-credit')){
      res.redirect('2-shared-benefit')
    } else if (benefit.includes ('armed-forces')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('bereavement-allowance')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('carers-allowance')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('incapacity-benefit')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('jobseekers-allowance')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('maternity-allowance')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('non-uk')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('skillseekers-training')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('state-pension')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('training-allowance')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('universal-credit')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('war-disablement-pension')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('civil-partner-pension')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('widows-pension')){
      res.redirect('solo-check-your-ans')
    } else if (benefit.includes ('widow-parent')){
      res.redirect('solo-check-your-ans')
  } else {
    res.redirect('solo-check-your-ans')
  }
  });


  router.post('/apply/february2025/4-pp-income/2-shared-benefit', function (req, res) {
    var shared = req.session.data['shared']
    if (shared.includes('income')){
      res.redirect('2-partner-name')
    } else if (shared.includes ('pension-credit')){
      res.redirect('2-partner-name')
    } else if (shared.includes ('jobseekers-income-based')){
      res.redirect('2-partner-name')
    } else if (shared.includes ('income-support-allowance')){
      res.redirect('2-partner-name')
  } else {
    res.redirect('solo-check-your-ans')
  }
  });

  router.post('/apply/february2025/4-pp-income/2-shared-benefit', function (req, res) {
    res.redirect('2-partner-name')
});

router.post('/apply/february2025/4-pp-income/2-shared-benefit-single', function (req, res) {
    res.redirect('2-partner-name')
});

router.post('/apply/february2025/4-pp-income/2-partner-name', function (req, res) {
    res.redirect('2-partner-dob')
});

router.post('/apply/february2025/4-pp-income/2-partner-name', function (req, res) {
    res.redirect('2-partner-dob')
});

router.post('/apply/february2025/4-pp-income/2-partner-dob', function (req, res) {
    res.redirect('overall-check-your-ans')
});

router.post('/apply/february2025/4-pp-income/3-job-details', function (req, res) {
    res.redirect('annual-income')
});

router.post('/apply/february2025/4-pp-income/3-fixed-income', function (req, res) {
    res.redirect('3-add-job')
});

router.post('/apply/february2025/4-pp-income/annual-income', function (req, res) {
    res.redirect('3-add-job')
});


router.post('/apply/february2025/4-pp-income/annual-income-amount', function (req, res) {
    res.redirect('3-add-job')
});

router.post('/apply/february2025/4-pp-income/4-company-details', function (req, res) {
    res.redirect('4-add-company')
});


router.post('/apply/february2025/4-pp-income/overall-check-your-ans3', function (req, res) {
    res.redirect('5-pension-query')
});




router.post('/apply/february2025/4-pp-income/5-pension-details', function (req, res) {
    var pensiontype = req.session.data['pensiontype']
    if (pensiontype.includes('private')){
      res.redirect('5-private-pension')
    } else if (pensiontype.includes ('workplace')){
      res.redirect('/apply/february2025/5-all-children/child-section-start.html')
    }
    else {
      res.redirect('additional-income2')
    }
  });


router.post('/apply/february2025/4-pp-income/5-private-pension', function (req, res) {
    res.redirect('/apply/february2025/5-all-children/child-section-start.html')
});

router.post('/apply/february2025/4-pp-income/overall-check-your-ans2', function (req, res) {
    res.redirect('/apply/february2025/4-pp-income/5-pension-query.html')
});

router.post('/apply/february2025/4-pp-income/overall-check-your-ans2b', function (req, res) {
    res.redirect('/apply/february2025/5-all-children/1-name.html')
});

router.post('/apply/february2025/4-pp-income/overall-check-your-ans', function (req, res) {
    res.redirect('/apply/february2025/5-all-children/1-name.html')
});

router.post('/apply/february2025/4-pp-income/solo-check-your-ans', function (req, res) {
    res.redirect('/apply/february2025/5-all-children/1-name.html')
});

//Section 5: All Children
router.post('/apply/february2025/5-all-children/child-section-start', function (req, res) {
    res.redirect('/apply/february2025/5-all-children/1-name')
});

router.post('/apply/february2025/5-all-children/1-name', function (req, res) {
    res.redirect('/apply/february2025/5-all-children/1-dob')
});

router.post('/apply/february2025/5-all-children/1-dob', function (req, res) {
    res.redirect('/apply/february2025/5-all-children/1-birth-certificate')
});

router.post('/apply/february2025/5-all-children/1-birth-certificate', function (req, res) {
    res.redirect('/apply/february2025/5-all-children/1-overnight-frequency')
});

router.post('/apply/february2025/5-all-children/1-overnight-frequency', function (req, res) {
    res.redirect('/apply/february2025/5-all-children/1-check-your-answers-small')
});

router.post('/apply/february2025/5-all-children/1-check-your-answers-small', function (req, res) {
    res.redirect('/apply/february2025/5-all-children/1-add-another-child')
});

router.post('/apply/february2025/5-all-children/1-add-another-child', function (req, res) {
    res.redirect('/apply/february2025/5-all-children/1-any-private-arrangement')
});

router.post('/apply/february2025/5-all-children/1-any-private-arrangement', function (req, res) {
    res.redirect('/apply/february2025/5-all-children/2-name')
});

router.post('/apply/february2025/5-all-children/2-name', function (req, res) {
    res.redirect('/apply/february2025/5-all-children/2-dob')
});

router.post('/apply/february2025/5-all-children/2-dob', function (req, res) {
    res.redirect('/apply/february2025/5-all-children/child-address')
});

router.post('/apply/february2025/5-all-children/child-address', function (req, res) {
    res.redirect('/apply/february2025/5-all-children/child-pay')
});

router.post('/apply/february2025/5-all-children/child-pay', function (req, res) {
    res.redirect('/apply/february2025/5-all-children/child-benefit')
});

router.post('/apply/february2025/5-all-children/child-pay', function (req, res) {
    res.redirect('/apply/february2025/5-all-children/2-check-your-answers-private')
});

router.post('/apply/february2025/5-all-children/2-check-your-answers-private', function (req, res) {
    res.redirect('/apply/february2025/5-all-children/2-add-another-child-private')
});

router.post('/apply/february2025/5-all-children/2-add-another-child-private', function (req, res) {
    res.redirect('/apply/february2025/5-all-children/3-children-live-with')
});

router.post('/apply/february2025/5-all-children/3-name', function (req, res) {
    res.redirect('/apply/february2025/5-all-children/3-dob')
});

router.post('/apply/february2025/5-all-children/3-dob', function (req, res) {
    res.redirect('/apply/february2025/5-all-children/3-live-with-child-benefit')
});

router.post('/apply/february2025/5-all-children/3-child-benefit', function (req, res) {
    res.redirect('/apply/february2025/5-all-children/3-check-your-answers-roc')
});

router.post('/apply/february2025/5-all-children/3-check-your-answers-roc', function (req, res) {
    res.redirect('/apply/february2025/5-all-children/3-add-another-child-roc')
});

router.post('/apply/february2025/5-all-children/3-check-your-answers-roc', function (req, res) {
    res.redirect('/apply/february2025/5-all-children/overall-cya')
});

router.post('/apply/february2025/5-all-children/overall-cya', function (req, res) {
    res.redirect('/apply/february2025/6-service-types/direct-pay')
});

//Section 5: RP child info gather
router.post('/apply/february2025/5-children-info-RP/1-name', function (req, res) {
    res.redirect('1-dob')
});

router.post('/apply/february2025/5-children-info-RP/1-dob', function (req, res) {
    res.redirect('1-birth-certificate')
});

router.post('/apply/february2025/5-children-info-RP/1-birth-certificate', function (req, res) {
    res.redirect('/apply/february2025/5-children-info-RP/1-child-benefit-V3')
});
router.post('/apply/february2025/5-children-info-RP/1-child-benefit-V3', function (req, res) {
    res.redirect('/apply/february2025/5-children-info-RP/1-check-your-answers-small')
});

router.post('/apply/february2025/5-children-info-RP/1-check-your-answers-small', function (req, res) {
    res.redirect('/apply/february2025/5-children-info-RP/1-add-another-child')
});


router.post('/apply/february2025/5-children-info-RP/1-overnight-frequency', function (req, res) {
    res.redirect('/apply/february2025/5-children-info-RP/1-confirm-overnight-stays')
});

router.post('/apply/february2025/5-children-info-RP/1-confirm-overnight-stays', function (req, res) {
    res.redirect('/apply/february2025/5-children-info-RP/1-check-answers-overnights')
});



router.post('/apply/february2025/5-children-info-RP/2-name', function (req, res) {
    res.redirect('2-dob')
});

router.post('/apply/february2025/5-children-info-RP/2-dob', function (req, res) {
    res.redirect('2-birth-certificate')
});

router.post('/apply/february2025/5-children-info-RP/2-birth-certificate', function (req, res) {
    res.redirect('/apply/february2025/5-children-info-RP/2-child-benefit-V3')
});
router.post('/apply/february2025/5-children-info-RP/2-child-benefit-V3', function (req, res) {
    res.redirect('/apply/february2025/5-children-info-RP/2-check-your-answers-small')
});

router.post('/apply/february2025/5-children-info-RP/2-check-your-answers-small', function (req, res) {
    res.redirect('/apply/february2025/5-children-info-RP/2-add-another-child')
});


router.post('/apply/february2025/5-children-info-RP/2-overnight-frequency', function (req, res) {
    res.redirect('/apply/february2025/5-children-info-RP/2-confirm-overnight-stays')
});

router.post('/apply/february2025/5-children-info-RP/2-confirm-overnight-stays', function (req, res) {
    res.redirect('/apply/february2025/5-children-info-RP/2-check-answers-overnights')
});


router.post('/apply/february2025/5-children-info-RP/2-check-your-answers', function (req, res) {
    res.redirect('/apply/february2025/5-children-info-RP/1-overnight-more')
});


router.post('/apply/february2025/6-service-types/bank-collection', function (req, res) {
    res.redirect('/apply/february2025/6-service-types/check-your-answers-direct-pay.html')
});





router.post('/apply/february2025/5-children-info-RP/1-overnight-more', function (req, res) {
    res.redirect('/apply/february2025/5-children-info-RP/1-overnight-frequency-more')
});

router.post('/apply/february2025/5-children-info-RP/1-overnight-frequency-more', function (req, res) {
    res.redirect('/apply/february2025/5-children-info-RP/1-confirm-overnight-stays-more')
});

router.post('/apply/february2025/5-children-info-RP/1-confirm-overnight-stays-more', function (req, res) {
    res.redirect('/apply/february2025/5-children-info-RP/2-same-overnight')
});


router.post('/apply/february2025/5-children-info-RP/2-check-your-answers', function (req, res) {
    res.redirect('/apply/february2025/5-children-info-RP/1-overnight-more')
});


router.post('/apply/february2025/5-children-info-RP/2-overnight-frequency-more', function (req, res) {
    res.redirect('/apply/february2025/5-children-info-RP/2-confirm-overnight-stays-more')
});

 

router.post('/apply/february2025/5-children-info-RP/2-check-answers-overnights-more', function (req, res) {
    res.redirect('/apply/february2025/6-service-types-RP/direct-pay')
});

router.post('/apply/february2025/5-children-info-RP/1-check-answers-overnights', function (req, res) {
    res.redirect('/apply/february2025/6-service-types-RP/direct-pay')
});

 


//Section 6: Service Types
router.post('/apply/february2025/6-service-types/direct-pay-stops-working', function (req, res) {
    res.redirect('/apply/february2025/6-service-types/select-payment-frequency')
});

router.post('/apply/february2025/6-service-types-RP/collect-and-pay', function (req, res) {
    res.redirect('/apply/february2025/6-service-types-RP/check-your-answers')
});

router.post('/apply/february2025/6-service-types/check-your-answers-collect-pay', function (req, res) {
    res.redirect('/apply/february2025/7-other-parent/pp-name')
});
router.post('/apply/february2025/6-service-types/check-your-answers-direct-pay', function (req, res) {
    res.redirect('/apply/february2025/7-other-parent/pp-name')
});

router.post('/apply/february2025/6-service-types/check-your-answers-collect-pay-doe', function (req, res) {
    res.redirect('/apply/february2025/7-other-parent/pp-name')
});

router.post('/apply/february2025/6-service-types/direct-pay', function (req, res) {
    res.redirect('/apply/february2025/6-service-types/service-type-pp')
});

router.post('/apply/february2025/6-service-types/service-type-pp', function (req, res) {
    res.redirect('/apply/february2025/6-service-types/service-type-preference-pp')
});


//RP Bank Info

router.post('/apply/february2025/6-service-types-RP/bank-info', function (req, res) {
    res.redirect('/apply/february2025/6-service-types-RP/check-your-answers-bank')
});

router.post('/apply/february2025/6-service-types-RP/direct-pay-stops-working', function (req, res) {
    res.redirect('/apply/february2025/6-service-types-RP/pass-bank-info')
});

router.post('/apply/february2025/6-service-types-RP/bank-info-direct-pay', function (req, res) {
    res.redirect('/apply/february2025/6-service-types-RP/check-your-answers-bank')
});

//Section 7: Other Parent
router.post('/apply/february2025/7-other-parent/pp-name', function (req, res) {
    res.redirect('/apply/february2025/7-other-parent/pp-dob')
});

router.post('/apply/february2025/7-other-parent/pp-nino', function (req, res) {
    res.redirect('pp-phone')
});

router.post('/apply/february2025/7-other-parent/pp-phone', function (req, res) {
    res.redirect('pp-live-with-other-parent')
});

router.post('/apply/february2025/7-other-parent/pp-postal', function (req, res) {
    res.redirect('pp-address-3')
});

router.post('/apply/february2025/7-other-parent/pp-postal-2', function (req, res) {
    res.redirect('pp-address-1-details')
});

router.post('/apply/february2025/7-other-parent/pp-address-1', function (req, res) {
    res.redirect('pp-address-1-details')
});

router.post('/apply/february2025/7-other-parent/pp-address-2', function (req, res) {
    res.redirect('pp-address-3')
});


router.post('/apply/february2025/7-other-parent/pp-address-part-2', function (req, res) {
    res.redirect('pp-address-previous-details')
});


router.post('/apply/february2025/7-other-parent/pp-address-3', function (req, res) {
    res.redirect('pp-other-info')
});

router.post('/apply/february2025/7-other-parent/pp-address-5', function (req, res) {
    res.redirect('pp-address-6')
});

router.post('/apply/february2025/7-other-parent/pp-other-info', function (req, res) {
    res.redirect('check-your-answers')
});

router.post('/apply/february2025/7-other-parent/check-your-answers', function (req, res) {
    res.redirect('../9-confirmation/declaration-fee')
});

//Section 7: Other Parent RP
router.post('/apply/february2025/6-service-types-RP/check-your-answers', function (req, res) {
    res.redirect('../7-other-parent-RP/pp-information-message')
});

//Section 7: Other Parent RP


router.post('/apply/february2025/7-other-parent-rp/check-your-answers', function (req, res) {
    res.redirect('../9-confirmation-RP/declaration-fee')
});

router.post('/apply/february2025/7-other-parent-rp/other-parent-start', function (req, res) {
    res.redirect('../7-other-parent-RP/pp-name')
});


router.post('/apply/february2025/6-service-types-RP/check-your-answers-bank', function (req, res) {
    res.redirect('../7-other-parent-RP/pp-information-message')
});

router.post('/apply/february2025/7-other-parent-RP/pp-name', function (req, res) {
    res.redirect('../7-other-parent-RP/pp-dob')
});

router.post('/apply/february2025/7-other-parent-RP/pp-phone', function (req, res) {
    res.redirect('../7-other-parent-RP/pp-address-1')
});

router.post('/apply/february2025/7-other-parent-RP/pp-address-2', function (req, res) {
    res.redirect('../7-other-parent-RP/pp-address-3')
});

router.post('/apply/february2025/7-other-parent-RP/pp-address-5', function (req, res) {
    res.redirect('../7-other-parent-RP/pp-previous-address-3')
});

router.post('/apply/february2025/7-other-parent-RP/pp-previous-address-2', function (req, res) {
    res.redirect('../7-other-parent-RP/pp-previous-replay')
});

router.post('/apply/february2025/7-other-parent-RP/pp-previous-address-3', function (req, res) {
    res.redirect('../7-other-parent-RP/pp-other-info')
});

router.post('/apply/february2025/7-other-parent-RP/pp-other-info', function (req, res) {
    res.redirect('../7-other-parent-RP/check-your-answers')
});




router.post('/apply/february2025/6-service-types-RP/direct-pay', function (req, res) {
    res.redirect('../6-service-types-RP/service-type')
});

router.post('/apply/february2025/6-service-types-RP/service-type', function (req, res) {
    res.redirect('../6-service-types-RP/service-type-preference')
});




//Section 8: Existing Questions
router.post('/apply/february2025/8-existing-cases/use-old-login', function (req, res) {
    res.redirect('../9-confirmation/declaration-fee')
});


router.post('/apply/february2025/8-existing-cases/create-pin2', function (req, res) {
    res.redirect('create-password2')
});

router.post('/apply/february2025/8-existing-cases/create-password', function (req, res) {
    res.redirect('create-pin')
});

router.post('/apply/february2025/8-existing-cases/create-pin', function (req, res) {
    res.redirect('create-')
});

router.post('/apply/february2025/8-existing-cases/create-password2', function (req, res) {
    res.redirect('../9-confirmation/declaration-fee')
});

//Section 8: Existing Questions RP
router.post('/apply/february2025/8-existing-cases-RP/use-old-login', function (req, res) {
    res.redirect('../9-confirmation-RP/declaration-fee')
});

router.post('/apply/february2025/8-existing-cases-RP/create-password', function (req, res) {
    res.redirect('create-pin')
});

router.post('/apply/february2025/8-existing-cases-RP/create-pin', function (req, res) {
    res.redirect('../9-confirmation-RP/declaration-fee')
});

router.post('/apply/february2025/8-existing-cases-RP/create-pin2', function (req, res) {
    res.redirect('create-password2')
});

router.post('/apply/february2025/8-existing-cases-RP/create-password2', function (req, res) {
    res.redirect('../9-confirmation-RP/declaration-fee')
});


//Section 9: Confirmation
router.post('/apply/february2025/9-confirmation/declaration-fee', function (req, res) {
    res.redirect('submitted-fee')
});

//Section 9: Confirmation RP
router.post('/apply/february2025/9-confirmation-RP/declaration-fee', function (req, res) {
    res.redirect('submitted-fee')
});







//paying parent: switching route 
router.post('/apply/february2025/3-applicant-info-RP/equality/extra-question', function(req, res) {
    if (req.body[''] === 'no') {
      res.redirect('email-sent-by-phone');
    } else {
      res.redirect('your-application-reference-number');
    }
  });

  

// end routes february 2025

} // end module.exports
