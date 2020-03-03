class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }

}

const c = new Circle(10);
console.log(c.area());
