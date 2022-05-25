var curClass : String; //Current Class Set by Hero Generator

var heroMaxHealth :int; //Heros Max Health Points
var heroCurHealth :int;	//Heros Current Health Points
var heroMaxMana : int;	//Heros Max Mana Points
var heroCurMana : int;	//Hero's current Mana Points
var heroMoveSpeed : int;	// Hero's Move Speed
var heroStr : int;//divided by 2 add to maxdamage
var heroInt : int;//add to max Mana
var heroDex : int;//divided by 2 reduces this amount of incoming damage
var heroDamage : int;//base Attack Damage that hero deals with main attack
var heroAtkSpd : float;//how many times a second they can attack
var heroCritChance : int;//chance to crit with each attack
var heroCritMultiplier : float;//amount base attack damage is multiplied by when landing crit

var pauseObj : GameObject;
var anim : Animator;


function Start () 
{
heroMaxHealth = PlayerPrefs.GetInt("HeroHealth",25);//Gathering Base Saved stats from Player Prefs.
heroMaxMana = PlayerPrefs.GetInt("HeroMana",25);
heroCurHealth = heroMaxHealth; //Sets Current Health to Max Amount
heroCurMana = heroMaxMana;	//Set Current Mana to Max Amount
heroMoveSpeed = PlayerPrefs.GetInt("HeroMoveSpeed",9);
heroStr = PlayerPrefs.GetInt("HeroStr",5);
heroInt = PlayerPrefs.GetInt("HeroInt",5);
heroDex = PlayerPrefs.GetInt("HeroDex",5);
heroDamage = PlayerPrefs.GetInt("HeroDamage",8);
heroAtkSpd = PlayerPrefs.GetInt("HeroAtkSpd",2);
heroCritChance = PlayerPrefs.GetInt("HeroCritChance",3);
heroCritMultiplier = PlayerPrefs.GetInt("HeroCritMulitplier",2);
anim = gameObject.GetComponent(Animator);
ClassChanges();//Calls Function which applies Class based Changes

}

function Update () 
{
	if(heroCurHealth >= heroMaxHealth)
	{
		heroCurHealth = heroMaxHealth;
	}
	
	if(heroCurHealth <= 0)
	{
		heroCurHealth = 0;
		Dead();
	}
	
	if(heroCurMana >= heroMaxMana)
	{
		heroCurMana = heroMaxMana;
	}
	
	if(heroCurMana <= 0)
	{
		heroCurMana = 0;
	}
}

function ClassChanges ()
{
	if(curClass == "Acrobat")//Current Class is set by Generator. If CurClass is Acrobat
	{
		heroAtkSpd = 6; //Raise Attack Speed
		heroMoveSpeed += (heroMoveSpeed/2);//Raise Move Speed
		heroCritChance /=2;//Reduce Crit Chance
		heroMaxHealth -= (heroMaxHealth/4);//Lower Max Health
				
	}
	if(curClass == "Tank")
	{
		heroDex += (heroDex/2);
		heroInt -= (heroInt/4);
		heroMaxHealth += (heroMaxHealth/2);
	}
	
	if(curClass == "Heavy Hitter")
	{
		heroStr*=2;
		heroDamage += (heroDamage/2);
		heroMaxMana/=2;
	}
	
	if(curClass == "Cyber")
	{
		heroInt*=2;
		heroMaxMana += (heroMaxMana/2);
		heroStr/=2;
		var cS = gameObject.GetComponent(CyberSpecial);
		cS.enabled = true;
	}
	
	if(curClass == "Monk")
	{
		heroInt += (heroInt/2);
		heroMaxMana += heroInt;
		heroCritChance *=4;
		heroCritMultiplier *= 2;
	}
	
	if(curClass == "Vigilante")
	{
		heroMoveSpeed -= 4;
		groundAdjust = 0.47;
	}

heroDamage += (heroStr/2);//Adds Strength Bonus to Health
heroMaxMana += heroInt; //Adds Intelligence Bonus to Mana

heroCurHealth = heroMaxHealth;//Recalls Setting Current Health in case it was changed.
heroCurMana = heroMaxMana;//Recalls Setting Current Mana in case it was changed.

gameObject.AddComponent(BasicHeroMove);//Adds Movement Script
var hA = gameObject.GetComponentInChildren(HeroAttack);
var bHM = gameObject.GetComponent(BasicHeroMove);//Accesses Movement Script
bHM.moveSpeed = heroMoveSpeed;//Sets MoveSpeed
bHM.inSpeed = heroMoveSpeed;
bHM.groundAdjust.y = groundAdjust;
hA.hS = this;
hA.enabled = true;
	if(pauseObj != null)
	{	
		var pauseSettings = pauseObj.GetComponent(Pause);
		pauseSettings.hero = gameObject;
		pauseSettings.heroAttack = hA;
		pauseSettings.heroMove = bHM;
	}
}

function TakeDamage(damage : int)//use Dex n stuff
{
	//anim.SetTrigger("Hit");
	heroCurHealth -= (damage/(heroDex/2));
}

function Dead ()//Something Bad will happen here I figure.
{

}

function OnGUI ()//For Dev Purposes
{
	GUI.color = Color.white;
	GUI.Label(Rect(10,Screen.height-20,1000,40),"HP: " + heroCurHealth + "/" + heroMaxHealth +", " + "MP: " + heroCurMana + "/" + heroMaxMana + ", " + "STR: " + heroStr + ", " + "INT: " + heroInt + ", " + "Dex: " + heroDex + ", " + "BaseDMG: " + heroDamage + ", " + "AtkSpd: " + heroAtkSpd + ", " + "Crit Chance: " + heroCritChance +"%"+", "+"Crit Multiplier: " + heroCritMultiplier+"*"+ ", "+"MoveSpeed: " + heroMoveSpeed);
	
	
}

