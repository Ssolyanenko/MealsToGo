import {CompactRestaurantInfo} from "../../../components/restaurant/compact-restaurant-info.component";

export const MapCallout = ({restourant}) => {
    return (
        <CompactRestaurantInfo
            isMap
            restourant={restourant}
        />
    )
}