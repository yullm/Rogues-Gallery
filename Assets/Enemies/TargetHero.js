var target : GameObject;
var hero : GameObject;
var range : float;
var sS : ShootingScript;

InvokeRepeating("HeroSearch",1,1);

function Start () 
{
sS = gameObject.GetComponent(ShootingScript);
}

function Update () 
{
	if(hero)
	{
		var dist = Vector2.Distance(hero.transform.position, transform.position);
		
		if(dist <= range)
		{
			target.transform.position = hero.transform.position + Vector2(0,2);
			sS.enabled = true;
		}
		else if(dist >= range)
		{
			sS.enabled = false;
		}
	}

}

function HeroSearch ()
{
hero = GameObject.FindGameObjectWithTag("Player");
}
