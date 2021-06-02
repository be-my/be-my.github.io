


$kol_jquery(function(){
  var sharingOptions = {"sharing":true,"buttontype":"rounded","sharelinks":[]};
  var anyform_widget_options = {
    list_id: 126065,
    page_id: 298460,
    
              api_url: 'https://api.kickofflabs.com',
          leads_api_url: 'https://leads.kickofflabs.com',

    display_powered_by: false,
    confirmation: {
      message: '<h1>Thanks for signing up!<\/h1>',
      share_message: '<p>These links were created just for you.<\/p>',
      
        template: 'social_share_no_link'

      
    },
    sharelinks: {
      networks: sharingOptions.sharelinks
    },
    
    validate_selector_exists: true,
    capture_lead_selector: '.form',
    email_selector: 'email',
    published_version: 2848532
  };

    var anyform_298460 = new KOLAnyForm(anyform_widget_options);
    window.anyform_298460 = anyform_298460;
  });



