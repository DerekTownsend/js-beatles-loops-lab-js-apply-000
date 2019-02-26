// add solution here

function theBeatlesPlay(musicians,instruments){
  var artistAndInstruments=[];
  var artistPlays;
  for(counter=0;counter<musicians.length;counter++){
    artistPlays=musicians[counter]+" plays "+instruments[counter];
    artistAndInstruments.push(artistPlays)
  }
  return artistAndInstruments;
}
function johnLennonFacts(facts)
