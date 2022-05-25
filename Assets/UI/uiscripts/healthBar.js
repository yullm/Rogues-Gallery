var hS : HeroStats;
var healthBar : GameObject;
var manaBar : GameObject;
function Start () 
{
	hS = GameObject.FindGameObjectWithTag("Player").GetComponent(HeroStats);
}

function Update () 
{
healthBar.transform.localScale.x = hS.heroCurHealth;
manaBar.transform.localScale.x = hS.heroCurMana;
}