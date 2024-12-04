// Code your solution here

function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
  }
  
  
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
  }
  
  
  
  
  const driverNames = ["Alice", "Bob", "Charlie", "alex", "Ann", "Anna"];
  
  console.log(findMatching(driverNames, "alice"));
  
  
  console.log(fuzzyMatch(driverNames, "Al"));
  
  
  console.log(fuzzyMatch(driverNames, "An"));
  
  

  const driverObjects = [
    { name: "Alice", hometown: "Seattle" },
    { name: "Bob", hometown: "Portland" },
    { name: "Charlie", hometown: "San Francisco" },
    { name: "Alice", hometown: "Austin" }
  ];
  
  console.log(matchName(driverObjects, "alice"));
  
  