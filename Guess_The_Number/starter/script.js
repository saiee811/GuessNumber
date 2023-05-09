'use strict';

/*console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';


document.querySelector('.number').textContent = '11';
document.querySelector('.score').textContent = '15';

document.querySelector('.guess').value = '42';*/



let secretNumber = Math.trunc(Math.random()*20)+1;


let score = 20;

let highScore = 0;

document.querySelector(".check").addEventListener('click', function(){
    
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if(!guess)
    {
        document.querySelector('.message').textContent = 'Please enter No!!'
    }
    else if(guess === secretNumber)
    {
        document.querySelector('.message').textContent = "Correct No!!"
        document.querySelector('body').style.backgroundColor = '#000000';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;

        if(score > highScore)
        {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    }
    else if(guess > secretNumber)
    {
        if(score > 1)
        {
            document.querySelector('.message').textContent = "Too High Number!"
            score = score -1;
            document.querySelector('.score').textContent = score;
        }
        else
        {
            document.querySelector('.message').textContent = "You have lost the game!!!"
            document.querySelector('.score').textContent = 0;
        }
    }
    else if(guess < secretNumber)
    {
        if(score>1)
        {
            document.querySelector('.message').textContent = 'Too low Number!'
            score = score -1;
            document.querySelector('.score').textContent = score;
        }
        else
        {
            document.querySelector('.message').textContent = "you have lost the game"
            document.querySelector('.score').textContent =0;
        }   
    }
});

document.querySelector('.again').addEventListener('click',function(){
    score = 20;
     secretNumber = Math.trunc(Math.random()*20)+1;
     document.querySelector('.message').textContent = 'Start guessing';
     document.querySelector('.score').textContent = score;
     document.querySelector('.number').textContent = '?';
      document.querySelector('.guess').value = '';
      document.querySelector('body').style.backgroundColor = '#dc143c';
      document.querySelector('.number').style.width = '15rem';


})

