import System.IO;

DontDestroyOnLoad(gameObject);

enum States {paused,nPaused};
var pState = States.nPaused;
var hero : GameObject;
var heroAttack : HeroAttack;
var heroMove : BasicHeroMove;
var pauseMenu : GameObject;
var selObj : GameObject;
var pauseSel : PauseSelector;
var heroGenSel:GameObject;

function Start(){
pauseSel = selObj.GetComponent(PauseSelector);
}

function Update () {

switch(pState){
	case States.nPaused:
		if(Input.GetButtonDown("Pause")){
			pState = States.paused;
			pauseMenu.SetActive(true);
			if(hero){
				heroAttack.enabled = false;
				heroMove.enabled = false;
			}
			if(heroGenSel)
			{
				heroGenSel.SetActive(false);
			}
			break;
		}
		break;
		
	case States.paused:
		Time.timeScale = 0;
		if(pauseSel.curPos == 0 && Input.GetButtonDown("Select")){
			Time.timeScale = 1;
			pauseMenu.SetActive(false);
			if(hero){
				heroAttack.enabled = true;
				heroMove.enabled = true;
			}
			if(heroGenSel)
			{
				heroGenSel.SetActive(true);
			}
			
			pState = States.nPaused;
			break;	
		}
		else if(pauseSel.curPos == 1 && Input.GetButtonDown("Select")){
			Time.timeScale = 1;
			pauseMenu.SetActive(false);
			Quit();
			
		}
		if(Input.GetButtonDown("Pause")){
			Time.timeScale = 1;
			pauseMenu.SetActive(false);
			if(hero){
				heroAttack.enabled = true;
				heroMove.enabled = true;
			}
			if(heroGenSel)
			{
				heroGenSel.SetActive(true);
			}
			pState = States.nPaused;
			break;
		}
		break;
	}
}

function Quit()
{
	Application.LoadLevel("StartScreen");
}