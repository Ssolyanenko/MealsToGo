import MapView, {Callout} from "react-native-maps";
import styled from "styled-components/native";
import {Search} from "../components/search.component";
import {RestaurantsContext} from "../../../services/restaurants/mock/restaurants.context";
import {useContext, useEffect, useState} from "react";
import {LocationContext} from "../../../services/location/location.context";
import {Marker} from "react-native-maps";
import {MapCallout} from "../components/map-callout.component";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`
export const MapScreen = ({navigation}) => {
    const {location} = useContext(LocationContext);
    const {restaurants = []} = useContext(RestaurantsContext);
    const [latDelta, setLatDelta] = useState(0);

    const {lat, lng, viewport} = location;

    useEffect(() => {
        const northeastLat = viewport.northeast.lat;
        const southwestLat = viewport.southwest.lat;

        setLatDelta(northeastLat - southwestLat);
    }, [location, viewport]);
    return (
        <>
            <Search/>
            <Map
                region={{
                    latitude: lat,
                    longitude: lng,
                    latitudeDelta: latDelta,
                    longitudeDelta: 0.02,
                }}>
                {restaurants.map((restaurant) => {
                    return <Marker
                        key={restaurant.name}
                        coordinate={{
                            latitude: restaurant.geometry.location.lat,
                            longitude: restaurant.geometry.location.lng
                        }} title={restaurant.name}>
                        <Callout onPress={()=>navigation.navigate('RestaurantDetail',{restaurant})}>
                            <MapCallout restourant={restaurant}/>
                        </Callout>

                    </Marker>
                })}
            </Map>
        </>
    )
}
