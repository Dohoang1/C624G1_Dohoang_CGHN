function Rat (name, weight, speed) {
    this.name = name;
    this.weight = weight;
    this.speed = speed;
    this.IsAlive = true;

    this.makeNoise = function () {
        return "chit chit";
    }
    this.goDie = function () {
        this.IsAlive = false;
    }
}

function Cat (name, weight, maxSpeed) {
    this.name = name;
    this.weight = weight;
    this.maxSpeed = maxSpeed;
    this.gotaRat = 0;

    this.makeNoise = function () {
        return "meo meo";
    }
    this.catchRat = function (Rat) {
        if (this.maxSpeed > Rat.speed) {
            this.gotaRat += 1;
            console.log(`${this.name} bat dc ${Rat.name}`);
        } else {
            console.log(`${this.name} khong bat dc ${Rat.name}`);
        }
    }
    this.eatRat = function (Rat) {
        if (this.gotaRat > 0) {
            this.gotaRat -= 1;
            this.weight += Rat.weight;
            Rat.goDie();
            console.log(`${this.name} an thit ${Rat.name}`);
        }
    }
}

let Tom = new Cat ("Tom", 10, 500);
let Jerry = new Rat ("Jerry", 2, 300);


console.log(Jerry.makeNoise());
console.log(Tom.makeNoise());

Tom.catchRat(Jerry);
console.log(Tom.gotaRat)
Tom.eatRat(Jerry);

