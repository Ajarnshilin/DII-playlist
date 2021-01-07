import moment from 'moment';

export function AddTime(currentDuration,Addedsong){
  
  currentDuration = currentDuration.toString()
  Addedsong = Addedsong.toString()
  Addedsong = Addedsong.split(".");
    
  let momentInTime = moment(currentDuration, 'm.s')
  .add(Addedsong[1], 'seconds')
  .add(Addedsong[0], 'minutes')
  .format('m:s');
  
  momentInTime=momentInTime.split(":")
  momentInTime=momentInTime[0] +' min '+momentInTime[1]

    return momentInTime;
  
}