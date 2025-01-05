const backbtn = document.querySelector('.backbtn');
const forbtn = document.querySelector('.forbtn');
const bbstyle = document.createElement('style');
const fbstyle = document.createElement('style');
const card = document.querySelector('.card');

const nav = document.querySelector('.nav');
const img = document.querySelector('.img');
const uplayer = document.querySelector('.uplayer');
const shadow = document.querySelector('.shadow');
const shadow1 = document.querySelector('.shadow1');

const imgHeight = parseFloat(window.getComputedStyle(img).height);
const navHeight = parseFloat(window.getComputedStyle(nav).height);
const padtop = parseFloat(window.getComputedStyle(uplayer).paddingTop);


const newUplayerHeight = imgHeight - navHeight - padtop;

shadow.style.height = `${navHeight + 70}px`;




const cardimg = document.querySelector('.card img');
const cardimght = parseFloat(window.getComputedStyle(cardimg).height);



fbstyle.innerHTML = `
.forward {
    height: ${cardimght}px;
    background-color: rgb(0, 0, 0);
    padding: 0px 10px;
    display: flex;
    align-items: center;
    opacity: 100%;
    margin-top: 25px;
}`;

document.head.appendChild(fbstyle);

bbstyle.innerHTML = `
.back {
    height: ${cardimght}px;
    background-color: rgb(0, 0, 0);
    padding: 0px 10px;
    display: flex;
    align-items: center;
    position: absolute;
    opacity: 0%;
    transform: translateX(-44px);
    margin-top: 25px;
}`;

document.head.appendChild(bbstyle);

forbtn.addEventListener('click', () => {
    bbstyle.innerHTML = `
    .back {
        height: ${cardimght}px;
        background-color: rgb(0, 0, 0);
        padding: 0px 10px;
        display: flex;
        align-items: center;
        position: absolute;
        transform: translateX(0px);
        opacity: 100%;
        transition: transform 0.5s ease, opacity 0.2s ease;
        margin-top: 25px;
    }`;

    fbstyle.innerHTML = `
    .forward {
        height: ${cardimght}px;
        background-color: rgb(0, 0, 0);
        padding: 0px 10px;
        display: flex;
        align-items: center;
        opacity: 0%;
        transform: translateX(44px);
        transition: transform 0.5s ease, opacity 0.5s ease;
        margin-top: 25px;
    }`;

    card.scrollTo({
        left: card.scrollWidth,
        behavior: 'smooth',
    });

});

backbtn.addEventListener('click', () => {
    bbstyle.innerHTML = `
    .back {
        height: ${cardimght}px;
        background-color: rgb(0, 0, 0);
        padding: 0px 10px;
        display: flex;
        align-items: center;
        position: absolute;
        opacity: 0%;
        transform: translateX(-44px);
        transition: transform 0.5s ease, opacity 1.6s ease;
        margin-top: 25px;
    }`;

    fbstyle.innerHTML = `
    .forward {
        height: ${cardimght}px;
        background-color: rgb(0, 0, 0);
        padding: 0px 10px;
        display: flex;
        align-items: center;
        opacity: 100%;
        transform: translateX(0px);
        transition: transform 0.5s ease, opacity 0.5s ease;
        margin-top: 25px;
    }`;

    card.scrollTo({
        left: 0,
        behavior: 'smooth',
    });

});



const ans = document.querySelectorAll('.a');
const plus = document.querySelectorAll('.q img');
const ansarr = Array.from(ans);
const plusarr = Array.from(plus);
const qnaElement = document.querySelector('.qna');
const qnaFontSize = window.getComputedStyle(qnaElement).fontSize;

ansarr.forEach(e => {
    e.style.fontSize = '0px';
    e.style.padding = '0px';
});


function answer(num, counter) {

    ansarr.forEach(e => {
        e.style.fontSize = '0px';
        e.style.padding = '0px';
    });

    plusarr.forEach(e => {
        e.style.transform = 'rotate(0deg)';
    });

    if (counter == 1) {
        ansarr[num].style.fontSize = qnaFontSize;
        ansarr[num].style.padding = '24px 30px 24px 24px';
        plusarr[num].style.transition = 'transform 0.2s ease';
        plusarr[num].style.transform = 'rotate(45deg)';
        return 0;
    }

    return 1;
}

const q = document.querySelectorAll('.q');
let c = [1, 1, 1, 1, 1, 1];
let c1

q[0].addEventListener('click', () => {
    c1 = answer(0, c[0]);
    c = [1, 1, 1, 1, 1, 1];
    c[0] = c1;
})

q[1].addEventListener('click', () => {
    c1 = answer(1, c[1]);
    c = [1, 1, 1, 1, 1, 1];
    c[1] = c1;
})

q[2].addEventListener('click', () => {
    c1 = answer(2, c[2]);
    c = [1, 1, 1, 1, 1, 1];
    c[2] = c1;
})

q[3].addEventListener('click', () => {
    c1 = answer(3, c[3]);
    c = [1, 1, 1, 1, 1, 1];
    c[3] = c1;
})

q[4].addEventListener('click', () => {
    c1 = answer(4, c[4]);
    c = [1, 1, 1, 1, 1, 1];
    c[4] = c1;
})

q[5].addEventListener('click', () => {
    c1 = answer(5, c[5]);
    c = [1, 1, 1, 1, 1, 1];
    c[5] = c1;
})






const inpt1 = document.querySelector('.uplayer input');
const inpt2 = document.querySelector('.sbar input');
const get1 = document.querySelector('.uplayer .searchbtn');
const get2 = document.querySelector('.sbar .searchbtn');

get1.addEventListener('click', () => {
    if(inpt1.value != '')
    {
        alert('Email not Detected');
    }
    else{
        inpt1.focus();
    }
})

get2.addEventListener('click', () => {
    if(inpt2.value != '')
        {
            alert('Email not Detected');
        }
        else{
            inpt2.focus();
        }
})

document.addEventListener('keydown',(e)=>
{
    if(e.key == 'Enter')
    {
        if(inpt2.value != '' || inpt1.value != '')
        {
            alert('Email not Detected');
        }
    }
})


const reg = document.getElementById('Region');
const medtp = document.getElementById('MediaType');
const lang = document.querySelector('.navbtn select');

lang.addEventListener('change',()=>
{
    if(lang.value== 'Hindi')
    {
        alert('Hindi Language not Availbale! Sorry For Inconvinience!')
        lang.value='English'
    }
})

function imgass(fld,num)
{
    let newimg = document.createElement('img')
    for(let i = 1; i<=num; i++)
    {
        let newimg = document.createElement('img')
        newimg.src = `Assets/${fld}/${i}.webp`;
        newimg.alt = `Image ${i}`
        card.appendChild(newimg)
    }
}

card.innerHTML=``;
imgass('India Movie',10);

function mediachange() {
    let regsel = reg.value;
    let medtpsel = medtp.value;

    if (regsel == 'India' && medtpsel == 'Movies') {
        card.innerHTML = ``;
        imgass('India Movie',10);
    }

    else if (regsel == 'Global' && medtpsel == 'Movies') {
        card.innerHTML = ``;
        imgass('Global Movies',7);
    }

    else if (regsel == 'India' && medtpsel == 'TV Shows') {
        card.innerHTML = ``;
        imgass('India TV Shows',7);
    }

    else {
        card.innerHTML = ``;
        imgass('Global TV Shows',7);
    }
}

reg.addEventListener('change', () => {
    mediachange();
})

medtp.addEventListener('change', () => {
    mediachange();
})