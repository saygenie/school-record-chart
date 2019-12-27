const analyze = (tb, length) => {
  const data = [];
  for (let row = 1; row <= length; row += 1) {
    let one = {};
    one.year = parse(tb, row, 1);
    one.semester = parse(tb, row, 2);
    one.code = parse(tb, row, 3);
    one.name = parse(tb, row, 4);
    one.division = parse(tb, row, 5);
    one.credits = parse(tb, row, 8);
    one.gpa = parse(tb, row, 11);
    one.retakenCode = parse(tb, row, 14);
    one.deleted = parse(tb, row, 15);
    one.yearterm = one.year + "-" + one.semester;
    data.push(one);
  }
  return data;
};

const parse = (tb, row, col) => {
  try {
    const r = tb.getElementsByTagName("tr")[row - 1];
    const d = r.getElementsByTagName("td")[col - 1];
    let content = d.innerText;

    if (!content) content = "null";

    return content;
  } catch (e) {
    //마지막 row의 경우, 제대로 copy가 되지 않아 error의 값이 들어갈 수 있음.
    //그래서 null으로 반환.
    console.error(e);
    return "null";
  }
};

export const parsing = () => {
  const w = document.getElementById("editableDiv");
  const tb = w.getElementsByTagName("tbody")[1];
  const length = tb.rows.length;
  const res = analyze(tb, length);

  return res;
};

const flatReducer = (accumulator, current, index, array) => {
  const accIdx = accumulator.findIndex(
    oneDatum => oneDatum.yearterm === current.yearterm
  );
  if (accIdx !== -1) {
    accumulator[accIdx].averageGPA +=
      Number(current.gpa) * Number(current.credits);
    accumulator[accIdx].credits += Number(current.credits);
  } else {
    const newDatum = {
      yearterm: String(current.yearterm),
      averageGPA: Number(current.gpa) * Number(current.credits),
      credits: Number(current.credits)
    };
    accumulator.push(newDatum);
  }
  return accumulator;
};

export const processing = data => {
  let res = data.reduce(flatReducer, []);

  res.map(datum => {
    datum.averageGPA = (datum.averageGPA / datum.credits).toFixed(2);
  });

  return res;
};
