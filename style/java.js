 class Rectangle {

        constructor(width, length) {
          this.width = width;
          this.length = length;
        }

        Area() {
          return this.width * this.length;
        }

        Perimeter() {
          return 2 * (this.width + this.length);
        }
      }

      let w = parseInt(prompt("Enter the Width"));
      let l = parseInt(prompt("Enter the length"));

      let rectangle = new Rectangle(w,l);

      let area = rectangle.Area();
      let perimeter = rectangle.Perimeter();

      document.write("Area is " + area);
      document.write("<br>")
      document.write("Perimeter is " + perimeter);
