$(document).ready(function () {
    //Event Listeners

    choices.forEach(choice => choice.addEventListener('click', play));
    window.addEventListener('click', clearModal);
    restart.addEventListener('click', restartGame);

})


    const choices = document.querySelectorAll(`.choice`);
    const score = document.getElementById(`score`);
    const result = document.getElementById(`result`);
    const restart = document.getElementById(`restart`);
    const modal = document.querySelector(`.modal`);

    const scoreboard = {
        player: 0,
        computer: 0
    }

    //Play game
    function play(e) {
        restart.style.display = `inline-block`;
        const playerChoice = e.target.id;
        const computerChoice = getComputerChoice();
        const winner = getWinner(playerChoice, computerChoice);
        //showWinner(winner, computerChoice);

        //console.log(playerChoice, computerChoice, winner);

        //Get computers choice
        function getComputerChoice() {
            let items = ["rock", "paper", "scissors", "lizard", "spock"];
            let rand = items[Math.floor(Math.random() * 5)];
            return (rand);
        }

        //Get game winner
        function getWinner(p, c) {
            if (p === c) {
                return 'draw';
            } else if (p === 'rock') {
                if (c === 'lizard') {
                    return 'player';
                } else if (c === 'scissors') {
                    return 'player';
                } else if (c === 'paper') {
                    return 'computer';
                } else if (c === 'spock') {
                    return 'computer';
                }
            } else if (p === 'paper') {
                if (c === 'rock') {
                    return 'player';
                } else if (c === 'spock') {
                    return 'player';
                } else if (c === 'scissors') {
                    return 'computer';
                } else if (c === 'lizard') {
                    return 'computer';
                }
            } else if (p === 'scissors') {
                if (c === 'paper') {
                    return 'player';
                } else if (c === 'lizard') {
                    return 'player';
                } else if (c === 'rock') {
                    return 'computer';
                } else if (c === 'spock') {
                    return 'computer';
                }
            } else if (p === 'lizard') {
                if (c === 'spock') {
                    return 'player';
                } else if (c === 'paper') {
                    return 'player';
                } else if (c === 'rock') {
                    return 'computer';
                } else if (c === 'scissors') {
                    return 'computer';
                }
            } else if (p === 'spock') {
                if (c === 'scissors') {
                    return 'player';
                } else if (c === 'rock') {
                    return 'player';
                } else if (c === 'paper') {
                    return 'computer';
                } else if (c === 'lizard') {
                    return 'computer';
                }





                    }
                }
            }









