// Code your solution in this file!
const hq = 42
function distanceFromHqInBlocks(distance) {
    if (distance < hq) {
        return hq - distance
    } else {
        return distance - hq
    }
}

function distanceFromHqInFeet(distance) {
    let distanceInBlocks = distanceFromHqInBlocks(distance)
    return distanceInBlocks * 264
}

function distanceTravelledInFeet(pointA, pointB) {
    return pointA > pointB ? (pointA - pointB) *264 : (pointB - pointA) *264
    
}

function calculatesFarePrice(start, destination) {
    let distance =  distanceTravelledInFeet(start, destination)
    if (distance <= 400) {
        return 0
    } else if(distance >400 && distance < 2000) {
        let newDistance = distance - 400
        return newDistance * 0.02
    } else if(distance > 2000 && distance < 2500) {
        return 25
    } else {
        return "cannot travel that far"
    }
}

