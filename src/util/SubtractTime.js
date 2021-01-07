import moment from 'moment';

export function SubtractTime(currentDuration,RemovedSong){
  
  currentDuration = currentDuration.toString()
  RemovedSong = RemovedSong.toString()
  RemovedSong = RemovedSong.split(".");
  

  let momentInTime = moment(currentDuration, 'm:s')
  .subtract(RemovedSong[1], 'seconds')
  .subtract(RemovedSong[0], 'minutes')
  .format('m:s');

  momentInTime=momentInTime.split(":")
  momentInTime=momentInTime[0] +' min '+momentInTime[1]
  
  return momentInTime;
}