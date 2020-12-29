"use strict"

function prettyPrint(trackList){
	let html = "";
	for (let i = 0; i<trackList.length;i++){
		html += trackList[i];
		html += "</br>"
	}
	return html;
}


function removeFromList(element, list){
	let index = list.indexOf(element);
	while (index > -1) {
  		let result = list.splice(index, 1);
        index = list.indexOf(element);
  	}
}

function cupName(){
    let names = ['Sheikah Cup', 'Red Shell Cup', 'Bobomb Cup', 'Clown Car Cup', 'Rainbow Cup', 'Thwomp Cup', 'Whomp Cup', 'Toad Cup',
    'Dry Bones Cup', 'Cucco Cup', 'Hylian Cup', 'Shield Cup', 'Sword Cup', 'Monita Cup', '? Block Cup', 'Coin Cup', 'Hammer Cup',
    'BOWSER Cup', 'Mario Cup', 'Luigi Cup', 'Waluigi Cup', 'Wario Cup', 'Koopaling Cup', 'Bowser Jr Cup', 'Propellar Cup', 'Chomp Cup',
    'Bullet Cup', 'Moon Cup', 'Blue Shell Cup'];


    return names[Math.floor(Math.random() * names.length)]

}


function trackGenerator(){
	let firstChoices = ['Mario Circuit', 'GBA Mario Circuit', 'Mario Kart Stadium', 'Water Park', 'Thwomp Ruins',
               'Toad Harbor', 'Sunshine Airport', 'Wii Moo Moo Meadows', 'DS Cheep Cheep Beach', 
                'GCN Dry Dry Desert', 'SNES Donut Plains 3', 'GCN Yoshi Circuit', 'Excitebike Arena',
                'Animal Crossing', 'Super Bell Subway', 'GBA Cheese Land'];


	let secondChoices = ['Water Park', 'Sweet Sweet Canyon', 'Toad Harbor', 'Twisted Mansion', 'Shyguy Falls', 
                'Sunshine Airport', 'Dolpin Shoals', 'N64 Toad\'s Turnpike', 'GCN Dry Dry Desert',
                 '3DS DK Jungle', 'DS Wario Stadium', 'GCN Sherbet Land', 'N64 Yoshi Valley',
                'DS Tick Tock Clock', '3DS Piranha Plant Slide', 'GCN Yoshi Circuit', 'Electrodrome',
                'Cloudtop Cruise', 'Mute City', 'SNES Rainbow Road', 'Wii Wario\'s Goldmine',
                'GCN Baby Park', 'GBA Cheese Land', 'Wild Woods', 'Animal Crossing', 'GBA Ribbon Road',
                'Super Bell Subway', 'N64 Royal Raceway', '3DS Music Park'];
    
    let thirdChoices = ['Twisted Mansion', 'Electrodrome', 'Cloudtop Cruise', 'Wii Wario\'s Goldmine',
                'DS Tick Tock Clock', '3DS Piranha Plant Slide', 'Wii Grumble Volcano', 'Mute City',
                'Wild Woods', '3DS Neo Bowser City', 'GBA Ribbon Road', 'Super Bell Subway', 'N64 Yoshi Valley', 
                'Dragon Driftway', '3DS Music Park'];
     
    let finalChoices = ['Mount Wario', 'Hyrule Circuit', 'Bowser\'s Castle', 'Rainbow Road', 'N64 Rainbow Road',
               'Big Blue', 'Big Blue', 'Thwomp Ruins', 'Shyguy Falls', 'Mount Wario', 'Cloudtop Cruise',
                'Big Blue', 'Mount Wario'];
     
    let myTracks = [];

    let track = firstChoices[Math.floor(Math.random() * firstChoices.length)];
    myTracks.push(track);
    removeFromList(track, secondChoices);
	removeFromList(track, thirdChoices);
    removeFromList(track, finalChoices);


    for (let i = 0; i < 3; i++ ){
    	track = secondChoices[Math.floor(Math.random() * secondChoices.length)];
    	myTracks.push(track);
    	removeFromList(track, secondChoices);
		removeFromList(track, thirdChoices);
    	removeFromList(track, finalChoices);
    }

    track = thirdChoices[Math.floor(Math.random() * thirdChoices.length)];
    myTracks.push(track);
    removeFromList(track, finalChoices);

    track = finalChoices[Math.floor(Math.random() * finalChoices.length)];
    myTracks.push(track);

	return prettyPrint(myTracks);
}



/*
Code below is for Wii, which is on the page accessable by pressing the Switch Games button

*/


