// LICENCE -----------------------------------------------------------------------------
//
// Copyright 2018 - Cédric Batailler
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of this
// software and associated documentation files (the "Software"), to deal in the Software
// without restriction, including without limitation the rights to use, copy, modify,
// merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to the following
// conditions:
//
// The above copyright notice and this permission notice shall be included in all copies
// or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
// INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
// PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
// HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
// CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE
// OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
//
// OVERVIEW -----------------------------------------------------------------------------
//
// TODO:
// 
// dirty hack to lock scrolling ---------------------------------------------------------
// note that jquery needs to be loaded.
$('body').css({'overflow':'hidden'});
  $(document).bind('scroll',function () { 
       window.scrollTo(0,0); 
  });

// safari & ie exclusion ----------------------------------------------------------------
var is_safari = /^((?!chrome|android).)*safari+ie/i.test(navigator.userAgent);
var is_ie = /*@cc_on!@*/false || !!document.documentMode;

var is_compatible = !(is_safari || is_ie);


if(!is_compatible) {

    var safari_exclusion = {
        type: "html-keyboard-response",
        stimulus:
        "<p>Unfortunately, this study is not compatible with your " +
        "browser.</p>" +
        "<p>Please reopen this experiment from a supported browser (like " +
        "Chrome or Firefox).</p>",
        choices: jsPsych.NO_KEYS
    };

    var timeline_safari = [];

    timeline_safari.push(safari_exclusion);
    jsPsych.init({timeline: timeline_safari});

}
// keen.io initialization ---------------------------------------------------------------
// This part will work only if stream_projectID & stream_writeKey have been defined.
// nb: the bang (!) is for self-invoking function.

!function(name,path,ctx){
  'use strict';
  var latest,prev=name!=='Keen'&&window.Keen?window.Keen:false;ctx[name]=ctx[name]||{ready:function(fn){var h=document.getElementsByTagName('head')[0],s=document.createElement('script'),w=window,loaded;s.onload=s.onerror=s.onreadystatechange=function(){if((s.readyState&&!(/^c|loade/.test(s.readyState)))||loaded){return}s.onload=s.onreadystatechange=null;loaded=1;latest=w.Keen;if(prev){w.Keen=prev}else{try{delete w.Keen}catch(e){w.Keen=void 0}}ctx[name]=latest;ctx[name].ready(fn)};s.async=1;s.src=path;h.parentNode.insertBefore(s,h)}}
}('KeenAsync','https://d26b395fwzu5fz.cloudfront.net/keen-tracking-1.1.3.min.js',this);

// Variable input -----------------------------------------------------------------------
// Variable used to define experimental condition.

var vaast_1st_block = jsPsych.randomization.sampleWithoutReplacement(["approach_masc", "approach_fem"], 1)[0];

var jspsych_id  = jsPsych.randomization.randomID();
var prolific_pid = jsPsych.data.getURLVariable('PROLIFIC_PID');

// check if URL prolific_pid exists and set prolific_pid to "" if it does not

if(prolific_pid == null) {prolific_pid = "";}

// VAAST --------------------------------------------------------------------------------
// VAAST variables ----------------------------------------------------------------------

var movement_mas_block1 = undefined;
var movement_fem_block1 = undefined;
var movement_mas_block2 = undefined;
var movement_fem_block2 = undefined;

var block1_approach_cat = undefined;
var block1_avoidanc_cat = undefined;
var block1_approach_cat = undefined;
var block2_avoidanc_cat = undefined;

switch(vaast_1st_block) {
  case "approach_masc":
    movement_mas_block1 = undefined;
    movement_fem_block1 = undefined;
    movement_mas_block2 = undefined;
    movement_fem_block2 = undefined;
    block1_approach_cat = undefined;
    block1_avoidanc_cat = undefined;
    block1_approach_cat = undefined;
    block2_avoidanc_cat = undefined;
    break;

  case "approach_fem":
    movement_mas_block1 = undefined;
    movement_fem_block1 = undefined;
    movement_mas_block2 = undefined;
    movement_fem_block2 = undefined;
    block1_approach_cat = undefined;
    block1_avoidanc_cat = undefined;
    block1_approach_cat = undefined;
    block2_avoidanc_cat = undefined;
    break;
}

// VAAST stimuli ------------------------------------------------------------------------
// vaast image stimuli ------------------------------------------------------------------
// TODO : choose movement

