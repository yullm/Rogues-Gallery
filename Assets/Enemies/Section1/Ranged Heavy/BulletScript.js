var direction : int;
var speed : int;
var life : float;
var death : float;
var damage : int;

function Start () 
{
	direction = -transform.localScale.x;
	if(direction == 1)
	{
		transform.rotation.z *= -1;
	}
	
}

function Update () 
{
life += Time.deltaTime;

if(life >= death)
{
	Destroy(gameObject);
}

transform.Translate(Vector2(direction,0) * speed * Time.deltaTime);
}

function OnCollisionEnter2D(other : Collision2D)
{
	if(other.gameObject.tag == "Player")
	{
		other.gameObject.SendMessage("TakeDamage", damage);
	}
	
	Destroy(gameObject);
}