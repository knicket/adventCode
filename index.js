document.getElementById("submit").addEventListener("click", getPattern);

var match = false;
var matchResult;
var allStartNum = [0];

//LUCKA 2
document.getElementById("submitBox").addEventListener("click", getBoxId);
document.getElementById("findBox").addEventListener("click", getBox);
document.getElementById("day3").addEventListener("click", day3);
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
  function getBox()
  {
    var highest = "";
    var highestMatch ="";
    var highestCount = 0;
    var boxStr2 = document.getElementById("boxcode").value;
    var boxArr2 = boxStr2.split(" ");
    //console.log(boxArr2);
    var i;
    var x;
    var m;
    for (i = 0; i < boxArr2.length; i++) {
      var wordSplitArr = [];
      //console.log(i);
      for (m = 0; m < boxArr2.length; m++)
      {
        if (i != m)
        {
          var countMatches = 0;
          for (x = 0; x < boxArr2[i].length; x++)
          {

              var matchLetter = boxArr2[i].charAt(x);
              var matchWithLetter = boxArr2[m].charAt(x);

                if (matchLetter == matchWithLetter)
                {
                  countMatches = countMatches + 1;
                  if (countMatches > highestCount)
                  {
                    highestCount = countMatches;
                    highest = boxArr2[i];
                    highestMatch = boxArr2[m];
                  }
                }

          }
        }

      }



    }
    console.log(highest);
    console.log(highestMatch);
    console.log(highestCount);
  }

  function day3()
  {
    var hits = 0;
    var cord;
    var cordArr;
    var cordinates = [];
    var boxStr3 = document.getElementById("input3").value;
    boxStr3 = boxStr3.replace(/ /g,"");
    boxStr3 = boxStr3.replace(/,/g,":");
    boxStr3 = boxStr3.replace(/x/g,":");
    boxStr3 = boxStr3.replace(/@/g,":");
    var boxArr3 = boxStr3.split("#");
    var a;
    var b;
    var c;
    var duplicateArr = [];
    var sumOfCord = [];
    for (a = 0; a < boxArr3.length; a++)
    {
      console.log(a);
      var converter = [];
      converter = boxArr3[a].split(":");
      //var left = (Number(converter[2])*Number(converter[3]);
      var oneSantaSuit = "";
      for (c = 0; c < Number(converter[4]); c++)
      {
        for (b = 0; b < Number(converter[3]); b++)
        {
          var newCordinate = ""
          newCordinate = String((Number(converter[1]) + b)) + "," + String((Number(converter[2]) + c));
          oneSantaSuit = oneSantaSuit + newCordinate;
          if (cordinates.indexOf(newCordinate) > -1)
          {
            if (duplicateArr.indexOf(newCordinate) > -1)
            {

            }
            else {
              duplicateArr.push(newCordinate);
            }
          }
          else {
            cordinates.push(newCordinate);
          }

        }
      }
      sumOfCord.push(oneSantaSuit);

    }
    var d;
    for (d = 0; d < sumOfCord.length;d++)
    {
      var cordHits = 0;
      for (f = 1; f < (sumOfCord.length -1);f++)
      {
        if (sumOfCord[d] == sumOfCord[f])
        {
          cordHits++;
        }
      }
      if(cordHits == 0)
      {
        console.log("IM ALONE:" + d);
      }
    }
     //NEED TO EXCLUDE SAME HIT PROB WITH ARRAY
    //console.log(cordinates);
  //  console.log(converter);
    //console.log(cordinates);
    console.log(duplicateArr.length);
  }

document.onload = init();