var vaast_stim = [
  {category: "", movement: "avoidance", genre: "masculin", valence: "positif", stimulus: "accomplissement"},
  {category: "", movement: "avoidance", genre: "masculin", valence: "positif", stimulus: "anniversaire"},
  {category: "", movement: "avoidance", genre: "masculin", valence: "positif", stimulus: "avantage"},
  {category: "", movement: "avoidance", genre: "masculin", valence: "positif", stimulus: "bébé"},
  {category: "", movement: "avoidance", genre: "masculin", valence: "positif", stimulus: "bonheur"},
  {category: "", movement: "avoidance", genre: "masculin", valence: "positif", stimulus: "cadeau"},
  {category: "", movement: "avoidance", genre: "masculin", valence: "positif", stimulus: "câlin"},
  {category: "", movement: "avoidance", genre: "masculin", valence: "positif", stimulus: "charme"},
  {category: "", movement: "avoidance", genre: "masculin", valence: "positif", stimulus: "diplôme"},
  {category: "", movement: "avoidance", genre: "masculin", valence: "positif", stimulus: "espoir"},
  {category: "", movement: "avoidance", genre: "masculin", valence: "positif", stimulus: "humour"},
  {category: "", movement: "avoidance", genre: "masculin", valence: "positif", stimulus: "mariage"},
  {category: "", movement: "avoidance", genre: "masculin", valence: "positif", stimulus: "partage"},
  {category: "", movement: "avoidance", genre: "masculin", valence: "positif", stimulus: "plaisir"},
  {category: "", movement: "avoidance", genre: "masculin", valence: "positif", stimulus: "remerciement"},
  {category: "", movement: "avoidance", genre: "masculin", valence: "positif", stimulus: "rire"},
  {category: "", movement: "avoidance", genre: "masculin", valence: "positif", stimulus: "soleil"},
  {category: "", movement: "avoidance", genre: "masculin", valence: "positif", stimulus: "sourire"},
  {category: "", movement: "avoidance", genre: "masculin", valence: "positif", stimulus: "succès"},
  {category: "", movement: "avoidance", genre: "masculin", valence: "positif", stimulus: "triomphe"},
  {category: "", movement: "approach",  genre: "feminin" , valence: "positif", stimulus: "amitié"},
  {category: "", movement: "approach",  genre: "feminin",  valence: "positif", stimulus: "fête"},
  {category: "", movement: "approach",  genre: "feminin",  valence: "positif", stimulus: "fleur"},
  {category: "", movement: "approach",  genre: "feminin",  valence: "positif", stimulus: "gloire"},
  {category: "", movement: "approach",  genre: "feminin",  valence: "positif", stimulus: "grandeur"},
  {category: "", movement: "approach",  genre: "feminin",  valence: "positif", stimulus: "joie"},
  {category: "", movement: "approach",  genre: "feminin",  valence: "positif", stimulus: "justice"},
  {category: "", movement: "approach",  genre: "feminin",  valence: "positif", stimulus: "lumière"},
  {category: "", movement: "approach",  genre: "feminin",  valence: "positif", stimulus: "naissance"},
  {category: "", movement: "approach",  genre: "feminin",  valence: "positif", stimulus: "paix"},
  {category: "", movement: "approach",  genre: "feminin",  valence: "positif", stimulus: "passion"},
  {category: "", movement: "approach",  genre: "feminin",  valence: "positif", stimulus: "plage"},
  {category: "", movement: "approach",  genre: "feminin",  valence: "positif", stimulus: "prairie"},
  {category: "", movement: "approach",  genre: "feminin",  valence: "positif", stimulus: "promotion"},
  {category: "", movement: "approach",  genre: "feminin",  valence: "positif", stimulus: "prospérité"},
  {category: "", movement: "approach",  genre: "feminin",  valence: "positif", stimulus: "réussite"},
  {category: "", movement: "approach",  genre: "feminin",  valence: "positif", stimulus: "santé"},
  {category: "", movement: "approach",  genre: "feminin",  valence: "positif", stimulus: "satisfaction"},
  {category: "", movement: "approach",  genre: "feminin",  valence: "positif", stimulus: "sérénité"},
  {category: "", movement: "approach",  genre: "feminin",  valence: "positif", stimulus: "vacances"},
  {category: "", movement: "avoidance", genre: "masculin", valence: "negatif", stimulus: "abandon"},
  {category: "", movement: "avoidance", genre: "masculin", valence: "negatif", stimulus: "accident"},
  {category: "", movement: "avoidance", genre: "masculin", valence: "negatif", stimulus: "attentat"},
  {category: "", movement: "avoidance", genre: "masculin", valence: "negatif", stimulus: "bruit"},
  {category: "", movement: "avoidance", genre: "masculin", valence: "negatif", stimulus: "cadavre"},
  {category: "", movement: "avoidance", genre: "masculin", valence: "negatif", stimulus: "cancer"},
  {category: "", movement: "avoidance", genre: "masculin", valence: "negatif", stimulus: "cercueil"},
  {category: "", movement: "avoidance", genre: "masculin", valence: "negatif", stimulus: "couteau"},
  {category: "", movement: "avoidance", genre: "masculin", valence: "negatif", stimulus: "danger"},
  {category: "", movement: "avoidance", genre: "masculin", valence: "negatif", stimulus: "divorce"},
  {category: "", movement: "avoidance", genre: "masculin", valence: "negatif", stimulus: "doute"},
  {category: "", movement: "avoidance", genre: "masculin", valence: "negatif", stimulus: "échec"},
  {category: "", movement: "avoidance", genre: "masculin", valence: "negatif", stimulus: "enterrement"},
  {category: "", movement: "avoidance", genre: "masculin", valence: "negatif", stimulus: "étouffement"},
  {category: "", movement: "avoidance", genre: "masculin", valence: "negatif", stimulus: "handicap"},
  {category: "", movement: "avoidance", genre: "masculin", valence: "negatif", stimulus: "malheur"},
  {category: "", movement: "avoidance", genre: "masculin", valence: "negatif", stimulus: "meurtre"},
  {category: "", movement: "avoidance", genre: "masculin", valence: "negatif", stimulus: "poison"},
  {category: "", movement: "avoidance", genre: "masculin", valence: "negatif", stimulus: "rejet"},
  {category: "", movement: "avoidance", genre: "masculin", valence: "negatif", stimulus: "suicide"},
  {category: "", movement: "approach", genre: "feminin",  valence: "negatif", stimulus: "arme"},
  {category: "", movement: "approach", genre: "feminin",  valence: "negatif", stimulus: "blessure"},
  {category: "", movement: "approach", genre: "feminin",  valence: "negatif", stimulus: "bombe"},
  {category: "", movement: "approach", genre: "feminin",  valence: "negatif", stimulus: "douleur"},
  {category: "", movement: "approach", genre: "feminin",  valence: "negatif", stimulus: "erreur"},
  {category: "", movement: "approach", genre: "feminin",  valence: "negatif", stimulus: "fusillade"},
  {category: "", movement: "approach", genre: "feminin",  valence: "negatif", stimulus: "guerre"},
  {category: "", movement: "approach", genre: "feminin",  valence: "negatif", stimulus: "larmes"},
  {category: "", movement: "approach", genre: "feminin",  valence: "negatif", stimulus: "maladie"},
  {category: "", movement: "approach", genre: "feminin",  valence: "negatif", stimulus: "malchance"},
  {category: "", movement: "approach", genre: "feminin",  valence: "negatif", stimulus: "misère"},
  {category: "", movement: "approach", genre: "feminin",  valence: "negatif", stimulus: "mort"},
  {category: "", movement: "approach", genre: "feminin",  valence: "negatif", stimulus: "noyade"},
  {category: "", movement: "approach", genre: "feminin",  valence: "negatif", stimulus: "obscurité"},
  {category: "", movement: "approach", genre: "feminin",  valence: "negatif", stimulus: "ombre"},
  {category: "", movement: "approach", genre: "feminin",  valence: "negatif", stimulus: "panique"},
  {category: "", movement: "approach", genre: "feminin",  valence: "negatif", stimulus: "paresse"},
  {category: "", movement: "approach", genre: "feminin",  valence: "negatif", stimulus: "tombe"},
  {category: "", movement: "approach", genre: "feminin",  valence: "negatif", stimulus: "tumeur"},
  {category: "", movement: "approach", genre: "feminin",  valence: "negatif", stimulus: "torture"}
];

