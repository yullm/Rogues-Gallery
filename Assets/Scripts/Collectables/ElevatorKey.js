
function OnCollisionEnter2D (other : Collision2D)
{
	if(other.gameObject.tag == "Player")
	{
		var hCol = other.gameObject.GetComponent(HeroCollectables);
		hCol.keyCount += 1;
		Destroy(gameObject);
	}
	
	if(other.gameObject.tag == "Enemy")
	{
		transform.parent = other.transform;
	}
}
