var resPos : Vector2;
var quitPos : Vector2;
var curPos : int = 0;

function Update () {


	switch(curPos){
		case 0:
		transform.position =  resPos;
		transform.position.z = 0;
		if(Input.GetAxis("Vertical") == -1)
		{
			curPos = 1;	
		}
		break;
		case 1:
		transform.position = quitPos;
		transform.position.z = 0;
		if(Input.GetAxis("Vertical") == 1)
		{
			curPos = 0;	
		}
		break;
	}

}