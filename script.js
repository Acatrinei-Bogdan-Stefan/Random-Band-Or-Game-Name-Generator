// Input Variables
const existingWordsContainer = document.querySelector(".existing-words-container");
const finalWordContainer = document.querySelector(".final-word-container");
const getWordInput = document.getElementById("jsGetWordInput");
let FirstWord = true;
let checkForTwo = 0;

// Main word List
let wordList = ["Blaze", "Venom", "Phoenix", "Fury", "Shadow", "Storm", "Ace", "Nova", "Rogue", "Fissure", "Perseus", "Blaze", "Ratchet", "Cobra", "Reaper", "Colt", "Rigs", "Crank", "Ripley", "Creep", "Roadkill", "Daemon", 
"Hijacker", "Locker", "Manifesto", "Fury", "Thunder", "Dragonite", "Repulsor", "Revenger", "DrDisconnect", "Stabber", "Asaurus Rex", "Uber Fast", "Disguised", "MindOf", "Dr Fast", "Popper", "Big Fast", "I am Fire",
"Captain Fire", "The Fire Dude", "Mr Cool", "Let’s Go", "Captain Fire", "Bloodbath", "Conqueror", "Total Tiger", "Endeavour", "All Muscles", "The Fox", "Shoot2Kill", "Zero", "Yellow Lion", "Wardon", "Vulture", 
"Unique Identity", "Ultimate Guide", "Tweek", "Tusk", "Torpedo", "Titanium", "The Red Wolf", "The Purple Bear", "The Orange Frog", "The Green Tiger", "The Great Shark", "The Dark Horse", "The Brown Fox", 
"The Armor", "Team Arsenic", "Sythe", "Strong Position", "Stream Elements", "Steel Foil", "Sniper", "Snake", "Slaughter", "Sky Bully", "Skull Crusher", "Silver Stone", "Silver Eagle", "Sienna Princess", "Sidewalk Enforcer",
"Shiver", "Sherwood Gladiator", "Seal Snake", "ScaryPumpkin", "Scare Stone", "Scalp", "Sandbox", "Rubble", "Rooster", "Ronin", "Romance Guppy", "Roller Turtle", "RoarSweetie", "Roadkill",
"Roadblock", "Relative Performance", "Red Rhino", "RedFisher", "RedFeet", "Rubix Cube", "Mutant", "AtomA", "Blazing Shooter", "Blazing Fast", "Flame On", "Reaper", "Lone Wolf", "Insanity", "Berserker",
"Duplicate", "Hellfire", "Thundero", "Bomber machine", "Furious", "Dreader", "Leonidas", "Cyrus", "Robert Gaming", "Tornado", "Gain Power", "Soul Crusher", "Cursed Soul", "Dark Being", "Dark Matter", "Vixen",
"Raven", "Miracle", "Planet Destroyer", "Bizarro", "Ragman", "The Atom", "Gliding Master", "Star Glider", "Upper", "Notorious", "Full Rampage", "Perfecto", "Terrific Boy", "Heckler", "Deadman", "Just Madness"]


// Update function
function updateList(){
    existingWordsContainer.innerHTML = "";
  
    wordList.forEach((item) => {
        existingWordsContainer.innerHTML += `<button onclick="addPresetWord('${item}')">${item}</button>`;
  });
}

// Set all word list buttons function
  updateList()

// Random Name Function
function random(){
    randomSelector1 = Math.round(Math.random() * wordList.length);
    randomSelector2 = Math.round(Math.random() * wordList.length);
    finalWordContainer.innerHTML = wordList[randomSelector1] + " " + wordList[randomSelector2];
}

// Add Preset Word Function
function addPresetWord(word){

    if(FirstWord){
        finalWordContainer.innerHTML = "";
        FirstWord=false;
    } 
    
    if(checkForTwo < 2){
        finalWordContainer.innerHTML += word + " ";
        checkForTwo++;
    }else{
        finalWordContainer.innerHTML = "";
        finalWordContainer.innerHTML += word + " ";
        checkForTwo = 1;
    }
}

// Add Word Function
function addWord(){
    let dict = {};
    function prepopulate() {
    wordList.forEach(function(word, i) { dict[word] = i; });
    }
    prepopulate();

    if(getWordInput.value !== ""){
        if (getWordInput.value in dict) {
            getWordInput.value = "";
            alert("The word is already in the list !!!")
        }else{
            wordList.push(getWordInput.value);
            addPresetWord(getWordInput.value);
            getWordInput.value = "";
            updateList()
        }
    }
}

// Add Word using the Enter key
getWordInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addWord()
      }
    
  });







