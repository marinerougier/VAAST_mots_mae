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
// -> Any key à remplacer dans l'iat et dans le check de connection
//
// safari exclusion ---------------------------------------------------------------------
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

var vaast_approach_training = jsPsych.randomization.sampleWithoutReplacement(["maths", "arts"], 1)[0];
; // either "arts" or "maths

var iat_self    = jsPsych.randomization.sampleWithoutReplacement(["left", "right"], 1)[0];; // either "left" or "right"
var iat_maths_1 = jsPsych.randomization.sampleWithoutReplacement(["left", "right"], 1)[0];; // either "left" or "right"

var jspsych_id  = jsPsych.randomization.randomID();
var prolific_pid = jsPsych.data.getURLVariable('PROLIFIC_PID');

// check if URL prolific_pid exists and set prolific_pid to "" if it does not

if(prolific_pid == null) {prolific_pid = "";}

// VAAST --------------------------------------------------------------------------------
// VAAST variables ----------------------------------------------------------------------

var arts_movement  = undefined;
var maths_movement = undefined;

var approach_cat   = undefined;
var avoidance_cat  = undefined;

switch(vaast_approach_training) {
  case "maths":
    arts_movement  = "avoidance";
    maths_movement = "approach";
    approach_cat   = "math";
    avoidance_cat  = "art";
    break;

  case "arts":
    arts_movement = "approach";
    maths_movement = "avoidance";
    approach_cat   = "art";
    avoidance_cat  = "math";
    break;
}

// VAAST stimuli ------------------------------------------------------------------------
// vaast image stimuli ------------------------------------------------------------------

var vaast_stim = [
  {stimulus: 'stimuli/arts_01.jpg',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_02.jpg',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_03.jpg',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_04.jpg',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_05.jpg',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_06.jpg',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_07.jpg',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_08.jpg',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_09.jpg',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_10.jpg',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_11.jpg',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_12.jpg',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_13.jpg',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_14.jpg',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_15.jpg',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_16.jpg',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_17.jpg',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_18.jpg',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_19.jpg',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_20.jpg',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_21.jpg',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_22.jpg',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_23.jpg',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_24.jpg',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/maths_01.jpg', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_02.jpg', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_03.jpg', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_04.jpg', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_05.jpg', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_06.jpg', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_07.jpg', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_08.jpg', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_09.jpg', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_10.jpg', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_11.jpg', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_12.jpg', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_13.jpg', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_14.jpg', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_15.jpg', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_16.jpg', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_17.jpg', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_18.jpg', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_19.jpg', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_20.jpg', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_21.jpg', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_22.jpg', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_23.jpg', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_24.jpg', category: "maths", movement: maths_movement}
];

// vaast background images --------------------------------------------------------------

var background = [
  "background/2.jpg",
  "background/3.jpg",
  "background/4.jpg",
  "background/5.jpg",
  "background/6.jpg"
];


// vaast stimuli sizes -------------------------------------------------------------------

var stim_sizes = [
  282,
  302,
  324,
  350,
  382
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
        vaast_approach_training: vaast_approach_training,
        iat_self_side: iat_self,
        iat_maths_1_side: iat_maths_1,
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
        vaast_approach_training: vaast_approach_training,
        iat_self_side: iat_self,
        iat_maths_1_side: iat_maths_1,
        vaast_trial_data: jsPsych.data.get().last(3).json()
      });
    }
  });
}

// iat trial ----------------------------------------------------------------------------
var saving_iat_trial = function(){
  KeenAsync.ready(function(){
    var client = new KeenAsync({
      projectId: stream_projectID,
      writeKey: stream_writeKey
    });
    if(data_stream) {
      client.recordEvent('iat_stream', {
        session_id: jspsych_id,
        prolific_id: prolific_id,
        vaast_approach_training: vaast_approach_training,
        iat_self_side: iat_self,
        iat_maths_1_side: iat_maths_1,
        iat_trial_data: jsPsych.data.get().last().json()
      });
    }
  });
}

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

var save_iat_trial = {
    type: 'call-function',
    func: saving_iat_trial
}


// iat sampling function ----------------------------------------------------------------
var sample_n_iat = function(list, n) {
  list = jsPsych.randomization.sampleWithReplacement(list, n);
  list = jsPsych.randomization.shuffleNoRepeats(list);

  return(list);
}

// EXPERIMENT ---------------------------------------------------------------------------




