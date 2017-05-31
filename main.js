let blackCardsRef = firebase.database().ref("cards/blackCards");
let whiteCardsRef = firebase.database().ref("cards/whiteCards");
let database = firebase.database();
let cardRef = database.ref("/cards");
let blackCardRef = cardRef.child("/blackCards");
let whiteCardRef = cardRef.child("/whiteCards");


function callDictApi(message) {
    let baseURL = "https://api.pearson.com/v2/dictionaries/laad3/entries?headword="
    let apiKey = "&apikey=AJUxPAxRPBKVXZ8t2z79XYG2X1JnsEOW"

    $.ajax({
        url: baseURL + message + apiKey,

        // headers: {
        //     "app_id": "bc40b411",
        //     "app_key": "1060b1b34f95cf524f8c88b7c9edb7ba"
        // }
        //OR
        //beforeSend: function(xhr) { 
        //  xhr.setRequestHeader("My-First-Header", "first value"); 
        //  xhr.setRequestHeader("My-Second-Header", "second value"); 
        //}
    }).done(function(data) {
        if (data.results[0].senses[0].subsenses !== undefined) {
            console.log(data.results[0].senses[0].subsenses[0].definition)
        } else {
            console.log(data.results[0].senses[0].definition)
        }

    });
}
// function shuffleCards(key) {
//     //TODO: add teh arrays to the currentGame database;
//     let whiteCount = 0;
//     let blackCount = 0;
//     let tempArray = {
//         white: [],
//         black: []
//     };
//     let shuffledArray = {
//         white: [],
//         black: []
//     };
//     cardRef.child("whiteCardCount").once("value", function(snap) {
//         whiteCount = snap.val();
//     }).then(function() {
//         cardRef.child("blackCardCount").once("value", function(snap) {
//             blackCount = snap.val();
//         }).then(function() {
//             for (var i = 0; i < whiteCount; i++) {
//                 tempArray.white.push(i);
//             }
//             for (var i = 0; i < blackCount; i++) {
//                 tempArray.black.push(i);
//             }
//             for (var i = 0; i < blackCount; i++) {
//                 let rand = Math.floor(Math.random() * tempArray.black.length);
//                 shuffledArray.black.push(tempArray.black[rand]);
//                 tempArray.black.slice(rand, 1);
//             }
//             for (var i = 0; i < whiteCount; i++) {
//                 let rand = Math.floor(Math.random() * tempArray.white.length);
//                 shuffledArray.white.push(tempArray.white[rand]);
//                 tempArray.white.slice(rand, 1);
//             }
//             console.log(shuffledArray.white)
//         })
//     })




// function setWhiteCards() {
//     let set = 0;
//     let count = 0;
//     let total = 0;
//     while (count < baseSet.whiteCards.length) {
//         for (var i = 0; i < 50; i++) {
//             if (baseSet.whiteCards[count]) {
//                 whiteCardsRef.child(set).child(i).set(baseSet.whiteCards[count]);
//                 total++
//             } //if
//             count++;
//         } //for
//         set++;
//     } //while
//     cardRef.update({
//         whiteCardCount: total
//     })
// }

// function setBlackCards() {
//     let set = 0;
//     let count = 0;
//     let total = 0;
//     while (count < baseSet.blackCards.length) {
//         for (var i = 0; i < 50; i++) {
//             if (baseSet.blackCards[count]) {
//                 blackCardsRef.child(set).child(i).set(baseSet.blackCards[count]);
//                 total++
//             } //if
//             count++;
//         } //for
//         set++;
//     } //while
//     cardRef.update({
//         blackCardCount: total
//     })
// }
// setWhiteCards();
// setBlackCards();



//how to convert to location
/*
ex.
    card= 123
    a= Math.floor(card/50);
    b= card%50;
    [a][b]
    whiteCardRef.child(a).child(b).once("value", function(snap){
    //so something
    })
*/
