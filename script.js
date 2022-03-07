
var speechRecognition = window.webkitSpeechRecognition

var recognition = new speechRecognition()

var textbox = $("#textbox")

var instructions = $("#instructions")

var content = ''

recognition.continuous = true



recognition.onstart = function() {

 instructions.text("Ses işleniyor")

}

recognition.onspeechend = function() {

 instructions.text("Ses yok")

}

recognition.onerror = function() {

 instruction.text("Tekrar deneyiniz")

}

recognition.onresult = function(event) {

 var current = event.resultIndex;

 var transcript = event.results[current][0].transcript



 content += transcript

 textbox.val(content)

}

$("#start-btn").click(function(event) {

 recognition.start()

})

textbox.on('input', function() {

 content = $(this).val()

})

function downloadLogFile() {
  const a = document.createElement('a');
  a.href = 'data:text/plain,' + encodeURIComponent(document.getElementById('textbox').value);

  var now = new window.Date();
  var Year = now.getFullYear();
  var Month = (("0" + (now.getMonth() + 1)).slice(-2));
  var Date = ("0" + now.getDate()).slice(-2);
  var Hour = ("0" + now.getHours()).slice(-2);
  var Min = ("0" + now.getMinutes()).slice(-2);
  var Sec = ("0" + now.getSeconds()).slice(-2);

  a.download = 'log_' + Year + Month + Date + '_' + Hour + Min + Sec + '.txt';

  a.click();
}




