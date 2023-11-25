import {mockImages, mocks} from "./index";
import camelize from "camelize";

export const restaurantsRequest = (location) =>{
    return new Promise((resolve,reject)=>{
        const mock = mocks[location]
        if(!mock){
            reject('not found any')
        }else {
            resolve(mock)
        }
    })
}

export const restaurantsTransform = ({results = []})=>{
    const mappedResult = results.map((restaurant)=>{
        restaurant.photos = restaurant.photos.map((p)=>{
            return mockImages[Math.ceil(Math.random() * (mockImages.length-1))]
        })
        return {
            ...restaurant,
            isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
            isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY"
        }
    })

   return camelize(mappedResult)
}
