import moment from 'moment';

export function AddTime(currentDuration,Addedsong){
  
  currentDuration = currentDuration.toString()
  Addedsong = Addedsong.toString()
  Addedsong = Addedsong.split(".");
    
  let momentInTime = moment(currentDuration, 'mm.ss')
  .add(Addedsong[1], 'seconds')
  .add(Addedsong[0], 'minutes')
  .format('mm:ss');
  
    return momentInTime;
  
}