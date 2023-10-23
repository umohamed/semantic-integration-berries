//all functions needed for the demographics survey

var age = {
    type: jsPsychSurveyText,
    questions: [
        {prompt: "What is your age?", name: 'Age', required: true},
        {prompt: "What is your gender?", name: 'Gender', required: true},
        {prompt: "How many years of formal education have you had?", name: 'Education', required: true},
    ],
    data: {
        typeoftrial: "demo_age",
    },
}

var race = { 
    type: jsPsychSurveyMultiSelect,
    questions: [
        {
            prompt: "Please select all the racial categories that apply to you:",
            options: ["American Indian/Alaskan Native", "Asian", "Black/African American", "Native Hawaiian or Other Pacific Islander", "White/Caucasian", "More than one race", "Other"],
            vertical: true,
            required: true,
            name: 'Race'
        }
    ],
    data: {
        typeoftrial: "demo_race",
    },
}

var ethnicity = {
    type: jsPsychHtmlButtonResponse,
    stimulus: 'Are you of Hispanic, Latino/a/x or of Spanish origin?',
    choices: ["Yes", "No"],
    name: 'Ethnicity',
    required: true,
    data: {
        typeoftrial: "demo_ethnicity",
    },
}

var hand = {
    type: jsPsychHtmlButtonResponse,
    stimulus: "What is your dominant hand?",
    choices: ["Left", "Right", "Ambidextrous"],
    name: 'Handedness',
    required: true,
    data: {
        typeoftrial: "demo_hand",
    },
}

var time = {
    type: jsPsychHtmlButtonResponse,
    stimulus: "Please indicate what time of the day you feel most alert",
    choices: ["Morning", "Afternoon", "Evening", "No Differences"],
    name: 'Time of day',
    required: true,
    data: {
        typeoftrial: "demo_time",
    },
}

var language = {
    timeline: [language_question1] //no_lang
}

var language_question1 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: 'Is English your first language?',
    choices: ["Yes", "No"],
    name: 'Language',
    required: true,
    data: {
        typeoftrial: "demo_language",
    },
}
var no_lang_question1 = {
    type: jsPsychSurveyText,
    questions: [{promt: "What is your first language?"}, required = true]
}

var no_lang_question2 = {
    type: jsPsychSurveyText,
    questions: [{promt: "At what age did you learn English?"}, required = true]
}

var no_lang = {
    timeline: [no_lang_question1, no_lang_question2],
    conditional_function: function () {
        var last_trial_data = jsPsych.data.get().filter({typeoftrial: 'demo_language'}).last(1).values()[0];
        console.log("last_trial_data=", last_trial_data);

        if (last_trial_data.response == 1) {
            //"no" answered to language question so promot the "no" questions
            return true
        }
        else {
           return false
       }
    }
}


var comments = { 
    type: jsPsychSurveyText,
    questions: [ 
        {prompt: "Is there anything else we should know about, which might have affected your performance during the experiment? (e.g., lack of sleep, feeling ill etc.)", name: 'Comments',}
    ],
    data: {
        typeoftrial: "demo_comments",
    },
}