'use strict'

let projects = [
    // {projName: 'Meme-Hive', url: 'https://coding-academy.net/memeGenerator/ShayPeleg-MarkFridman/', imgUrl: '', programmers: ['Shay Peleg', 'Mark Fridman'] },
    {
        projName: 'Feel My Meal',
        url: 'https://coding-academy.net/feelmymeal/',
        imgUrl: '',
        programmers: ['Mark Fridman', 'Omer Zfira']
    }, {
        projName: 'Llama Lizrok',
        url: 'https://coding-academy.net/llamalizrok/',
        imgUrl: '',
        programmers: ['Itai Kushmar', 'Tomer Rosenbaum']
    }, {
        projName: 'Lama Lizrok',
        url: 'https://coding-academy.net/lamalizrok-ado/',
        imgUrl: '',
        programmers: ['Adir Simona ', 'Dor Banay', 'Ori Klein']
    }, {
        projName: 'Simple Web App Builder',
        url: 'https://coding-academy.net/swab/',
        imgUrl: '',
        programmers: ['Shay Peleg', 'Itay Koren']
    },
];

let elBoard = document.querySelector('.board');
let colors = ['blue', 'green', 'yellow', 'red']
let i = 0;
projects.forEach(function (project) {
    let programmerStr = project.programmers.reduce(function (programmer, acc) {
        return acc += ', ' + programmer;
    }, '');
    programmerStr = programmerStr.slice(0, -2);

    elBoard.innerHTML += '<a href="' + project.url + '" target="_blank">' +
        '<div class="card ' + colors[i] + ' action-button shadow animate">' +
         '<h3>' + project.projName + '</h3>'+
        '<p> ' + programmerStr + '</p>' +
        '<img src="' + project.imgUrl + '">' +
        '</div>' + '</a>';
    i++;
})