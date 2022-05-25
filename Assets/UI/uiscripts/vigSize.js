#pragma strict

function Start ()
{

}

function Update () 
{
guiTexture.pixelInset.width = Screen.width;
guiTexture.pixelInset.height = Screen.height;
guiTexture.pixelInset.x = -Screen.width/2;
guiTexture.pixelInset.y = -Screen.height/2;
}