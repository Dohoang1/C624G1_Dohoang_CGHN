function Mobile (name) {
    this.name = name;
    this.battery = 100;
    this.draftMessage = "";
    this.inbox = [];
    this.sentMessage = [];
    this.isOn = false;

    this.checkPower = function () {
        return this.isOn ? "On" : "Off";
    }
    this.powerOn = function () {
        this.isOn = true;
    }
    this.powerOff = function () {
        this.isOn = false;
    }
    this.chargeBattery = function () {
        this.battery = 100;
    }
    this.composeMessage = function (message) {
        if (this.isOn && this.battery > 0) {
            this.draftMessage = message;
            this.battery--;
        }
    }
    this.receiverMessage = function (message) {
            this.inbox.push(message);
            this.battery--;
    }

    //Phan soan tin va luu tin nhan!!
    this.sendMessage = function (receiver) {
        if (this.isOn && this.battery > 0) {
            receiver.receiverMessage(this.draftMessage);
            this.sentMessage.push(this.draftMessage);
            this.draftMessage = "";
            this.battery--;
        }
    }


    this.checkInbox = function () {
        if (this.isOn && this.battery > 0) {
            return this.inbox;
            this.battery--;
        }
    }
    this.checkSentMessage = function () {
        if (this.isOn && this.battery > 0) {
            return this.sentMessage;
            this.battery--;
        }
    }
}

let Nokia = new Mobile("Nokia");
let iPhone = new Mobile("iPhone");

Nokia.powerOn();
Nokia.composeMessage("Hello iPhone!");
Nokia.sendMessage(iPhone);

iPhone.powerOn();
console.log(iPhone.checkInbox());