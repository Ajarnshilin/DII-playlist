import moment from "moment";

export function AddTime(currentDuration,Addedsong){
   
    var momentInTime = moment(currentDuration, "mm:ss")
    .add(Addedsong, "seconds")
    .add(Addedsong, "minutes")
    .format("mm:ss");
    // momentInTime= momentInTime.split(":")
    // momentInTime =momentInTime[0]+ "min" +momentInTime[1]
  
    return momentInTime;
  
}