function wiiTrackGenerator(){
    let firstChoices = ['Moo Moo Meadows', 'DS Desert Hills', 'Luigi Circuit', 'Mushroom Gorge', 'Mario Circuit', 'Daisy Circuit', 'GCN Peach Beach',
    'DS Yoshi Falls', 'N64 Mario Raceway', 'GBA Shyguy Beach', 'GCN Waluigi Stadium', 'GCN Mario Circuit', 'SNES Mario Circuit 3', 'Koopa Cape'];


    let secondChoices = ['Moo Moo Meadows', 'Mushroom Gorge', 'DK Summit', 'Toad\'s Factory', 'Mario Circuit', 'Coconut Mall', 'Koopa Cape',
    'Maple Treeway', 'Moonview Highway', 'SNES Ghost Valley 2', 'N64 Sherbet Land', 'DS Delfino Square', 'N64 DK\'s Jungle Parkway', 'GCN Mario Circuit',
    'DS Peach Gardens', 'GCN DK Mountain'];
    
    let thirdChoices = ['Mushroom Gorge', 'DK Summit', 'Wario\'s Goldmine', 'Maple Treeway', 'Grumble Volcano', 'Dry Dry Ruins', 'Moonview Highway',
    'DS Delfino Square', 'GCN Waluigi Stadium', 'GBA Bowser\'s Castle 3', 'DS Peach Gardens', 'Coconut Mall'];
     
    let finalChoices = ['Dry Dry Ruins', 'Toad\'s Factory', 'Wario\'s Goldmine', 'Bowser\'s Castle', 'Rainbow Road', 'GBA Bowser\'s Castle 3',
    'N64 Bowser\'s Castle', 'Maple Treeway', 'Grumble Volcano', 'Mario Circuit', 'Coconut Mall', 'Bowser\'s Castle', 'Bowser\'s Castle', 
    'N64 Bowser\'s Castle', 'N64 Bowser\'s Castle', 'Rainbow Road', 'Rainbow Road']; 
     
    let myTracks = [];

    let track = firstChoices[Math.floor(Math.random() * firstChoices.length)];
    myTracks.push(track);
    removeFromList(track, secondChoices);
    removeFromList(track, thirdChoices);
    removeFromList(track, finalChoices);


    track = secondChoices[Math.floor(Math.random() * secondChoices.length)];
    myTracks.push(track);
    removeFromList(track, secondChoices);
    removeFromList(track, thirdChoices);
    removeFromList(track, finalChoices);
    

    track = thirdChoices[Math.floor(Math.random() * thirdChoices.length)];
    myTracks.push(track);
    removeFromList(track, finalChoices);

    track = finalChoices[Math.floor(Math.random() * finalChoices.length)];
    myTracks.push(track);

    return prettyPrint(myTracks);
}

//new DLC



//Battle Course/Mode Generator


var gameCount = 1; //Number of games here. 1 = 4 (or 5 if random), so on



function getOccurrence(array, value) {
    return array.filter((v) => (v === value)).length;
};

function removeOccurrence(array, value) {
    return array.filter((v) => (v !== value));
};


function noDuplicatesInList(originalArray, listLength) {

var choices = [];
var thisPick = 0;
var lastPick = 0;
var thisPickCount = 0;
var lastPickCount = 0;

for (var x = 0; x < listLength; x++) {
	thisPick = originalArray[Math.floor(Math.random() * originalArray.length)]
	thisPickCount = getOccurrence(originalArray, thisPick);
	originalArray = removeOccurrence(originalArray, thisPick);
	for (var y = 0; y < lastPickCount; y++) {
    	originalArray.push(lastPick);
	};
	choices.push(thisPick);
	lastPick = thisPick;
	lastPickCount = thisPickCount
    
};

return choices
};


function mk8BattleCreator() {

var modes = ["Random", "Random", "Random", "Random", "Random", "Random", "Random", "Random", "Shine Thief",
"Shine Thief", "Shine Thief", "Shine Thief", "Renegade Roundup",
"Renegade Roundup", "Renegade Roundup", "Renegade Roundup", "Coin Runners",
"Balloon Battle", "Balloon Battle", "Bob-omb Blast", "Bob-omb Blast", "Random", "Random"];

var mainTracks = ["Luigi's Mansion", "Dragon Palace", "Wuhu Town", 
"Luigi's Mansion", "Dragon Palace", "Wuhu Town",
"Luigi's Mansion", "Dragon Palace", "Wuhu Town", "Battle Course 1",
"Battle Stadium", "Battle Course 1", "Urchin Underpass"];

var tracksShine = ["Luigi's Mansion", "Dragon Palace", "Wuhu Town",
"Luigi's Mansion", "Dragon Palace", "Wuhu Town",
"Luigi's Mansion", "Dragon Palace", "Wuhu Town", "Battle Stadium",
"Sweet Sweet Kingdom", "Battle Course 1"];

var tracksRoundup = ["Luigi's Mansion", "Wuhu Town", "Dragon Palace", 
"Luigi's Mansion", "Wuhu Town", "Dragon Palace", "Luigi's Mansion",
"Battle Course 1", "Sweet Sweet Kingdom"]




//Mode generator
var theMode = modes[Math.floor(Math.random() * modes.length)];




//The tracks
var theTracks = [];
if (theMode === "Balloon Battle" || theMode === "Coin Runners" || 
theMode === "Bob-omb Blast") {

	theTracks = noDuplicatesInList(mainTracks, 4);

} else if (theMode === "Random") {

	theTracks = noDuplicatesInList(tracksShine, 5);

} else if (theMode === "Shine Thief") {
		
    theTracks = noDuplicatesInList(tracksShine, 4);

} else if (theMode === "Renegade Roundup") {
	
    theTracks = noDuplicatesInList(tracksRoundup, 4);
    
}
var html = "<strong>" + theMode + "</strong>";
html+= "<br>";
html += prettyPrint(theTracks);
return html;
}








