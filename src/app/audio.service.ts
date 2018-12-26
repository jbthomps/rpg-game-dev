import { Injectable } from '@angular/core';

@Injectable()
export class AudioService {
    AudioContext;
    audioCtx;
    track;
    audioElement;
    gainNode;

    constructor(){
        this.AudioContext = (window as any).AudioContext || (window as any).webkitAudioContext;
        this.audioCtx =  new AudioContext();
        this.audioElement = document.querySelector('audio')
        this.track = this.audioCtx.createMediaElementSource(this.audioElement);
        this.gainNode = this.audioCtx.createGain();
        this.track.connect(this.gainNode).connect(this.audioCtx.destination);
    }

    startBackground() {
        if (this.audioCtx.state === 'suspended') {
            this.audioCtx.resume();
        }
        this.audioElement.play();
        setTimeout(() => {
            this.gainNode.gain.value = .75;
        }, 45000);
        setTimeout(() => {
            this.gainNode.gain.value = 1;
        }, 90000);
    }
}