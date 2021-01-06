export function SubtractTime(currentDuration,RemovedSong){
    currentDuration = currentDuration.toString()
    RemovedSong = RemovedSong.toString()
    let minute = 0;
    let second = 0;
    let secondRemainder = 0;
    currentDuration = currentDuration.split("  min  ");
    RemovedSong = RemovedSong.split(".");
    second = parseFloat(currentDuration[1]) - parseFloat(RemovedSong[1]);
    secondRemainder = second % 60;
    minute = parseFloat(currentDuration[0]) - parseFloat(RemovedSong[0]);
    if (second < 0) {
      minute--;
      secondRemainder = second + 60;
    }
    currentDuration = minute + "  min  " + secondRemainder;
  
    return currentDuration;
}