// vaast background images --------------------------------------------------------------,

var background = [
  "background/2.jpg",
  "background/3.jpg",
  "background/4.jpg",
  "background/5.jpg",
  "background/6.jpg"
];


// vaast stimuli sizes -------------------------------------------------------------------

var stim_sizes = [
  40,
  43,
  46,
  50,
  54
];

// Helper functions ---------------------------------------------------------------------
// next_position():
// Compute next position as function of current position and correct movement. Because
// participant have to press the correct response key, it always shows the correct
// position.
var next_position = function(){
  var current_position = jsPsych.data.getLastTrialData().values()[0].position;
  var current_movement = jsPsych.data.getLastTrialData().values()[0].movement;
  var position = current_position;

  if(current_movement == "approach") {
    position = position + 1;
  }

  if(current_movement == "avoidance") {
    position = position -1;
  }

  return(position)
}

// Saving blocks ------------------------------------------------------------------------
// Every function here send the data to keen.io. Because data sent is different according
// to trial type, there are differents function definition.

// init ---------------------------------------------------------------------------------
var saving_id = function(){

  prolific_id = jsPsych.data.getDataByTimelineNode("0.0-6.0").values()[0].responses.slice(7, -2);

  KeenAsync.ready(function(){
    var client = new KeenAsync({
      projectId: stream_projectID,
      writeKey: stream_writeKey,
    });
    if(data_stream) {
      client.recordEvent('prolific_id_stream', {
        session_id: jspsych_id,
        prolific_id: prolific_id,
        "user_agent": "${keen.user_agent}",
        "keen": {
          "addons": [{
            "name": "keen:ua_parser",
            "input": {
              "ua_string": "user_agent"
            },
            "output": "parsed_user_agent"
          }]
        }
      });
    }
  });
}

