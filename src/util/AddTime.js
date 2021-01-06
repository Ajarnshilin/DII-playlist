export function AddTime(currentDuration,Addedsong){
    currentDuration = currentDuration.toString()
    Addedsong = Addedsong.toString()
    let minute = 0;
    let second = 0;
    let secondRemainder = 0;
    currentDuration = currentDuration.split("  min  ");
    Addedsong = Addedsong.split(".");
    second = parseFloat(currentDuration[1]) + parseFloat(Addedsong[1]);
    secondRemainder = second % 60;
    minute = parseFloat(currentDuration[0]) + parseFloat(Addedsong[0]);
    if (second >= 60) {
      minute++;
    }
    currentDuration = minute + "  min  " + secondRemainder;
  
    return currentDuration;
}