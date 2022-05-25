var damage : int;
var hero : GameObject;
var moveSpeed : int;
var direction : int;

var life : float;
var death : float;

function OnEnable () 
{
	hero = GameObject.FindGameObjectWithTag("Player");
	var hS = hero.GetComponent(HeroStats);
	damage += hS.heroDamage;
	direction = hero.transform.localScale.x;
	transform.rotation.z *= direction;
}

function Update () 
{

transform.Translate(Vector2(direction,0) * moveSpeed);

life += Time.deltaTime;

if(life >= death)
{
	Destroy(gameObject);
}

}

function OnCollisionEnter2D (other : Collision2D)
{
	if(other.gameObject.tag == "Enemy")
	{
		var eH = other.gameObject.GetComponent(EnemyHealth);
		eH.TakeDamage(damage);
		Destroy(gameObject);
	}
	
Destroy(gameObject);
}