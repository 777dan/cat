let cat = {
    name: "Felix",
    age: 5,
    weight: 3,
    feeding: function () {
        while (this.weight < 7) {
            this.weight++;
        }
        alert("Вес после кормления: " + this.weight);
    },
    diet: function () {
        while (this.weight > 7) {
            this.weight--;
        }
        alert("Вес после диеты: " + this.weight);
    },
    toString: function () {
        return "Кот " + this.name + ". Вес: " + this.weight + ". Возраст: " + this.age;
    },

};
alert(cat.toString());
cat.feeding();
cat.diet();