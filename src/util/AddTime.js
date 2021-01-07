import moment from 'moment';

export function AddTime(currentDuration,addSong){
  
  currentDuration = currentDuration.toString()
  addSong = addSong.toString()
  addSong = addSong.split(".");
    
  let momentInTime = moment(currentDuration, 'm.s')
  .add(addSong[1], 'seconds')
  .add(addSong[0], 'minutes')
  .format('m:s');
  
  momentInTime = momentInTime.split(":")
  momentInTime = momentInTime[0] +' min '+momentInTime[1]

    return momentInTime;
  
}