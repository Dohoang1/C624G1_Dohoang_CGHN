class Remote {
    constructor(name) {
        this.name = name;
    }
        changeChannels (Tv, channel) {
            Tv.changeChannels(channel);
        }
        volumeUp (Tv) {
            Tv.volumeUp();
        }
        volumeDown (Tv) {
            Tv.volumeDown();
        }
        powerBtn (Tv) {
            Tv.changeStatus();
        }
}

class Tv {
    constructor(name) {
    this.name = name;
    this.channel = 7;
    this.volume = 20;
    this.isOn = false;
    }

    changeStatus () {
        this.isOn = !this.isOn;
    }
    volumeUp () {
        this.volume += 1;
    }
    volumeDown () {
        this.volume -= 1;
    }
    changeChannels (channel) {
        this.channel = channel;
    }
}

let Sony = new Tv("Sony");
let SonyRemote = new Remote("SonyRemote");

SonyRemote.powerBtn(Sony);
SonyRemote.changeChannels(Sony,3);
SonyRemote.volumeUp(Sony);
SonyRemote.volumeUp(Sony);
SonyRemote.powerBtn(Sony);