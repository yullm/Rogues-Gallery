var bulletSpawn : Transform;
var bullet : GameObject;

var reloadTime : int;
var reloadMax : int;

var hStats;
var mana;

var manaCost : int;

function Start () 
{
hStats = gameObject.GetComponent(HeroStats);


}

function Update () 
{	

	
	reloadTime /= Time.time;

	if(reloadTime <= 0)
	{
		reloadTime = 0;
	}
	
	if(hStats.heroCurMana >= manaCost)
	{
		if(Input.GetButtonDown("SP") && reloadTime == 0)
		{
			Fire();
			reloadTime = reloadMax;
			

		}
	}
}

function Fire()
{
	var newBullet = Instantiate(bullet,bulletSpawn.transform.position,bulletSpawn.transform.rotation);
	newBullet.transform.localScale.x = transform.localScale.x;
	hStats.heroCurMana -= manaCost;
}