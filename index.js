function additionModulo() {
  let set = document.getElementById("set").value;
  let mod = document.getElementById("mod").value;
  let type = document.getElementById("type").value;
  let h_row = set.split(",");
  let l = h_row.length;
  let identityElement;
  let commutative;

  if (h_row.length === 1) {
    alert(
      "Invalid input \n 1. Make sure that the set has at least two elements. \n 2. Ensure all elements are sepreated by a comma."
    );
    return;
  }

  for (let k = 0; k < h_row.length; k++) {
    h_row[k] = Number(h_row[k]);
  }
  console.log("h_row", h_row);
  let v_row = h_row;
  let value_row = [];

  for (let i = 0; i < l; i++) {
    temp_row = [];
    for (let j = 0; j < l; j++) {
      if (type === "Addition modulo") {
        temp_row.push((h_row[i] + v_row[j]) % mod);
      } else if (type === "Multiplication modulo") {
        temp_row.push((h_row[i] * v_row[j]) % mod);
      } else if (type === "Addition") {
        temp_row.push(h_row[i] + v_row[j]);
      } else if (type === "Multiplication") {
        temp_row.push(h_row[i] * v_row[j]);
      } else if (type === "Substraction") {
        temp_row.push(h_row[i] - v_row[j]);
      } else if (type === "Division") {
        temp_row.push(h_row[i] / v_row[j]);
      }
    }
    value_row.push(temp_row);
  }
  console.log(value_row);

  function listAreEqual(l1, l2) {
    let isEqual = true;
    if (Array.isArray(l1) === false || Array.isArray(l2) === false) {
      isEqual = false;
      return isEqual;
    }
    if (l1.length === 0 || l2.length === 0) {
      isEqual = false;
      return isEqual;
    }
    for (let i = 0; i < l; i++) {
      if (l1[i] !== l2[i]) {
        isEqual = false;
        return isEqual;
      }
    }
    return isEqual;
  }

  if (h_row.length == 0) {
    alert("Set G is empty");
    return;
  }

  function closureRedGreen() {
    if (closureBoolean === true) {
      document.getElementById("closure_text").innerHTML =
        "✅ <b><font color='green'>Yes, Closure </font></b>";
    } else {
      document.getElementById("closure_text").innerHTML =
        "❌ <b><font color='red'>Not Closure </font></b>";
    }
  }

  //Closure
  closureBoolean = true;
  for (let i = 0; i < l; i++) {
    for (let j = 0; j < l; j++) {
      if (h_row.includes(value_row[i][j]) === false) {
        closureBoolean = false;
        break;
      }
    }
  }

  closureRedGreen();

  // Commutativity;
  let c_flag = 0;
  for (let i = 0; i < l; i++) {
    for (let j = 0; j < l; j++) {
      if (i != j && value_row[i][j] === value_row[j][i]) {
        c_flag = 1;
        continue;
      } else if (i != j) {
        c_flag = 0;
      }
    }
  }

  if (c_flag === 1) {
    commutative = true;
    console.log("Yes Commutative (S)");
  } else {
    commutative = false;
    console.log("no not Commutative (S)");
  }

  // Identity Element
  identityElementExists = false;
  for (i = 0; i < h_row.length; i++) {
    if (h_row.toString() === value_row[i].toString()) {
      identityElement = h_row[i];
      identityElementExists = true;
    }
  }
  if (typeof identityElement === "number") {
    console.log(typeof identityElement, "check check");
    document.getElementById("identity_text").innerHTML =
      "✅ <b><font color='green'>Identity element = " +
      identityElement.toString() +
      "</font></b> ";
  } else {
    document.getElementById("identity_text").innerHTML =
      "❌ <b><font color='red'>Identity element doesn't exist </font></b>";
  }

  // Inverse;
  let txt = "<b><font color='green'></font>";
  let inverseCollectionList = [];
  let inverseList = [];
  for (i = 0; i < h_row.length; i++) {
    for (j = 0; j < h_row.length; j++) {
      if (value_row[i][j] == identityElement) {
        temp_row = [];
        txt =
          txt +
          "Inverse of " +
          h_row[i].toString() +
          " is " +
          h_row[j].toString() +
          "</br>";
        temp_row.push(
          "Inverse of " + h_row[i].toString() + " is " + h_row[j].toString()
        );
        inverseCollectionList.push(temp_row);
        inverseList.push(h_row[i]);
      }
    }
  }

  if (inverseCollectionList.length === h_row.length) {
    console.log("All inverses exists");
    document.getElementById("inverse_text").innerHTML =
      "✅ <b><font color='green'>Inverse exists for all</font></b>";
  } else {
    document.getElementById("inverse_text").innerHTML =
      "❌ <b><font color='red'>Inverse doesn't exists for all</font></b>";
  }

  function value(i, j) {
    if (type === "Addition modulo") {
      return (h_row[i] + h_row[j]) % mod;
    } else if (type === "Multiplication modulo") {
      return (h_row[i] * h_row[j]) % mod;
    } else if (type === "Addition") {
      return h_row[i] + h_row[j];
    } else if (type === "Multiplication") {
      return h_row[i] * h_row[j];
    } else if (type === "Substraction") {
      return h_row[i] - h_row[j];
    } else if (type === "Division") {
      return h_row[i] / h_row[j];
    }
  }

  function com_load() {
    if (commutative === true) {
      document.getElementById("com_text").innerHTML =
        "✅ <b><font color='green'>Yes, Commutative </font></b>";
      document.getElementById("Commutative").src =
        "https://www.seekpng.com/png/detail/1-10353_check-mark-green-png-green-check-mark-svg.png".src;
    } else {
      document.getElementById("com_text").innerHTML =
        "❌ <b><font color='red'>Not Commutative </font></b>";
      console.log("Bad News");
      document.getElementById("Commutative").src =
        "https://cdn1.vectorstock.com/i/1000x1000/13/80/x-cross-icon-vector-26201380.jpg".src;
    }
  }
  com_load();

  let tableDataArray = value_row;
  // tableDataArray.unshift(h_row);

  let cayleyHeaderTable = "<tr>";
  for (i = 0; i < l; i++) {
    cayleyHeaderTable += "<th>" + h_row[i].toString() + "</th>";
  }
  document.getElementById("topHeader").innerHTML = cayleyHeaderTable;

  let cayleyLeftTable = "";
  for (i = 0; i < l; i++) {
    cayleyLeftTable += "<tr><th>" + h_row[i].toString() + "</th></tr>";
  }
  document.getElementById("leftHeader").innerHTML = cayleyLeftTable;

  let cayleyTableText = "";
  for (i = 0; i < tableDataArray.length; i++) {
    cayleyTableText += "<tr>";
    for (j = 0; j < tableDataArray.length; j++) {
      console.log(i, j);
      cayleyTableText += "<td>" + tableDataArray[i][j].toString() + "</td>";
    }
    cayleyTableText += "</tr>";
  }

  document.getElementById("cayleyTable").innerHTML = cayleyTableText;

  // Associativitiy;

  // Commutativity;
  // let c_flag = 0;
  // for (i = 0; i < h_row.length; i++) {
  //   for (j = 0; j < h_row.length; j++) {
  //     if (value(h_row[i], h_row[j]) == value(h_row[j], h_row[i])) {
  //       continue;
  //     } else {
  //       c_flag = 1;
  //       break;
  //     }
  //   }
  // }
  // if (c_flag === 0) {
  //   console.log("Yes Commutative");
  // } else if (c_flag === 1) {
  //   console.log("Not commuatative");
  // } else {
  //   console.log("Ar Error commutative");
  // }
}

// function additionModulo() {
//   let ans;
//   var a = window.prompt("Enter the value of a: ");
//   var b = window.prompt("Enter the value of b: ");
//   var m = window.prompt("Enter the value of m: ");
//   a = parseInt(a);
//   b = parseInt(b);
//   m = parseInt(m);
//   ans = (a + b) % m;
//   alert("Answer is " + ans);
//
