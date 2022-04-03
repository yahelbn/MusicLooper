import {PadsInterface} from './../Pad/Pad.config'
const holdme = require("../../audio/holdme.mp3")
const kick = require("../../audio/kick.mp3")
const latini = require("../../audio/latini.mp3")
const lovefunk = require("../../audio/lovefunk.mp3")
const picut = require("../../audio/picut.mp3")
const zulu = require("../../audio/zulu.mp3")
const boom = require("../../audio/boom.mpga")
const bam = require("../../audio/bam.mpga")
const bass = require("../../audio/bass.mp3")


export let padsArray = [
    {id:1, padsIsOn:true, color:"coral", sound:holdme, name:"Holdme"},
    {id:2, padsIsOn:false, color:"cyan", sound:kick, name:"Kick"},
    {id:3, padsIsOn:false, color:"darksalmon", sound:latini, name:"Latini"},
    {id:4, padsIsOn:false, color:"darkseagreen", sound:lovefunk, name:"Lovefunk"},
    {id:5, padsIsOn:true, color:"hotpink", sound:picut, name:"Picut"},
    {id:6, padsIsOn:false, color:"springgreen", sound:zulu, name:"Zulu"},
    {id:7, padsIsOn:false, color:"paleturquoise", sound:boom, name:"Boom"},
    {id:8, padsIsOn:false, color:"lemonchiffon", sound:bam, name:"Bam"},
    {id:9, padsIsOn:false, color:"mistyrose", sound:bass, name:"Bass"}
]

export interface PaletteProps {
    pads: Array<PadsInterface>;
  }

  export interface AudioInterface {
    id:number,
    audio: HTMLAudioElement;
  }