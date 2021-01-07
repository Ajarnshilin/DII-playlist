import moment from 'moment';

export function SubtractTime(currentDuration,RemovedSong){
  
  currentDuration = currentDuration.toString()
  RemovedSong = RemovedSong.toString()
  RemovedSong = RemovedSong.split(".");

  let momentInTime = moment(currentDuration, 'mm:ss')
  .subtract(RemovedSong[1], 'seconds')
  .subtract(RemovedSong[0], 'minutes')
  .format('mm:ss');
  
  return momentInTime;
}