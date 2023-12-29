import MapView from "react-native-maps";
import styled from "styled-components/native";

const Map = styled(MapView)`
    height: 100%;
    width: 100%;
`
export const MapScreen = () => (
    <>
        <Map/>
    </>
)