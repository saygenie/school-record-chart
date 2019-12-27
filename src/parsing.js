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
    one.grade = parse(tb, row, 10);
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
    if (row === tb.rows.length) {
      return "null";
    } else {
      console.error(e);
      return e;
    }
  }
};

const allReducer = (accumulator, current, index, array) => {
  const accIdx = accumulator.findIndex(
    oneDatum => oneDatum.yearterm === current.yearterm
  );
  const majorFlag = current.division.indexOf("전공") !== -1;
  if (current.deleted !== "null") return accumulator;

  if (accIdx !== -1) {
    if (majorFlag) {
      accumulator[accIdx].majorGpa +=
        Number(current.credits) * Number(current.gpa);
      accumulator[accIdx].majorCredits += Number(current.credits);
    } else {
      accumulator[accIdx].generalGpa +=
        Number(current.credits) * Number(current.gpa);
      accumulator[accIdx].generalCredits += Number(current.credits);
    }
    accumulator[accIdx].totalGpa +=
      Number(current.gpa) * Number(current.credits);
    accumulator[accIdx].totalCredits += Number(current.credits);
    if (current.grade === "P" || current.grade === "F") {
      //PF일 경우
      accumulator[accIdx].pfLectures += 1;
    }
  } else {
    const newDatum = {
      yearterm: String(current.yearterm),
      totalGpa: Number(current.gpa) * Number(current.credits),
      totalCredits: Number(current.credits),
      generalGpa: majorFlag ? 0 : Number(current.gpa) * Number(current.credits),
      generalCredits: majorFlag ? 0 : Number(current.credits),
      majorGpa: majorFlag ? Number(current.gpa) * Number(current.credits) : 0,
      majorCredits: majorFlag ? Number(current.credits) : 0,
      pfLectures: current.grade === "P" || current.grade === "F" ? 1 : 0
    };
    accumulator.push(newDatum);
  }
  return accumulator;
};
const sumReducer = (accumulator, current, index, array) => {
  const majorFlag = current.division.indexOf("전공") !== -1;
  if (current.deleted !== "null") return accumulator;
  if (accumulator.length === 0) {
    const newDatum = {
      totalGpa: Number(current.gpa) * Number(current.credits),
      totalCredits: Number(current.credits),
      generalGpa: majorFlag ? 0 : Number(current.gpa) * Number(current.credits),
      generalCredits: majorFlag ? 0 : Number(current.credits),
      majorGpa: majorFlag ? Number(current.gpa) * Number(current.credits) : 0,
      majorCredits: majorFlag ? Number(current.credits) : 0,
      pfLectures: current.grade === "P" || current.grade === "F" ? 1 : 0
    };
    accumulator.push(newDatum);
  } else {
    if (current.grade === "P" || current.grade === "F")
      //PF일 경우
      accumulator[0].pfLectures += 1;
    accumulator[0].totalGpa += Number(current.gpa) * Number(current.credits);
    accumulator[0].totalCredits += Number(current.credits);
    if (majorFlag) {
      accumulator[0].majorGpa += Number(current.gpa) * Number(current.credits);
      accumulator[0].majorCredits += Number(current.credits);
    } else {
      accumulator[0].generalGpa +=
        Number(current.gpa) * Number(current.credits);
      accumulator[0].generalCredits += Number(current.credits);
    }
  }
  if (index === array.length - 1) {
    const res = {
      avgTotalGpa: (
        accumulator[0].totalGpa /
        (accumulator[0].totalCredits - accumulator[0].pfLectures)
      ).toFixed(2),
      avgMajorGpa: (
        accumulator[0].majorGpa / accumulator[0].majorCredits
      ).toFixed(2),
      avgGeneralGpa: (
        accumulator[0].generalGpa / accumulator[0].generalCredits
      ).toFixed(2)
    };
    return res;
  }
  return accumulator;
};

//학기별로 평균 GPA(전공, 교양, 전체), 이수학점(전공, 교양, 전체) 모아보기.
const processingAll = data => {
  let res = data.reduce(allReducer, []);
  console.log(JSON.stringify(res));
  res.map(datum => {
    datum.totalGpa = !datum.totalGpa
      ? 0
      : (datum.totalGpa / (datum.totalCredits - datum.pfLectures)).toFixed(2);
    datum.majorGpa = !datum.majorGpa
      ? 0
      : (datum.majorGpa / datum.majorCredits).toFixed(2);
    datum.generalGpa = !datum.generalGpa
      ? 0
      : (datum.generalGpa / datum.generalCredits).toFixed(2);
    delete datum.pfLectures;
  });
  console.log("--processed Data--");
  console.log(JSON.stringify(res));
  return res;
};
/**
  avgTotalGpa
  avgMajorGpa
  avgGeneralGpa 
   */
const summarizingAll = data => {
  let res = data.reduce(sumReducer, []);

  console.log("--processed Data--");
  console.log(JSON.stringify(res));
  return res;
};
const parsing = () => {
  const w = document.getElementById("editableDiv");
  const tb = w.getElementsByTagName("tbody")[1];
  const length = tb.rows.length;
  const res = analyze(tb, length);
  console.log("--parsed Data--");
  console.log(JSON.stringify(res));
  return res;
};
