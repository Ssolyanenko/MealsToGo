import {Animated} from "react-native";
import {useEffect,useRef} from "react";


export const FadeInView = ({duration = 5000, ...props}) =>{
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration:duration,
            useNativeDriver: true,
        }).start();
    }, [fadeAnim,duration]);

    return (
        <Animated.View
        style={{...props.style,
            opacity: fadeAnim
        }}
        >
            {props.children}
        </Animated.View>
    )
}