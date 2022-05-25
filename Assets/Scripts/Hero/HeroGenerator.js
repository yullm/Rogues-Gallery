var imageLocation : GameObject;//location of heroSpawner.
var generatorNum : int;
var heroClasses : String[];//array of possible classes
var curClass : String;//current pick from heroClasses Array
var heroClass : GameObject;//chosen class prefab
var curHero : GameObject;//current Hero gO;

var vigilantes : GameObject[];//class variant prefabs
var acrobats : GameObject[];
var tanks : GameObject[];
var heavyHitters : GameObject[];
var cybers : GameObject[];
var monks: GameObject[];

var spcAtk;
var modifier1;//chosen modifier scripts
var modifier2;
var modifier3;

var modifiers : String[];//array of modifier script names
var specialAtks : String[];//add this

var myStyle : GUIStyle;//fonts n shit
var pauseObj : GameObject;

function Start () 
{

	//curClass = heroClasses[Random.Range(0,heroClasses.Length)];//choose Class
	curClass = heroClasses[0];
	if(curClass == "Vigilante")//If current Class is Vigilante
	{

		Vigilante();//Run Vigilante Function
		
	}
	else if(curClass == "Acrobat")
	{
		
		Acrobat();
		
	}
	
	else if(curClass == "Tank")
	{
		
		Tank();
		
	}
	else if(curClass == "Heavy Hitter")
	{
		
		HeavyHitter();
		
	}
	
	else if(curClass == "Cyber")
	{
		
		Cyber();
		
	}
	
	else if(curClass == "Monk")
	{
		
		Monk();
		
	}
	
}

function Acrobat ()
{
	heroClass = acrobats[Random.Range(0,acrobats.Length)];//Choose from List of Possible Acrobats and sets it as Hero's Class
	print(heroClass);
	spcAtkPicker();//Run Special Attack Picker
	
}

function Vigilante ()
{
	heroClass = vigilantes[Random.Range(0,acrobats.Length)];
	print(heroClass);
	ModifierPicker();//Vigilantes don't have special Attacks so they skip straight to mods.
	
}

function Tank ()
{
	heroClass = tanks[Random.Range(0,acrobats.Length)];
	print(heroClass);
	spcAtkPicker();
	
}

function HeavyHitter ()
{
	heroClass = heavyHitters[Random.Range(0,acrobats.Length)];
	print(heroClass);
	spcAtkPicker();
	
}

function Cyber ()
{
	heroClass = cybers[Random.Range(0,acrobats.Length)];
	print(heroClass);
	spcAtkPicker();
	
}

function Monk ()
{
	heroClass = monks[Random.Range(0,acrobats.Length)];
	print(heroClass);
	spcAtkPicker();
	
}

function spcAtkPicker ()
{
	spcAtk = specialAtks[Random.Range(0,specialAtks.Length)];//choose special attack from list of Special Attacks
	ModifierPicker();//Run Mod Picker
}

function ModifierPicker()//seperate for special and modifiers
{
	if(spcAtk == null)//in the case of vigiante: if nothing was chosen then set Special to None.
	{
		spcAtk = "None";
	}
	modifier1 = modifiers[Random.Range(0,modifiers.Length)];//Choose Mod 1 From list
	
	modifier2 = modifiers[Random.Range(0,modifiers.Length)];//Choose Mod 2 From list
	if(modifier2 == modifier1)//If Mod 2 is the same as Mod 1
	{
		modifier2 = "None";//then mod 2 is set to None.
	}
	
	modifier3 = modifiers[Random.Range(0,modifiers.Length)];
	if(modifier3 == modifier1 || modifier3 == modifier2)//If mod 3 is the same as either previous
	{
		modifier3 = "None";//then mod 3 is set to None
	}
	Generate();
}

function Generate ()//Generates Hero for Display
{
	curHero = Instantiate(heroClass,imageLocation.transform.position,Quaternion.identity);//Places our selected hero.
	if(spcAtk != "None")//If the Hero has a Special Attack
	{
	curHero.AddComponent(spcAtk);//Since the mods and Special are just strings we can use their variables to add their scripts to our Hero.
	}
	curHero.AddComponent(modifier1);
	if(modifier2 != "None")
	{
	curHero.AddComponent(modifier2);
	}
	
	if(modifier3 != "None")
	{
	curHero.AddComponent(modifier3);
	}
	
}

function OnGUI()
{
myStyle.fontSize = Screen.width/40;
if(generatorNum <= 1)//Screen Location Depending on which Generator it is 1 = left, 2 = Right.
{
	GUI.Label(Rect(30,10,200,20),"Class: " + curClass,myStyle);//Lists Stats for Revision

	GUI.Label(Rect(30,30,200,20),"Special: " + spcAtk,myStyle);

	GUI.Label(Rect(30,50,200,20),"Modifier: " + modifier1,myStyle);

	GUI.Label(Rect(30,70,200,20),"Modifier: " + modifier2,myStyle);

	GUI.Label(Rect(30,90,200,20),"Modifier: " + modifier3,myStyle);

	/*if(GUI.Button(Rect(30,110,200,20),"Regenerate",myStyle))
	{
		Destroy(curHero);
		Start();
	}
	
	if(GUI.Button(Rect(30,130,200,20),"Select",myStyle))
	{
		MoldHero();
	}*/
	
}
else if(generatorNum >= 2)
{
	GUI.Label(Rect(Screen.width/2 + 30,10,200,20),"Class: " + curClass,myStyle);

	GUI.Label(Rect(Screen.width/2 + 30,30,200,20),"Special: " + spcAtk,myStyle);

	GUI.Label(Rect(Screen.width/2 + 30,50,200,20),"Modifier: " + modifier1,myStyle);

	GUI.Label(Rect(Screen.width/2 + 30,70,200,20),"Modifier: " + modifier2,myStyle);

	GUI.Label(Rect(Screen.width/2 + 30,90,200,20),"Modifier: " + modifier3,myStyle);

	/*if(GUI.Button(Rect(Screen.width/2 + 30,110,200,20),"Regenerate",myStyle))
	{
		Destroy(curHero);
		Start();
	}
	
	if(GUI.Button(Rect(Screen.width/2 + 30,130,200,20),"Select",myStyle))
	{
		
		MoldHero();
	}*/
}

}

function MoldHero () //When Activated by Selector this places the Hero in Game with the proper Components
{
	curHero.AddComponent(DontDestroy);//Adds the Don't Destroy on Load Script
	curHero.AddComponent(Rigidbody2D);//Adds a RigidBody2D
	curHero.AddComponent(HeroStats);//Adds Stats, which are then tailored to the class.
	curHero.AddComponent(HeroCollectables);//Add collectables ie Level Keys.
	curHero.rigidbody2D.fixedAngle = true; //Makes so the hero wont topple.
	hStats = curHero.GetComponent(HeroStats);//enable script to access the Hero Stats Script
	hStats.curClass = curClass;//Sets the Hero Stats Class to Chosen Class
	hStats.pauseObj = pauseObj;
	Application.LoadLevel("RandomTerrain");//Load Game
	curHero.transform.position = Vector3(-23,5,0);//Place Hero in Loading Room.
}

