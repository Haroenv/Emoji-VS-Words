
var replaceCommand = ['happy', 'sad', 'smile' , 'joy' , 'smiling' , 'smiling' , 'sweat' , 'closed eyes' , 'wink' , 'smiling eyes' , 'delicious' , 'relieved' , 'heart-shaped'];
var replaceOutput = ['😃', '😂' , '😁' , '😂' , '😃' , '😄' , '😅' , '😆' , '😉' , '😊' , '😋' , '😌' , '😍'];

$('#text').keyup(function(){
    var text = $('#text').val();
    for (var i=0; i < replaceCommand.length; i++){
        text = text.replace(replaceCommand[i],replaceOutput[i]);
    }
    $('#text').val(text);
});