// vaast trial --------------------------------------------------------------------------
var saving_vaast_trial = function(){
  KeenAsync.ready(function(){
    var client = new KeenAsync({
      projectId: stream_projectID,
      writeKey: stream_writeKey
    });
    if(data_stream) {
      client.recordEvent('vaast_stream', {
        session_id: jspsych_id,
        prolific_id: prolific_id,
        vaast_trial_data: jsPsych.data.get().last(3).json()
      });
    }
  });
}

// iat trial ----------------------------------------------------------------------------
var saving_browser_events = function(completion) {
  KeenAsync.ready(function(){
    var client = new KeenAsync({
        projectId: stream_projectID,
        writeKey: stream_writeKey
      });
      if(data_stream) {
        client.recordEvent('meta_info_stream', {
          session_id: jspsych_id,
          event_data: jsPsych.data.getInteractionData().json(),
          completion: completion
        });
      }
  });
}
// saving blocks ------------------------------------------------------------------------
var save_id = {
    type: 'call-function',
    func: saving_id
}

var save_vaast_trial = {
    type: 'call-function',
    func: saving_vaast_trial
}


// EXPERIMENT ---------------------------------------------------------------------------
// initial instructions -----------------------------------------------------------------
var welcome = {
  type: "html-keyboard-response",
  stimulus:
    "<h1 class ='custom-title'> Bienvenue </h1>" +
    "<p class='instructions'> Nous vous remercions de prendre part à cette étude.<p>" +
    "<p class='instructions'> Au cours de cette étude, vous serez amené à compléter une tâche. " +
    "Nous rassemblerons des données concernant la façon dont vous aurez rempli cette tâche, " + 
    "mais aucune information personnelle permettant de vous identifier ne sera récoltée. </p>" +
    "<p class='instructions'> Étant donné que pour la récolte des données nous dépendons de " +
    "fournisseurs de services tiers, il se peut que les logiciels de blocage de publicités (ex. Ad-block) " +
    "interfère avec la récolte des données. Ainsi, nous vous demandons de bien vouloir désactiver de tels " +
    "logiciels du temps de cette étude. " +
    "<b>Si nous ne sommes pas en mesure de récolter vos données, nous ne pourrons pas vous " +
    "récompenser pour votre participation</b>. </p>" +
    "<p class='instructions'>Pour toute question au sujet de cette étude, veuillez " +
    "contacter xxxxx.</p>" +
    "<p class = 'continue-instructions'>Appuyez sur <strong>espace</strong> pour commencer l'étude.</p>",
  choices: [32]
};

var welcome_2 = {
  type: "html-button-response",
  stimulus:
    "<p class='instructions'>Avant de continuer, sachez que cette étude devrait prendre " +
    "environ 15 minutes.</p>",
  choices: ['I do have enough time', 'I do not have enough time'],
};

