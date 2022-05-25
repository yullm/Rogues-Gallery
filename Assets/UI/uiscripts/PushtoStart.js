DontDestroyOnLoad(gameObject);

var pushed = false;

function Start()
{
	Time.timeScale = 1;
	var pauses = GameObject.FindGameObjectsWithTag("Pause");
	var hero = GameObject.FindGameObjectWithTag("Player");
	if(hero)
	{
		Destroy(hero.gameObject);
	}
	if(pauses)
	{
		for(var i : GameObject in pauses)
		{
			Destroy(i.transform.gameObject);
		}
	}
}

function Update () {
	if(Input.GetButtonDown("Pause") && pushed == false)
	{
		pushed = true;
		Load();
	}
	if(Input.GetButtonDown("SP"))
	{
		Application.Quit();
	}
}

function Load ()
{
	audio.Play();
	Application.LoadLevel("HeroGenerator");
	yield WaitForSeconds(audio.clip.length);
	Destroy(gameObject);
}