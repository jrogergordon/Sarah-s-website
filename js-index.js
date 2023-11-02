document.addEventListener("DOMContentLoaded", () => {


    // window.addEventListener("keydown", function (e) {
    //     if (["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(e.code) > -1) {
    //         e.preventDefault();
    //     }
    // }, false);


    // function createMatrix(x, y) {
    //     function topWallCheck(node) {
    //         const topWall = [[4, 8], [9, 18], [4, 18], [9, 8]];
    //         for (let i = 0; i < topWall.length; i++) {
    //             if (topWall[i][0] === node[0] && topWall[i][1] === node[1]) {
    //                 return true;
    //             }
    //         }
    //         return false;
    //     }
    //     function wallCheck(node) {
    //         const cols = [[10, 8], [9, 8], [10, 9],
    //         [4, 9], [5, 8], [4, 8],
    //         [10, 18], [10, 17], [9, 18],
    //         [4, 18], [4, 17], [5, 18]]
    //         for (let i = 0; i < cols.length; i++) {
    //             if (cols[i][0] === node[0] && cols[i][1] === node[1]) {
    //                 return true;
    //             }
    //         }
    //         return false;
    //     }
    //     let topColumn = [[4, 8], [9, 18], [4, 18], [9, 8]];
    //     let bottomColumn = [[10, 8], [10, 9], [4, 9], [5, 8],
    //     [10, 18], [10, 17], [4, 17], [5, 18]]
    //     let arr2d = new Array(x)
    //     for (let i = 0; i < x; i++) {
    //         arr2d[i] = new Array(y);
    //         for (let j = 0; j < y; j++) {
    //             if (i === 0 || j === 0 || i === x - 1 || j === y - 1) {
    //                 arr2d[i][j] = 0
    //             } else if (i < 9 && i > 5 && j < 17 && j > 9) {
    //                 arr2d[i][j] = 3
    //             } else if (topWallCheck([i, j])) {
    //                 arr2d[i][j] = 8
    //             } else if (wallCheck([i, j])) {
    //                 arr2d[i][j] = 7
    //             } else {
    //                 arr2d[i][j] = 1
    //             }
    //             // if (wallCheck([i, j])) {
    //             //     arr2d[row][col] = 6;
    //             // }
    //             // if (topWallCheck([i, j])) {
    //             //     arr2d[row][col] = 7;
    //             // }
    //         }
    //     }
    //     return arr2d;
    // }

    // const matrix = createMatrix(15, 27);
    // const grid = new GridSystem(matrix);

    // let instructions = document.querySelector('.instructions');
    // let close_instructions = document.querySelector('.close-button');
    // let constInst = document.querySelector('.in-game-inst')
    // let music = document.querySelector('.audio-example')

    // close_instructions.addEventListener('click', () => {
    //     instructions.classList.add('invis');
    //     constInst.classList.add('present');
    //     music.volume = 0.07;
    //     music.play();
    //     let playingMusic = true;
    // });
    let boxOne = document.querySelector('.box_1');
    let boxTwo = document.querySelector('.box_2');
    let boxThree = document.querySelector('.box_3');
    let boxFour = document.querySelector('.box_4');
    let boxFive = document.querySelector('.box_5');

    let audioBoxTwo = document.querySelectorAll('.audio_box_two');
    let playBoxTwo = document.querySelectorAll('div.audio_box_two > audio.hidden');
    let audioBoxOne = document.querySelectorAll('.audio_box_one');
    let playBoxOne = document.querySelectorAll('div.audio_box_one > audio.hidden');
    let audioBoxThree = document.querySelectorAll('.audio_box_three');
    let playBoxThree = document.querySelectorAll('div.audio_box_three > audio.hidden');
    let audioBoxFour = document.querySelectorAll('div.audio_box_four');
    let playBoxFour = document.querySelectorAll('div.audio_box_four > audio.hidden');
    let audioBoxFive = document.querySelectorAll('.audio_box_five');
    let playBoxFive = document.querySelectorAll('div.audio_box_five > audio.hidden');
    // document.querySelectorAll("div.note, div.alert");

    function clickedAudioKey(clickedKey, audioClips, audioBox) {
        console.log(audioClips, audioBox )
        if (clickedKey.classList.contains('lightened')) {
            clickedKey.classList.remove('lightened');
            clickedKey.classList.add('key_hover')
            for (let i = 0; i < audioClips.length; i++) {
                audioClips[i].classList.add('darkened');
                audioBox[i].classList.add('hidden');
            }
        } else {
            clickedKey.classList.add('lightened');
            clickedKey.classList.remove('key_hover');
            for(let i = 0; i < audioClips.length; i++) {
                audioClips[i].classList.remove('darkened');
                audioBox[i].classList.remove('hidden');
            }
        }
    }
    boxOne.addEventListener('click', () => {
        clickedAudioKey(boxOne, audioBoxOne, playBoxOne)
    }); 

    boxTwo.addEventListener('click', () => {
        clickedAudioKey(boxTwo, audioBoxTwo, playBoxTwo)
    }); 

    boxThree.addEventListener('click', () => {
        clickedAudioKey(boxThree, audioBoxThree, playBoxThree)
    }); 

    

    boxFour.addEventListener('click', () => {
        clickedAudioKey(boxFour, audioBoxFour, playBoxFour)
    }); 

    boxFive.addEventListener('click', () => {
        clickedAudioKey(boxFive, audioBoxFive, playBoxFive)
    }); 


})