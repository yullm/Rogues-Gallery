import System.IO;

var firstNames : String[];
var lastNames : String[];
var superNames : String[];
var titles : String[];

var firstName : String;
var lastName : String;
var super1 : String;
var super2 : String;
var title : String;


function Start () 
{
var fFile = Application.dataPath + "/Resources/Names/First.txt";
var lFile = Application.dataPath + "/Resources/Names/Last.txt";
var sFile = Application.dataPath + "/Resources/Names/Super.txt";
var tFile = Application.dataPath + "/Resources/Names/Titles.txt";
firstNames = File.ReadAllLines(fFile);
lastNames = File.ReadAllLines(lFile);
superNames = File.ReadAllLines(sFile);
titles = File.ReadAllLines(tFile);
firstName = firstNames[Random.Range(0,firstNames.Length)];
lastName = lastNames[Random.Range(0,lastNames.Length)];
super1 = superNames[Random.Range(0,superNames.Length)];
super2 = superNames[Random.Range(0,superNames.Length)];
if(super2 == super1)
{
	super2 = superNames[Random.Range(0,superNames.Length)];
}
	title = titles[Random.Range(0,titles.Length)];
if(firstName == "Ash" && lastName == "Ketchup")
{
	title = "Gotta Catch 'em All!";
}
}
function Update ()
{
if(Input.GetButtonDown("Select"))
{
	Start();
}
}

function OnGUI()
{
guiText.text = " " + firstName + " \"" + super1 +" "+ super2 + "\" " + lastName + ",\n " + title;// \" creates quotes. Mono just reads as strings
}