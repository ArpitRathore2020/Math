function customfn() {
  let type = document.getElementById("type").value;

  if (type === "Custom") {
    document.getElementById("custom_hide").style.display = "block";
  } else {
    document.getElementById("custom_hide").style.display = "none";
  }
  if (type === "Addition modulo" || type === "Multiplication modulo") {
    document.getElementById("mod_hide").style.display = "block";
  } else {
    document.getElementById("mod_hide").style.display = "none";
  }
  if (type === "U") {
    document.getElementById("Un").style.display = "block";
  } else {
    document.getElementById("Un").style.display = "none";
  }
}

function gcd_fn(a, b) {
  let gcd = -1;
  let a_factor_list = [];
  for (let i = 0; i < a + 1; i++) {
    if (a % i === 0) {
      a_factor_list.push(i);
    }
  }
  let b_factor_list = [];
  for (let i = 0; i < b + 1; i++) {
    if (b % i === 0) {
      b_factor_list.push(i);
    }
  }

  for (let i = 0; i < a_factor_list.length; i++) {
    for (let j = 0; j < b_factor_list.length; j++) {
      if (a_factor_list[i] === b_factor_list[j]) {
        gcd = a_factor_list[i];
      }
    }
  }

  return gcd;
}

function additionModulo() {
  let set = document.getElementById("set").value;
  let type = document.getElementById("type").value;
  let mod = document.getElementById("mod").value;

  if (type === "U") {
    set = "";
    let n = document.getElementById("Unvalue").value;
    for (i = 0; i < n; i++) {
      if (gcd_fn(i, n) === 1 && i < n - 1) {
        set += i.toString() + ",";
      } else if (gcd_fn(i, n) === 1 && i === n - 1) {
        set += i.toString();
      }
    }
    type = "Multiplication modulo";
    mod = n;
  }

  let h_row = set.split(",");
  let l = h_row.length;
  let identityElement;
  let commutative;
  // try {

  document.getElementById("hide").style.display = "block";

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
      } else if (type === "Custom") {
        temp_row.push(
          eval(
            document
              .getElementById("op")
              .value.replaceAll("a", "(h_row[i])")
              .replaceAll("b", "(v_row[j])")
            // .replaceAll(".", "Math.")
          )
        );
      }
    }
    value_row.push(temp_row);
  }

  // function listAreEqual(l1, l2) {
  //   let isEqual = true;
  //   if (Array.isArray(l1) === false || Array.isArray(l2) === false) {
  //     isEqual = false;
  //     return isEqual;
  //   }
  //   if (l1.length === 0 || l2.length === 0) {
  //     isEqual = false;
  //     return isEqual;
  //   }
  //   for (let i = 0; i < l; i++) {
  //     if (l1[i] !== l2[i]) {
  //       isEqual = false;
  //       return isEqual;
  //     }
  //   }
  //   return isEqual;
  // }

  if (h_row.length == 0) {
    alert("Set G is empty");
    return;
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

  if (closureBoolean === true) {
    document.getElementById("closure_text").innerHTML =
      "✅ <b><font color='green'>Yes, Closure </font></b>";
  } else {
    document.getElementById("closure_text").innerHTML =
      "❌ <b><font color='red'>Not Closure </font></b>";
  }

  // Commutativity;
  commutative = true;
  for (let i = 0; i < l; i++) {
    for (let j = 0; j < l; j++) {
      if (i != j && value_row[i][j] === value_row[j][i]) {
        continue;
      } else if (i !== j) {
        commutative = false;
      } else if (i === j) {
      }
    }
  }

  if (commutative === true) {
    document.getElementById("com_text").innerHTML =
      "✅ <b><font color='green'>Yes, Commutative </font></b>";
    document.getElementById("Commutative").src =
      "https://www.seekpng.com/png/detail/1-10353_check-mark-green-png-green-check-mark-svg.png".src;
  } else {
    document.getElementById("com_text").innerHTML =
      "❌ <b><font color='red'>Not Commutative </font></b>";
    document.getElementById("Commutative").src =
      "https://cdn1.vectorstock.com/i/1000x1000/13/80/x-cross-icon-vector-26201380.jpg".src;
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
  let txt = "";
  let inverseCollectionList = [];
  let inverseList = [];
  for (i = 0; i < h_row.length; i++) {
    for (j = 0; j < h_row.length; j++) {
      if (value_row[i][j] == identityElement) {
        temp_row = [];
        txt =
          txt +
          "<li>Inverse of <font color='blue'>" +
          h_row[i].toString() +
          "</font>" +
          " is <font color='green'>" +
          h_row[j].toString() +
          "</font></li>";
        temp_row.push(
          "Inverse of " + h_row[i].toString() + " is " + h_row[j].toString()
        );
        inverseCollectionList.push(temp_row);
        inverseList.push(h_row[i]);
      }
    }
  }
  for (i = 0; i < h_row.length; i++) {
    if (inverseList.includes(h_row[i]) === false) {
      txt +=
        '<li>Inverse of <font color="red">' +
        h_row[i].toString() +
        "</font> doesn't exist</li>";
    }
  }
  document.getElementById("Inverse_ul").innerHTML = txt;

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
  console.log(tableDataArray);
  // tableDataArray.unshift(h_row);

  let cayleyHeaderTable = "<tr>";
  for (i = 0; i < h_row.length; i++) {
    cayleyHeaderTable += "<th>" + h_row[i].toString() + "</th>";
  }
  document.getElementById("topHeader").innerHTML = cayleyHeaderTable;

  let cayleyLeftTable = "";
  for (i = 0; i < h_row.length; i++) {
    cayleyLeftTable += "<tr><th>" + h_row[i].toString() + "</th></tr>";
  }
  document.getElementById("leftHeader").innerHTML = cayleyLeftTable;

  let cayleyTableText = "";
  for (i = 0; i < tableDataArray.length; i++) {
    cayleyTableText += "<tr>";
    for (j = 0; j < tableDataArray.length; j++) {
      cayleyTableText += "<td>" + tableDataArray[i][j].toString() + "</td>";
    }
    cayleyTableText += "</tr>";
  }

  document.getElementById("cayleyTable").innerHTML = cayleyTableText;

  // Associativitiy;
  let associativity = true;
  for (i = 0; i < h_row.length; i++) {
    for (j = 0; j < h_row.length; j++) {
      for (k = 0; k < l; k++) {
        if (
          type === "Addition" &&
          value_row[i][j] + h_row[k] === h_row[i] + value_row[j][k]
        ) {
        } else if (
          type === "Multiplication" &&
          value_row[i][j] * h_row[k] === h_row[i] * value_row[j][k]
        ) {
        } else if (
          type === "Substraction" &&
          value_row[i][j] - h_row[k] === h_row[i] - value_row[j][k]
        ) {
        } else if (
          type === "Division" &&
          value_row[i][j] / h_row[k] === h_row[i] / value_row[j][k]
        ) {
        } else if (
          type === "Addition modulo" &&
          (value_row[i][j] + h_row[k]) % mod ===
            (h_row[i] + value_row[j][k]) % mod
        ) {
        } else if (
          type === "Multiplication modulo" &&
          (value_row[i][j] * h_row[k]) % mod ===
            (h_row[i] * value_row[j][k]) % mod
        ) {
        } else if (
          type === "#1" &&
          value_row[i][j] + h_row[k] + value_row[i][j] * h_row[k] ===
            h_row[k] + value_row[i][j] + h_row[k] * value_row[i][j]
        ) {
        } else if (
          type === "#2" &&
          value_row[i][j] + h_row[k] - value_row[i][j] * h_row[k] ===
            h_row[k] + value_row[i][j] - h_row[k] * value_row[i][j]
        ) {
        } else if (
          type === "Custom" &&
          eval(
            document
              .getElementById("op")
              .value.replaceAll("a", "(value_row[i][j])")
              .replaceAll("b", "(h_row[k])")
            // .replaceAll(".", "Math.")
          ) ===
            eval(
              document
                .getElementById("op")
                .value.replaceAll("a", "(h_row[i])")
                .replaceAll("b", "(value_row[j][k])")
              // .replaceAll(".", "Math.")
            )
        ) {
        } else {
          associativity = false;
        }
      }
    }
  }

  if (associativity === true) {
    document.getElementById("associativity_text").innerHTML =
      "✅ <b><font color='green'>Yes, Associative </font></b>";
  } else if (associativity === false) {
    document.getElementById("associativity_text").innerHTML =
      "❌ <b><font color='red'>Not, Associative </font></b>";
  }

  if (
    commutative === true &&
    closureBoolean === true &&
    identityElementExists === true &&
    inverseCollectionList.length === h_row.length &&
    associativity === true
  ) {
    document.getElementById("finalResult").innerHTML =
      "<p><b>{G,*}={" +
      h_row.toString() +
      "} is an <font color='green'>abelian Group</b></font></p>";
  } else if (
    commutative === false &&
    closureBoolean === true &&
    identityElementExists === true &&
    inverseCollectionList.length === h_row.length &&
    associativity === true
  ) {
    document.getElementById("finalResult").innerHTML =
      "<p><b>{G,*}={" +
      h_row.toString() +
      "} is a </font><font color='red'>non-abelian</font><font color='green'> Group</font></b></p>";
  } else {
    document.getElementById("finalResult").innerHTML =
      "<p><b>{G,*}={" +
      h_row.toString() +
      "} is a <font color='red'><b>NOT</b></font> a Group</b></p>";
  }
}
// catch (err) {
//   alert(
//     "Invalid input \n 1. Make sure that the set has at least two elements. \n 2. Ensure all elements are sepreated by a comma. \n 3. Make sure you have used math operations like '*', '+' etc."
//   );
// }
