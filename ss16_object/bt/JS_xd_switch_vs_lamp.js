function Switch () {
    this.status = false;
    this.lamp = null ;

    this.turnSwitch = function () {
      this.status = !this.status;
      if (this.lamp) {
          this.lamp.updateStatus(this.status);
      }
        return this.status
    }
    this.connectToLamp = function (lamp) {
      this.lamp = lamp;
      lamp.updateStatus(this.status)
    }
}

function ElectricLamp () {
    this.status = false;

    this.updateStatus = function (switchStatus) {
        this.status = switchStatus;
    }
}

let switch1 = new Switch();
let Lamp1 = new ElectricLamp();

switch1.connectToLamp(Lamp1);
for (let i = 0; i < 20; i++) {
    switch1.turnSwitch();
    console.log(Lamp1.status);
}