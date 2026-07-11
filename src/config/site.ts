// ============================================================
// CLONE CONFIG - to deploy this template in a new market,
// edit this file + src/data/services.ts + src/data/cities.ts
// ============================================================

export const SITE = {
  brand: '209 Restoration',
  domain: 'https://209restoration.com',
  tagline: 'Water damage response for the Central Valley',

  // TODO: replace with the real Twilio tracking number before launch
  // tel: links + schema + meta use pure digits; humans see the vanity.
  phone: '+12099802782',
  phoneDisplay: '(209) 980-AQUA',
  phoneDigits: '(209) 980-2782',

  email: 'help@209restoration.com',

  serviceRegion: 'San Joaquin and Stanislaus Counties',
  anchorCity: 'Stockton',
  anchorState: 'CA',

  hoursNote: 'Open now. Crews answer 24 hours a day, 7 days a week, including holidays.',

  legalLine:
    '209 Restoration is a local dispatch and referral service. Water damage, cleanup, and restoration work is performed by licensed, insured independent restoration contractors serving San Joaquin and Stanislaus Counties.',

  // Geo center used in LocalBusiness schema (downtown Stockton)
  geo: { lat: 37.9577, lng: -121.2908 },

  social: {
    instagram: 'https://instagram.com/209restoration',
    facebook: 'https://facebook.com/209restoration'
  }
};