var not_enough_time_to_complete = {
    type: 'html-button-response',
    stimulus: '<p>Please come back later to take part in this experiment.</p>',
    choices: ['Go back to Prolific Academic'],
};

var redirect_to_prolific = {
    type: 'call-function',
    func: function() {
        window.location.href = "https://www.prolific.ac/";
        jsPsych.pauseExperiment();
    }
}

var if_not_enough_time = {
    timeline: [not_enough_time_to_complete, redirect_to_prolific],
    conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.getLastTrialData().values()[0].button_pressed;
        if(data == 1){
            return true;
        } else {
            return false;
        }
    }
}

var welcome_3 = {
  type: "html-keyboard-response",
  stimulus:
    "<p class='instructions'>We will now proceed to a test of your connection to our server. " +
    " If this test fails, please check your Internet connection and make sure you have " +
    " actually disabled your ad-blocking software.</p>" +
    "<p class='instructions'>This test should last less than 5 seconds.</p>" +
    "<p class = 'continue-instructions'>Appuyez sur <strong>espace</strong> pour continuer.</p>",
  choices: [32]
};

// ping keen.io -------------------------------------------------------------------------

var keen_ping = {
    type: 'keen-ping',
    loader_image: 'media/loading.gif',
    stream_name: 'ping_stream',
    write_key: stream_writeKey,
    project_id: stream_projectID,
    session_id: jspsych_id,
    choices: [32]
  }


// Switching to fullscreen --------------------------------------------------------------
var fullscreen_trial = {
  type: 'fullscreen',
  message:  '<p>Pour prendre part à cette étude, votre navigateur doit être mis en plein écran.</p>',
  button_label: 'Passer en plein écran',
  fullscreen_mode: true
}


// Prolific identification --------------------------------------------------------------
var prolific_pid = jsPsych.data.getURLVariable('PROLIFIC_PID');

if(prolific_pid == null) {prolific_pid = "";}

var prolific_id = {
 type: 'survey-text',
  questions: [{prompt: "You are almost ready. Please confirm your Prolific ID:", value: prolific_pid}],
  button_label: "Start the study"
};

// Initial instructions -----------------------------------------------------------------
// First slide --------------------------------------------------------------------------
var instructions = {
  type: "html-keyboard-response",
  stimulus:
    "<p>Vous êtes maintenant sur le point de commencer l'étude. Dans cette étude, vous allez prendre part à une tâche. </p>" +
    "<p class = 'continue-instructions'>Appyez sur <strong>espace</strong> pour commencer la tâche.</p>",
  choices: [32]
};


// VAAST --------------------------------------------------------------------------------
var vaast_instructions_1 = {
  type: "html-keyboard-response",
  stimulus:
    "<h1 class ='custom-title'> Task 1 </h1>" +
    "<p class='instructions'>In the first task, just like in a videogame, you" +
    " will act within the environment presented below.</p>" +
    "<p class='instructions'> You will be able to move forward and backward" +
    " using the arrow keys on your keyboard.</p>" +
    "<p class='instructions'>Some pictures will appear within the" +
    " environment and you will have to approach them or avoid them" +
    " according to the category they belong to.</p>" +
    "<br>" +
    "<img src = 'media/vaast-background.png'>" +
    "<br>" +
    "<p class = 'continue-instructions'>Appuyez sur <strong>espace</strong> pour continuer. </p>",
  choices: [32]
};

var vaast_instructions_2 = {
  type: "html-keyboard-response",
  stimulus:
    "<h1 class ='custom-title'> Task 1 </h1>" +
    "<p class='instructions'>In this task, you will have to respond using arrow keys on your " +
    "keyboard. For every trial, a picture will appear and you will " +
    "have to press as quickly as possible either the \"approach\" key or the " +
    "\"avoid\" key (see below).</p>" +
    "<p class='instructions'>Note: you will have to press the correct key twice " +
    "to pass the trial.</p>" +
    "<br>" +
    "<img src = 'media/keyboard-vaastt.png'>" +
    "<br>" +
    "<p class = 'continue-instructions'>Appuyez sur <strong>espace</strong> pour continuer.</p>",
  choices: [32]
};

