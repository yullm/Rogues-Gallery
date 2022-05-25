var volume : float = 0.75;
var show = true;
function OnEnable () 
{
	volume = PlayerPrefs.GetFloat("Volume",0.75);
}

function Update () 
{
	if(Input.GetAxis("Horizontal") == -1)
	{
		volume -= 0.01;
	}
	if(Input.GetAxis("Horizontal") == 1)
	{
		volume += 0.01;
	}
	AudioListener.volume = volume;
}

function OnGUI()
{
if(show == true)
{
	volume = GUI.HorizontalSlider (Rect (Screen.width/2 -50 , Screen.height/4, 100, 30), volume, 0.0, 1.0);
}
	
	
}

function OnDisable ()
{
	PlayerPrefs.SetFloat("Volume",volume);
}