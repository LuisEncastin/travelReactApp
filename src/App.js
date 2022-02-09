import React from 'react';

import Header from './components/Header/Header.jsx';
import List from './components/List/List.jsx';
import Map from './components/Map/Map.jsx';
import PlaceDetails from './components/PlaceDetails/PlaceDetails.jsx';

const App = () => {
    return (
        <div>
            <h1>Hello World!</h1>
            <Header/>
            <List/>
            <Map/>
            <PlaceDetails/>
        </div>
    );
};

export default App;