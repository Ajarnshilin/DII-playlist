import moment from 'moment';

export function SubtractTime(currentDuration,removedSong){
  
  currentDuration = currentDuration.toString()
  removedSong = removedSong.toString()
  removedSong = removedSong.split(".");
  

  let momentInTime = moment(currentDuration, 'm:s')
  .subtract(removedSong[1], 'seconds')
  .subtract(removedSong[0], 'minutes')
  .format('m:s');

  momentInTime = momentInTime.split(":")
  momentInTime = momentInTime[0] +' min '+ momentInTime[1]
  
  return momentInTime;
}