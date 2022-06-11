// Code your solution here
function findMatching(drivers, user){
return drivers.filter(userMatch=>user.toLowerCase()===userMatch.toLowerCase())

}
function fuzzyMatch(drivers,user){
return drivers.filter(letterMatch=>letterMatch.toLowerCase().indexOf(user.toLowerCase())===0)
}
function matchName(drivers,userMatch){
    return drivers.filter(user=>user.name===userMatch)

}