function dihedralcheck() {
  document.getElementById("discrete-groups").style.display = "none";
  document.getElementById("dihedral-groups").style.display = "block";
}

function dihedralSubmit() {
  let n = document.getElementById("dn").value;
  n = Number(n);

  let row = [];
  let num_row = [];
  let value_row = [];

  // Building Number set
  for (i = 0; i < n; i++) {
    num_row.push(i + 1);
  }
  // Corrects invalid indicies
  function index(k) {
    while (0 > k || k > n - 1) {
      if (k < 0) {
        k = k + n;
      }
      if (k > n - 1) {
        k = k - n;
        k;
      }
    }
    return k;
  }

  // Rotation function
  function R(c, temp_list = num_row) {
    c = Number(c);

    if (c === 0) return temp_list;

    while (c !== 0) {
      console.log("c", c);
      temp = temp_list.at(-1);
      temp_list.pop();
      temp_list.unshift(temp);
      c = c - 1;
    }

    return temp_list;
  }

  // (S) Odd Reflection function
  function S(z, temp_list = num_row) {
    let rep = 0;
    while (rep != parseInt(n / 2)) {
      let temp_var = temp_list[index(z - rep - 1)];
      temp_list[index(z - rep - 1)] = num_row[index(z + rep + 1)];
      temp_list[index(z + rep + 1)] = temp_var;
      rep += 1;
    }
    return temp_list;
  }

  // (M) Even Reflection (Along line joining mid points of two opposite sides)
  function M(x, temp_list = num_row) {
    let rep = 1;
    x = x - 1;
    let y = x + 1;
    while (rep != parseInt(n / 2) + 1) {
      let temp_var = temp_list[index(x - rep + 1)];
      temp_list[index(x - rep + 1)] = num_row[index(y + rep - 1)];
      temp_list[index(y + rep - 1)] = temp_var;
      rep += 1;
    }
    return temp_list;
  }

  // (V) Even Reflection (Along line joining two opposite vertices)
  function V(z, temp_list = num_row) {
    let rep = 0;
    z = z - 1;
    while (rep != parseInt(n / 2) - 1) {
      let temp_var = temp_list[index(z - rep - 1)];
      temp_list[index(z - rep - 1)] = num_row[index(z + rep + 1)];
      temp_list[index(z + rep + 1)] = temp_var;
      rep += 1;
    }
    return temp_list;
  }

  // Evaluation function (double)
  function ev(a, b) {
    let fn1 = a[0];
    let fn2 = b[0];
    ans = eval(fn2 + "(b[1])");
    return eval(fn1 + "(a[1], ans)");
  }

  // Evaluation function (single)
  function evs(a) {
    let fn1 = a[0];
    return eval(fn1 + "(a[1])");
  }

  //Building dihedral element set
  for (i = 0; i < n; i++) {
    row.push("R" + i.toString());
  }
  if (n % 2 === 0) {
    for (i = 0; i < Number(n / 2); i++) {
      row.push("M" + (i + 1).toString());
    }
    for (i = 0; i < Number(n / 2); i++) {
      row.push("V" + (i + 1).toString());
    }
  } else if (n % 2 !== 0) {
    for (i = 0; i < n; i++) {
      row.push("S" + (i + 1).toString());
    }
  }

  // Building
  let pair_arr = [];
  for (i = 0; i < 2 * n; i++) {
    let t_list = [];
    t_list.push(row[i]);
    t_list.push(evs(row[i]));
    pair_arr.push(t_list);
  }

  console.log(M(1, M(1)));
  // console.log("evs(row[i])", 1, R(1));
  // console.log("evs(row[i])", 2, R(2));
  // console.log("evs(row[i])", R(3));
  // console.log("evs(row[i])", R(4));
  // console.log("evs(row[i])", R(5));
  // console.log("evs(row[i])", R(6));
  // console.log("evs(row[i])", R(7));
  // Generating Table elements
  // for (let i = 0; i < 2 * n; i++) {
  //   let tem_list = [];
  //   for (let j = 0; j < 2 * n; j++) {
  //     for (let k = 0; k < 2 * n; k++) {
  //       if (ev(row[i], row[j]) === pair_arr[k][1]) {
  //         console.log(i, j, k);
  //         console.log(ev(row[i], row[j]), pair_arr[k][1]);
  //         tem_list.push(pair_arr[k][0]);
  //       }
  //     }
  //   }
  //   value_row.push(tem_list);
  // }
}
