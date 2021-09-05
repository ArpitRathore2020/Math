function inverse() {
  let a = document.querySelector("#a").value;
  let b = document.querySelector("#b").value;
  let c = document.querySelector("#c").value;
  let d = document.querySelector("#d").value;
  let n = document.querySelector("#n").value;
  let determinant = a * d - b * c;

  a = Number(a);
  b = Number(b);
  c = Number(c);
  d = Number(d);
  n = Number(n);

  if (determinant === 0) {
    document.querySelector("#ans").innerHTML =
      "<font color='red'> Inverse doesn't exist OR Invalid Input</font> ";
    return;
  }
  function additionModuloCheck(k) {
    while (0 > k || k > n - 1) {
      console.log(k);
      if (k < 0) {
        k = k + n;
      }
      if (k > n - 1) {
        k = k - n;
      }
    }
    return k;
  }

  let includeStep1 = false;
  if (determinant < n - 1 && determinant > 0) {
  } else {
    includeStep1 = true;
    determinant = additionModuloCheck(determinant);
  }

  let factor = 100;
  for (i = 1; i < n; i++) {
    if ((determinant * i) % n === 1) {
      factor = i;
      break;
    }
  }

  console.log("factor-> ", factor);

  let A1 = d;
  let B1 = -b;
  let C1 = -c;
  let D1 = a;

  let A2 = additionModuloCheck(d);
  let B2 = additionModuloCheck(-b);
  let C2 = additionModuloCheck(-c);
  let D2 = additionModuloCheck(a);

  let A3 = A2 * factor;
  let B3 = B2 * factor;
  let C3 = C2 * factor;
  let D3 = D2 * factor;

  let A4 = additionModuloCheck(A3);
  let B4 = additionModuloCheck(B3);
  let C4 = additionModuloCheck(C3);
  let D4 = additionModuloCheck(D3);

  console.log("1 -> ", A1, B1, C1, D1);
  console.log("2 -> ", A2, B2, C2, D2);
  console.log("3 -> ", A3, B3, C3, D3);
  console.log("4 -> ", A4, B4, C4, D4);

  a = a.toString();
  b = b.toString();
  c = c.toString();
  d = d.toString();
  n = n.toString();
  determinant = determinant.toString();

  let step1 = "";
  if (includeStep1 === true) {
    step1 =
      `$$ \\text{As}` +
      (a * d - b * c).toString() +
      `\\notin GL(2,Z_{` +
      n.toString() +
      `}), \\;` +
      `\\text{we find x in }` +
      (a * d - b * c).toString() +
      `\\equiv x(mod \\;` +
      n.toString() +
      `)$$` +
      `$$ x =` +
      determinant +
      `\\Rightarrow det(A)=` +
      determinant +
      `$$`;
  }

  const answer =
    `$$GL(2,Z_{11}) =  \\left( \\begin{bmatrix} a & b \\newline c & d \\end{bmatrix}: \\; a,b,c,d \\in Z_{11}, \\; ad-bc \\neq 0 \\right)$$` +
    `\\begin{align*}` +
    `det(A) &= (` +
    a.toString() +
    `)\\times(` +
    d.toString() +
    `) - (` +
    b.toString() +
    `)\\times(` +
    c.toString() +
    `)` +
    `\\newline` +
    `&=(` +
    (a * d).toString() +
    `)-(` +
    (b * c).toString() +
    `) \\newline &=` +
    (a * d - b * c).toString() +
    `\\end{align*}` +
    step1 +
    `Inverse of A\\begin{align*} A^{-1}&=\\frac{1}{det(A)}\\times adj(A) \\newline` +
    `&=\\frac{1}{det(A)}\\times \\begin{bmatrix} d & -b \\newline -c & a \\end{bmatrix} \\newline` +
    `&=\\frac{1}{` +
    determinant +
    `}\\times \\begin{bmatrix}` +
    A1.toString() +
    `&` +
    B1.toString() +
    `\\newline` +
    C1.toString() +
    `&` +
    D1.toString() +
    `\\end{bmatrix}` +
    `\\end{align*}` +
    `Converting elements so that they all belong to the set` +
    `$$` +
    A1 +
    `=` +
    A2 +
    `,\\;` +
    B1 +
    `=` +
    B2 +
    `,\\;` +
    C1 +
    `=` +
    C2 +
    `,\\;` +
    D1 +
    `=` +
    D2 +
    `$$` +
    `$$` +
    determinant +
    `^{-1}=` +
    factor.toString() +
    `$$` +
    `\\begin{align*}` +
    `A^{-1} &= ` +
    factor +
    `\\times` +
    `\\begin{bmatrix}` +
    A2 +
    `&` +
    B2 +
    `\\newline` +
    C2 +
    `&` +
    D2 +
    `\\end{bmatrix}` +
    `\\newline &=` +
    `\\begin{bmatrix}` +
    A3 +
    `&` +
    B3 +
    `\\newline` +
    C3 +
    `&` +
    D3 +
    `\\end{bmatrix}` +
    `\\end{align*}` +
    `Converting elements so that they all belong to the set` +
    `$$` +
    A3 +
    `=` +
    A4 +
    `,\\;` +
    B3 +
    `=` +
    B4 +
    `,\\;` +
    C3 +
    `=` +
    C4 +
    `,\\;` +
    D3 +
    `=` +
    D4 +
    `$$` +
    `$$ \\text{Therefore} \\begin{bmatrix}` +
    a +
    `&` +
    b +
    `\\newline` +
    c +
    `&` +
    d +
    `\\end{bmatrix}^{-1} =` +
    `\\begin{bmatrix}` +
    A4 +
    `&` +
    B4 +
    `\\newline` +
    C4 +
    `&` +
    D4 +
    `\\end{bmatrix} \\; \\text{in} \\; GL(2,Z_{` +
    n +
    `}) $$`;

  document.querySelector("#ans").innerHTML = answer;
  MathJax.typeset();
}
