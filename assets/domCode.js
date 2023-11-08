document.addEventListener("DOMContentLoaded", () => {

    let boxOne = document.getElementById('box_1.1');
    let boxTwo = document.getElementById('box_2.1');
    let boxThree = document.getElementById('box_3.1');
    let boxFour = document.getElementById('box_4.1');
    let boxFive = document.getElementById('box_5.1');
    let boxOneTwo = document.getElementById('box_1.2');
    let boxTwoTwo = document.getElementById('box_2.2');
    let boxThreeTwo = document.getElementById('box_3.2');
    let boxFourTwo = document.getElementById('box_4.2');
    let boxFiveTwo = document.getElementById('box_5.2');

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

    function clickedAudioKey(clickedKey, audioClips, audioBox, secondaryKey) {
        if (!secondaryKey.classList.contains('hidden')) {
            secondaryKey.classList.add('hidden');
            clickedKey.classList.remove('hidden')
            // let href = document.getElementById("view_audio234");
            // let href2 = href.getAttributeNode("href");
            // console.log(href2);
            // href.setAttribute("href", "#key_grid2");
            // href.href = "#key_grid2";
            // console.log(href2);
            for (let i = 0; i < audioClips.length; i++) {
                audioClips[i].classList.add('darkened');
                audioBox[i].classList.add('hidden');
            }
        } else {
            // let href = document.getElementById("view_audio234");
            // let href2 = href.getAttributeNode("href");
            // console.log(href2);
            // href.setAttribute("href", "#");
            // href.href = "#";
            // console.log(href2);
            clickedKey.classList.add('hidden');
            secondaryKey.classList.remove('hidden');
            for(let i = 0; i < audioClips.length; i++) {
                audioClips[i].classList.remove('darkened');
                audioBox[i].classList.remove('hidden');
            }
        }
    }
    boxOne.addEventListener('click', () => {
        clickedAudioKey(boxOne, audioBoxOne, playBoxOne, boxOneTwo)
    }); 

    boxOneTwo.addEventListener('click', () => {
        clickedAudioKey(boxOne, audioBoxOne, playBoxOne, boxOneTwo)
    }); 


    boxTwo.addEventListener('click', () => {
        clickedAudioKey(boxTwo, audioBoxTwo, playBoxTwo, boxTwoTwo)
    }); 

    boxTwoTwo.addEventListener('click', () => {
        clickedAudioKey(boxTwo, audioBoxTwo, playBoxTwo, boxTwoTwo)
    }); 

    boxThree.addEventListener('click', () => {
        clickedAudioKey(boxThree, audioBoxThree, playBoxThree, boxThreeTwo)
    }); 

    boxThreeTwo.addEventListener('click', () => {
        clickedAudioKey(boxThree, audioBoxThree, playBoxThree, boxThreeTwo)
    }); 

    
    boxFour.addEventListener('click', () => {
        clickedAudioKey(boxFour, audioBoxFour, playBoxFour, boxFourTwo)
    }); 

    boxFourTwo.addEventListener('click', () => {
        clickedAudioKey(boxFour, audioBoxFour, playBoxFour, boxFourTwo)
    }); 

    boxFive.addEventListener('click', () => {
        clickedAudioKey(boxFive, audioBoxFive, playBoxFive, boxFiveTwo)
    });

    boxFiveTwo.addEventListener('click', () => {
        clickedAudioKey(boxFive, audioBoxFive, playBoxFive, boxFiveTwo)
    });

    
    
    function clickedThumb(thumbCell, thumbAudio) {
        if (thumbCell.classList.contains('darkened')) {
            thumbAudio.classList.remove('hidden')
            thumbCell.classList.remove('darkened')
        } else {
            thumbAudio.classList.add('hidden')
            thumbCell.classList.add('darkened')
        }
    }


    let one = document.getElementById('box_1');
    let oneAudio = document.querySelector('div#box_1 > audio.hidden');
    one.addEventListener('click', () => {
        clickedThumb(one, oneAudio)
    });

    let two = document.getElementById('box_2');
    let twoAudio = document.querySelector('div#box_2 > audio.hidden');
    two.addEventListener('click', () => {
        clickedThumb(two, twoAudio)
    });

    let three = document.getElementById('box_3');
    let threeAudio = document.querySelector('div#box_3 > audio.hidden');
    three.addEventListener('click', () => {
        clickedThumb(three, threeAudio)
    });

    let four = document.getElementById('box_4');
    let fourAudio = document.querySelector('div#box_4 > audio.hidden');
    four.addEventListener('click', () => {
        clickedThumb(four, fourAudio)
    });

    let five = document.getElementById('box_5');
    let fiveAudio = document.querySelector('div#box_5 > audio.hidden');
    five.addEventListener('click', () => {
        clickedThumb(five, fiveAudio)
    });

    let six = document.getElementById('box_6');
    let sixAudio = document.querySelector('div#box_6 > audio.hidden');
    six.addEventListener('click', () => {
        clickedThumb(six, sixAudio)
    });

    let seven = document.getElementById('box_7');
    let sevenAudio = document.querySelector('div#box_7 > audio.hidden');
    seven.addEventListener('click', () => {
        clickedThumb(seven, sevenAudio)
    });

    let eight = document.getElementById('box_8');
    let eightAudio = document.querySelector('div#box_8 > audio.hidden');
    eight.addEventListener('click', () => {
        clickedThumb(eight, eightAudio)
    });

    let nine = document.getElementById('box_9');
    let nineAudio = document.querySelector('div#box_9 > audio.hidden');
    nine.addEventListener('click', () => {
        clickedThumb(nine, nineAudio)
    });

    let ten = document.getElementById('box_10');
    let tenAudio = document.querySelector('div#box_10 > audio.hidden');
    ten.addEventListener('click', () => {
        clickedThumb(ten, tenAudio)
    });

    let eleven = document.getElementById('box_11');
    let elevenAudio = document.querySelector('div#box_11 > audio.hidden');
    eleven.addEventListener('click', () => {
        clickedThumb(eleven, elevenAudio)
    });

    let twelve = document.getElementById('box_12');
    let twelveAudio = document.querySelector('div#box_12 > audio.hidden');
    twelve.addEventListener('click', () => {
        clickedThumb(twelve, twelveAudio)
    });

    let thirteen = document.getElementById('box_13');
    let thirteenAudio = document.querySelector('div#box_13 > audio.hidden');
    thirteen.addEventListener('click', () => {
        clickedThumb(thirteen, thirteenAudio)
    });

    let fourteen = document.getElementById('box_14');
    let fourteenAudio = document.querySelector('div#box_14 > audio.hidden');
    fourteen.addEventListener('click', () => {
        clickedThumb(fourteen, fourteenAudio)
    });

    let fifteen = document.getElementById('box_15');
    let fifteenAudio = document.querySelector('div#box_15 > audio.hidden');
    fifteen.addEventListener('click', () => {
        clickedThumb(fifteen, fifteenAudio)
    });

    let sixteen = document.getElementById('box_16');
    let sixteenAudio = document.querySelector('div#box_16 > audio.hidden');
    sixteen.addEventListener('click', () => {
        clickedThumb(sixteen, sixteenAudio)
    });

    let seventeen = document.getElementById('box_17');
    let seventeenAudio = document.querySelector('div#box_17 > audio.hidden');
    seventeen.addEventListener('click', () => {
        clickedThumb(seventeen, seventeenAudio)
    });

    let eighteen = document.getElementById('box_18');
    let eighteenAudio = document.querySelector('div#box_18 > audio.hidden');
    eighteen.addEventListener('click', () => {
        clickedThumb(eighteen, eighteenAudio)
    });

    let nineteen = document.getElementById('box_19');
    let nineteenAudio = document.querySelector('div#box_19 > audio.hidden');
    nineteen.addEventListener('click', () => {
        clickedThumb(nineteen, nineteenAudio)
    });

    let twenty = document.getElementById('box_20');
    let twentyAudio = document.querySelector('div#box_20 > audio.hidden');
    twenty.addEventListener('click', () => {
        clickedThumb(twenty, twentyAudio)
    });

    let twentyone = document.getElementById('box_21');
    let twentyoneAudio = document.querySelector('div#box_21 > audio.hidden');
    twentyone.addEventListener('click', () => {
        clickedThumb(twentyone, twentyoneAudio)
    });

    let twentytwo = document.getElementById('box_22');
    let twentytwoAudio = document.querySelector('div#box_22 > audio.hidden');
    twentytwo.addEventListener('click', () => {
        clickedThumb(twentytwo, twentytwoAudio)
    });

    let twentythree = document.getElementById('box_23');
    let twentythreeAudio = document.querySelector('div#box_23 > audio.hidden');
    twentythree.addEventListener('click', () => {
        clickedThumb(twentythree, twentythreeAudio)
    });

    let twentyfour = document.getElementById('box_24');
    let twentyfourAudio = document.querySelector('div#box_24 > audio.hidden');
    twentyfour.addEventListener('click', () => {
        clickedThumb(twentyfour, twentyfourAudio)
    });

    let twentyfive = document.getElementById('box_25');
    let twentyfiveAudio = document.querySelector('div#box_25 > audio.hidden');
    twentyfive.addEventListener('click', () => {
        clickedThumb(twentyfive, twentyfiveAudio)
    });
    
    let twentysix = document.getElementById('box_26');
    let twentysixAudio = document.querySelector('div#box_26 > audio.hidden');
    twentysix.addEventListener('click', () => {
        clickedThumb(twentysix, twentysixAudio)
    });

    let twentyseven = document.getElementById('box_27');
    let twentysevenAudio = document.querySelector('div#box_27 > audio.hidden');
    twentyseven.addEventListener('click', () => {
        clickedThumb(twentyseven, twentysevenAudio)
    });

    let twentyeight = document.getElementById('box_28');
    let twentyeightAudio = document.querySelector('div#box_28 > audio.hidden');
    twentyeight.addEventListener('click', () => {
        clickedThumb(twentyeight, twentyeightAudio)
    });

    let twentynine = document.getElementById('box_29');
    let twentynineAudio = document.querySelector('div#box_29 > audio.hidden');
    twentynine.addEventListener('click', () => {
        clickedThumb(twentynine, twentynineAudio)
    });

    let thirty = document.getElementById('box_30');
    let thirtyAudio = document.querySelector('div#box_30 > audio.hidden');
    thirty.addEventListener('click', () => {
        clickedThumb(thirty, thirtyAudio)
    });

    let thirtyone = document.getElementById('box_31');
    let thirtyoneAudio = document.querySelector('div#box_31 > audio.hidden');
    thirtyone.addEventListener('click', () => {
        clickedThumb(thirtyone, thirtyoneAudio)
    });

    let thirtytwo = document.getElementById('box_32');
    let thirtytwoAudio = document.querySelector('div#box_32 > audio.hidden');
    thirtytwo.addEventListener('click', () => {
        clickedThumb(thirtytwo, thirtytwoAudio)
    });

    let thirtythree = document.getElementById('box_33');
    let thirtythreeAudio = document.querySelector('div#box_33 > audio.hidden');
    thirtythree.addEventListener('click', () => {
        clickedThumb(thirtythree, thirtythreeAudio)
    });

    let modal = document.getElementById("myModal");
    let modalImg = document.getElementById("img01");
    let evan = document.getElementById("evan");
    let plinko = document.getElementById("plinko");
    let soup = document.getElementById("soup");
    let hallucination = document.getElementById("hallucination");
    let likeBook = document.getElementById("likeABook");
    let biking = document.getElementById("firstBikeRide");
    let waiting = document.getElementById("waiting");
    let firstFlirt = document.getElementById("firstFlirt");
    let bBread = document.getElementById("bBread");
    let veryFirst = document.getElementById("veryFirst");
    let breakup = document.getElementById("breakup");
    let firstArt = document.getElementById("firstArt");
    let threeVideos = document.getElementById("3videos");
    let mother = document.getElementById("mother");
    let finalWhy = document.getElementById("finalWhy");
    let rapeOfEvan = document.getElementById("rapeOfEvan");
    let bestPun = document.getElementById("bestPun");
    let sssss = document.getElementById("sssss");
    let soFunny = document.getElementById("soFunny");
    let perfYou = document.getElementById("perfYou");
    let firstSecond = document.getElementById("firstSecond");
    let disneyFunny = document.getElementById("disneyFunny");
    let uwu = document.getElementById("uwu");
    



    function showModal(content) {
        modal.style.display = "block";
        modalImg.src = content
    }
    evan.addEventListener('click',  () =>  {
        showModal("images/evanNooooo.JPG")
    })

    plinko.addEventListener('click', () => {
        showModal("images/plinko.jpg")
    })

    soup.addEventListener('click', () => {
        showModal("images/journal_1.jpg")
    })

    hallucination.addEventListener('click', () => {
        showModal("images/hallucination.jpg")
    }) 
    
    likeBook.addEventListener('click', () => {
        showModal("images/likeABook.jpg")
    }) 


    waiting.addEventListener('click', () => {
        showModal("images/waiting.jpg")
    }) 

    firstFlirt.addEventListener('click', () => {
        showModal("images/firstFlirt.jpg")
    }) 

    bBread.addEventListener('click', () => {
        showModal("images/bananaBread.jpg")
    }) 

    veryFirst.addEventListener('click', () => {
        showModal("images/veryFirst.jpg")
    }) 

    breakup.addEventListener('click', () => {
        showModal("images/breakup.jpg")
    }) 

    firstArt.addEventListener('click', () => {
        showModal("images/firstArt.jpg")
    }) 

    threeVideos.addEventListener('click', () => {
        showModal("images/3videos.jpg")
    }) 

    mother.addEventListener('click', () => {
        showModal("images/mother.jpg")
    }) 

    finalWhy.addEventListener('click', () => {
        showModal("images/finalWhy.jpg")
    })    

    rapeOfEvan.addEventListener('click', () => {
        showModal("images/rapeOfNevin.jpg")
    }) 
    
    nanking.addEventListener('click', () => {
        showModal("images/longFormImprov.jpg")
    }) 

    bestPun.addEventListener('click', () => {
        showModal("images/bestPun.jpg")
    })
    
    sssss.addEventListener('click', () => {
        showModal("images/improvStory.jpg")
    })

    soFunny.addEventListener('click', () => {
        showModal("images/soFunny.jpg")
    })

    perfYou.addEventListener('click', () => {
        showModal("images/performingWithYou.jpg")
    })  
    
    pwease.addEventListener('click', () => {
        showModal("images/pwease.jpg")
    })  

    julyCouple.addEventListener('click', () => {
        showModal("images/julyCouple.jpg")
    }) 
    
    firstSecond.addEventListener('click', () => {
        showModal("images/firstSecond.jpg")
    }) 

    disneyFunny.addEventListener('click', () => {
        showModal("images/disneyFunny.jpg")
    }) 

    uwu.addEventListener('click', () => {
        showModal("images/uwu.jpg")
    }) 


    let span = document.getElementById("myModal");

    span.onclick = function () {
        modal.style.display = "none";
    }
})