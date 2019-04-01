const days = [{
        code: 'sun',
        display: 'sunday'
    },
    {
        code: 'mon',
        display: 'monday'
    },
    {
        code: 'tue',
        display: 'tuesday'
    },
    {
        code: 'wed',
        display: 'wednesday'
    },
    {
        code: 'thur',
        display: 'thursday'
    },
    {
        code: 'fri',
        display: 'friday'
    },
    {
        code: 'sat',
        display: 'saturday'
    }
];

const formats = [{
        code: 'b',
        display: 'Beginners'
    },
    {
        code: 'bb',
        display: 'Big Book'
    },
    {
        code: 'anniv',
        display: 'Anniversary'
    },
    {
        code: 'st',
        display: 'Step'
    },
    {
        code: 'ls',
        display: 'Living Sober'
    },
    {
        code: 't',
        display: 'Traditions'
    },
    {
        code: 'ctb',
        display: 'Came To Believe'
    },
    {
        code: 'gra',
        display: 'Grapevine'
    },
    {
        code: 'dr',
        display: 'Daily Reflections'
    },
    {
        code: 'absi',
        display: 'As Bill Sees It'
    },
    {
        code: 'c',
        display: 'Closed'
    },
    {
        code: 'o',
        display: 'Open'
    },
    {
        code: 'w',
        display: 'Women Only'
    },
    {
        code: 'm',
        display: 'Men Only'
    },
    {
        code: 'sp',
        display: 'Speaker'
    },
    {
        code: 'span',
        display: 'Spanish Speaking'
    },
    {
        code: 'od',
        display: 'Open Discussion'
    },
    {
        code: 'cd',
        display: 'Closed Discussion'
    },
    {
        code: 'os',
        display: 'Open Speaker'
    },
    {
        code: 'yp',
        display: 'Young People'
    },
    {
        code: 'gay',
        display: 'Gay'
    },
    {
        code: 'rep',
        display: 'Relapse Prevention'
    },
    {
        code: '3711',
        display: 'Big Book Steps 3, 7 & 11'
    }
];

