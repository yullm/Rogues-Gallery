using UnityEngine;
//using IndieEffects;

/* 
						---Fisheye Image Effect---
This Indie Effects script is an adaption of the Unity Pro Fisheye Effect done by me.
If you want me to attempt to convert a unity pro image effect, consult the manual for my
forum link and email address.
*/

[RequireComponent(typeof(Camera))]
[AddComponentMenu ("Indie Effects/Fisheye")]
public class FisheyeEffect : MonoBehaviour
{
    public float strengthX = 0.2f;
    public float strengthY = 0.2f;
    public Shader fishEyeShader;
    private Texture2D tex;
    private Material fisheyeMaterial;	
	
    private void Start ()
    {
	    fisheyeMaterial = new Material(fishEyeShader);		
    }
	
    private void Update () 
    {
        fisheyeMaterial.mainTexture = IndieEffects.renderTexture;
    }

    private void OnPostRender() 
    {		
	    float oneOverBaseSize = 80f / 512f;

        float ar = (Screen.width * 1f) / (Screen.height * 1f);
	
	    fisheyeMaterial.SetVector ("intensity", new Vector4 (strengthX * ar * oneOverBaseSize, strengthY * oneOverBaseSize, strengthX * ar * oneOverBaseSize, strengthY * oneOverBaseSize));
	    IndieEffects.FullScreenQuad(fisheyeMaterial);
    }
}