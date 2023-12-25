import {SafeArea} from "../components/utility/safe-area.component";
import {RestaurantInfo} from "../components/restaurant-info.card-componet";

export const RestaurantDetailScreen = ({route}) => {
    const {restaurant} = route.params
    return (
        <SafeArea>
            <RestaurantInfo restaurant={restaurant}/>
        </SafeArea>
    )
}