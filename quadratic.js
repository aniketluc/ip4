function findRoots(a, b, c) {
    let discriminant = b * b - 4 * a * c;
    if (discriminant < 0) {
      return "No real roots";
    } else {
      let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      return [root1, root2];
    }
  }
  
  // Example usage:
  let roots = findRoots(1, -3, 2);
  console.log(roots); // Output: [1, 2]