const groups = [{
    "address": {
        "street_number": "17",
        "route": "High Street",
        "locality": "Bloomingburg",
        "administrative_area_level_3": "Mamakating",
        "administrative_area_level_2": "Sullivan County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "12721",
        "postal_code_suffix": "3032",
        "lat": 41.5576717,
        "lng": -74.4426641,
        "notes": "Our Lady of Assumption, Parish House"
    },
    "name": "Bloomingburg Group",
    "isWheelchairAccessible": 1,
    "meetings": [{
        "format": ["st"],
        "start": "1970-01-01T20:00:00.000Z",
        "day": "sun"
    }],
    "id": 1
}, {
    "isWheelchairAccessible": 1,
    "address": {
        "street_number": "2800",
        "route": "New York 17K",
        "locality": "Middletown",
        "administrative_area_level_3": "Crawford",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "10941",
        "lat": 41.5417438,
        "lng": -74.3544521,
        "notes": "St. Paul's Church"
    },
    "name": "Sharing & Caring",
    "meetings": [{
        "day": "thur",
        "start": "1970-01-02T00:00:00.000Z",
        "format": ["absi", "od", "st", "b"]
    }],
    "id": 2
}, {
    "name": "Any Lengths",
    "address": {
        "street_number": "2815",
        "route": "New York 207",
        "locality": "Campbell Hall",
        "administrative_area_level_3": "Hamptonburgh",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "10916",
        "lat": 41.45464390000001,
        "lng": -74.26109759999997,
        "notes": "First Presbyterian Church of Hamptonburgh"
    },
    "meetings": [{
        "format": ["st"],
        "notes": "[Wk 2=T; Last Wk=Anniv]",
        "start": "1970-01-02T00:30:00.000Z",
        "day": "mon"
    }],
    "id": 3
}, {
    "name": "Journey to Sobriety",
    "address": {
        "street_number": "206",
        "route": "Purgatory Road",
        "locality": "Campbell Hall",
        "administrative_area_level_3": "Hamptonburgh",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "10916",
        "lat": 41.4193867,
        "lng": -74.26607849999999,
        "notes": "Gather Inn Farm"
    },
    "meetings": [{
        "format": ["w"],
        "notes": "[Wk 1,2 = Lit; Wk 3,4=CD; Wk 4=Anniv]",
        "start": "1970-01-02T00:30:00.000Z",
        "day": "wed"
    }],
    "id": 4
}, {
    "name": "There Is a Solution",
    "address": {
        "street_number": "206",
        "route": "Purgatory Road",
        "locality": "Campbell Hall",
        "administrative_area_level_3": "Hamptonburgh",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "10916",
        "lat": 41.4193867,
        "lng": -74.26607849999999,
        "notes": "Gather In"
    },
    "meetings": [{
        "format": ["cd"],
        "start": "1970-01-02T00:30:00.000Z",
        "day": "tue"
    }],
    "id": 5
}, {
    "address": {
        "street_number": "27",
        "route": "High Street",
        "locality": "Chester",
        "administrative_area_level_3": "Chester",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "10918",
        "lat": 41.3636631,
        "lng": -74.27272210000001,
        "notes": "St. Columbia School"
    },
    "name": "Chester Group",
    "meetings": [{
        "format": ["cd"],
        "start": "1970-01-02T01:30:00.000Z",
        "day": "fri"
    }],
    "id": 6
}, {
    "address": {
        "street_number": "395",
        "route": "Hudson Street",
        "locality": "Cornwall",
        "administrative_area_level_3": "Cornwall",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "12518",
        "postal_code_suffix": "1562",
        "lat": 41.4418579,
        "lng": -74.02586639999998,
        "notes": "Munger Cottage, behind Cornwall Library"
    },
    "name": "Canterbury Tales",
    "isWheelchairAccessible": 1,
    "meetings": [{
        "format": ["c", "absi"],
        "day": "sun",
        "start": "1970-01-01T13:00:00.000Z"
    }, {
        "day": "sun",
        "start": "1970-01-01T15:00:00.000Z",
        "format": ["b", "cd", "st"]
    }, {
        "format": ["c", "st"],
        "day": "thur",
        "start": "1970-01-01T23:30:00.000Z",
        "notes": "[Last Wk = T]"
    }, {
        "format": ["c", "od"],
        "start": "1970-01-01T23:30:00.000Z",
        "day": "sat",
        "notes": "[Last Week = Anniv]"
    }],
    "id": 7
}, {
    "name": "Serenity sunday",
    "isWheelchairAccessible": 1,
    "address": {
        "street_number": "336",
        "route": "Hudson Street",
        "locality": "Cornwall-on-Hudson",
        "administrative_area_level_3": "Cornwall",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "12520",
        "postal_code_suffix": "1332",
        "lat": 41.443614,
        "lng": -74.0230211,
        "notes": "St. Thomas Church"
    },
    "meetings": [{
        "day": "sun",
        "start": "1970-01-02T00:00:00.000Z",
        "format": ["cd"]
    }],
    "id": 8
}, {
    "name": "S.T.A.R.",
    "address": {
        "street_number": "58",
        "route": "Clinton Street",
        "locality": "Cornwall",
        "administrative_area_level_3": "Cornwall",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "12518",
        "lat": 41.4365253,
        "lng": -74.03015970000001,
        "notes": "St. John's Church"
    },
    "meetings": [{
        "start": "1970-01-01T23:30:00.000Z",
        "format": ["cd", "w"],
        "day": "tue",
        "notes": "[Wk1 = ST]"
    }],
    "id": 9
}, {
    "name": "\"Wing It\" Group",
    "address": {
        "street_number": "17",
        "route": "Laurel Avenue",
        "locality": "Cornwall",
        "administrative_area_level_3": "Cornwall",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "12518",
        "lat": 41.4356307,
        "lng": -74.04142360000003,
        "notes": "Cornwall Hospital"
    },
    "isWheelchairAccessible": 1,
    "meetings": [{
        "start": "1970-01-02T00:00:00.000Z",
        "day": "tue",
        "format": ["cd"]
    }],
    "id": 10
}, {
    "name": "Cornwall Group",
    "address": {
        "street_number": "1",
        "route": "Clinton",
        "locality": "Cornwall",
        "administrative_area_level_3": "Cornwall",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "12518",
        "lat": 41.438401,
        "lng": -74.03057690000003,
        "notes": "St. John's Episcopal Church"
    },
    "meetings": [{
        "start": "1970-01-02T01:00:00.000Z",
        "day": "tue",
        "format": ["cd"],
        "notes": "[Wk 1=ST; Last Week=Anniv]"
    }],
    "id": 11
}, {
    "address": {
        "street_number": "198",
        "route": "Main Street",
        "locality": "Cornwall",
        "administrative_area_level_3": "Cornwall",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "12518",
        "lat": 41.438401,
        "lng": -74.03057690000003,
        "notes": "United Methodist Church"
    },
    "name": "Juggernaut Group",
    "meetings": [{
        "format": ["dr"],
        "start": "1970-01-02T00:45:00.000Z",
        "day": "wed"
    }],
    "id": 12
}, {
    "name": "S.H.I.P.",
    "address": {
        "street_number": "21",
        "route": "Laurel Avenue",
        "locality": "Cornwall",
        "administrative_area_level_3": "Cornwall",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "12518",
        "lat": 41.43557129999999,
        "lng": -74.0426736
    },
    "meetings": [{
        "start": "1970-01-01T17:00:00.000Z",
        "day": "sat",
        "format": ["cd"]
    }],
    "id": 13
}, {
    "isWheelchairAccessible": 1,
    "address": {
        "route": "RR 209",
        "locality": "Cuddebackville",
        "administrative_area_level_3": "Deerpark",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "12729",
        "lat": 41.46483619999999,
        "lng": -74.5926968,
        "notes": "Reformed Church Hall"
    },
    "name": "Foundation Group",
    "meetings": [{
        "format": ["cd"],
        "start": "1970-01-02T01:00:00.000Z",
        "day": "mon"
    }, {
        "format": ["cd"],
        "start": "1970-01-02T01:00:00.000Z",
        "day": "thur"
    }],
    "id": 14
}, {
    "address": {
        "street_number": "25",
        "route": "Beaver Brook Road",
        "locality": "Yulan",
        "administrative_area_level_3": "Highland",
        "administrative_area_level_2": "Sullivan County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "12792",
        "postal_code_suffix": "5109",
        "lat": 41.5233829,
        "lng": -74.937161,
        "notes": "St. Anthony's Church"
    },
    "name": "New Beginnings",
    "meetings": [{
        "format": ["od"],
        "start": "1970-01-02T01:00:00.000Z",
        "day": "thur"
    }, {
        "format": ["od"],
        "start": "1970-01-02T01:30:00.000Z",
        "day": "fri",
        "notes": "[Wk 2 = T]"
    }],
    "id": 15
}, {
    "name": "Gardiner Group",
    "address": {
        "street_number": "2212",
        "route": "U.S. 44",
        "locality": "Gardiner",
        "administrative_area_level_3": "Gardiner",
        "administrative_area_level_2": "Ulster County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "12525",
        "postal_code_suffix": "5318",
        "lat": 41.674668,
        "lng": -74.1343185,
        "notes": "St. Charles Rectory, off Rt. 208"
    },
    "meetings": [{
        "notes": "[Wk 2=T]",
        "start": "1970-01-02T01:30:00.000Z",
        "day": "fri",
        "format": ["od"]
    }],
    "id": 16
}, {
    "address": {
        "street_number": "71",
        "route": "Murray Avenue",
        "locality": "Goshen",
        "administrative_area_level_3": "Goshen",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "10924",
        "lat": 41.4056176,
        "lng": -74.32602689999999,
        "notes": "St. Johns Church"
    },
    "name": "Sober sundays",
    "meetings": [{
        "day": "sun",
        "start": "1970-01-01T19:00:00.000Z",
        "format": ["c", "bb"]
    }],
    "id": 17
}, {
    "address": {
        "street_number": "1",
        "route": "Saint James Place",
        "locality": "Goshen",
        "administrative_area_level_3": "Goshen",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "10924",
        "postal_code_suffix": "2013",
        "lat": 41.4006872,
        "lng": -74.32189590000002,
        "notes": "St. James Church"
    },
    "name": "Cup and Saucer",
    "meetings": [{
        "day": "wed",
        "start": "1970-01-02T01:00:00.000Z",
        "format": ["od"],
        "notes": "[Last Wk = Anniv]"
    }],
    "id": 18
}, {
    "address": {
        "street_number": "33",
        "route": "Park Place",
        "locality": "Goshen",
        "administrative_area_level_3": "Goshen",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "10924",
        "postal_code_suffix": "2108",
        "lat": 41.4021263,
        "lng": -74.3216749,
        "notes": "1st Presbyterian Church"
    },
    "name": "Good Morn Sobriety",
    "meetings": [{
        "start": "1970-01-01T14:30:00.000Z",
        "day": "mon",
        "format": ["st", "t", "o"]
    }, {
        "format": ["o", "bb"],
        "day": "tue",
        "start": "1970-01-01T14:30:00.000Z"
    }, {
        "format": ["o", "ctb"],
        "day": "wed",
        "start": "1970-01-01T14:30:00.000Z"
    }, {
        "format": ["o", "ls"],
        "day": "thur",
        "start": "1970-01-01T14:30:00.000Z"
    }, {
        "format": ["o", "b"],
        "day": "fri",
        "start": "1970-01-01T14:30:00.000Z"
    }, {
        "format": ["od"],
        "start": "1970-01-01T14:30:00.000Z",
        "day": "sat"
    }],
    "id": 19
}, {
    "address": {
        "street_number": "33",
        "route": "Park Place",
        "locality": "Goshen",
        "administrative_area_level_3": "Goshen",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "10924",
        "postal_code_suffix": "2108",
        "lat": 41.4021263,
        "lng": -74.3216749,
        "notes": "1st Presbyterian Church"
    },
    "name": "Sober, Gay & Free",
    "meetings": [{
        "start": "1970-01-02T00:30:00.000Z",
        "day": "mon",
        "format": ["bb", "sp", "gay"]
    }],
    "id": 20
}, {
    "name": "Goshen Group",
    "address": {
        "street_number": "33",
        "route": "Park Place",
        "locality": "Goshen",
        "administrative_area_level_3": "Goshen",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "10924",
        "postal_code_suffix": "2108",
        "lat": 41.4021263,
        "lng": -74.3216749,
        "notes": "1st Presbyterian Church"
    },
    "meetings": [{
        "day": "sat",
        "start": "1970-01-01T18:00:00.000Z",
        "format": ["b", "cd"]
    }],
    "id": 21
}, {
    "address": {
        "street_number": "33",
        "route": "Park Place",
        "locality": "Goshen",
        "administrative_area_level_3": "Goshen",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "10924",
        "postal_code_suffix": "2108",
        "lat": 41.4021263,
        "lng": -74.3216749,
        "notes": "1st Presbyterian Church"
    },
    "name": "Victory Through Surrender",
    "meetings": [{
        "start": "1970-01-02T01:30:00.000Z",
        "day": "sat",
        "format": ["od"]
    }],
    "id": 22
}, {
    "address": {
        "street_number": "224",
        "route": "Main Street",
        "locality": "Goshen",
        "administrative_area_level_3": "Goshen",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "10924",
        "postal_code_suffix": "2157",
        "lat": 41.4038489,
        "lng": -74.3197657,
        "notes": "ADAC"
    },
    "name": "Our Primary Purpose",
    "meetings": [{
        "day": "fri",
        "start": "1970-01-02T00:00:00.000Z",
        "format": ["yp", "bb", "od"],
        "notes": "[Wk4=Anniv]"
    }],
    "id": 23
}, {
    "address": {
        "street_number": "41",
        "route": "Castle Point Road",
        "locality": "Wappingers Falls",
        "administrative_area_level_3": "Fishkill",
        "administrative_area_level_2": "Dutchess County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "12590",
        "lat": 41.540102,
        "lng": -73.95998100000003,
        "notes": "Castle Point VA Hospital"
    },
    "name": "Beacon Group",
    "isWheelchairAccessible": 1,
    "meetings": [{
        "day": "sun",
        "start": "1970-01-01T14:30:00.000Z",
        "format": ["cd"]
    }],
    "id": 24
}, {
    "name": "Greenwood Lake Group",
    "address": {
        "street_number": "41",
        "route": "Windermere Avenue",
        "locality": "Greenwood Lake",
        "administrative_area_level_3": "Warwick",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "10925",
        "lat": 41.2212997,
        "lng": -74.29573340000002,
        "notes": "Holy Rosary Church"
    },
    "meetings": [{
        "format": ["cd", "w"],
        "start": "1970-01-01T23:00:00.000Z",
        "day": "sun"
    }],
    "id": 25
}, {
    "name": "Greenwood Lake Group",
    "address": {
        "street_number": "62",
        "route": "Windermere Avenue",
        "locality": "Greenwood Lake",
        "administrative_area_level_3": "Warwick",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "10925",
        "lat": 41.22258739999999,
        "lng": -74.29377829999999,
        "notes": "Church of the Good Shepherd"
    },
    "meetings": [{
        "format": ["bb"],
        "start": "1970-01-02T00:30:00.000Z",
        "day": "mon"
    }, {
        "format": ["dr"],
        "day": "sat",
        "start": "1970-01-01T15:00:00.000Z",
        "notes": "[Wk1=St]"
    }],
    "id": 26
}, {
    "name": "Last Chance Group",
    "address": {
        "street_number": "62",
        "route": "Windermere Avenue",
        "locality": "Greenwood Lake",
        "administrative_area_level_3": "Warwick",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "10925",
        "lat": 41.22258739999999,
        "lng": -74.29377829999999,
        "notes": "Church of the Good Shepherd"
    },
    "meetings": [{
        "start": "1970-01-02T01:00:00.000Z",
        "day": "thur",
        "format": ["od"]
    }],
    "id": 27
}, {
    "name": "Greenwood Lake (HRC)",
    "address": {
        "street_number": "41",
        "route": "Windermere Avenue",
        "locality": "Greenwood Lake",
        "administrative_area_level_3": "Warwick",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "10925",
        "lat": 41.2212997,
        "lng": -74.29573340000002,
        "notes": "Holy Rosary Church"
    },
    "meetings": [{
        "start": "1970-01-02T00:30:00.000Z",
        "day": "tue",
        "format": ["b", "ls"]
    }, {
        "format": ["st"],
        "start": "1970-01-02T00:00:00.000Z",
        "day": "wed",
        "notes": "[Last wed = T]"
    }, {
        "format": ["cd"],
        "start": "1970-01-02T00:30:00.000Z",
        "day": "fri",
        "notes": "[Last fri = O/Anniv]"
    }],
    "id": 28
}, {
    "isWheelchairAccessible": 1,
    "address": {
        "street_number": "21",
        "route": "North Main Street",
        "locality": "Harriman",
        "administrative_area_level_3": "monroe",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "10926",
        "lat": 41.310177,
        "lng": -74.15384469999998,
        "notes": "The Shrine Church at St. Anastasia's near Rt 17M"
    },
    "name": "Mid-Day Sobriety",
    "meetings": [{
        "start": "1970-01-01T18:30:00.000Z",
        "day": "mon",
        "format": ["ls"]
    }, {
        "format": ["bb"],
        "start": "1970-01-01T18:30:00.000Z",
        "day": "tue"
    }, {
        "format": ["od"],
        "day": "wed",
        "start": "1970-01-01T18:30:00.000Z"
    }, {
        "format": ["od"],
        "start": "1970-01-01T18:30:00.000Z",
        "day": "thur"
    }, {
        "format": ["od"],
        "start": "1970-01-01T18:30:00.000Z",
        "day": "fri"
    }],
    "id": 29
}, {
    "name": "Joy of the Journey",
    "address": {
        "street_number": "21",
        "route": "North Main Street",
        "locality": "Harriman",
        "administrative_area_level_3": "monroe",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "10926",
        "postal_code_suffix": "3305",
        "lat": 41.3092523,
        "lng": -74.15404430000001,
        "notes": "The Shrine Church at St Anastasia Catholic Church"
    },
    "isWheelchairAccessible": 1,
    "meetings": [{
        "start": "1970-01-01T22:30:00.000Z",
        "day": "mon",
        "format": ["st"],
        "notes": "[Last=T]"
    }, {
        "format": ["cd"],
        "start": "1970-01-01T22:30:00.000Z",
        "day": "tue",
        "notes": "[Last=Anniv]"
    }, {
        "day": "thur",
        "format": ["rep"],
        "start": "1970-01-01T22:30:00.000Z"
    }, {
        "format": ["b", "c"],
        "start": "1970-01-01T22:30:00.000Z",
        "day": "fri"
    }],
    "id": 30
}, {
    "name": "The Odd Lot",
    "address": {
        "street_number": "2",
        "route": "Church Street",
        "locality": "Harriman",
        "administrative_area_level_3": "monroe",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "10926",
        "postal_code_suffix": "3300",
        "lat": 41.3095365,
        "lng": -74.15073310000002,
        "notes": "Ground Floor"
    },
    "meetings": [{
        "format": ["gra", "cd"],
        "start": "1970-01-01T14:00:00.000Z",
        "day": "sat"
    }],
    "id": 31
}, {
    "name": "Highland Falls Group",
    "isWheelchairAccessible": 1,
    "address": {
        "street_number": "401",
        "route": "Main Street",
        "locality": "Highland Falls",
        "administrative_area_level_1": "New York",
        "postal_code": "10928",
        "lat": 41.372977,
        "lng": -73.9662857
    },
    "meetings": [{
        "format": ["b"],
        "day": "mon",
        "start": "1970-01-02T00:30:00.000Z"
    }, {
        "format": ["od"],
        "start": "1970-01-02T00:30:00.000Z",
        "notes": "[Wk2=OS]",
        "day": "tue"
    }, {
        "format": ["cd", "st"],
        "day": "thur",
        "start": "1970-01-02T00:30:00.000Z",
        "notes": "[Last=T]"
    }, {
        "format": ["bb"],
        "start": "1970-01-01T13:30:00.000Z",
        "day": "sat"
    }],
    "id": 32
}, {
    "name": "Back to Basics",
    "address": {
        "street_number": "16",
        "route": "County Route 105",
        "neighborhood": "Highland Mills",
        "locality": "Woodbury",
        "administrative_area_level_3": "Woodbury",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "10930",
        "postal_code_suffix": "3318",
        "lat": 41.3468048,
        "lng": -74.1279745,
        "notes": "Senior Center, Rt. 32"
    },
    "isWheelchairAccessible": 1,
    "meetings": [{
        "format": ["cd"],
        "start": "1970-01-02T01:00:00.000Z",
        "day": "sun"
    }, {
        "format": ["b"],
        "start": "1970-01-01T23:30:00.000Z",
        "day": "mon"
    }, {
        "format": ["o", "s"],
        "day": "wed",
        "start": "1970-01-01T23:30:00.000Z"
    }, {
        "format": ["bb"],
        "day": "wed",
        "start": "1970-01-02T00:45:00.000Z"
    }, {
        "format": ["od"],
        "start": "1970-01-02T03:00:00.000Z",
        "day": "sat"
    }],
    "id": 33
}, {
    "name": "The Central Valley Group (St Patrick's Church)",
    "address": {
        "street_number": "26",
        "route": "Hunter Street",
        "neighborhood": "Highland Mills",
        "locality": "Woodbury",
        "administrative_area_level_3": "Woodbury",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "10930",
        "postal_code_suffix": "3307",
        "lat": 41.343582,
        "lng": -74.125226,
        "notes": "St Patrick's RC Church"
    },
    "isWheelchairAccessible": 1,
    "meetings": [{
        "start": "1970-01-02T00:30:00.000Z",
        "day": "fri",
        "format": ["st"]
    }, {
        "format": ["od"],
        "start": "1970-01-01T22:00:00.000Z",
        "day": "sat"
    }],
    "id": 34
}, {
    "name": "The Central Valley Group (United Methodist Church)",
    "address": {
        "street_number": "654",
        "route": "New York 32",
        "neighborhood": "Highland Mills",
        "locality": "Woodbury",
        "administrative_area_level_3": "Woodbury",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "10930",
        "lat": 41.35538150000001,
        "lng": -74.1195457,
        "notes": "United Methodist Church"
    },
    "meetings": [{
        "start": "1970-01-02T00:30:00.000Z",
        "day": "fri",
        "format": ["st"]
    }, {
        "format": ["od"],
        "start": "1970-01-01T22:00:00.000Z",
        "day": "sat"
    }],
    "id": 35
}, {
    "name": "Marlboro Group",
    "address": {
        "street_number": "71",
        "route": "Grand Street",
        "locality": "Marlboro",
        "administrative_area_level_3": "Marlborough",
        "administrative_area_level_2": "Ulster County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "12542",
        "lat": 41.60234490000001,
        "lng": -73.97450879999997
    },
    "meetings": [{
        "format": ["od"],
        "day": "wed",
        "start": "1970-01-02T01:00:00.000Z",
        "notes": "[Wk1=ST]"
    }],
    "id": 36
}, {
    "name": "The Way Out",
    "address": {
        "street_number": "100",
        "route": "Broadway",
        "locality": "Maybrook",
        "administrative_area_level_3": "montgomery",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "12543",
        "postal_code_suffix": "1023",
        "lat": 41.4842777,
        "lng": -74.21752839999999,
        "notes": "Off Broadway and R. 208"
    },
    "isWheelchairAccessible": 1,
    "meetings": [{
        "start": "1970-01-01T17:00:00.000Z",
        "day": "mon",
        "format": ["cd"]
    }, {
        "format": ["od"],
        "start": "1970-01-02T01:00:00.000Z",
        "day": "wed",
        "notes": "[Wk1=ST]"
    }],
    "id": 37
}, {
    "name": "A New Beginning",
    "address": {
        "street_number": "208",
        "route": "North Street",
        "locality": "Middletown",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "10940",
        "lat": 41.4507116,
        "lng": -74.4171508,
        "notes": "Advent House"
    },
    "meetings": [{
        "day": "sun",
        "format": ["b"],
        "start": "1970-01-01T17:30:00.000Z"
    }],
    "id": 38
}, {
    "name": "A New Beginning (St.Joseph's)",
    "address": {
        "street_number": "133",
        "route": "Cottage Street",
        "locality": "Middletown",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "10940",
        "postal_code_suffix": "3704",
        "lat": 41.4528392,
        "lng": -74.41101119999996,
        "notes": "St. Joseph's Church"
    },
    "meetings": [{
        "start": "1970-01-02T00:00:00.000Z",
        "day": "wed",
        "format": ["od"]
    }],
    "id": 39
}, {
    "name": "Tres Legados",
    "address": {
        "street_number": "77",
        "route": "monhagen Avenue",
        "locality": "Middletown",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "10940",
        "postal_code_suffix": "6235",
        "lat": 41.4464614,
        "lng": -74.42991259999997
    },
    "meetings": [{
        "format": ["span", "od"],
        "start": "1970-01-01T23:30:00.000Z",
        "day": "sun"
    }, {
        "format": ["od", "span"],
        "start": "1970-01-02T00:30:00.000Z",
        "day": "mon"
    }, {
        "format": ["span", "od"],
        "start": "1970-01-02T00:30:00.000Z",
        "day": "tue"
    }, {
        "format": ["span", "od"],
        "start": "1970-01-02T00:30:00.000Z",
        "day": "wed"
    }, {
        "format": ["span", "od"],
        "start": "1970-01-02T00:30:00.000Z",
        "day": "thur"
    }, {
        "format": ["span", "od"],
        "start": "1970-01-02T00:30:00.000Z",
        "day": "fri"
    }, {
        "format": ["span", "od"],
        "start": "1970-01-01T23:00:00.000Z",
        "day": "sat"
    }],
    "id": 40
}, {
    "isWheelchairAccessible": 1,
    "name": "Top of the Hill",
    "address": {
        "street_number": "25",
        "route": "Orchard Street",
        "locality": "Middletown",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "10940",
        "postal_code_suffix": "5004",
        "lat": 41.447029,
        "lng": -74.418747,
        "notes": "1st Presbyterian Church"
    },
    "meetings": [{
        "day": "mon",
        "start": "1970-01-01T17:00:00.000Z",
        "format": ["od"]
    }, {
        "format": ["st"],
        "day": "tue",
        "start": "1970-01-01T17:00:00.000Z"
    }, {
        "format": ["bb"],
        "day": "wed",
        "start": "1970-01-01T17:00:00.000Z"
    }, {
        "format": ["st"],
        "start": "1970-01-01T17:00:00.000Z",
        "day": "thur"
    }, {
        "format": ["od"],
        "start": "1970-01-01T17:00:00.000Z",
        "day": "fri",
        "notes": "[Wk1=T]"
    }],
    "id": 41
}, {
    "address": {
        "street_number": "35",
        "route": "East Main Street",
        "locality": "Middletown",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "10940",
        "lat": 41.4457899,
        "lng": -74.41889930000002,
        "notes": "1st Congregational Church"
    },
    "name": "One Day at a Time",
    "isWheelchairAccessible": 1,
    "meetings": [{
        "start": "1970-01-01T23:00:00.000Z",
        "day": "tue",
        "format": ["st", "od", "t"],
        "notes": "[Wk1 = ST, Wk2 & Wk3 = OD, Wk4 = T]"
    }, {
        "day": "tue",
        "format": ["bb", "c"],
        "start": "1970-01-02T00:30:00.000Z",
        "notes": "[Wk1=T]"
    }, {
        "format": ["cd", "3711", "st"],
        "day": "thur",
        "start": "1970-01-02T00:00:00.000Z",
        "notes": "[Wk 1=ST, Wk 2 = 3711]"
    }, {
        "format": ["o", "b"],
        "day": "sat",
        "start": "1970-01-02T00:00:00.000Z"
    }],
    "id": 42
}, {
    "name": "Middletown Group",
    "address": {
        "street_number": "58",
        "route": "West Main Street",
        "locality": "Middletown",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "10940",
        "postal_code_suffix": "5732",
        "lat": 41.4450942,
        "lng": -74.42242620000002,
        "notes": "St. Paul's Methodist Church"
    },
    "meetings": [{
        "format": ["st", "b"],
        "day": "mon",
        "start": "1970-01-02T01:00:00.000Z"
    }, {
        "format": ["o", "s"],
        "day": "sat",
        "start": "1970-01-02T01:00:00.000Z"
    }],
    "id": 43
}, {
    "name": "Miracle Group",
    "address": {
        "street_number": "58",
        "route": "West Main Street",
        "locality": "Middletown",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "10940",
        "postal_code_suffix": "5732",
        "lat": 41.4450942,
        "lng": -74.42242620000002,
        "notes": "St. Paul's Methodist Church"
    },
    "meetings": [{
        "format": ["od"],
        "day": "tue",
        "start": "1970-01-02T00:30:00.000Z"
    }],
    "id": 44
}, {
    "name": "Room at the Top",
    "address": {
        "street_number": "21",
        "route": "Still Road",
        "locality": "monroe",
        "administrative_area_level_3": "monroe",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "10950",
        "postal_code_suffix": "4107",
        "lat": 41.318204,
        "lng": -74.17939839999997,
        "notes": "St. Paul's Lutheran Church"
    },
    "meetings": [{
        "format": ["m", "st", "cd"],
        "day": "mon",
        "start": "1970-01-02T00:30:00.000Z",
        "notes": "[Mens] [Wk1=ST, Wk 2,3,4=CD]"
    }],
    "id": 45
}, {
    "name": "Women's 12 Steps",
    "address": {
        "street_number": "21",
        "route": "Still Road",
        "locality": "monroe",
        "administrative_area_level_3": "monroe",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "10950",
        "postal_code_suffix": "4107",
        "lat": 41.318204,
        "lng": -74.17939839999997,
        "notes": "St. Paul's Lutheran Church"
    },
    "meetings": [{
        "start": "1970-01-02T00:30:00.000Z",
        "day": "tue",
        "format": ["od", "s", "bb", "st"],
        "notes": "[Womens] [1st=ST/2nd=BB/3rd=OD/4th=S]"
    }],
    "id": 46
}, {
    "name": "sunrise",
    "address": {
        "street_number": "47",
        "route": "Maple Avenue",
        "locality": "monroe",
        "administrative_area_level_3": "monroe",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "10950",
        "postal_code_suffix": "3505",
        "lat": 41.3258461,
        "lng": -74.1852958
    },
    "meetings": [{
        "day": "sat",
        "start": "1970-01-01T13:00:00.000Z",
        "format": ["cd"],
        "notes": "[Last Wk=Anniv]"
    }],
    "id": 47
}, {
    "address": {
        "street_number": "137",
        "route": "Stage Road",
        "locality": "monroe",
        "administrative_area_level_3": "monroe",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "10950",
        "lat": 41.3259279,
        "lng": -74.18702880000001,
        "notes": "Sacred Heart Chapel"
    },
    "name": "monroe (Mens)",
    "isWheelchairAccessible": 1,
    "meetings": [{
        "start": "1970-01-02T00:00:00.000Z",
        "day": "sun",
        "format": ["cd"]
    }],
    "id": 48
}, {
    "isWheelchairAccessible": 1,
    "name": "Just for Today",
    "address": {
        "street_number": "137",
        "route": "Stage Road",
        "locality": "monroe",
        "administrative_area_level_3": "monroe",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "10950",
        "lat": 41.3259279,
        "lng": -74.18702880000001,
        "notes": "Sacred Heart Chapel"
    },
    "meetings": [{
        "format": ["s"],
        "start": "1970-01-01T20:00:00.000Z",
        "day": "sun"
    }],
    "id": 49
}, {
    "name": "SIOGA",
    "address": {
        "street_number": "137",
        "route": "Stage Road",
        "locality": "monroe",
        "administrative_area_level_3": "monroe",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "10950",
        "lat": 41.3259279,
        "lng": -74.18702880000001
    },
    "isWheelchairAccessible": 1,
    "meetings": [{
        "format": ["c", "st"],
        "start": "1970-01-02T00:30:00.000Z",
        "day": "tue"
    }, {
        "format": ["cd"],
        "start": "1970-01-02T02:00:00.000Z",
        "day": "fri"
    }, {
        "format": ["bb"],
        "start": "1970-01-02T00:00:00.000Z",
        "day": "sat"
    }],
    "id": 50
}, {
    "address": {
        "street_number": "136",
        "route": "Stage Road",
        "locality": "monroe",
        "administrative_area_level_3": "monroe",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "10950",
        "lat": 41.3260412,
        "lng": -74.18689340000003,
        "notes": "1st Presbyterian Church"
    },
    "name": "SIOGA (1st Pres. Church)",
    "isWheelchairAccessible": 1,
    "meetings": [{
        "day": "thur",
        "start": "1970-01-02T00:30:00.000Z",
        "format": ["s", "o"]
    }, {
        "format": ["b", "c"],
        "day": "thur",
        "start": "1970-01-02T01:45:00.000Z"
    }],
    "id": 51
}, {
    "address": {
        "street_number": "136",
        "route": "Stage Road",
        "locality": "monroe",
        "administrative_area_level_3": "monroe",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "10950",
        "lat": 41.3260412,
        "lng": -74.18689340000003,
        "notes": "1st Presbyterian Church"
    },
    "name": "Steps to Sobriety",
    "isWheelchairAccessible": 1,
    "meetings": [{
        "day": "mon",
        "start": "1970-01-01T14:30:00.000Z",
        "format": ["dr"]
    }, {
        "format": ["st"],
        "start": "1970-01-01T14:30:00.000Z",
        "day": "tue"
    }, {
        "format": ["ls"],
        "start": "1970-01-01T14:30:00.000Z",
        "day": "wed",
        "notes": "[Wk1=OS]"
    }, {
        "format": ["b"],
        "day": "thur",
        "start": "1970-01-01T14:30:00.000Z"
    }, {
        "format": ["bb"],
        "start": "1970-01-01T14:30:00.000Z",
        "day": "fri",
        "notes": "[Last Wk=Anniv]"
    }],
    "id": 52
}, {
    "name": "Stairway to Sobriety",
    "address": {
        "street_number": "74",
        "route": "Wallkill Avenue",
        "locality": "montgomery",
        "administrative_area_level_3": "montgomery",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "12549",
        "lat": 41.5237961,
        "lng": -74.23775639999997,
        "notes": "St. Francis of Assissi, St. Andrew's Hall"
    },
    "isWheelchairAccessible": 1,
    "meetings": [{
        "day": "sun",
        "start": "1970-01-01T23:30:00.000Z",
        "format": ["b", "o"]
    }, {
        "format": ["od"],
        "day": "mon",
        "start": "1970-01-01T17:15:00.000Z"
    }, {
        "format": ["st"],
        "start": "1970-01-01T17:15:00.000Z",
        "day": "wed"
    }, {
        "format": ["b"],
        "start": "1970-01-01T23:30:00.000Z",
        "day": "tue"
    }, {
        "format": ["bb", "o"],
        "start": "1970-01-01T17:15:00.000Z",
        "day": "wed"
    }, {
        "format": ["w", "st"],
        "day": "thur",
        "notes": "[Women's]",
        "start": "1970-01-01T14:30:00.000Z"
    }, {
        "format": ["od"],
        "start": "1970-01-01T17:15:00.000Z",
        "day": "thur"
    }, {
        "format": ["b"],
        "start": "1970-01-01T14:30:00.000Z",
        "day": "fri"
    }, {
        "format": ["o", "absi", "ls"],
        "start": "1970-01-01T17:15:00.000Z",
        "day": "fri"
    }, {
        "format": ["absi", "w"],
        "start": "1970-01-01T15:00:00.000Z",
        "notes": "[Women's]",
        "day": "fri"
    }, {
        "format": ["ls", "o", "absi"],
        "start": "1970-01-01T17:15:00.000Z",
        "day": "fri"
    }, {
        "format": ["absi", "w"],
        "start": "1970-01-01T15:00:00.000Z",
        "day": "sat",
        "notes": "[Women's]"
    }, {
        "format": ["od"],
        "start": "1970-01-01T18:00:00.000Z",
        "day": "sat"
    }],
    "id": 53
}, {
    "name": "The montgomery Group",
    "address": {
        "street_number": "137",
        "route": "Clinton Street",
        "locality": "montgomery",
        "administrative_area_level_3": "montgomery",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "12549",
        "lat": 41.52597160000001,
        "lng": -74.23645039999997,
        "notes": "1st Presbyterian Church"
    },
    "meetings": [{
        "format": ["o", "s", "t", "st"],
        "start": "1970-01-02T00:00:00.000Z",
        "notes": "[Wk2=T/3=ST/Last=Anniv]",
        "day": "sun"
    }, {
        "format": ["cd", "bb"],
        "day": "wed",
        "start": "1970-01-02T01:00:00.000Z",
        "notes": "[Wk1=CD,Last=BB]"
    }],
    "id": 54
}, {
    "name": "montgomery (Brick Reformed Church)",
    "address": {
        "street_number": "1588",
        "route": "New York 17K",
        "locality": "montgomery",
        "administrative_area_level_3": "montgomery",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "12549",
        "lat": 41.5322605,
        "lng": -74.24687510000001
    },
    "meetings": [{
        "day": "fri",
        "start": "1970-01-02T01:00:00.000Z",
        "format": ["st", "bb"]
    }],
    "id": 55
}, {
    "address": {
        "street_number": "543",
        "route": "Union Avenue",
        "locality": "New Windsor",
        "administrative_area_level_3": "New Windsor",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "12553",
        "postal_code_suffix": "6140",
        "lat": 41.4829937,
        "lng": -74.06126019999999,
        "notes": "King of Kings Church"
    },
    "name": "Chapel Hill Group #2",
    "meetings": [{
        "start": "1970-01-01T23:00:00.000Z",
        "format": ["cd"],
        "day": "sun"
    }, {
        "format": ["st"],
        "start": "1970-01-02T00:00:00.000Z",
        "day": "wed"
    }],
    "id": 56
}, {
    "name": "Forge Hill Group",
    "address": {
        "street_number": "4",
        "route": "Saint Joseph Place",
        "locality": "New Windsor",
        "administrative_area_level_3": "New Windsor",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "12553",
        "postal_code_suffix": "7555",
        "lat": 41.47465199999999,
        "lng": -74.01887799999997,
        "notes": "SW Corner of Union Ave & 9W"
    },
    "meetings": [{
        "day": "mon",
        "start": "1970-01-02T00:30:00.000Z",
        "format": ["b", "od"]
    }],
    "id": 57
}, {
    "name": "One Day at a Time",
    "address": {
        "street_number": "845",
        "route": "New York 94",
        "locality": "New Windsor",
        "administrative_area_level_3": "New Windsor",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "12553",
        "postal_code_suffix": "8102",
        "lat": 41.4551975,
        "lng": -74.05353479999997,
        "notes": "United Methodist Church"
    },
    "meetings": [{
        "day": "tue",
        "format": ["bb", "c"],
        "start": "1970-01-02T00:30:00.000Z",
        "notes": "[Wk1=T]"
    }, {
        "format": ["cd", "3711", "st"],
        "day": "thur",
        "start": "1970-01-02T00:00:00.000Z",
        "notes": "[Wk 1=ST, Wk 2 = 3711]"
    }, {
        "format": ["o", "b"],
        "day": "sat",
        "start": "1970-01-02T00:00:00.000Z"
    }],
    "id": 58
}, {
    "address": {
        "street_number": "1520",
        "route": "New York 94",
        "locality": "New Windsor",
        "administrative_area_level_3": "Cornwall",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "12553",
        "postal_code_suffix": "5938",
        "lat": 41.4387049,
        "lng": -74.09558870000001,
        "notes": "Bethlehem Presby. Church"
    },
    "name": "saturday Morning MIracle",
    "meetings": [{
        "day": "sat",
        "start": "1970-01-01T13:30:00.000Z",
        "format": ["od"]
    }],
    "id": 59
}, {
    "address": {
        "street_number": "172",
        "route": "Liberty Street",
        "locality": "Newburgh",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "12550",
        "postal_code_suffix": "4912",
        "lat": 41.5015245,
        "lng": -74.0104111,
        "notes": "Oct. thru Spring: 172 LIberty St.; Spring through Sept.: Ferry Boat Landing"
    },
    "name": "Newburgh (Ferry Boat)",
    "meetings": [{
        "format": ["dr"],
        "day": "sun",
        "start": "1970-01-01T14:00:00.000Z"
    }],
    "id": 60
}, {
    "name": "Oasis",
    "address": {
        "street_number": "468",
        "route": "Broadway",
        "locality": "Newburgh",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "12550",
        "postal_code_suffix": "5333",
        "lat": 41.5018079,
        "lng": -74.02922899999999,
        "notes": "Grace Methodist Church"
    },
    "meetings": [{
        "start": "1970-01-01T17:00:00.000Z",
        "day": "mon",
        "format": ["ls"]
    }, {
        "format": ["cd", "dr"],
        "day": "tue",
        "start": "1970-01-01T17:00:00.000Z"
    }, {
        "format": ["span", "od"],
        "start": "1970-01-01T23:00:00.000Z",
        "day": "sun"
    }],
    "id": 61
}, {
    "name": "El Nuevo Amanecer",
    "address": {
        "street_number": "237",
        "route": "Broadway",
        "locality": "Newburgh",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "12550",
        "lat": 41.5002553,
        "lng": -74.01796259999998
    },
    "meetings": [{
        "format": ["od"],
        "day": "sun",
        "start": "1970-01-01T23:00:00.000Z"
    }, {
        "format": ["od"],
        "day": "mon",
        "start": "1970-01-02T01:00:00.000Z"
    }, {
        "format": ["od"],
        "day": "tue",
        "start": "1970-01-02T01:00:00.000Z"
    }, {
        "format": ["od"],
        "day": "wed",
        "start": "1970-01-02T01:00:00.000Z"
    }, {
        "format": ["cd"],
        "day": "thur",
        "start": "1970-01-02T01:00:00.000Z"
    }, {
        "format": ["od"],
        "start": "1970-01-02T01:00:00.000Z",
        "day": "fri"
    }],
    "id": 62
}, {
    "address": {
        "street_number": "1",
        "route": "Owens Road",
        "locality": "Newburgh",
        "administrative_area_level_3": "Newburgh",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "12550",
        "postal_code_suffix": "8732",
        "lat": 41.5534815,
        "lng": -74.04495939999998,
        "notes": "Trinity United Methodist Church"
    },
    "name": "New Life Group",
    "meetings": [{
        "format": ["cd", "od", "st"],
        "day": "sun",
        "start": "1970-01-02T01:00:00.000Z",
        "notes": "[Wk 1=ST/Last=OD or Anniv]"
    }],
    "id": 63
}, {
    "name": "La Oportunidad",
    "address": {
        "street_number": "345",
        "route": "Ann Street",
        "locality": "Newburgh",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "12550",
        "postal_code_suffix": "5335",
        "lat": 41.5000028,
        "lng": -74.0217958
    },
    "meetings": [{
        "day": "sun",
        "start": "1970-01-01T15:00:00.000Z",
        "format": ["od"]
    }, {
        "format": ["od"],
        "day": "mon",
        "start": "1970-01-01T23:00:00.000Z"
    }, {
        "format": ["od"],
        "day": "tue",
        "start": "1970-01-01T23:00:00.000Z"
    }, {
        "format": ["od"],
        "day": "wed",
        "start": "1970-01-01T23:00:00.000Z"
    }, {
        "format": ["od"],
        "day": "thur",
        "start": "1970-01-01T23:00:00.000Z"
    }, {
        "format": ["od"],
        "day": "fri",
        "start": "1970-01-01T23:00:00.000Z"
    }, {
        "format": ["od", "span"],
        "day": "sat",
        "start": "1970-01-01T23:00:00.000Z"
    }],
    "id": 64
}, {
    "name": "Focus on Recovery",
    "address": {
        "street_number": "156",
        "route": "Liberty Street",
        "locality": "Newburgh",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "12550",
        "postal_code_suffix": "4912",
        "lat": 41.5008073,
        "lng": -74.01045699999997,
        "notes": "St. Patrick's School, Basement"
    },
    "meetings": [{
        "day": "mon",
        "start": "1970-01-01T23:00:00.000Z",
        "format": ["st"]
    }, {
        "format": ["bb"],
        "day": "tue",
        "start": "1970-01-01T23:00:00.000Z"
    }, {
        "format": ["o", "b"],
        "day": "thur",
        "start": "1970-01-01T22:30:00.000Z"
    }],
    "id": 65
}, {
    "name": "Somos Un Milagro",
    "address": {
        "street_number": "156",
        "route": "Liberty Street",
        "locality": "Newburgh",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "12550",
        "postal_code_suffix": "4912",
        "lat": 41.5008073,
        "lng": -74.01045699999997,
        "notes": "St. Patrick's School"
    },
    "meetings": [{
        "format": ["b", "span"],
        "start": "1970-01-02T00:30:00.000Z",
        "day": "wed"
    }],
    "id": 66
}, {
    "name": "Happy Hour AA",
    "address": {
        "street_number": "7",
        "route": "William Street",
        "locality": "Newburgh",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "12550",
        "postal_code_suffix": "5502",
        "lat": 41.4997152,
        "lng": -74.01536899999996,
        "notes": "Baptist Temple, Corner of Ann and Williams St."
    },
    "meetings": [{
        "day": "mon",
        "start": "1970-01-02T00:00:00.000Z",
        "format": ["bb"]
    }, {
        "format": ["st"],
        "day": "tue",
        "start": "1970-01-02T00:00:00.000Z"
    }, {
        "format": ["od"],
        "day": "wed",
        "start": "1970-01-02T00:00:00.000Z"
    }, {
        "format": ["od"],
        "day": "thur",
        "start": "1970-01-02T00:00:00.000Z"
    }, {
        "format": ["m"],
        "day": "fri",
        "start": "1970-01-02T00:00:00.000Z"
    }, {
        "format": ["od"],
        "day": "sat",
        "start": "1970-01-02T00:00:00.000Z"
    }],
    "id": 67
}, {
    "name": "Newburgh Group",
    "address": {
        "street_number": "468",
        "route": "Broadway",
        "locality": "Newburgh",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "12550",
        "postal_code_suffix": "5333",
        "lat": 41.5018079,
        "lng": -74.02922899999999,
        "notes": "Grace United Methodist Church"
    },
    "meetings": [{
        "format": ["o", "b"],
        "start": "1970-01-02T00:30:00.000Z",
        "day": "mon"
    }, {
        "format": ["cd", "sp"],
        "start": "1970-01-02T01:00:00.000Z",
        "day": "fri",
        "notes": "[Wk2=OS]"
    }],
    "id": 68
}, {
    "name": "Safe 'n Sound Group",
    "address": {
        "street_number": "74",
        "route": "Frozen Ridge Road",
        "locality": "Newburgh",
        "administrative_area_level_3": "Newburgh",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "12550",
        "postal_code_suffix": "1256",
        "lat": 41.5532742,
        "lng": -74.02666160000001,
        "notes": "Rick's Place"
    },
    "isWheelchairAccessible": 1,
    "meetings": [{
        "start": "1970-01-01T23:30:00.000Z",
        "day": "mon",
        "format": ["cd", "m"],
        "notes": "[Mens]"
    }, {
        "format": ["absi", "cd"],
        "day": "wed",
        "start": "1970-01-01T17:00:00.000Z"
    }, {
        "format": ["od", "b"],
        "day": "thur",
        "start": "1970-01-01T17:00:00.000Z"
    }, {
        "format": ["bb", "cd"],
        "day": "thur",
        "start": "1970-01-01T23:30:00.000Z"
    }, {
        "format": ["dr", "cd"],
        "day": "fri",
        "start": "1970-01-01T17:00:00.000Z"
    }, {
        "format": ["cd"],
        "start": "1970-01-01T23:30:00.000Z",
        "day": "fri"
    }],
    "id": 69
}, {
    "name": "Balmville Fellowship",
    "address": {
        "street_number": "44",
        "route": "Old Balmville Road",
        "locality": "Newburgh",
        "administrative_area_level_3": "Newburgh",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "12550",
        "lat": 41.5255702,
        "lng": -74.01373509999996,
        "notes": "Union Presb. Church (Opp. Powelton Club)"
    },
    "isWheelchairAccessible": 1,
    "meetings": [{
        "day": "wed",
        "start": "1970-01-02T01:00:00.000Z",
        "format": ["cd"]
    }],
    "id": 70
}, {
    "address": {
        "street_number": "179",
        "route": "East Main Street",
        "locality": "Washingtonville",
        "administrative_area_level_3": "Blooming Grove",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "10992",
        "lat": 41.427357,
        "lng": -74.14484570000002,
        "notes": "St. Anne's Episco. Church"
    },
    "name": "friends of Bill W",
    "isWheelchairAccessible": 1,
    "meetings": [{
        "start": "1970-01-02T00:30:00.000Z",
        "day": "tue",
        "format": ["o"]
    }, {
        "format": ["b"],
        "day": "fri",
        "start": "1970-01-02T01:00:00.000Z"
    }],
    "id": 71
}, {
    "name": "Wurtsboro Group",
    "address": {
        "street_number": "134",
        "route": "Sullivan Street",
        "locality": "Wurtsboro",
        "administrative_area_level_3": "Mamakating",
        "administrative_area_level_2": "Sullivan County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "12790",
        "lat": 41.5765748,
        "lng": -74.48564729999998,
        "notes": "Community Church Hall, 4th and Pine Sts."
    },
    "meetings": [{
        "start": "1970-01-02T00:30:00.000Z",
        "day": "tue",
        "format": ["b", "bb", "t"],
        "notes": "[Wk1=T;Wk2=BB;Wk3=T;Wk4=Anniv.]"
    }],
    "id": 72
}, {
    "address": {
        "street_number": "25",
        "route": "Main Street",
        "locality": "Otisville",
        "administrative_area_level_3": "Mount Hope",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "10963",
        "postal_code_suffix": "2306",
        "lat": 41.47356619999999,
        "lng": -74.5400189,
        "notes": "Otisville Presb. Church"
    },
    "name": "The Mountain",
    "meetings": [{
        "format": ["od"],
        "start": "1970-01-02T00:30:00.000Z",
        "day": "wed",
        "notes": "[Wk4=Anniv/OD]"
    }, {
        "format": ["sp", "st"],
        "day": "fri",
        "start": "1970-01-02T00:00:00.000Z",
        "notes": "[Wk1= SP; Wk2,3 = ST]"
    }],
    "id": 73
}, {
    "isWheelchairAccessible": 1,
    "name": "Garage Group",
    "address": {
        "street_number": "15",
        "route": "New York 302",
        "locality": "Pine Bush",
        "administrative_area_level_3": "Crawford",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "12566",
        "lat": 41.6068982,
        "lng": -74.30483549999997,
        "notes": "Across Street from Infant Savior Church"
    },
    "meetings": [{
        "notes": "[Last=Anniv]",
        "start": "1970-01-02T00:00:00.000Z",
        "day": "mon",
        "format": ["b"]
    }, {
        "format": ["od", "o", "sp"],
        "start": "1970-01-02T01:00:00.000Z",
        "day": "fri"
    }],
    "id": 74
}, {
    "name": "Pine Island",
    "address": {
        "street_number": "17",
        "route": "Pulaski Highway",
        "locality": "Pine Island",
        "administrative_area_level_3": "Warwick",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "10969",
        "postal_code_suffix": "1332",
        "lat": 41.296981,
        "lng": -74.4615182,
        "notes": "St. Stanislaus Rectory"
    },
    "meetings": [{
        "format": ["od"],
        "start": "1970-01-02T01:30:00.000Z",
        "day": "fri"
    }],
    "id": 75
}, {
    "address": {
        "street_number": "49",
        "route": "Sussex Street",
        "locality": "Port Jervis",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "12771",
        "postal_code_suffix": "1929",
        "lat": 41.3760921,
        "lng": -74.69013330000001,
        "notes": "Drew United Methodist Church"
    },
    "name": "Never Alone",
    "meetings": [{
        "format": ["od"],
        "start": "1970-01-02T01:00:00.000Z",
        "day": "fri",
        "notes": "[Wk1,3=LS/2=s/4=Ann.]"
    }, {
        "format": ["bb"],
        "day": "sat",
        "notes": "LIT",
        "start": "1970-01-02T00:00:00.000Z"
    }],
    "id": 76
}, {
    "address": {
        "street_number": "60",
        "route": "Sussex Street",
        "locality": "Port Jervis",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "12771",
        "postal_code_suffix": "1930",
        "lat": 41.37667570000001,
        "lng": -74.68955929999998,
        "notes": "1st Presbyterian Church"
    },
    "name": "Green Memory Group",
    "meetings": [{
        "start": "1970-01-02T01:00:00.000Z",
        "day": "mon",
        "format": ["b", "od"]
    }],
    "id": 77
}, {
    "isWheelchairAccessible": 1,
    "name": "Living the Steps",
    "address": {
        "street_number": "60",
        "route": "Sussex Street",
        "locality": "Port Jervis",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "12771",
        "postal_code_suffix": "1930",
        "lat": 41.37667570000001,
        "lng": -74.68955929999998,
        "notes": "1st Presbyterian Church"
    },
    "meetings": [{
        "start": "1970-01-02T01:00:00.000Z",
        "day": "wed",
        "format": ["st"]
    }],
    "id": 78
}, {
    "name": "3-7-11 Step Meeting",
    "address": {
        "street_number": "366",
        "route": "Blumel Road",
        "locality": "Scotchtown",
        "administrative_area_level_3": "Wallkill",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "10941",
        "lat": 41.4808455,
        "lng": -74.36019779999998,
        "notes": "Schotchtown Presby Church"
    },
    "meetings": [{
        "format": ["3711", "st"],
        "start": "1970-01-02T00:00:00.000Z",
        "day": "sat"
    }],
    "id": 79
}, {
    "name": "Shawangunk",
    "address": {
        "street_number": "1166",
        "route": "Hoagerburgh Road",
        "locality": "Wallkill",
        "administrative_area_level_3": "Shawangunk",
        "administrative_area_level_2": "Ulster County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "12589",
        "postal_code_suffix": "3408",
        "lat": 41.653501,
        "lng": -74.21449330000002,
        "notes": "Shawangunk Reform Church"
    },
    "isWheelchairAccessible": 1,
    "meetings": [{
        "day": "wed",
        "start": "1970-01-02T01:00:00.000Z",
        "format": ["st"]
    }, {
        "format": ["od"],
        "day": "sat",
        "start": "1970-01-02T01:00:00.000Z"
    }, {
        "format": ["b"],
        "day": "wed",
        "start": "1970-01-02T00:30:00.000Z"
    }],
    "id": 80
}, {
    "name": "The \"Just for Today\" Group",
    "address": {
        "street_number": "626",
        "route": "County Road 22",
        "locality": "Middletown",
        "administrative_area_level_3": "Wawayanda",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "10940",
        "lat": 41.38445529999999,
        "lng": -74.52293220000001,
        "notes": "South Centerville, Holy Cross Church"
    },
    "meetings": [{
        "day": "sat",
        "start": "1970-01-01T13:00:00.000Z",
        "format": ["cd"],
        "notes": "[4th Wk=Anniv/Open]"
    }],
    "id": 81
}, {
    "address": {
        "street_number": "70",
        "route": "Scofield Street",
        "locality": "Walden",
        "administrative_area_level_3": "montgomery",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "12586",
        "lat": 41.5579992,
        "lng": -74.18724129999998,
        "notes": "1st Reformed Church"
    },
    "name": "Walden Group",
    "isWheelchairAccessible": 1,
    "meetings": [{
        "day": "sun",
        "start": "1970-01-01T19:00:00.000Z",
        "format": ["od"]
    }, {
        "format": ["cd"],
        "day": "fri",
        "start": "1970-01-02T00:00:00.000Z"
    }],
    "id": 82
}, {
    "address": {
        "street_number": "1145",
        "route": "New York 208",
        "locality": "Wallkill",
        "administrative_area_level_3": "Plattekill",
        "administrative_area_level_2": "Ulster County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "12589",
        "postal_code_suffix": "3714",
        "lat": 41.638147,
        "lng": -74.14398540000002,
        "notes": "New Hurley Church"
    },
    "name": "Wallkill Group",
    "meetings": [{
        "format": ["bb"],
        "start": "1970-01-02T00:30:00.000Z",
        "day": "tue"
    }, {
        "format": ["st"],
        "day": "thur",
        "start": "1970-01-02T00:30:00.000Z"
    }],
    "id": 83
}, {
    "address": {
        "street_number": "16",
        "route": "Maple Avenue",
        "locality": "Warwick",
        "administrative_area_level_3": "Warwick",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "10990",
        "postal_code_suffix": "1027",
        "lat": 41.2607084,
        "lng": -74.35651189999999,
        "notes": "Reformed Church, across from Hospital"
    },
    "name": "Round Robin",
    "meetings": [{
        "day": "mon",
        "start": "1970-01-01T13:00:00.000Z",
        "format": ["cd"]
    }, {
        "format": ["cd"],
        "day": "tue",
        "start": "1970-01-01T13:00:00.000Z"
    }, {
        "format": ["cd"],
        "day": "wed",
        "start": "1970-01-01T13:00:00.000Z"
    }, {
        "format": ["cd"],
        "day": "thur",
        "start": "1970-01-01T13:00:00.000Z"
    }, {
        "format": ["od"],
        "day": "fri",
        "start": "1970-01-01T13:00:00.000Z"
    }],
    "id": 84
}, {
    "address": {
        "street_number": "75",
        "route": "Sanfordville Road",
        "locality": "Warwick",
        "administrative_area_level_3": "Warwick",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "10990",
        "postal_code_suffix": "2843",
        "lat": 41.2573904,
        "lng": -74.38778719999999,
        "notes": "St. Stephen's Parish Church"
    },
    "name": "Orange County Young People's",
    "meetings": [{
        "format": ["yp", "bb"],
        "day": "sun",
        "start": "1970-01-02T00:30:00.000Z"
    }],
    "id": 85
}, {
    "address": {
        "street_number": "50",
        "route": "South Street",
        "locality": "Warwick",
        "administrative_area_level_3": "Warwick",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "10990",
        "postal_code_suffix": "1638",
        "lat": 41.25497379999999,
        "lng": -74.358498,
        "notes": "Warwick Episcopal Church"
    },
    "name": "Amazing Grace",
    "meetings": [{
        "start": "1970-01-01T17:30:00.000Z",
        "format": ["b"],
        "day": "mon"
    }, {
        "format": ["c", "st"],
        "start": "1970-01-01T17:30:00.000Z",
        "day": "wed"
    }, {
        "format": ["cd"],
        "day": "fri",
        "start": "1970-01-01T17:30:00.000Z",
        "notes": "[Last=Anniv]"
    }],
    "id": 86
}, {
    "address": {
        "street_number": "50",
        "route": "South Street",
        "locality": "Warwick",
        "administrative_area_level_3": "Warwick",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "10990",
        "postal_code_suffix": "1638",
        "lat": 41.25497379999999,
        "lng": -74.358498,
        "notes": "Warwick Episcopal Church"
    },
    "name": "Warwick Group (1)",
    "meetings": [{
        "format": ["w"],
        "start": "1970-01-01T17:30:00.000Z",
        "day": "tue"
    }, {
        "format": ["w", "cd", "st", "sp", "bb"],
        "day": "thur",
        "start": "1970-01-02T00:30:00.000Z",
        "notes": "[Wk1=SP/2=ST/3=BB]"
    }],
    "id": 87
}, {
    "address": {
        "street_number": "135",
        "route": "Forester Avenue",
        "locality": "Warwick",
        "administrative_area_level_3": "Warwick",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "10990",
        "postal_code_suffix": "1104",
        "lat": 41.2510023,
        "lng": -74.349246,
        "notes": "United Methodist Church"
    },
    "name": "Big Book Group",
    "meetings": [{
        "start": "1970-01-02T00:30:00.000Z",
        "day": "mon",
        "format": ["c", "bb"]
    }, {
        "format": ["bb", "cd"],
        "start": "1970-01-02T00:30:00.000Z",
        "day": "wed"
    }],
    "id": 88
}, {
    "name": "Complete Abandon",
    "address": {
        "street_number": "16",
        "route": "Maple Avenue",
        "locality": "Warwick",
        "administrative_area_level_3": "Warwick",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "10990",
        "postal_code_suffix": "1027",
        "lat": 41.2607084,
        "lng": -74.35651189999999,
        "notes": "Reformed Church, across from hospital"
    },
    "meetings": [{
        "start": "1970-01-01T17:30:00.000Z",
        "day": "tue",
        "format": ["od"]
    }, {
        "format": ["bb"],
        "start": "1970-01-01T17:30:00.000Z",
        "day": "thur"
    }],
    "id": 89
}, {
    "name": "Florida Step Group",
    "address": {
        "street_number": "16",
        "route": "Maple Avenue",
        "locality": "Warwick",
        "administrative_area_level_3": "Warwick",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "10990",
        "postal_code_suffix": "1027",
        "lat": 41.2607084,
        "lng": -74.35651189999999,
        "notes": "Reformed Church"
    },
    "meetings": [{
        "start": "1970-01-02T00:00:00.000Z",
        "day": "tue",
        "format": ["st"]
    }],
    "id": 90
}, {
    "address": {
        "street_number": "16",
        "route": "Maple Avenue",
        "locality": "Warwick",
        "administrative_area_level_3": "Warwick",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "10990",
        "postal_code_suffix": "1027",
        "lat": 41.2607084,
        "lng": -74.35651189999999,
        "notes": "Reformed Church"
    },
    "name": "Eye Opener",
    "meetings": [{
        "format": ["st"],
        "day": "sat",
        "start": "1970-01-01T13:00:00.000Z"
    }],
    "id": 91
}, {
    "name": "sunday Serenity",
    "address": {
        "street_number": "11",
        "route": "Hamilton Avenue",
        "locality": "Warwick",
        "administrative_area_level_3": "Warwick",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "10990",
        "postal_code_suffix": "1509",
        "lat": 41.2527218,
        "lng": -74.36410819999998,
        "notes": "Doc Fry Community Center"
    },
    "meetings": [{
        "format": ["cd"],
        "start": "1970-01-01T14:30:00.000Z",
        "day": "sun"
    }],
    "id": 92
}, {
    "isWheelchairAccessible": 1,
    "name": "Woodchucks",
    "address": {
        "street_number": "30",
        "route": "Goshen Avenue",
        "locality": "Washingtonville",
        "administrative_area_level_3": "Blooming Grove",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "10992",
        "postal_code_suffix": "1115",
        "lat": 41.42894309999999,
        "lng": -74.16894059999998,
        "notes": "1st Presbyterian Church"
    },
    "meetings": [{
        "day": "sun",
        "start": "1970-01-02T01:00:00.000Z",
        "format": ["cd"],
        "notes": "[Last Week=OS/Anniv]"
    }, {
        "format": ["st", "ls", "bb", "b"],
        "day": "wed",
        "start": "1970-01-02T01:00:00.000Z",
        "notes": "[ST/LS/BB/B]"
    }],
    "id": 93
}, {
    "isWheelchairAccessible": 1,
    "address": {
        "street_number": "30",
        "route": "Goshen Avenue",
        "locality": "Washingtonville",
        "administrative_area_level_3": "Blooming Grove",
        "administrative_area_level_2": "Orange County",
        "administrative_area_level_1": "New York",
        "country": "United States",
        "postal_code": "10992",
        "postal_code_suffix": "1115",
        "lat": 41.42894309999999,
        "lng": -74.16894059999998,
        "notes": "1st Presb. Church"
    },
    "name": "Dr. Bob's Back 2 Basics",
    "meetings": [{
        "format": ["c", "bb", "st"],
        "day": "mon",
        "start": "1970-01-02T00:30:00.000Z"
    }, {
        "format": ["od"],
        "start": "1970-01-02T00:00:00.000Z",
        "day": "sat"
    }],
    "id": 94
}];

export {
    days,
    formats,
    groups
};