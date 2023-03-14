function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42; 
    return Math.abs(pickupLocation - hqLocation);
  }

  function distanceFromHqInFeet(pickupLocation) {
    const blockLength = 264; 
    const distanceInBlocks = distanceFromHqInBlocks(pickupLocation);
    const distanceInFeet = distanceInBlocks * blockLength; 
    return distanceInFeet; 
  }
  function distanceTravelledInFeet(start, destination) {
    const blockLength = 264; 
    const distanceInBlocks = Math.abs(destination - start);
    const distanceInFeet = distanceInBlocks * blockLength; 
    return distanceInFeet;
  }
  function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start,destination);
    let fare;

    if (distanceInFeet <= 400) {
            fare = 0;
    }
        else if (distanceInFeet > 400 && distanceInFeet <= 2000){
            fare = (distanceInFeet- 400) * 0.02
    }
        else if (distanceInFeet > 2000 && distanceInFeet <= 2500){
            fare = 25;
    }
        else if (distanceInFeet > 2500){
            fare = 'cannot travel that far';
    }
    
    
    return fare
  }


