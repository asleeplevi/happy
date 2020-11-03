

export default async function getUserLocation(latitude:number, longitude:number){


    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`)
       
        
    const {address} = await response.json() 

    return address
}