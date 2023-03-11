let doter = {
    name: "Dead",
    surname: "Inside",
    age: 9,
    sayHello: function() {
        console.log(`Я ${this.name} ${this.surname} мне ${this.age} лет, хочу вступить в психокидс`);
    }
};


function Doter(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;

    this.sayHello = function() {
        console.log(`Я ${this.name} ${this.surname} мне ${this.age} лет, хочу вступить в дурку`);
    };
}

let bigDoter = new Doter("ZXC", "Гуль", 16);

doter.sayHello()
bigDoter.sayHello()

doter.surname = "Outside"

let big_doter_name = bigDoter.name

console.log(`Доступ к данным: ${doter.surname}, ${big_doter_name}`)

function ExampleCalc(num1, num2) {
    this._num1 = num1;
    this._num2 = num2;
    this._flip = false;


    Object.defineProperty(this, 'num1', {
        set(val) {
            this._num1 = val;
        },
        get() {
            return this._num1;
        }
    })

    Object.defineProperty(this, 'num2', {
        set(val) {
            this._num2 = val;
        },
        get() {
            return this._num2;
        }
    })

    this.flip = function () {
        this._flip = ! this._flip;
    }

    this.sum = function () {
        return this._num1 + this._num2;
    }

    this.sub = function () {
        return this._flip ? this._num2 - this._num1 : this._num1 - this._num2;
    }
}

let calc = new ExampleCalc(10, 5);

console.log(calc.sum())
console.log(calc.sub())
calc.flip()
console.log(calc.sub())

calc.num1 = 400;
console.log(calc.sub())


Array.prototype.trim_negative = function () {
    for (let i = 0; i < this.length; i++) {
        if (this[i] < 0) {
            this.splice(i, 1);
        }
    }
}

let testArr = [1, -1, 2, -2, 3, -3]
testArr.trim_negative()
console.log(testArr)
