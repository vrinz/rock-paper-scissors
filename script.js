function getComputerChoice() {
	let randomizer = Math.floor(Math.random() * 3);
	let computerChoice;

	switch (randomizer) {
		case 0:
			computerChoice = "rock";
			break;
		case 1:
			computerChoice = "paper";
			break;
		case 2:
			computerChoice = "scissors";
			break;
	}
	return computerChoice;
}

function getHumanChoice() {
	let option = prompt("Select 'rock', 'paper' or 'scissors'");
	let humanChoice = option.toLowerCase();
	return humanChoice;
}

function playRound(humanChoice, computerChoice) {
	if (humanChoice == "rock" && computerChoice == "scissors") {
		humanScore += 1;
		console.log(`You Win!, ${humanChoice} beats ${computerChoice}`);
	} else if (humanChoice == "paper" && computerChoice == "rock") {
		humanScore += 1;
		console.log(`You Win!, ${humanChoice} beats ${computerChoice}`);
	} else if (humanChoice == "scissors" && computerChoice == "paper") {
		humanScore += 1;
		console.log(`You Win!, ${humanChoice} beats ${computerChoice}`);
	} else if (humanChoice == computerChoice) {
		console.log("You are Tied!");
	} else {
		computerScore += 1;
		console.log(`You Lose!, ${computerChoice} beats ${humanChoice}`);
	}
}

function playGame() {
	let humanScore = 0;
	let computerScore = 0;
	for (let i = 0; i < 5; i++) {
		playRound(getHumanChoice(), getComputerChoice());
	}
	if (humanScore > computerScore) {
		alert("You Win!");
		console.log("Human Wins!");
	} else {
		alert("You Lose!");
		console.log("NPC Wins!");
	}
	return `Your score is ${humanScore} & NPC score is ${computerScore}`;
}
