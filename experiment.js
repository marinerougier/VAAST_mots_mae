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
        "<p>Désolé, cette étude n'est pas compatible avec votre navigateur.</p>" +
        "<p>Veuillez relancer cette page avec un navigateur compatible (ex. " +
        "Chrome ou Firefox).</p>",
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

var vaast_instructions = jsPsych.randomization.sampleWithoutReplacement(["approach_masc", "approach_fem"], 1)[0];

var jspsych_id  = jsPsych.randomization.randomID();

// VAAST --------------------------------------------------------------------------------
// VAAST variables ----------------------------------------------------------------------

var movement_masc = undefined;
var movement_fem = undefined;
var gender_to_approach = undefined;
var gender_to_avoid = undefined;

switch(vaast_instructions) {
  case "approach_masc":
    movement_masc = "approach";
    movement_fem = "avoidance";
    gender_to_approach = "masculins";
    gender_to_avoid = "féminins";
    break;

  case "approach_fem":
    movement_masc = "avoidance";
    movement_fem = "approach";
    gender_to_approach = "féminins";
    gender_to_avoid = "masculins";
    break;
}

// VAAST stimuli ------------------------------------------------------------------------
// vaast image stimuli ------------------------------------------------------------------

var vaast_stim_training = [
  {movement: movement_masc, gender: "masculin", valence: "positif", stimulus: "bienfait"},
  {movement: movement_masc, gender: "masculin", valence: "positif", stimulus: "paradis"},
  {movement: movement_masc, gender: "masculin", valence: "positif", stimulus: "repos"},
  {movement: movement_fem,  gender: "feminin",  valence: "positif", stimulus: "détente"},
  {movement: movement_fem,  gender: "feminin",  valence: "positif", stimulus: "sagesse"},
  {movement: movement_fem,  gender: "feminin",  valence: "positif", stimulus: "tranquillité"},
  {movement: movement_masc, gender: "masculin", valence: "negatif", stimulus: "assassinat"},
  {movement: movement_masc, gender: "masculin", valence: "negatif", stimulus: "décès"},
  {movement: movement_masc, gender: "masculin", valence: "negatif", stimulus: "massacre"},
  {movement: movement_fem,  gender: "feminin",  valence: "negatif", stimulus: "culpabilité"},
  {movement: movement_fem,  gender: "feminin",  valence: "negatif", stimulus: "souffrance"},
  {movement: movement_fem,  gender: "feminin",  valence: "negatif", stimulus: "violence"}
]

