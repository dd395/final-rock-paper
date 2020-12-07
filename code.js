$(document).ready(
    function() {

        const choices = document.querySelectorAll(`.choice`);
        const score = document.getElementById(`score`);
        const result = document.getElementById(`result`);
        const restart = document.getElementById(`restart`);
        const modal = document.querySelector(`.modal`);


        const scoreboard = {
            player: 0,
            computer: 0
        }

        choices.forEach(choice => choice.addEventListener('click', play));

        console.log("start play");


//Play game
        function play(e) {

            restart.style.display = `inline-block`;
            const playerChoice = e.target.id;
            const computerChoice = getComputerChoice();
            const winner = getWinner(playerChoice, computerChoice);
            showWinner(winner, computerChoice);


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
                }}


                    function showWinner(winner, computerChoice) {
                        if (winner === 'player') {
                            //increment player score
                            scoreboard.player++;
                            //show modal result
                            result.innerHTML =
                                `<h1 class="text-win">You Win</h1>
                <i class ="fas fa-hand-${computerChoice} fa-3X"></i>
                <p>Computer Chose<strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
                 `;
                        } else if (winner === 'computer') {
                            //increment computer score
                            scoreboard.computer++;
                            //modal result
                            result.innerHTML =
                                `<h1 class="text-lose">You Lose</h1>
                <i class ="fas fa-hand-${computerChoice} fa-3X"></i>
                <p>Computer Chose<strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
                 `;
                        } else {
                            result.innerHTML =
                                `<h1>It's A Draw</h1>
                <i class ="fas fa-hand-${computerChoice} fa-3X"></i>
                <p>Computer Chose<strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
                 `;
                        }
                        //Show score
                        score.innerHTML = `
            <p>Player: ${scoreboard.player}</p>
             <p>Computer:${scoreboard.computer}</p>
             `;
                        modal.style.display = 'block';

                        //Restart game
                        function restartGame() {
                            scoreboard.player = 0;
                            scoreboard.computer = 0;
                            score.innerHTML = `
            <p>Player: 0</p>
            <p>Computer: 0</p>
            `;
                        }

                        //Clear modal
                        function clearModal(e) {
                            if (e.target === modal) {
                                modal.style.display = 'none';
                            }
                        }



                        console.log("end play");


                        window.addEventListener('click', clearModal);
                        restart.addEventListener('click', restartGame);
                    }
                }

            }
)



















