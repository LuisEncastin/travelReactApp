import React, {useState, useEffect} from 'react'
import { CssBaseline, Grid } from '@material-ui/core';

import { getPlacesData } from './api'

import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';

const App = () => {
    const [places, setPlaces] = useState([]);

    const [coords, setCoords] = useState({});
    const [bounds, setBounds] = useState({});

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(( {coords: {latitude, longitude} }) => {
            setCoords({lat:latitude, lng:longitude});
        })
    }, []);

    useEffect(() => {
        console.log(coords, bounds)
        getPlacesData(bounds.sw, bounds.ne)
            .then((data)=>{
                console.log(data);
                setPlaces(data);
            })
    }, [coords, bounds]);

    return (
        <>
            <CssBaseline/>
            <Header/>
            <Grid container spacing={3} style={{width:'100%'}}>
                <Grid item xs={12} md={4}>
                    <List places={places}/>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map
                        setCoords={setCoords}
                        setBounds={setBounds}
                        coords={coords}
                        places={places}
                    />
                </Grid>
            </Grid>
        </>
    );
};

export default App;




// places
// address: "24 Dong Khoi, Dien Dien 650000 Vietnam"
// address_obj: {street1: '24 Dong Khoi', street2: null, city: 'Dien Dien', state: null, country: 'Vietnam', …}
// ancestors: (3) [{…}, {…}, {…}]
// awards: []
// bearing: "south"
// category: {key: 'restaurant', name: 'Restaurant'}
// cuisine: [{…}]
// description: ""
// dietary_restrictions: []
// distance: "8.213921327616687"
// distance_string: "8.2 km"
// doubleclick_zone: "as.vietnam"
// email: "thinn80@gmail.com"
// establishment_types: [{…}]
// hours: {week_ranges: Array(7), timezone: 'Asia/Ho_Chi_Minh'}
// is_candidate_for_contact_info_suppression: false
// is_closed: false
// is_jfy_enabled: false
// is_long_closed: false
// latitude: "12.270622"
// location_id: "9982902"
// location_string: "Dien Dien, Khanh Hoa Province"
// longitude: "109.108154"