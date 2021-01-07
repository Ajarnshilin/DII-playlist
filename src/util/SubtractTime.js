import moment from "moment";

export function SubtractTime(currentDuration,RemovedSong){
  var momentInTime = moment(currentDuration, "m:ss")
  .subtract(RemovedSong, "seconds")
  .subtract(RemovedSong, "minutes")
  .format("m:ss");
  momentInTime= momentInTime.split(":")
  momentInTime =momentInTime[0]+ "min" +momentInTime[1]

  return momentInTime;
}