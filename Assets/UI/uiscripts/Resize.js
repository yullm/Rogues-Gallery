DontDestroyOnLoad(transform.gameObject);

var size : int = 1;

function Start () 
{
	if(Screen.width != 960)
	{
		size = 2;
	}
}

function Update () 
{
	if(Input.GetKeyDown("q") && size == 1)
	{
		Screen.SetResolution(Screen.width*2,Screen.height*2,true);
		size = 2;
	}	
	
	else if(Input.GetKeyDown("q") && size == 2)
	{
		Screen.SetResolution(960,540,false);
		size = 1;
	}	
}

function OnGUI()
{
	//GUILayout.Label("Size:" + Screen.width + "x" + Screen.height);
}