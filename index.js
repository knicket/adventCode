document.getElementById("submit").addEventListener("click", getPattern);

var match = false;
var matchResult;
var allStartNum = [0];

//LUCKA 2
document.getElementById("submitBox").addEventListener("click", getBoxId);
var twoLetter = 0;
var threeLetter = 0;


function init()
{
  console.log('hello world');
}
function getPattern()
{
  var freqStr = document.getElementById("pattern").value;
  var freqArr = freqStr.split(" ");
  //console.log(freqArr);
  var i;
  var startNumber = 0;
  for (i = 0; i < freqArr.length; i++) {
      startNumber = startNumber + Number(freqArr[i]);

      //console.log(startNumber);
      //console.log(startNumber);
        if (match == false)
        {
            if (allStartNum.indexOf(startNumber) > -1)
            {
              match = true;
              console.log("2 TRÄFFAR på:" + startNumber );
            }
        }
        allStartNum.push(startNumber);
      }
      if (match == false)
      {
        runAgain(startNumber,freqArr,allStartNum);
      }
      //checkDuplicates(startNumber);

      //console.log(Number(freqArr[i]));
  console.log(startNumber);
}

function runAgain(startNumber,freqArr,allStartNum)
{
  var newStartNumber = startNumber;
  var newFreqArr = freqArr;
  var newAllStartNum = allStartNum;
  var x;
  for (i = 0; i < newFreqArr.length; i++) {
      newStartNumber = newStartNumber + Number(newFreqArr[i]);

      //console.log(startNumber);
      //console.log(startNumber);
        if (match == false)
        {
            if (newAllStartNum.indexOf(newStartNumber) > -1)
            {
              match = true;
              console.log("2 TRÄFFAR på:" + newStartNumber );
            }
        }
        newAllStartNum.push(newStartNumber);
      }
      if (match == false)
      {
        runAgain(newStartNumber,newFreqArr,newAllStartNum);
      }
}
function getBoxId()
{
  var boxStr = document.getElementById("boxcode").value;
  var boxArr = boxStr.split(" ");
  //console.log(boxArr);
  var i;
  for (i = 0; i < boxArr.length; i++) {
    var twoLetterHit = false;
    var wordSplitArr = [];
    var x;
    for (x = 0; x < boxArr[i].length; x++)
    {
      if (wordSplitArr.indexOf(boxArr[i].charAt(x)) < 0)
      {
        wordSplitArr.push(boxArr[i].charAt(x));
        console.log(wordSplitArr);
      }
    }
    var z;
    var twoFound = false;
    var threeFound = false;
    for (z = 0; z < wordSplitArr.length; z++)
    {
      var letter = wordSplitArr[z];
      if(((boxArr[i].match(new RegExp(letter, "g")) || []).length == 2) && twoFound == false)
      {
        twoFound = true;
        twoLetter = twoLetter + 1;
        console.log("2 hits");
      }
      else if (((boxArr[i].match(new RegExp(letter, "g")) || []).length == 3) && threeFound == false)
      {
        threeFound = true;
        threeLetter = threeLetter + 1;
        console.log("3 hits");
      }
    }


    }
    console.log("SUM: " + threeLetter + " " +  twoLetter)
  }

document.onload = init();
