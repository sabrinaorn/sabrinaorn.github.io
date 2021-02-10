var config = {
    style: 'mapbox://styles/sabrina3183/ckkyirqsk6x3c17lse08mmyb2',
    accessToken: 'pk.eyJ1Ijoic2FicmluYTMxODMiLCJhIjoiY2traXB2MzJ4MGNuaDJubXF3d2tpOXB6ZyJ9._ByD3EwNjYZs9sERytHYoA',
    showMarkers: true,
    theme: 'light',
    alignment: 'left',
    title: "Sorry We're Closed.",
    subtitle: 'Visualizing the Impact of the Covid-19 Pandemic on Businesses in Ottawa',
    byline: 'Rajpal Dhaliwal, Olivia Hobbs, RJ Mitchell, Sabrina Ornawka',
    footer: 'GEOM 4001',
    chapters: [
      {
        id: 'intro-identifier',
        title: 'How the Virus has Affected Businesses',
        //image: 'C:/Users/sabri/Documents/Fourth Year Work/Internet GEOM 4001/Assignment One/Assignement1_Template/images/closed_business.jpg',
        description: 'Mandatory closures of businesses including restaurants has meant that businesses may struggle to keep afloat during and after the pandemic. The following will highlight some of those stories.',
        location: {
            center: [-75.700818, 45.407783],
            zoom: 13.5,
            pitch: 60,
            bearing: -43.2
        },
        onChapterEnter: [],
        onChapterExit: []
      }
      ]
};
