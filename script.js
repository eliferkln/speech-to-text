
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