// initial instructions -----------------------------------------------------------------
var welcome = {
  type: "html-keyboard-response",
  stimulus:
    "<h1 class ='custom-title'> Welcome </h1>" +
    "<p class='instructions'>Thank you for participating in this study.<p>" +
    "<p class='instructions'>During this study, you will have to complete two different tasks. We " +
    " will gather data related to how you complete them, but " +
    "no personally identifying information will be collected.</p>" +
    "<p class='instructions'>Because we rely on third party services to gather data, ad-blocking " +
    "software might interfere with data collection. Therefore, please  " +
    "disable your ad-blocking software during this study. " +
    "<b>If we cannot collect your data, we will not be able to reward you for " +
    "your participation</b>. </p>" +
    "<p class='instructions'>If you have any question related to this research, please " +
    "e-mail cedric.batailler@univ-grenoble-alpes.fr.</p>" +
    "<p class = 'continue-instructions'>Press <strong>space</strong> to start the study.</p>",
  choices: [32]
};

var welcome_2 = {
  type: "html-button-response",
  stimulus:
    "<p class='instructions'>Before going further, please note that this study should take " +
    "40 minutes to complete.</p>",
  choices: ['I have enough time', 'I do not have enough time'],
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
    "<p class = 'continue-instructions'>Press <strong>space</strong> to continue.</p>",
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
  message:  '<p>To take part in this study, your browser needs to be set to fullscreen.</p>',
  button_label: 'Switch to fullscreen',
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
    "<p>You are now about to start the study. In this study, you will engage in different tasks. </p>" +
    "<p class = 'continue-instructions'>Press <strong>space</strong> to start Task 1.</p>",
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
    "<p class = 'continue-instructions'>Press <strong>space</strong> to" +
    " continue.</p>",
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
    "<p class = 'continue-instructions'>Press <strong>space</strong> to continue.</p>",
  choices: [32]
};

var vaast_instructions_3 = {
  type: "html-keyboard-response",
  stimulus:
    "<h1 class ='custom-title'> Task 1 </h1>" +
    "<p class='instructions'>Your instructions are to <span class='vaast-movement-instructions'>approach " +
     approach_cat + "-related pictures</span> and to <span class='vaast-movement-instructions'>avoid " +
     avoidance_cat + "-related pictures</span>. You can see examples of stimuli below.</p>" +
    "<p class='instructions'>It is very important to remember which action you will" +
    " have to perform for each category. You need this information to complete the " +
    "task successfully. Please make sure that you will remember these instructions before "+
    "you start the training block of this task.</p>" +
     "<table align='center' class='vaast-table-instruction'>" +
       "<tr>" +
         "<th><img src='media/" + approach_cat + "_exemple.bmp'></th>" +
         "<th><img src='media/" + avoidance_cat + "_exemple.bmp'></th>" +
       "</tr>" +
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
  type: 'vaast-image',
  stimulus: jsPsych.timelineVariable('stimulus'),
  position: 2,
  background_images: background,
  stim_sizes:  stim_sizes,
  approach_key: "uparrow",
  avoidance_key: "downarrow",
  stim_movement: jsPsych.timelineVariable('movement'),
  html_when_wrong: '<span style="color: red; font-size: 80px">&times;</span>',
  force_correct_key_press: true,
  display_feedback: true,
  response_ends_trial: true
}

var vaast_second_step = {
  type: 'vaast-image',
  position: next_position,
  stimulus: jsPsych.timelineVariable('stimulus'),
  background_images: background,
  stim_sizes:  stim_sizes,
  approach_key: "uparrow",
  avoidance_key: "downarrow",
  stim_movement: jsPsych.timelineVariable('movement'),
  html_when_wrong: '<span style="color: red; font-size: 80px">&times;</span>',
  force_correct_key_press: true,
  display_feedback: true,
  response_ends_trial: true
}

