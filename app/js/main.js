// adds social class to get social chart
// let element = document.getElementsByClassName("chart-area");
// for(var i = 0; i < element.length; i++)
// {
//     element[i].className += " social";
// }

// bolds the subhead if there is no headline
let subhead = document.getElementsByClassName("chart-subhead"),
    headline = document.getElementById("chart-head");
    if (!headline) {
        for(var i = 0; i < subhead.length; i++) {
            subhead[i].style.fontWeight = "600";
        }       
     }


// const myQuiz = [
//     {
//     'q': 'A sample question 1?',
//     'options': [
//         'Answer 1',
//         'Answer 2',
//         'Answer 3',
//         'Answer 4'
//     ],
//     'correctIndex': 1,
//     'correctResponse': 'Custom correct response.',
//     'incorrectResponse': 'Custom incorrect response.'
//     },
//     {
//     'q': 'A sample question 2?',
//     'options': [
//         'Answer 1',
//         'Answer 2'
//     ],
//     'correctIndex': 1,
//     'correctResponse': 'Custom correct response.',
//     'incorrectResponse': 'Custom incorrect response.'
//     },
//     {
//     'q': 'A smaple question 3?',
//     'options': [
//         'Answer 1',
//         'Answer 2',
//         'Answer 3',
//         'Answer 4'
//     ],
//     'correctIndex': 2,
//     'correctResponse': 'Custom correct response.',
//     'incorrectResponse': 'Custom incorrect response.'
//     },
//     {
//     'q': 'A smaple question 4?',
//     'options': [
//         'Answer 1',
//         'Answer 2'
//     ],
//     'correctIndex': 1,
//     'correctResponse': 'Custom correct response.',
//     'incorrectResponse': 'Custom incorrect response.'
//     },
//     {
//     'q': 'A smaple question 5?',
//     'options': [
//         'Answer 1',
//         'Answer 2',
//         'Answer 3',
//         'Answer 4'
//     ],
//     'correctIndex': 3,
//     'correctResponse': 'Custom correct response.',
//     'incorrectResponse': 'Custom incorrect response.'
//     }
// ]

// $('#quiz').quiz({
//     questions: myQuiz,
//     counterFormat: 'Question %current of %total'
// });

let score = 0; //total score for final results

function answerQuestion(questionContainer) {
    let answerLocked = false //controls whether the question should be locked after answering

    $(questionContainer + ' .answers li').on('click', function(){
        if (answerLocked) {
            return;
        }
        answerLocked = true;

        $(this).parent().addClass("clicked");

        if (this.dataset.correct == "true") {
            $(this).addClass("correct");
            score++;
            $(questionContainer + ' .quiz-responses .correct-response').slideDown(200);
        } else if (this.dataset.correct == "false") {
            $(this).addClass("incorrect");
            $(questionContainer + ' .quiz-responses .incorrect-response').slideDown(200);
        }

        $(questionContainer + ' .quiz-responses .response-explanation').slideDown(200);

        $(questionContainer + ' .answers li').addClass('no-hover');

        console.log('answers: ' + $(".answers").length)
        console.log('answers clicked: ' + $(".answers.clicked").length)

        // shows 'see results' button after all five questions have been answered
        if ($(".answers").length == $(".answers.clicked").length) {
            $('.quiz-results').slideDown(200);
            $('#quiz-score').html(score);

            if (score == 0 || score == 1 || score == 2 || score == 3 || score == 4 || score == 5) {
                $('#quiz-advice').html("Here are some resources to help you learn more.");
            } else if (score == 6 || score == 7) {
                $('#quiz-advice').html("Good job! Here are some resources to help you learn even more.");
            } else if (score == 8 || score == 9) {
                $('#quiz-advice').html("Great job! You know your stuff, but here are some resources to help you learn even more.");
            } else if (score == 10) {
                $('#quiz-advice').html("Perfect! You know your stuff, but here are some resources to help you learn even more.");
            }
        }
    })

}

$('.answers').one('mouseover', function(){
    let parentDiv = ($(this).parent().attr('id'))
    answerQuestion('#' + parentDiv);
})
    
