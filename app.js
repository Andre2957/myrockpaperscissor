let rock_image= document.getElementById("rock")
let paper_image= document.getElementById("paper")
let scissor_image= document.getElementById("scissor")
let displayMessage= document.getElementById("message")
let score = document.getElementById("score") 
let userScore=0
let compScore=0

let possible_plays=["rock","paper","scissor"]
let comp_play



function numberToPlay(playId) {
	switch (playId) {
		case 0: return "rock"
			break;
		case 1: return "paper"
			break;
		case 2: return "scissor"
			break;
		default: return "error"
			break;
	}
}


//document.write(numberToPlay(0))


rock_image.addEventListener("click",function(){
	comp_play=Math.floor(Math.random()*possible_plays.length)

	
	if (numberToPlay(comp_play)=="rock") {
		displayMessage.innerHTML="User chose ROCK and Comp chose 	ROCK, DRAW!"
	} else if  (numberToPlay(comp_play)=="paper") {
		displayMessage.innerHTML="User chose ROCK and Comp chose 	PAPER, Comp WINS!"
		compScore++
		score.innerHTML=userScore+":"+compScore

	} else  {
		displayMessage.innerHTML="User chose ROCK and Comp chose 	SCISSORS, USER WINS!"
		userScore++
		score.innerHTML=userScore+":"+compScore
	}
	

})

paper_image.addEventListener("click",function(){
	comp_play=Math.floor(Math.random()*possible_plays.length)

	
	if (numberToPlay(comp_play)=="rock") {
		displayMessage.innerHTML="User chose PAPER and Comp chose 	ROCK, User WINS!"
		userScore++
		score.innerHTML=userScore+":"+compScore

	} else if  (numberToPlay(comp_play)=="paper") {
		displayMessage.innerHTML="User chose PAPER and Comp chose 	PAPER, DRAW!"
		
	} else  {
		displayMessage.innerHTML="User chose PAPER and Comp chose 	SCISSORS, Comp WINS!"
		compScore++
		score.innerHTML=userScore+":"+compScore
	}
	

})


scissor_image.addEventListener("click",function(){
	comp_play=Math.floor(Math.random()*possible_plays.length)

	
	if (numberToPlay(comp_play)=="rock") {
		displayMessage.innerHTML="User chose SCISSOR and Comp chose 	ROCK, Comp WINS!"
		compScore++
		score.innerHTML=userScore+":"+compScore

	} else if  (numberToPlay(comp_play)=="paper") {
		displayMessage.innerHTML="User chose SCISSORS and Comp chose 	PAPER, User WINS!"
		userScore++
		score.innerHTML=userScore+":"+compScore

	} else  {
		displayMessage.innerHTML="User chose SCISSORS and Comp chose 	SCISSORS, DRAW!"
		
	}
	

})


