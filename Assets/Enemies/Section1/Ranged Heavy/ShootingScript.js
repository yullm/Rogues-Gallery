var bullet : GameObject;

var clipSize : int;
var shotsFired : int;
var fireRate : int;

var counter : float;
var counterLimit :float;
var reloadTime :float;

var bulletSpawn : GameObject;

var anim;

function Start () 
{
	anim = gameObject.GetComponent(Animator);
	counterLimit /= fireRate;
}

function Update () 
{
	counter += Time.deltaTime;
	
	if(counter >= counterLimit && shotsFired <= clipSize -1)
	{
		counter = 0;
		shotsFired += 1;
		Fire();
	}	
	else if(counter >= counterLimit && shotsFired == clipSize)
	{
		shotsFired += 1;
		Fire();
		Reload();
	}
		
}

function Fire ()
{
	anim.SetTrigger("Shoot");
	var	projectile = Instantiate(bullet,bulletSpawn.transform.position,bulletSpawn.transform.rotation);
	projectile.transform.localScale.x = transform.localScale.x;
}

function Reload ()
{
anim.SetTrigger("Reload");
yield WaitForSeconds(reloadTime);
shotsFired = 0;
counter = 0;
}