var vaast_stim = [
  {movement: movement_masc, gender: "masculin", valence: "positif", stimulus: "accomplissement"},
  {movement: movement_masc, gender: "masculin", valence: "positif", stimulus: "anniversaire"},
  {movement: movement_masc, gender: "masculin", valence: "positif", stimulus: "avantage"},
  {movement: movement_masc, gender: "masculin", valence: "positif", stimulus: "bébé"},
  {movement: movement_masc, gender: "masculin", valence: "positif", stimulus: "bonheur"},
  {movement: movement_masc, gender: "masculin", valence: "positif", stimulus: "cadeau"},
  {movement: movement_masc, gender: "masculin", valence: "positif", stimulus: "câlin"},
  {movement: movement_masc, gender: "masculin", valence: "positif", stimulus: "charme"},
  {movement: movement_masc, gender: "masculin", valence: "positif", stimulus: "diplôme"},
  {movement: movement_masc, gender: "masculin", valence: "positif", stimulus: "espoir"},
  {movement: movement_masc, gender: "masculin", valence: "positif", stimulus: "humour"},
  {movement: movement_masc, gender: "masculin", valence: "positif", stimulus: "mariage"},
  {movement: movement_masc, gender: "masculin", valence: "positif", stimulus: "partage"},
  {movement: movement_masc, gender: "masculin", valence: "positif", stimulus: "plaisir"},
  {movement: movement_masc, gender: "masculin", valence: "positif", stimulus: "remerciement"},
  {movement: movement_masc, gender: "masculin", valence: "positif", stimulus: "rire"},
  {movement: movement_masc, gender: "masculin", valence: "positif", stimulus: "soleil"},
  {movement: movement_masc, gender: "masculin", valence: "positif", stimulus: "sourire"},
  {movement: movement_masc, gender: "masculin", valence: "positif", stimulus: "succès"},
  {movement: movement_masc, gender: "masculin", valence: "positif", stimulus: "triomphe"},
  {movement: movement_fem,  gender: "feminin" , valence: "positif", stimulus: "amitié"},
  {movement: movement_fem,  gender: "feminin",  valence: "positif", stimulus: "fête"},
  {movement: movement_fem,  gender: "feminin",  valence: "positif", stimulus: "fleur"},
  {movement: movement_fem,  gender: "feminin",  valence: "positif", stimulus: "gloire"},
  {movement: movement_fem,  gender: "feminin",  valence: "positif", stimulus: "grandeur"},
  {movement: movement_fem,  gender: "feminin",  valence: "positif", stimulus: "joie"},
  {movement: movement_fem,  gender: "feminin",  valence: "positif", stimulus: "justice"},
  {movement: movement_fem,  gender: "feminin",  valence: "positif", stimulus: "lumière"},
  {movement: movement_fem,  gender: "feminin",  valence: "positif", stimulus: "naissance"},
  {movement: movement_fem,  gender: "feminin",  valence: "positif", stimulus: "paix"},
  {movement: movement_fem,  gender: "feminin",  valence: "positif", stimulus: "passion"},
  {movement: movement_fem,  gender: "feminin",  valence: "positif", stimulus: "plage"},
  {movement: movement_fem,  gender: "feminin",  valence: "positif", stimulus: "prairie"},
  {movement: movement_fem,  gender: "feminin",  valence: "positif", stimulus: "promotion"},
  {movement: movement_fem,  gender: "feminin",  valence: "positif", stimulus: "prospérité"},
  {movement: movement_fem,  gender: "feminin",  valence: "positif", stimulus: "réussite"},
  {movement: movement_fem,  gender: "feminin",  valence: "positif", stimulus: "santé"},
  {movement: movement_fem,  gender: "feminin",  valence: "positif", stimulus: "satisfaction"},
  {movement: movement_fem,  gender: "feminin",  valence: "positif", stimulus: "sérénité"},
  {movement: movement_fem,  gender: "feminin",  valence: "positif", stimulus: "vacances"},
  {movement: movement_masc, gender: "masculin", valence: "negatif", stimulus: "abandon"},
  {movement: movement_masc, gender: "masculin", valence: "negatif", stimulus: "accident"},
  {movement: movement_masc, gender: "masculin", valence: "negatif", stimulus: "attentat"},
  {movement: movement_masc, gender: "masculin", valence: "negatif", stimulus: "bruit"},
  {movement: movement_masc, gender: "masculin", valence: "negatif", stimulus: "cadavre"},
  {movement: movement_masc, gender: "masculin", valence: "negatif", stimulus: "cancer"},
  {movement: movement_masc, gender: "masculin", valence: "negatif", stimulus: "cercueil"},
  {movement: movement_masc, gender: "masculin", valence: "negatif", stimulus: "couteau"},
  {movement: movement_masc, gender: "masculin", valence: "negatif", stimulus: "danger"},
  {movement: movement_masc, gender: "masculin", valence: "negatif", stimulus: "divorce"},
  {movement: movement_masc, gender: "masculin", valence: "negatif", stimulus: "doute"},
  {movement: movement_masc, gender: "masculin", valence: "negatif", stimulus: "échec"},
  {movement: movement_masc, gender: "masculin", valence: "negatif", stimulus: "enterrement"},
  {movement: movement_masc, gender: "masculin", valence: "negatif", stimulus: "étouffement"},
  {movement: movement_masc, gender: "masculin", valence: "negatif", stimulus: "handicap"},
  {movement: movement_masc, gender: "masculin", valence: "negatif", stimulus: "malheur"},
  {movement: movement_masc, gender: "masculin", valence: "negatif", stimulus: "meurtre"},
  {movement: movement_masc, gender: "masculin", valence: "negatif", stimulus: "poison"},
  {movement: movement_masc, gender: "masculin", valence: "negatif", stimulus: "rejet"},
  {movement: movement_masc, gender: "masculin", valence: "negatif", stimulus: "suicide"},
  {movement: movement_fem,  gender: "feminin",  valence: "negatif", stimulus: "arme"},
  {movement: movement_fem,  gender: "feminin",  valence: "negatif", stimulus: "blessure"},
  {movement: movement_fem,  gender: "feminin",  valence: "negatif", stimulus: "bombe"},
  {movement: movement_fem,  gender: "feminin",  valence: "negatif", stimulus: "douleur"},
  {movement: movement_fem,  gender: "feminin",  valence: "negatif", stimulus: "erreur"},
  {movement: movement_fem,  gender: "feminin",  valence: "negatif", stimulus: "fusillade"},
  {movement: movement_fem,  gender: "feminin",  valence: "negatif", stimulus: "guerre"},
  {movement: movement_fem,  gender: "feminin",  valence: "negatif", stimulus: "larme"},
  {movement: movement_fem,  gender: "feminin",  valence: "negatif", stimulus: "maladie"},
  {movement: movement_fem,  gender: "feminin",  valence: "negatif", stimulus: "malchance"},
  {movement: movement_fem,  gender: "feminin",  valence: "negatif", stimulus: "misère"},
  {movement: movement_fem,  gender: "feminin",  valence: "negatif", stimulus: "mort"},
  {movement: movement_fem,  gender: "feminin",  valence: "negatif", stimulus: "noyade"},
  {movement: movement_fem,  gender: "feminin",  valence: "negatif", stimulus: "obscurité"},
  {movement: movement_fem,  gender: "feminin",  valence: "negatif", stimulus: "ombre"},
  {movement: movement_fem,  gender: "feminin",  valence: "negatif", stimulus: "panique"},
  {movement: movement_fem,  gender: "feminin",  valence: "negatif", stimulus: "paresse"},
  {movement: movement_fem,  gender: "feminin",  valence: "negatif", stimulus: "tombe"},
  {movement: movement_fem,  gender: "feminin",  valence: "negatif", stimulus: "tumeur"},
  {movement: movement_fem,  gender: "feminin",  valence: "negatif", stimulus: "torture"}
];

