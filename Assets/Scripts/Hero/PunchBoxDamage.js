var damage : float;
var critDamage = 0;
var hS : HeroStats;
var lastHit : int;
var charged = false;

function OnTriggerEnter2D(other : Collider2D)
{
	if(other.gameObject.tag == "Enemy")
	{	
		collider2D.enabled = false;
		var eH = other.gameObject.GetComponent(EnemyHealth);
		var critRoll : int = Random.Range(0,100);
		if(critRoll <= hS.heroCritChance)
		{
			critDamage = hS.heroCritMultiplier;
			lastHit = (damage * critDamage) + Random.Range(-5,5);
			eH.SendMessage("TakeDamage",lastHit);
			print("Crit: " + lastHit);
			return;
		}
		if(charged == true)
		{
			lastHit = damage*2 + Random.Range(-5,5);
			eH.SendMessage("TakeDamage",lastHit);
			print("ChargedCrit");
			charged = false;
			return;
		}
		lastHit = damage + Random.Range(-5,5);
		eH.SendMessage("TakeDamage",lastHit);
		print(lastHit);
	}
}