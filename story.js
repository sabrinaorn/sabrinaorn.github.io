var config = {
    style: 'mapbox://styles/rajdh91/ckl019z5z03uh17sb03ogssrp',
    accessToken: 'pk.eyJ1IjoicmFqZGg5MSIsImEiOiJja2tzcHk1Nm0wamljMndvaTludjNvYnhwIn0.Su2FmYBqsJv6JLPh3dUMCA',
    showMarkers: true,
    theme: 'dark',
    alignment: 'left',
    title: "Sorry We're Closed.",
    subtitle: 'Visualizing the Impact of the Covid-19 Pandemic on Businesses in Ottawa',
    byline: 'Rajpal Dhaliwal, Olivia Hobbs, RJ Mitchell, Sabrina Ornawka',
    footer: 'GEOM 4001',
    chapters: [
       {
        id: 'intro-identifier',
        title: 'How the Virus has Affected Businesses',
        image: '/images/closed_business.jpg',
        description: 'Mandatory closures of businesses including restaurants has meant that businesses may struggle to keep afloat during and after the pandemic. The following will highlight some of those stories.',
        location: {
          center: [-75.69134, 45.42669],
          zoom: 12,
          pitch: 60,
          bearing: -43.2
        },
        onChapterEnter: [],
        onChapterExit: []
    },
        {
        id: 'slug-style-id',
        title: 'Highlander Pub',
        image: '/images/highlander.jpg',
        description: 'A well known pub on Rideau St.',
        location: {
            center: [-75.69134, 45.42669],
            zoom: 16,
            pitch: 60,
            bearing: 0
        },
        onChapterEnter: [
            // {
            //     layer: 'layer-name',
            //     opacity: 1
            // }
        ],
        onChapterExit: [
            // {
            //     layer: 'layer-name',
            //     opacity: 0
            // }
        ]
      },
    {
        id: 'olive1',
        title: 'Wheelhouse Warehouse',
        image: '/images/wheelhouse.jpg',
        description: 'Wheelhouse is a gym that is based around group indoor cycling class. As a response to the pandemic and provincial measures regarding the gyms and exercise class Wheelhouse had to continuously adapt its business model and locations. Prior to the pandemic Wheelhouse had a location on West Wellington and Bank street. Neither of these locations could adapt to the provincial requirements for gyms to open so they opened Wheelhouse at the Warehouse location and permanently closed their doors at the Wellington location. <iframe width="560" height="315" src="https://www.youtube.com/embed/gbOuZlEk5cQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        location: {
            center: [-75.716660, 45.408750],
            zoom: 16,
            pitch: 60,
            bearing: -43.2
        },
        onChapterEnter: [],
        onChapterExit: []
      },
        {
        id: 'olive2',
        title: 'Plant and Curio',
        image: '/images/plant.jpg',
        description: 'Plant and Curio though not permanently closed adapted its business model during the summer-fall months of the pandemic to have outdoors shopping on the patio/steps of their shop. During winter prior to the shutdown they switched models to primarily online to deal with reduced capacity allowed in store.',
        location: {
            center: [-75.712900, 45.406850,],
            zoom: 16,
            pitch: 60,
            bearing: -43.2
        },
        onChapterEnter: [],
        onChapterExit: []
      },
        {
          id: 'Temporary_Closures',
          title: 'Bar Hopping on Elgin St Leads to Five Temporary Closures',
          image: '/images/collage.jpg',
          description:'Elgin St. saw five temporary closures of bars and restaurants from two individuals who were awaiting their COVID test results. These individuals visted those locations while awaiting their tetst results and when the tests came back positive, the businesses voluntarily closed for two weeks to test their employees to ensure safe operations. It is unknown how much revenue was lost during these closures, however, it is important to note how badly that revenue was needed because of restricted operations. The affected businesses were: Deacon Brodies, Waller Street Brewing, Elgin Beer Project, St Louis Bar and Grill, and Lieutenants Pump.',
          location: {
              center: [-75.68819, 45.41577],
              zoom: 16,
              pitch: 60,
              bearing: -43.2
          },
          onChapterEnter: [],
          onChapterExit: []
        },
        {
          id: 'chart',
          title: 'Tracking Positive Cases in Ottawa since February 2020',
          image: '/images/oph.jpg',
          description: '<canvas id="myChart" width="400" height="400"></canvas>',
          location: {
              center: [-75.67532, 45.40719],
              zoom: 13.5,
              pitch: 60,
              bearing: -43.2
          },
          onChapterEnter: [],
          onChapterExit: []
}
      ]
};
