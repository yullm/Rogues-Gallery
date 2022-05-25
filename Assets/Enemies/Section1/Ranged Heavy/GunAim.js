var target : GameObject;
var diff : Vector3;
var rot : float;

InvokeRepeating("DirCheck",0.1,0.1);

function Start () 
{

}

function Update () 
{


	
	diff = target.transform.position - transform.position;
	diff.Normalize();
	if(transform.parent.transform.localScale.x == -1)
	{
		rot = Mathf.Atan2(-diff.y, diff.x) * Mathf.Rad2Deg;
	}
	else
	{
		rot = Mathf.Atan2(-diff.y, -diff.x) * Mathf.Rad2Deg;
	}
	transform.rotation = Quaternion.Euler(0,0,rot);
}

function DirCheck ()
{
	if(target.transform.position.x >= transform.position.x)
	{
		transform.parent.transform.localScale.x = -1;
	}
	else if(target.transform.position.x <= transform.position.x)
	{
		transform.parent.transform.localScale.x = 1;
	}
}