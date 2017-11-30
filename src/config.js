const config = {
    // TODO make this env
    auth: {
        username: '',
        password: '',
    },
    api: {
        endpoint: {
            'departureTimes': 'ns-api-avt?station=',
            'stationList': 'ns-api-stations-v2',
            'distruptions': 'ns-api-storingen?station=',
        }
    },
    domain: 'http://webservices.ns.nl/',
    defaultStation: 'Utr'
};

export default config;
