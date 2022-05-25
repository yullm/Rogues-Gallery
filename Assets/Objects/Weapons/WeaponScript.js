var hero : GameObject;

var weaponType : String;

var damage : int;

function OnEnable () 
{
hero = GameObject.FindGameObjectWithTag("Player");
var hS = hero.GetComponent(HeroStats);
damage += hS.heroDamage;
}

function OnCollisionEnter2D (other : Collision2D)
{
	if(other.gameObject.tag == "Enemy")
	{
		var eH = other.gameObject.GetComponent(EnemyHealth);
		eH.TakeDamage(damage);
		collider2D.enabled = false;
		yield WaitForSeconds(0.1);
		collider2D.enabled = true;
	}
}