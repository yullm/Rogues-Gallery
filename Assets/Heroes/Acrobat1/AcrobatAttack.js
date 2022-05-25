var anim;
var hS : HeroStats;

function OnEnable()
{
	anim = transform.parent.gameObject.GetComponent(Animator);
}

function Update () 
{
	if(Input.GetButtonDown("Attack"))
	{
		Punch();
	}
}

function Punch()
{
	anim.SetTrigger("Attack");
	collider2D.enabled = true;
	yield WaitForSeconds(0.5);
	collider2D.enabled = false;
}

function OnCollisionEnter2D(other : Collision2D)
{
	if(other.gameObject.tag == "Enemy")
	{
		collider2D.enabled = false;
		var eH = other.gameObject.GetComponent(EnemyHealth);
		eH.TakeDamage(hS.heroDamage);
	}
}