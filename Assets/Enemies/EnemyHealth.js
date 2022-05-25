var maxHealth : int;
var curHealth : int;
var anim : Animator;
function Start () 
{
anim = gameObject.GetComponent(Animator);
curHealth = maxHealth;
}

function Update () 
{
	if(curHealth <= 0)
	{
		Destroy(gameObject);
	}
}

function TakeDamage (damage :int)
{	
	rigidbody2D.AddForce(Vector2(300,0)*transform.localScale.x);
	curHealth -= damage;
	anim.SetTrigger("Hit");
}