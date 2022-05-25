﻿using UnityEngine;
//using IndieEffects;

/*
This script is intended for use with Fuzzy Quill's True Motion Blur for Unity free script.
Shader variable is intended for the ColorBalance shader that should have been provided
along with this script.

-Adam T. Ryder
http://1337atr.weebly.com
*/

[RequireComponent(typeof(IndieEffects))]
[AddComponentMenu ("Indie Effects/Color Balance")]
public class ColorBalance : MonoBehaviour
{
    private Material mat;
    public Shader shader;

    public Color Lift = new Color(1f, 1f, 1f, 1f);
    public float LiftBright = 1f;
    public Color Gamma = new Color(1f, 1f, 1f, 1f);
    public float GammaBright = 1f;
    public Color Gain = new Color(1f, 1f, 1f, 1f);
    public float GainBright = 1f;

    private void Start () 
    {
	    mat = new Material(shader);
	    mat.SetColor("_Lift", Lift);
	    mat.SetFloat("_LiftB", Mathf.Clamp(LiftBright, 0f, 2f));
	    mat.SetColor("_Gamma", Gamma);
	    mat.SetFloat("_GammaB", Mathf.Clamp(GammaBright, 0f, 2f));
	    mat.SetColor("_Gain", Gain);
	    mat.SetFloat("_GainB", Mathf.Clamp(GainBright, 0f, 2f));
    }

    private void Update () 
    {
	    mat.SetTexture("_MainTex", IndieEffects.renderTexture);
    }

    private void OnPostRender () 
    {
	    IndieEffects.FullScreenQuad(mat);
    }
}