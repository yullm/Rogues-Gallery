//create loot object

function Start () {

}

function Update () {

}

function OnTriggerEnter2D (other : Collider2D)
{
	if(other.gameObject.tag == "HeroWeapon")
	{
		Destroy(gameObject);
	}
}