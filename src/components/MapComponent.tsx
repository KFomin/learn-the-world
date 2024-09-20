'use client'

import React, {useEffect} from 'react';
import 'ol/ol.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {fromLonLat} from "ol/proj";

const MapComponent: React.FC = () => {
    useEffect(() => {
        const map = new Map({
            target: 'map',
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
            ],
            view: new View({
                center: fromLonLat([24.7536, 59.4370]),
                zoom: 6,
                minZoom: 6,
                maxZoom: 8,
            }),
        });

        return () => map.setTarget('map');
    }, []);

    return view;
};

const view = <div tabIndex={0} id="map" style={{width: '100vw', height: '100vh'}}/>;

export default MapComponent;