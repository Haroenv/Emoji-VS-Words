
var replaceCommand = [/smiling|happy/i,	'joy',	/nice/i,	/smile/i,	/sweat/i,	/laugh/i,	/wink/i,	'smiling eyes',	/delicious/i,	/relieved/i,	/in love/i,	/smirking /i,	/unamused/i,	/cold sweat/i,	/pensive/i,	/confounded/i,	/kissing/i,	/kissing/i,	/tongue/i,	'stuck-out tongue',	/disappointed/i,	/angry/i,	'pissed off',	/crying/i,	/persevering/i,	/triumphing/i,	/relieved/i,	/fearful/i,	/weary/i,	/sleepy/i,	/whimsical/i,	'crying a river',	/worried/i,	/screaming/i,	/astonished/i,	/flushed/i,	/dizzy/i,	/medical/i,	'grinning cat',	'cat tears joy',	'smiling cat',	'smiling cat face with heart-shaped eyes',	'cat face with wry smile',	'kissing cat face with closed eyes',	'pouting cat face',	'crying cat',	'weary cat',	'no good',	/ok/i,	/bowing/i,	/see-no-evil/i,	/hear-no-evil/i,	/speak-no-evil/i,	/raising one hand/i,	/raising both hands/i,	/frowning/i,	'pouting face',	/folded hands/i,	/rocket/i,	/railway/i,	'high-speed train',	'high speed train',	/metro/i,	/station/i,	/bus/i,	/bus stop/i,	/ambulance/i,	/fire engine/i,	/police car/i,	/taxi/i,	/automobile/i,	'recreational vehicle',	/delivery truck/i,	/ship/i,	/speedboat/i,	'traffic light',	/construction/i,	/revolving light/i,	/flag/i,	/door/i,	/no entry/i,	/smoking symbol/i,	/no smoking/i,	/bicycle/i,	/pedestrian/i,	/mens/i,	/womens/i,	/restroom/i,	/baby/i,	/toilet/i,	/water|wc/i,	/bath/i,	/cool/i,	/free/i,	/ID/i,	/new/i,	/NG/i,	/ok/i];
var replaceOutput = ['😁',	'😂',	'😃',	'😄',	'😅',	'😆',	'😉',	'😊',	'😋',	'😌',	'😍',	'😏',	'😒',	'😓',	'😔',	'😖',	'😘',	'😚',	'😜',	'😝',	'😞',	'😠',	'😡',	'😢',	'😣',	'😤',	'😥',	'😨',	'😩',	'😪',	'😫',	'😭',	'😰',	'😱',	'😲',	'😳',	'😵',	'😷',	'😸',	'😹',	'😺',	'😻',	'😼',	'😽',	'😾',	'😿',	'🙀',	'🙅',	'🙆',	'🙇',	'🙈',	'🙉',	'🙊',	'🙋',	'🙌',	'🙍',	'🙎',	'🙏',	'🚀',	'🚃',	'🚄',	'🚅',	'🚇',	'🚉',	'🚌',	'🚏',	'🚑',	'🚒',	'🚓',	'🚕',	'🚗',	'🚙',	'🚚',	'🚢',	'🚤',	'🚥',	'🚧',	'🚨',	'🚩',	'🚪',	'🚫',	'🚬',	'🚭',	'🚲',	'🚶',	'🚹',	'🚺',	'🚻',	'🚼',	'🚽',	'🚾',	'🛀',	'🆒',	'🆓',	'🆔',	'🆕',	'🆖',	'🆗',	'🆘'];


$('#text').keypress(function(){
    var text = $('#text').val();
    for (var i=0; i < replaceCommand.length; i++){
        text = text.replace(replaceCommand[i],replaceOutput[i]);
    }
    $('#text').val(text);
});