var vaast_instructions_3 = {
  type: "html-keyboard-response",
  stimulus:
    "<h1 class ='custom-title'> Task 1 </h1>" +
    "<p class='instructions'>Your instructions are to <span class='vaast-movement-instructions'>approach " +
    " ###-related pictures</span> and to <span class='vaast-movement-instructions'>avoid " +
    " ###-related pictures</span>. You can see examples of stimuli below.</p>" +
    "<p class='instructions'>It is very important to remember which action you will" +
    " have to perform for each category. You need this information to complete the " +
    "task successfully. Please make sure that you will remember these instructions before "+
    "you start the training block of this task.</p>" +
     "<table align='center' class='vaast-table-instruction'>" +
       "<tr>" +
         "<th>Approach</th>" +
         "<th>Avoid</th>" +
       "</tr>" +
     "</table>" +
    "<p class = 'continue-instructions'>Press <strong>enter</strong> to start training.</p>",
  choices: [13]
};



// Creating a trial ---------------------------------------------------------------------

var vaast_fixation = {
  type: 'vaast-fixation',
  fixation: "+",
  font_size:  324,
  position: 2,
  background_images: background
}

var vaast_first_step = {
  type: 'vaast-text',
  stimulus: jsPsych.timelineVariable('stimulus'),
  position: 2,
  background_images: background,
  font_sizes:  stim_sizes,
  approach_key: "uparrow",
  avoidance_key: "downarrow",
  stim_movement: jsPsych.timelineVariable('movement'),
  html_when_wrong: '<span style="color: red; font-size: 80px">&times;</span>',
  force_correct_key_press: true,
  display_feedback: true,
  response_ends_trial: true
}

var vaast_second_step = {
  type: 'vaast-text',
  position: next_position,
  stimulus: jsPsych.timelineVariable('stimulus'),
  background_images: background,
  font_sizes:  stim_sizes,
  approach_key: "uparrow",
  avoidance_key: "downarrow",
  stim_movement: jsPsych.timelineVariable('movement'),
  html_when_wrong: '<span style="color: red; font-size: 80px">&times;</span>',
  force_correct_key_press: true,
  display_feedback: true,
  response_ends_trial: true
}

var vaast_third_step = {
  type: 'vaast-text',
  position: next_position,
  stimulus: jsPsych.timelineVariable('stimulus'),
  background_images: background,
  font_sizes:  stim_sizes,
  stim_movement: jsPsych.timelineVariable('movement'),
  response_ends_trial: false,
  trial_duration: 650
}

// VAAST training block -----------------------------------------------------------------

var vaast_training_block = {
  timeline: [vaast_fixation, vaast_first_step, vaast_second_step, vaast_third_step, save_vaast_trial],
  timeline_variables: vaast_stim,
  sample: {
    size: 16,
    type: 'without-replacement',
  },
  randomize_order: true,
};

var vaast_test_block = {
  timeline: [vaast_fixation, vaast_first_step, vaast_second_step, vaast_third_step, save_vaast_trial],
  timeline_variables: vaast_stim,
  repetitions: 1,
  randomize_order: true
};

var vaast_instructions_5 = {
  type: "html-keyboard-response",
  stimulus:
    "<h1 class ='custom-title'> Task 1 </h1>" +
    "<p class='instructions'>The training block is now over. </p>" +
    "<p class='instructions'>You will now have to repeat this task for 10 new blocks." +
    " The instructions are the same as in the block you just completed." +
    "</p>" +
    "<p class = 'continue-instructions'>Press <strong>space</strong> to start block n°1.</p>",
  choices: [32]
};

var vaast_block_instructions = function(n)  {
  var n_prev = n - 1;

  var block_instructions = {
    type: "html-keyboard-response",
    stimulus:
      "<p>The block n°" + n_prev +" is over. " +
      "<p class = 'continue-instructions'>Press <strong>space</strong> to start block n°"+ n +".</p>",
    choices: [32]
  };

  return(block_instructions)
}

var vaast_instructions_6 = {
  type: "html-keyboard-response",
  stimulus:
    "<h1 class ='custom-title'> Task 1 </h1>" +
    "<p class='instructions'>This part of the experiment is now over. " +
    "You will now have to complete a different task.</p>" +
    "<p class = 'continue-instructions'>Press <strong>space</strong> to start Task 2.</p>",
  choices: [32]
};

// end fullscreen -----------------------------------------------------------------------

var fullscreen_trial_exit = {
  type: 'fullscreen',
  fullscreen_mode: false
}

// end insctruction ---------------------------------------------------------------------

