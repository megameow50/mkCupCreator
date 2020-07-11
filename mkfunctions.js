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
	const index = list.indexOf(element);
	if (index > -1) {
  		list.splice(element, 1);
  	}
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

