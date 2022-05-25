enum TextSizes{Big,Mid,Small}

var size  = TextSizes.Big;

function Update () 
{

switch(size){
	case TextSizes.Big:
		guiText.fontSize = Screen.width/15;
		break;
	case TextSizes.Mid:
		guiText.fontSize = Screen.width/25;
		break;
	case TextSizes.Small:
		guiText.fontSize = Screen.width/40;
		break;
}

}