var ending = {
  type: "html-keyboard-response",
  stimulus:
    "<p class='instructions'>This study is now over.<p>" +
    "<p class='instructions'>In this study, we were interested in the effect of math " +
    "approach or avoidance training. Literature in psychology shows that this kind of " +
    "training can be used to create new attitudes toward a specific object. Approaching " +
    "something make us see it more positively. </p>" +
    "<p class='instructions'>Implicit self-association toward mathematic refers to " +
    "one’s ability to be quicker in a timed sorting task when “self” and “math” are " +
    "associated to a same response key instead of different ones. This implicit " +
    "self-association can be used to predict behavior such as mathematic engagement and " +
    "literature that it is lower among women. Here, we wanted to see if we could change " +
    "the implicit self-association toward math using an approach training. </p>" +
    "<p class='instructions'>For more information to this topic, please refer to " +
    "Kawakami, Cifa, Steele, Phils, and Dovidio (2008)’s scientific paper, and if " +
    "you still have any inquiries, please mail cedric.batailler@univ-grenoble-alpes.fr</p>" +
    "<p class = 'continue-instructions'>Press <strong>space</strong> to continue.</p>",
  choices: [32]
};

var ending_2 = {
  type: "html-keyboard-response",
  trial_duration: 2000,
  stimulus:
    "<p class='instructions'>You will now be redirected to Prolific Academic's website " +
    "within seconds.<p>" +
    "<p class='instructions'>If you are not redirected, please click <a href='" +
    atob("aHR0cHM6Ly93d3cucHJvbGlmaWMuYWMvc3VibWlzc2lvbnMvY29tcGxldGU/Y2M9Rks0VUZFSlI=") +
    "'>here</a>.<p>",
  choices: jsPsych.NO_KEYS
};
// procedure ----------------------------------------------------------------------------
// Initialize timeline ------------------------------------------------------------------
var timeline = [];

// welcome
timeline.push(welcome,
              welcome_2,
              if_not_enough_time,
              welcome_3);

// keen.io connexion test
timeline.push(keen_ping);

// fullscreen
timeline.push(fullscreen_trial);

// prolific verification
timeline.push(prolific_id,
              save_id);

// initial instructions
timeline.push(instructions);

// vaast - instructions
timeline.push(vaast_instructions_1,
              vaast_instructions_2,
              vaast_instructions_3);

// vaast - blocks
timeline.push(vaast_training_block,
              vaast_instructions_5,
              vaast_test_block,
              vaast_block_instructions(2),
              vaast_test_block,
              vaast_block_instructions(3),
              vaast_test_block,
              vaast_block_instructions(4),
              vaast_test_block,
              vaast_block_instructions(5),
              vaast_test_block,
              vaast_block_instructions(6),
              vaast_test_block,
              vaast_block_instructions(7),
              vaast_test_block,
              vaast_block_instructions(8),
              vaast_test_block,
              vaast_block_instructions(9),
              vaast_test_block,
              vaast_block_instructions(10),
              vaast_test_block,
              );

// vaast - end
timeline.push(vaast_instructions_6);

// ending
timeline.push(fullscreen_trial_exit);
timeline.push(ending,
              ending_2);

// Launch experiment --------------------------------------------------------------------
// preloading ---------------------------------------------------------------------------
// Preloading. For some reason, it appears auto-preloading fails, so using it manually.
// In principle, it should have ended when participants starts VAAST procedure (which)
// contains most of the image that have to be pre-loaded.
var loading_gif               = ["media/loading.gif"]
var vaast_instructions_images = ["media/vaast-background.png", "media/keyboard-vaastt.png", "media/art_exemple.bmp", "media/math_exemple.bmp"];
var vaast_stim_filename       = vaast_stim.map(function(a){return(a.stimulus)});
var vaast_bg_filename         = background;

jsPsych.pluginAPI.preloadImages(loading_gif);
jsPsych.pluginAPI.preloadImages(vaast_instructions_images);
jsPsych.pluginAPI.preloadImages(vaast_stim_filename);
jsPsych.pluginAPI.preloadImages(vaast_bg_filename);

// timeline initiaization ---------------------------------------------------------------

if(is_compatible) {
  jsPsych.init({
      timeline: timeline,
      on_interaction_data_update: function() {
        saving_browser_events(completion = false);
      },
    on_finish: function() {
        saving_browser_events(completion = true);
        window.location.href = "https://www.prolific.ac/submissions/complete?cc=6KIE4JZ6";
    }
  });
}
