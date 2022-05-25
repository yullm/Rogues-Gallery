using UnityEngine;
//using IndieEffects;

[RequireComponent(typeof(IndieEffects))]
[AddComponentMenu ("Indie Effects/Bloom")]
public class Bloom : MonoBehaviour
{
    private Material bloomMat;
    public Shader bloomShader;
    [Range (0,5)]
    public float radius;
    [Range(0,2)]
    public float amount;

    private void Start () 
    {
	    bloomMat = new Material(bloomShader);
    }

    private void Update () 
    {
	    bloomMat.SetTexture("_MainTex", IndieEffects.renderTexture);
	    bloomMat.SetTexture("_BlurTex", IndieEffects.renderTexture);
	    bloomMat.SetFloat("_Radius", radius);
	    bloomMat.SetFloat("_Amount", amount);
    }

    private void OnPostRender () 
    {
	    IndieEffects.FullScreenQuad(bloomMat);
    }
}