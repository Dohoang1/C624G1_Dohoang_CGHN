function People(name, gender, weight) {
    this.name = name;
    this.gender = gender;
    this.weight = weight;
    this.talk = "";

    this.eatApple = function (apple) {
        if (apple.weight > 0) {
            this.weight += 1 ;
            apple.weight--;
        }
    }
    this.doTalk = function() {
        this.talk = prompt();
        return console.log(this.talk);
    }
    this.checkApple = function(apple) {
        return console.log(apple.weight);
        }

}

function Apple (name) {
    this.name = name;
    this.weight = 10;
}

let apple1 = new Apple("red apple");
console.log(apple1.weight)

let Adam = new People("Adam", "Male", 70);
Adam.eatApple(apple1);
console.log(apple1.weight)
console.log(Adam.weight);

let Eva = new People("Eva", "Female", 50);
Eva.eatApple(apple1);
console.log(Eva.weight);
console.log(apple1.weight)