const web_dev = {
    Language : 'Javascript',
    period : 3,
    experience : false,
    os : ['window', 'Linux', 'macOS'],
    skill : {
        data : {
            python : ['Tensorflow', 'Pytorch'],
            s : [1, 2, 3]
        }, 
        R : ['tidyverse', 'shiny'], 
        SQL : { java : 'Hibernate', python : 'SQLAlchemy'}}
}

const {os, skill : {python}} = web_dev;

console.log(web_dev);
// console.log(python);
