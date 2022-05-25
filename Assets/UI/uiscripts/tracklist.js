var trackList : AudioClip[];
var trackNumber : int;

function Start () 
{

audio.clip = trackList[0];
audio.Play();
trackNumber = 0;
WaitForEnd();
}


function NextSong()
{
	trackNumber += 1;
	if(trackNumber == trackList.Length)
	{
		trackNumber = 0;
	} 
	audio.clip = trackList[trackNumber];
	audio.Play();
	WaitForEnd();
}
function WaitForEnd()
{
	yield WaitForSeconds(audio.clip.length);
	NextSong();
}