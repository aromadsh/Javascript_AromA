const web_dev = {
    os : ['window', 'Linux', 'macOS'],
    skill : {
        analyze : ['python', 'R', 'SQL'],
        engineering : ['Hadoop', 'Spark', 'Kafka']
    },
    language : ['C', ['java', 'c#'], ['python', 'dart']]
}

const {skill, os, ...language} = web_dev;

const {_, ...a} = language;

console.log(a);

// {
//     analyze: [ 'python', 'R', 'SQL' ],
//     engineering: [ 'Hadoop', 'Spark', 'Kafka' ]
//   }

//   [ 'window', 'Linux', 'macOS' ]

//   { language: [ 'C', [ 'java', 'c#' ], [ 'python', 'dart' ] ] }