// vaast background images --------------------------------------------------------------,

var background = [
  "background/2.jpg",
  "background/2.jpg",
  "background/4.jpg",
  "background/6.jpg",
  "background/6.jpg"
];


// vaast stimuli sizes -------------------------------------------------------------------

var stim_sizes = [
  40,
  42,
  46,
  52,
  54
];

// Helper functions ---------------------------------------------------------------------
// next_position():
// Compute next position as function of current position and correct movement. Because
// participant have to press the correct response key, it always shows the correct
// position.
var next_position_training = function(){
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

var next_position = function(){
  var current_position = jsPsych.data.getLastTrialData().values()[0].position;
  var last_keypress = jsPsych.data.getLastTrialData().values()[0].key_press;

  var approach_key = jsPsych.pluginAPI.convertKeyCharacterToKeyCode('y');
  var avoidance_key = jsPsych.pluginAPI.convertKeyCharacterToKeyCode('n');

  var position = current_position;

  if(last_keypress == approach_key) {
    position = position + 1;
  }

  if(last_keypress == avoidance_key) {
    position = position -1;
  }

  return(position)
}

// Saving blocks ------------------------------------------------------------------------
// Every function here send the data to keen.io. Because data sent is different according
// to trial type, there are differents function definition.

// init ---------------------------------------------------------------------------------
var saving_id = function(){

  KeenAsync.ready(function(){
    var client = new KeenAsync({
      projectId: stream_projectID,
      writeKey: stream_writeKey,
    });
    if(data_stream) {
      client.recordEvent('stream_browser_info', {
        session_id: jspsych_id,
        experimental_condition: vaast_instructions,
        "ip_address" : "${keen.ip}",
        "user_agent": "${keen.user_agent}",
        res_height: window.screen.availHeight,
        res_width: window.screen.availWidth,
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
      client.recordEvent('stream_vaast_trial', {
        session_id: jspsych_id,
        experimental_condition: vaast_instructions,
        vaast_trial_data: jsPsych.data.get().last(3).json()
      });
    }
  });
}

// demographic logging ------------------------------------------------------------------
var saving_demographics = function(){
  KeenAsync.ready(function(){
    var client = new KeenAsync({
      projectId: stream_projectID,
      writeKey: stream_writeKey
    });
    if(data_stream) {
      client.recordEvent('stream_demographics', {
        session_id: jspsych_id,
        experimental_condition: vaast_instructions,
        demographics_data: jsPsych.data.get().last(4).json()
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
        client.recordEvent('stream_browser_event', {
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

var save_demographics = {
    type: 'call-function',
    func: saving_demographics
}
// EXPERIMENT ---------------------------------------------------------------------------
// initial instructions -----------------------------------------------------------------
var welcome = {
  type: "html-keyboard-response",
  stimulus:
    "<h1 class ='custom-title'> Bienvenue </h1>" +
    "<p class='instructions'> Nous vous remercions de prendre part à cette étude.<p>" +
    "<p class='instructions'> Au cours de cette étude, vous serez amené·e à compléter une tâche. " +
    "Nous rassemblerons des données concernant la façon dont vous aurez rempli cette tâche, " + 
    "mais aucune information personnelle permettant de vous identifier ne sera récoltée. </p>" +
    "<p class='instructions'> Étant donné que pour la récolte des données nous dépendons de " +
    "fournisseurs de services tiers, il se peut que les logiciels de blocage de publicités (ex. Ad-block) " +
    "interfèrent avec la récolte des données. Ainsi, nous vous demandons de bien vouloir désactiver de tels " +
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
  choices: ['J\'ai le temps', 'Je n\'ai pas le temps'],
};

var not_enough_time_to_complete = {
    type: 'html-button-response',
    stimulus: '<p>Veuillez revenir plus tard pour réaliser cette étude.</p>',
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
    "<p class='instructions'>Nous allons maintenant tester votre connexion à notre serveur. " +
    "En cas d'échec, veuillez vérifier votre connexion internet et vous assurer de bien avoir " +
    "désactivé vos bloqueurs de publicités.</p>" +
    "<p class='instructions'>Ce test ne devrait pas prendre plus de 5 secondes.</p>" +
    "<p class ='continue-instructions'>Appuyez sur <strong>espace</strong> pour continuer.</p>",
  choices: [32]
};

// ping keen.io -------------------------------------------------------------------------

var keen_ping = {
    type: 'keen-ping',
    loader_image: 'media/loading.gif',
    stream_name: 'stream_ping',
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
    "<h1 class ='custom-title'> Tâche du Jeu Vidéo</h1>" +
    "<p class='instructions'>Au cours de cette étude, comme dans un jeu vidéo, vous serez " +
    "dans un environnement dans lequel vous pourrez avancer ou reculer. L'environnement " +
    "dans lequel vous pourrez vous déplacer est présenté ci-dessous.</p>" +
    "<br>" +
    "<img src = 'media/vaast-background.png'>" +
    "<br>" +
    "<p class = 'continue-instructions'>Appuyez sur <strong>espace</strong> pour continuer. </p>",
  choices: [32]
};

var vaast_instructions_2 = {
  type: "html-keyboard-response",
  stimulus:
    "<h1 class ='custom-title'> Tâche du Jeu Vidéo </h1>" +
    "<p class='instructions'>Des mots vous seront présentés dans cette environnement. " +
    "Votre tâche consistera à avancer ou à reculer en fonction du genre (masculin ou féminin) " +
    "du mot qui vous sera présenté (des instructions plus précises seront données juste après)." +
    "<p class='instructions'>Vous pourrez vous déplacer dans l'environnement en utilisant les " +
    "touches Y, H et N de votre clavier, comme indiqué ci-dessous. </p>" +
    "<br>" +
    "<img src = 'media/keyboard-vaastt.png'>" +
    "<br>" +
    "<p class = 'continue-instructions'>Appuyez sur <strong>espace</strong> pour continuer.</p>",
  choices: [32]
};

var vaast_instructions_3 = {
  type: "html-keyboard-response",
  stimulus:
    "<h1 class ='custom-title'> Tâche du Jeu Vidéo </h1>" +
    "<p class='instructions'>Au début de chaque essai, vous allez voir apparaître au centre de l'écran " +
    "un point de fixation (o). Ce symbole indique que vous devez appuyer sur la touche DEPART (touche H) " +
    "pour continuer.</p>" +
    "<p class='instructions'>Vous allez alors voir apparaître au centre de l'écran le symbole \"+\", suivi d'un mot.</p>" +
    "<p class='instructions'>Votre tâche consistera à vous déplacer vers l'avant " +
    "ou vers l'arrière en appuyant une seule fois le plus rapidement possible sur " +
    "la touche \"avancer\" (Y) ou sur la touche \"reculer\" (N)." +
    "<p class='instructions'>Merci également d'utiliser uniquement l'index de votre main " +
    "dominante pour toutes ces actions.</p>" +
     "<p class = 'continue-instructions'>Appuyez sur <strong>espace</strong> pour continuer.</p>",
  choices: [32]
};

var vaast_instructions_4 = {
  type: "html-keyboard-response",
  stimulus:
    "<h1 class ='custom-title'> Tâche du Jeu Vidéo </h1>" +
    "<p class='instructions'>Vous devrez : " +
    "<ul class='instructions'>" +
    "<li><strong>ALLER VERS les mots " + gender_to_approach + " (en appuyant sur Y)</strong></li>" +
    "<li><strong> VOUS ÉLOIGNER des mots " + gender_to_avoid + " (en appuyant sur N)</strong></li>" +
    "</ul>" +
    "<p class='instructions'>Il est très important de vous souvenir de ces consignes pour pouvoir " +
    "réaliser la tâche correctement. Il est également EXTRÊMEMENT important d'essayer de répondre " +
    "<strong>le plus rapidement et le plus exactement possible</strong>." +
    "<p class ='instructions'>Vous allez commencer par une phase d'entraînement.</p>" +
    "<p class ='instructions'><u>ATTENTION</u> : nous vous signalerons vos erreurs uniquement " +
    "dans la phase d'entraînement, donc relisez et mémorisez bien les consignes ci-dessus." +
    "<p class = 'continue-instructions'>Appuyez sur <strong>entrée</strong> pour " +
    "commencer l'entraînement.</p>",
  choices: [13]
};


var vaast_instructions_5 = {
  type: "html-keyboard-response",
  stimulus:
    "<h1 class ='custom-title'> Tâche du Jeu Vidéo </h1>" +
    "<p class='instructions'>L'entraînement est maintenant terminé. </p>" +
    "<p class='instructions'><u>ATTENTION</u> : vous n'aurez plus de messages pour signaler vos erreurs.</p>" +
    "<p class='instructions'>Donc rappelez-vous bien, vous devez :</p>" +
    "<ul class='instructions'>" +
     "<li>" +
      "<strong>ALLER VERS les mots " + gender_to_approach + " (en appuyant sur Y)</strong>" +
     "</li>" +
     "<li>" +
      "<strong>VOUS ÉLOIGNER des mots " + gender_to_avoid + " (en appuyant sur N)</strong>" +
     "</li>" +
    "</ul>" +
    "<p class = 'continue-instructions'>Appuyez sur <strong>espace</strong> pour commencer la tâche.</p>",
  choices: [32]
};


var vaast_instructions_6 = {
  type: "html-keyboard-response",
  stimulus:
    "<h1 class ='custom-title'> Task 1 </h1>" +
    "<p class='instructions'>This part of the experiment is now over. " +
    "You will now have to complete a different task.</p>" +
    "<p class = 'continue-instructions'>Press <strong>space</strong> to start Task 2.</p>",
  choices: [32]
};

// Creating a trial ---------------------------------------------------------------------
// Note: vaast_start trial is a dirty hack which uses a regular vaast trial. The correct
// movement is approach and the key corresponding to approach is "h", thus making the
// participant press "h" to start the trial. 
var vaast_start = {
  type: 'vaast-text',
  stimulus: "o",
  position: 2,
  background_images: background,
  font_sizes:  stim_sizes,
  approach_key: "h",
  stim_movement: "approach",
  html_when_wrong: '<span style="color: red; font-size: 80px">&times;</span>',
  force_correct_key_press: true,
  display_feedback: true,
  response_ends_trial: true
}

var vaast_fixation = {
  type: 'vaast-fixation',
  fixation: "+",
  font_size:  46,
  position: 2,
  background_images: background
}

var vaast_first_step_training = {
  type: 'vaast-text',
  stimulus: jsPsych.timelineVariable('stimulus'),
  position: 2,
  background_images: background,
  font_sizes:  stim_sizes,
  approach_key: "y",
  avoidance_key: "n",
  stim_movement: jsPsych.timelineVariable('movement'),
  html_when_wrong: '<span style="color: red; font-size: 80px">&times;</span>',
  force_correct_key_press: true,
  display_feedback: true,
  response_ends_trial: true
}

var vaast_second_step_training = {
  type: 'vaast-text',
  position: next_position_training,
  stimulus: jsPsych.timelineVariable('stimulus'),
  background_images: background,
  font_sizes:  stim_sizes,
  stim_movement: jsPsych.timelineVariable('movement'),
  response_ends_trial: false,
  trial_duration: 650
}

var vaast_first_step = {
  type: 'vaast-text',
  stimulus: jsPsych.timelineVariable('stimulus'),
  position: 2,
  background_images: background,
  font_sizes:  stim_sizes,
  approach_key: "y",
  avoidance_key: "n",
  stim_movement: jsPsych.timelineVariable('movement'),
  html_when_wrong: '<span style="color: red; font-size: 80px">&times;</span>',
  force_correct_key_press: false,
  display_feedback: false,
  response_ends_trial: true
}

var vaast_second_step = {
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
  timeline: [
    vaast_start,
    vaast_fixation,
    vaast_first_step_training,
    vaast_second_step_training,
    save_vaast_trial
  ],
  timeline_variables: vaast_stim_training,
  repetitions: 1,
  randomize_order: true,
  data: {
    phase:    "training",
    stimulus: jsPsych.timelineVariable('stimulus'),
    movement: jsPsych.timelineVariable('movement'),
    gender:   jsPsych.timelineVariable('gender'),
  }
};

var vaast_test_block = {
  timeline: [
    vaast_start,
    vaast_fixation,
    vaast_first_step,
    vaast_second_step,
    save_vaast_trial
  ],
  timeline_variables: vaast_stim,
  repetitions: 1,
  randomize_order: true,
  data: {
    phase:    "test",
    stimulus: jsPsych.timelineVariable('stimulus'),
    movement: jsPsych.timelineVariable('movement'),
    gender:   jsPsych.timelineVariable('gender'),
  }
};

var vaast_instructions_6 = {
  type: "html-keyboard-response",
  stimulus:
    "<h1 class ='custom-title'> Task 1 </h1>" +
    "<p class='instructions'>This part of the experiment is now over. " +
    "You will now have to complete a different task.</p>" +
    "<p class = 'continue-instructions'>Press <strong>space</strong> to start Task 2.</p>",
  choices: [32]
};

// Demographic block ---------------------------------------------------------------------
// Demographic variables
var mcq_sexe_options = ["Homme", "Femme"];
var mcq_handedness_options = ["Droitier·e", "Gaucher·e"];
var mcq_frenchLvl_options = ["Langue maternelle", "Plutôt très bon", "Plutôt bon", "Moyen", "Plutôt mauvais", "Plutôt très mauvais"];

// ---------------------------------------------------------------------------------------
var demographic_data_0 = {
  type: 'html-keyboard-response',
  stimulus:
    "<p>Cette étude est presque terminée, nous allons maintenant vous demander de répondre à quelques questions " +
    "concernant : votre âge, votre sexe, votre latéralité, et votre niveau de maîtrise de la " +
    "langue française. </p>" +
    "<p class = 'continue-instructions'>Appuyez sur <strong>espace</strong> pour continuer.</p>",
  choices: [32]
};

var demographic_data_1 = {
  type: 'survey-text',
  questions: [{prompt: "Quel âge avez-vous ?"}],
  button_label: "Passer à la question suivante"
};

var demographic_data_2 = {
  type: 'survey-multi-choice',
  questions: [{prompt : "Quel est votre sexe ?", options: mcq_sexe_options}],
  button_label: "Passer à la question suivante"
};

var demographic_data_3 = {
  type: 'survey-multi-choice',
  questions: [{prompt : "Quel est votre latéralité ?", options: mcq_handedness_options}],
  button_label: "Passer à la question suivante"
};

var demographic_data_4 = {
  type: 'survey-multi-choice',
  questions: [{prompt : "Quel est votre niveau de français ?", options: mcq_frenchLvl_options}],
  button_label: "Passer à la suite"
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
    "<p class='instructions'>Cette étude est maintenant terminée. Merci pour votre participation.<p>" +
    "<p class='instructions'>Cette étude nous permettait d’étudier les tendances à l’approche et à " +
    "l’évitement. La littérature en psychologie sociale a pu mettre en évidence le fait que le simple " +
    "fait de présenter certains concepts entraînait de manière spontanée des tendances à s’approcher ou " +
    "s'éloigner de ces concepts. Par exemple, la vision d’une glace facilitera l’exécution de mouvement d’approche." +
    "</p>" +
    "<p class='instructions'>Dans cette expérience, nous nous intéressons à délimiter certaines " +
    "conditions nécessaires à l’apparition de ces tendances spontanées. </p>" +
    "<p class = 'continue-instructions'>Appuyez sur <strong>espace</strong> pour continuer.</p>",
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
timeline.push(save_id);

// initial instructions
timeline.push(instructions);

// vaast - instructions
timeline.push(vaast_instructions_1,
              vaast_instructions_2,
              vaast_instructions_3,
              vaast_instructions_4);

// vaast - blocks
timeline.push(vaast_training_block,
              vaast_instructions_5,
              vaast_test_block);

// vaast - end
timeline.push(vaast_instructions_6);

// demographic info
timeline.push(demographic_data_0,
              demographic_data_1,
              demographic_data_2,
              demographic_data_3,
              demographic_data_4,
              save_demographics);

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
var vaast_instructions_images = ["media/vaast-background.png", "media/keyboard-vaastt.png"];
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
        window.location.href = "16ff0d6a46e619cf8deefd84e3cda0137733cca215f955fc73923a1241d908fa.html";
    }
  });
}