var vaast_third_step = {
  type: 'vaast-image',
  position: next_position,
  stimulus: jsPsych.timelineVariable('stimulus'),
  background_images: background,
  stim_sizes:  stim_sizes,
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

// IAT ----------------------------------------------------------------------------------
// IAT variable initialization ----------------------------------------------------------
// Correct responses -----------------------
var self_side      = undefined;
var other_side     = undefined;
var maths_side_1st = undefined;
var arts_side_1st  = undefined;
var maths_side_2nd = undefined;
var arts_side_2nd  = undefined;

// Label -----------------------------------
var block_1_left_label          = undefined;
var block_1_right_label         = undefined;
var block_2_left_label          = undefined;
var block_2_right_label         = undefined;
var block_3_left_label_top      = undefined;
var block_3_right_label_top     = undefined;
var block_3_left_label_bottom   = undefined;
var block_3_right_label_bottom  = undefined;
var block_4_left_label          = undefined;
var block_4_right_label         = undefined;
var block_5_left_label_top      = undefined;
var block_5_right_label_top     = undefined;
var block_5_left_label_bottom   = undefined;
var block_5_right_label_bottom  = undefined;

switch(iat_self) {
  case "left":
        self_side               = "left";
        other_side              = "right";

        block_1_left_label      = "SELF";
        block_1_right_label     = "OTHER";
        block_3_left_label_top  = "SELF";
        block_3_right_label_top = "OTHER";
        block_5_left_label_top  = "SELF";
        block_5_right_label_top = "OTHER";

    break;

  case "right":
        self_side               = "right";
        other_side              = "left";

        block_1_left_label      = "OTHER";
        block_1_right_label     = "SELF";
        block_3_left_label_top  = "OTHER";
        block_3_right_label_top = "SELF";
        block_5_left_label_top  = "OTHER";
        block_5_right_label_top = "SELF";

    break;
}

switch(iat_maths_1) {
  case "left":
      maths_side_1st = "left";
      arts_side_1st  = "right";
      maths_side_2nd = "right";
      arts_side_2nd  = "left";

    block_2_left_label          = "MATH";
    block_2_right_label         = "ART";
    block_3_left_label_bottom   = "MATH";
    block_3_right_label_bottom  = "ART";
    block_4_left_label          = "ART";
    block_4_right_label         = "MATH";
    block_5_left_label_bottom   = "ART";
    block_5_right_label_bottom  = "MATH";

    break;

  case "right":
        maths_side_1st = "right";
        arts_side_1st  = "left";
        maths_side_2nd = "left";
        arts_side_2nd  = "right";

    block_2_left_label          = "ART";
    block_2_right_label         = "MATH";
    block_3_left_label_bottom   = "ART";
    block_3_right_label_bottom  = "MATH";
    block_4_left_label          = "MATH";
    block_4_right_label         = "ART";
    block_5_left_label_bottom   = "MATH";
    block_5_right_label_bottom  = "ART";

    break;
}

// iat instructions ---------------------------------------------------------------------

var iat_instructions_1 = {
  type: "html-keyboard-response",
  stimulus:
    "<h1 class ='custom-title'> Task 2 </h1>" +
    "<p class='instructions'>In this task, you will be asked to sort words" +
    " into groups as fast as you can using the keyboard. The following is a" +
    " list of category labels and the items that belong to each of these categories." +
    "</p>" +
    "<table>" +
      "<tr>" +
        "<th width='200px'>Category</th>" +
        "<th align='left'>Item</th>" +
      "</tr>" +
      "<tr>" +
        "<td>SELF</td>" +
        "<td align='left'>I, me, my, mine</td>" +
      "</tr>" +
      "<tr>" +
        "<td>OTHER</td>" +
        "<td align='left'>they, theirs, them, themselves</td>" +
      "</tr>" +
      "<tr>" +
        "<td>ART</td>" +
        "<td align='left'>poetry, literature, theater, symphony</td>" +
      "</tr>" +
      "<tr>" +
        "<td>MATH</td>" +
        "<td align='left'>calculus, equation, geometry, statistics</td>" +
      "</tr>" +
    "</table>" +
    "<h3 class='instructions'>Instructions</h3>" +
    "<ul class='instructions'>" +
      "<li>Keep fingers on the <span class='key'>E</span> and <span class='key'>I</span> keys to enable rapid response.</li>" +
      "<li>Labels at the top will tell you which items go with each key.</li>" +
      "<li>Go as fast as you can.</li>" +
    "</ul>" +
    "<p>&nbsp;</p>" +
    "<p class = 'continue-instructions'>Press <span class='key'>space</span>" +
    " to continue.</p>",
  choices: [32]
};

// iat block instructions ---------------------------------------------------------------

var iat_instructions_block_1 = {
  type: 'html-keyboard-response',
  stimulus:
  "<div style='position: absolute; top: 18%; left: 20%'> <p>Press " +
    "<span class='key'>E</span> for:<br><span class='iat-category self-other'>" +
    block_1_left_label  +
    "</span></p>" +
    "</div>" +
    "<div style='position: absolute; top: 18%; right: 20%'><p>Press " +
    "<span class='key'>I</span> for:<br><span class='iat-category self-other'>" +
    block_1_right_label +
    "</span></p>" +
  "</div>" +
  "<div class='iat-instructions' style='position: relative; top: 42%, width:80%;'> " +
    "<p class='instructions'>" +
      "In the next task, you will have to put your middle or index fingers on the <span class='key'>E</span> " +
      "and <span class='key'>I</span> keys of your keyboard. Words representing the categories at the top " +
      "will appear one-by-one in the middle of the screen. " +
      "When the item belongs to a category on the left, press the <span class='key'>E</span> key; when the item " +
      "belongs to a category on the right, press the <span class='key'>I</span> key. Items belong to only one category. " +
      "If you make an error, an X will appear – fix the error by hitting the other key." +
    "</p>" +
    "<p class='instructions'>" +
      "This is a timed sorting task. GO AS FAST AS YOU CAN while making as few mistakes as possible. " +
    "</p>" +
  "</div> " +
  "<br>" +
  "<p class = 'continue-instructions'>Press <span class='key'>space bar</span> when you are ready to start.</p>",
  choices: [32]
};

var iat_instructions_block_2 = {
  type: 'html-keyboard-response',
  stimulus:
  "<div style='position: absolute; top: 18%; left: 20%'> <p>Press " +
    "<span class='key'>E</span> for:<br><span class='iat-category maths-arts'>" +
    block_2_left_label  +
    "</span></p>" +
    "</div>" +
    "<div style='position: absolute; top: 18%; right: 20%'><p>Press " +
    "<span class='key'>I</span> for:<br><span class='iat-category maths-arts'>" +
    block_2_right_label +
    "</span></p>" +
  "</div>" +
  "<div class='iat-instructions' style='position: relative; top: 42%, width:80%;'> " +
    "<p class='instructions'>" +
      "See above, the categories have changed. The items for sorting have changed as well. " +
      "The rules, however, are the same." +
    "</p>" +
    "<p class='instructions'>" +
      "When the items belong to a category to the left, press the <span class='key'>E</span> key; " +
      "when the item belongs to a category on the right, press the <span class='key'>I</span> key. " +
      "Items belong to only one category. " +
      "An X will appear after an error – fix the error by hitting the other key. " +
      "GO AS FAST AS YOU CAN. " +
    "</p>" +
  "</div> " +
  "<br>" +
  "<p class = 'continue-instructions'>Press <span class='key'>space bar</span> when you are ready to start.</p>",
  choices: [32]
};

var iat_instructions_block_3 = {
  type: 'html-keyboard-response',
  stimulus:
  "<div style='position: absolute; top: 18%; left: 20%'><p>" +
    "Press <span class='key'>E</span> for:<br> " +
    "<span class='iat-category self-other'>" + block_3_left_label_top  + "</span>" +
    "<br>or<br>" +
    "<span class='iat-category maths-arts'>" + block_3_left_label_bottom + "</span>" +
  "</p></div>" +
  "<div style='position: absolute; top: 18%; right: 20%'><p>" +
    "Press <span class='key'>I</span>  for:<br>" +
    "<span class='iat-category self-other'>" + block_3_right_label_top + "</span>" +
    "<br>or<br>" +
    "<span class='iat-category maths-arts'>" + block_3_right_label_bottom  + "</span>" +
  "</p></div>" +
  "<div class='iat-instructions' style='position: relative; top: 42%'> "+
    "<p class='instructions'>" +
    "See above, the four categories you saw separately now appear together. " +
    "Remember, each item belongs to only one group." +
    "</p>" +
    "<p class='instructions'>" +
    "The <span class='maths-arts'>green</span> and <span class='self-other'>black</span> labels " +
    "and items may help to identify the appropriate category. " +
    "Use the <span class='key'>E</span> and <span class='key'>I</span> keys to categorize " +
    "items into the four groups left and right, and correct errors by hitting the other key." +
    "</p>" +
  "</div> " +
  "<br />" +
  "<p class = 'continue-instructions'>Press <span class='key'>space bar</span> when you are ready to start.</p>",
  choices: [32]
};

var iat_instructions_block_3_test = {
  type: 'html-keyboard-response',
  stimulus:
  "<div style='position: absolute; top: 18%; left: 20%'><p>" +
    "Press <span class='key'>E</span> for:<br> " +
    "<span class='iat-category self-other'>" + block_3_left_label_top  + "</span>" +
    "<br>or<br>" +
    "<span class='iat-category maths-arts'>" + block_3_left_label_bottom + "</span>" +
  "</p></div>" +
  "<div style='position: absolute; top: 18%; right: 20%'><p>" +
    "Press <span class='key'>I</span>  for:<br>" +
    "<span class='iat-category self-other'>" + block_3_right_label_top + "</span>" +
    "<br>or<br>" +
    "<span class='iat-category maths-arts'>" + block_3_right_label_bottom  + "</span>" +
  "</p></div>" +
  "<div class='iat-instructions' style='position: relative; top: 42%'> "+
    "<p class='instructions'>" +
    "Sort the same four categories again. Remember to go as fast as you can while " +
    "making as few mistakes as possible." +
    "</p>" +
    "<p class='instructions'>" +
    "The <span class='maths-arts'>green</span> and <span class='self-other'>black</span> labels " +
    "and items may help to identify the appropriate category. " +
    "Use the <span class='key'>E</span> and <span class='key'>I</span> keys to categorize " +
    "items into the four groups left and right, and correct errors by hitting the other key." +
    "</p>" +
  "</div> " +
  "<br />" +
  "<p class = 'continue-instructions'>Press <span class='key'>space bar</span> when you are ready to start.</p>",
  choices: [32]
};

var iat_instructions_block_4 = {
  type: 'html-keyboard-response',
  stimulus:
  "<div style='position: absolute; top: 18%; left: 20%'> <p>Press " +
    "<span class='key'>E</span> for:<br><span class='iat-category maths-arts'>" +
    block_4_left_label  +
    "</span></p>" +
    "</div>" +
    "<div style='position: absolute; top: 18%; right: 20%'><p>Press " +
    "<span class='key'>I</span> for:<br><span class='iat-category maths-arts'>" +
    block_4_right_label +
    "</span></p>" +
  "</div>" +
  "<div class='iat-instructions' style='position: relative; top: 42%, width:80%;'> " +
    "<p class='instructions'>" +
      "Notice above, there are only two categories and they have switched positions. " +
      "The concept that was previously on the left is now on the right, and the concept " +
      "that was on the right is now on the left. Practice this new configuration."  +
    "</p>" +
    "<p class='instructions'>" +
      "Use the <span class='key'>E</span> and <span class='key'>I</span> keys " +
      "to categorize items left and right, and correct error " +
      "by hitting the other key." +
    "</p>" +
  "</div> " +
  "<br>" +
  "<p class = 'continue-instructions'>Press <span class='key'>space bar</span> when you are ready to start.</p>",
  choices: [32]
};

var iat_instructions_block_5 = {
  type: 'html-keyboard-response',
  stimulus:
  "<div style='position: absolute; top: 18%; left: 20%'><p>" +
    "Press <span class='key'>E</span> for:<br> " +
    "<span class='iat-category self-other'>" + block_5_left_label_top  + "</span>" +
    "<br>or<br>" +
    "<span class='iat-category maths-arts'>" + block_5_left_label_bottom + "</span>" +
  "</p></div>" +
  "<div style='position: absolute; top: 18%; right: 20%'><p>" +
    "Press <span class='key'>I</span>  for:<br>" +
    "<span class='iat-category self-other'>" + block_5_right_label_top + "</span>" +
    "<br>or<br>" +
    "<span class='iat-category maths-arts'>" + block_5_right_label_bottom  + "</span>" +
  "</p></div>" +
  "<div class='iat-instructions' style='position: relative; top: 42%'> "+
    "<p class='instructions'>" +
    "See above, the four categories now appear together in a new configuration. " +
    "Remember, each item belongs to only one group." +
    "</p>" +
    "<p class='instructions'>" +
      "Use the <span class='key'>E</span> and <span class='key'>I</span> keys " +
      "to categorize items into the four groups left and right, and correct error " +
      "by hitting the other key." +
    "</p>" +
  "</div> " +
  "<br />" +
  "<p class = 'continue-instructions'>Press <span class='key'>space bar</span> when you are ready to start.</p>",
  choices: [32]
};

var iat_instructions_block_5_test = {
  type: 'html-keyboard-response',
  stimulus:
  "<div style='position: absolute; top: 18%; left: 20%'><p>" +
    "Press <span class='key'>E</span> for:<br> " +
    "<span class='iat-category self-other'>" + block_5_left_label_top  + "</span>" +
    "<br>or<br>" +
    "<span class='iat-category maths-arts'>" + block_5_left_label_bottom + "</span>" +
  "</p></div>" +
  "<div style='position: absolute; top: 18%; right: 20%'><p>" +
    "Press <span class='key'>I</span>  for:<br>" +
    "<span class='iat-category self-other'>" + block_5_right_label_top + "</span>" +
    "<br>or<br>" +
    "<span class='iat-category maths-arts'>" + block_5_right_label_bottom  + "</span>" +
  "</p></div>" +
  "<div class='iat-instructions' style='position: relative; top: 42%'> "+
    "<p class='instructions'>" +
    "Sort the same four categories again. Remember to go as fast as you can while " +
    "making as few mistakes as possible." +
    "</p>" +
    "<p class='instructions'>" +
    "The <span class='maths-arts'>green</span> and <span class='self-other'>black</span> labels " +
    "and items may help to identify the appropriate category. " +
    "Use the <span class='key'>E</span> and <span class='key'>I</span> keys to categorize " +
    "items into the four groups left and right, and correct errors by hitting the other key." +
    "</p>" +
  "</div> " +
  "<br />" +
  "<p class = 'continue-instructions'>Press <span class='key'>space bar</span> when you are ready to start.</p>",
  choices: [32]
};

// iat - stimuli ------------------------------------------------------------------------

var iat_block_1_stim = [
  {category: "self-other", stimulus: "I",          stim_key_association: self_side},
  {category: "self-other", stimulus: "me",         stim_key_association: self_side},
  {category: "self-other", stimulus: "my",         stim_key_association: self_side},
  {category: "self-other", stimulus: "mine",       stim_key_association: self_side},
  {category: "self-other", stimulus: "they",       stim_key_association: other_side},
  {category: "self-other", stimulus: "theirs",     stim_key_association: other_side},
  {category: "self-other", stimulus: "them",       stim_key_association: other_side},
  {category: "self-other", stimulus: "themselves", stim_key_association: other_side}
]

var iat_block_2_stim = [
  {category: "maths-arts", stimulus: "calculus",   stim_key_association: maths_side_1st},
  {category: "maths-arts", stimulus: "equation",   stim_key_association: maths_side_1st},
  {category: "maths-arts", stimulus: "geometry",   stim_key_association: maths_side_1st},
  {category: "maths-arts", stimulus: "statistics", stim_key_association: maths_side_1st},
  {category: "maths-arts", stimulus: "poetry",     stim_key_association: arts_side_1st},
  {category: "maths-arts", stimulus: "literature", stim_key_association: arts_side_1st},
  {category: "maths-arts", stimulus: "theater",    stim_key_association: arts_side_1st},
  {category: "maths-arts", stimulus: "symphony",   stim_key_association: arts_side_1st}
]

var iat_block_3_stim = [
  {category: "self-other", stimulus: "I",          stim_key_association: self_side},
  {category: "self-other", stimulus: "me",         stim_key_association: self_side},
  {category: "self-other", stimulus: "my",         stim_key_association: self_side},
  {category: "self-other", stimulus: "mine",       stim_key_association: self_side},
  {category: "self-other", stimulus: "they",       stim_key_association: other_side},
  {category: "self-other", stimulus: "theirs",     stim_key_association: other_side},
  {category: "self-other", stimulus: "them",       stim_key_association: other_side},
  {category: "self-other", stimulus: "themselves", stim_key_association: other_side},
  {category: "maths-arts", stimulus: "calculus",   stim_key_association: maths_side_1st},
  {category: "maths-arts", stimulus: "equation",   stim_key_association: maths_side_1st},
  {category: "maths-arts", stimulus: "geometry",   stim_key_association: maths_side_1st},
  {category: "maths-arts", stimulus: "statistics", stim_key_association: maths_side_1st},
  {category: "maths-arts", stimulus: "poetry",     stim_key_association: arts_side_1st},
  {category: "maths-arts", stimulus: "literature", stim_key_association: arts_side_1st},
  {category: "maths-arts", stimulus: "theater",    stim_key_association: arts_side_1st},
  {category: "maths-arts", stimulus: "symphony",   stim_key_association: arts_side_1st}
]

var iat_block_4_stim = [
  {category: "maths-arts", stimulus: "calculus",   stim_key_association: maths_side_2nd},
  {category: "maths-arts", stimulus: "equation",   stim_key_association: maths_side_2nd},
  {category: "maths-arts", stimulus: "geometry",   stim_key_association: maths_side_2nd},
  {category: "maths-arts", stimulus: "statistics", stim_key_association: maths_side_2nd},
  {category: "maths-arts", stimulus: "poetry",     stim_key_association: arts_side_2nd},
  {category: "maths-arts", stimulus: "literature", stim_key_association: arts_side_2nd},
  {category: "maths-arts", stimulus: "theater",    stim_key_association: arts_side_2nd},
  {category: "maths-arts", stimulus: "symphony",   stim_key_association: arts_side_2nd}
]

var iat_block_5_stim = [
  {category: "self-other", stimulus: "I",          stim_key_association: self_side},
  {category: "self-other", stimulus: "me",         stim_key_association: self_side},
  {category: "self-other", stimulus: "my",         stim_key_association: self_side},
  {category: "self-other", stimulus: "mine",       stim_key_association: self_side},
  {category: "self-other", stimulus: "they",       stim_key_association: other_side},
  {category: "self-other", stimulus: "theirs",     stim_key_association: other_side},
  {category: "self-other", stimulus: "them",       stim_key_association: other_side},
  {category: "self-other", stimulus: "themselves", stim_key_association: other_side},
  {category: "maths-arts", stimulus: "calculus",   stim_key_association: maths_side_2nd},
  {category: "maths-arts", stimulus: "equation",   stim_key_association: maths_side_2nd},
  {category: "maths-arts", stimulus: "geometry",   stim_key_association: maths_side_2nd},
  {category: "maths-arts", stimulus: "statistics", stim_key_association: maths_side_2nd},
  {category: "maths-arts", stimulus: "poetry",     stim_key_association: arts_side_2nd},
  {category: "maths-arts", stimulus: "literature", stim_key_association: arts_side_2nd},
  {category: "maths-arts", stimulus: "theater",    stim_key_association: arts_side_2nd},
  {category: "maths-arts", stimulus: "symphony",   stim_key_association: arts_side_2nd}
]


// iat - block 1 ------------------------------------------------------------------------
var iat_block_1 = {
  timeline: [
    {
      type: 'iat-html',
      stimulus: jsPsych.timelineVariable('stimulus'),
      category: jsPsych.timelineVariable('category'),
      label_category: ['self-other'],
      stim_key_association: jsPsych.timelineVariable('stim_key_association'),
      html_when_wrong: '<span style="color: red; font-size: 80px">&times;</span>',
      force_correct_key_press: true,
      display_feedback: true,
      left_category_label:  [block_1_left_label],
      right_category_label: [block_1_right_label],
      response_ends_trial: true,
      data: {
        iat_block: 1,
        iat_type: 'practice',
        iat_label_left:  block_1_left_label,
        iat_label_right: block_1_right_label
      }
    },
    save_iat_trial
  ],
  timeline_variables: sample_n_iat(iat_block_1_stim,20)
}

// iat - block 2 ------------------------------------------------------------------------
var iat_block_2 = {
  timeline: [
    {
      type: 'iat-html',
      stimulus: jsPsych.timelineVariable('stimulus'),
      category: jsPsych.timelineVariable('category'),
      label_category: ['maths-arts'],
      stim_key_association: jsPsych.timelineVariable('stim_key_association'),
      html_when_wrong: '<span style="color: red; font-size: 80px">&times;</span>',
      force_correct_key_press: true,
      display_feedback: true,
      left_category_label:  [block_2_left_label],
      right_category_label: [block_2_right_label],
      response_ends_trial: true,
      data: {
        iat_block: 2,
        iat_type: 'practice',
        iat_label_left:  block_2_left_label,
        iat_label_right: block_2_right_label
         }
    },
    save_iat_trial
  ],
  timeline_variables: sample_n_iat(iat_block_2_stim, 20)
}

// iat - block 3 (training) -------------------------------------------------------------
var iat_block_3_training = {
  timeline: [
    {
      type: 'iat-html',
      stimulus: jsPsych.timelineVariable('stimulus'),
      category: jsPsych.timelineVariable('category'),
      label_category: ['self-other', 'maths-arts'],
      stim_key_association: jsPsych.timelineVariable('stim_key_association'),
      html_when_wrong: '<span style="color: red; font-size: 80px">&times;</span>',
      force_correct_key_press: true,
      display_feedback: true,
      left_category_key:  'E',
      left_category_label:  [block_3_left_label_top, block_3_left_label_bottom],
      right_category_label: [block_3_right_label_top, block_3_right_label_bottom],
      response_ends_trial: true,
      data: {
        iat_block: 3,
        iat_type: 'practice',
        iat_label_left:  block_3_left_label_top  + "-" + block_3_left_label_bottom,
        iat_label_right: block_3_right_label_top + "-" + block_3_right_label_bottom
         }
    },
    save_iat_trial
  ],
  timeline_variables: sample_n_iat(iat_block_3_stim, 20)
}

// iat - block 3 (test) -----------------------------------------------------------------
var iat_block_3_test = {
  timeline: [
    {
      type: 'iat-html',
      stimulus: jsPsych.timelineVariable('stimulus'),
      category: jsPsych.timelineVariable('category'),
      label_category: ['self-other', 'maths-arts'],
      stim_key_association: jsPsych.timelineVariable('stim_key_association'),
      html_when_wrong: '<span style="color: red; font-size: 80px">&times;</span>',
      force_correct_key_press: true,
      display_feedback: true,
      left_category_label:  [block_3_left_label_top, block_3_left_label_bottom],
      right_category_label: [block_3_right_label_top, block_3_right_label_bottom],
      response_ends_trial: true,
      data: {
        iat_type: 'test',
        iat_block: 3,
        iat_label_left:  block_3_left_label_top  + "-" + block_3_left_label_bottom,
        iat_label_right: block_3_right_label_top + "-" + block_3_right_label_bottom
         }
    },
    save_iat_trial
  ],
  timeline_variables: sample_n_iat(iat_block_3_stim, 74)
}

// iat - block 4 ------------------------------------------------------------------------
var iat_block_4 = {
  timeline: [
    {
      type: 'iat-html',
      stimulus: jsPsych.timelineVariable('stimulus'),
      category: jsPsych.timelineVariable('category'),
      stim_key_association: jsPsych.timelineVariable('stim_key_association'),
      label_category: ['maths-arts'],
      html_when_wrong: '<span style="color: red; font-size: 80px">&times;</span>',
      force_correct_key_press: true,
      display_feedback: true,
      left_category_label:  [block_4_left_label],
      right_category_label: [block_4_right_label],
      response_ends_trial: true,
      data: {
        iat_block: 4,
        iat_type: 'practice',
        iat_label_left:  block_4_left_label,
        iat_label_right: block_4_right_label
         }
    },
    save_iat_trial
  ],
  timeline_variables: sample_n_iat(iat_block_4_stim, 20)
}

// iat - block 5 (training) -------------------------------------------------------------
var iat_block_5_training = {
  timeline: [
    {
      type: 'iat-html',
      stimulus: jsPsych.timelineVariable('stimulus'),
      category: jsPsych.timelineVariable('category'),
      stim_key_association: jsPsych.timelineVariable('stim_key_association'),
      label_category: ['self-other', 'maths-arts'],
      html_when_wrong: '<span style="color: red; font-size: 80px">&times;</span>',
      force_correct_key_press: true,
      display_feedback: true,
      left_category_label:  [block_5_left_label_top, block_5_left_label_bottom],
      right_category_label: [block_5_right_label_top, block_5_right_label_bottom],
      response_ends_trial: true,
      data: {
        iat_block: 5,
        iat_type: 'practice',
        iat_label_left:  block_5_left_label_top  + "-" + block_5_left_label_bottom,
        iat_label_right: block_5_right_label_top + "-" + block_5_right_label_bottom
         }
    },
    save_iat_trial
  ],
  timeline_variables: sample_n_iat(iat_block_5_stim, 20)
}

// iat - block 5 (test) -----------------------------------------------------------------
var iat_block_5_test = {
  timeline: [
    {
      type: 'iat-html',
      stimulus: jsPsych.timelineVariable('stimulus'),
      category: jsPsych.timelineVariable('category'),
      label_category: ['self-other', 'maths-arts'],
      stim_key_association: jsPsych.timelineVariable('stim_key_association'),
      html_when_wrong: '<span style="color: red; font-size: 80px">X</span>',
      bottom_instructions: '<p>If you press the wrong key, a red X will appear. Press the other key to continue</p>',
      force_correct_key_press: true,
      display_feedback: true,
      left_category_label:  [block_5_left_label_top, block_5_left_label_bottom],
      right_category_label: [block_5_right_label_top, block_5_right_label_bottom],
      response_ends_trial: true,
      data: {
        iat_block: 5,
        iat_type: 'test',
        iat_label_left:  block_5_left_label_top  + "-" + block_5_left_label_bottom,
        iat_label_right: block_5_right_label_top + "-" + block_5_right_label_bottom
         }
    },
    save_iat_trial
  ],
  timeline_variables: sample_n_iat(iat_block_5_stim, 74)
}

//
var iat_instructions_2 = {
  type: "html-keyboard-response",
  stimulus:
    "<h1 class ='custom-title'> Task 2 </h1>" +
    "<p class='instructions'>This part of the experiment is now over. " +
    "<p class = 'continue-instructions'>Press <strong>space</strong> to continue.</p>",
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

// iat - initial instructions
timeline.push(iat_instructions_1)

timeline.push(iat_instructions_block_1, //iat_block_1,
              iat_instructions_block_2, //iat_block_2,
              iat_instructions_block_3, //iat_block_3_training,
              iat_instructions_block_3_test, //iat_block_3_test,
              iat_instructions_block_4, //iat_block_4,
              iat_instructions_block_5, //iat_block_5_training,
              iat_instructions_block_5_test, //iat_block_5_test);
);
// iat - ending
timeline.push(iat_instructions_2);

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
