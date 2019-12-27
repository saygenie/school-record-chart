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
    data.push(one);
  }
  return data;
};
const tableAnalyze = (tb, row, col) => {
  try {
    const r = tb.getElementsByTagName("tr")[row - 1];
    const d = r.getElementsByTagName("td")[col - 1];
    let content = d.innerText;
    if (!content) content = "null";
    return content;
  } catch (error) {
    //마지막 row의 경우, 제대로 copy가 되지 않아 error의 값이 들어갈 수 있음.
    //그래서 null으로 반환.
    console.log("Err");
    return "null";
  }
};
const parsing = e => {
  const w = document.getElementById("editableDiv");
  const tb = w.getElementsByTagName("tbody")[1];
  const length = tb.rows.length;
  console.log(JSON.stringify(tableAnalyze(tb, length)));
};
const flatMapReducer = (accumulator, current, index, array) => {
  const accIdx = accumulator.findIndex(
    oneDatum => oneDatum.yearterm == current.yearterm
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
const processing = data => {
  const bbb = aaa.reduce(flatMapReducer, []);
  bbb.map(datum => {
    datum.averageGPA = datum.averageGPA / datum.credits;
  });
  console.log(JSON.stringify(bbb));
  return bbb;
};
const aaa = [
  {
    year: "2015",
    semester: "1",
    code: "CNCE15005",
    name: "정보과학개론",
    division: "교양",
    credits: "2",
    gpa: "3",
    retakenCode: "null",
    deleted: "null",
    yearterm: "20151"
  },
  {
    year: "2015",
    semester: "1",
    code: "COSE10101",
    name: "컴퓨터프로그래밍I",
    division: "교양",
    credits: "3",
    gpa: "3",
    retakenCode: "null",
    deleted: "null",
    yearterm: "20151"
  },
  {
    year: "2015",
    semester: "1",
    code: "COSE11101",
    name: "전산수학I(영강)",
    division: "교양",
    credits: "3",
    gpa: "3",
    retakenCode: "null",
    deleted: "null",
    yearterm: "20151"
  },
  {
    year: "2015",
    semester: "1",
    code: "GEKS001SB",
    name: "1학년 세미나",
    division: "교양",
    credits: "1",
    gpa: "0",
    retakenCode: "null",
    deleted: "null",
    yearterm: "20151"
  },
  {
    year: "2015",
    semester: "1",
    code: "GETE001C7",
    name: "사고와표현Ⅰ",
    division: "교양",
    credits: "2",
    gpa: "3",
    retakenCode: "null",
    deleted: "null",
    yearterm: "20151"
  },
  {
    year: "2015",
    semester: "1",
    code: "HOEW10100",
    name: "동아시아문명사",
    division: "교양",
    credits: "3",
    gpa: "3",
    retakenCode: "null",
    deleted: "null",
    yearterm: "20151"
  },
  {
    year: "2015",
    semester: "1",
    code: "IFLS003C7",
    name: "ACADEMIC ENGLISH I(영강)",
    division: "교양",
    credits: "2",
    gpa: "3",
    retakenCode: "null",
    deleted: "null",
    yearterm: "20151"
  },
  {
    year: "2015",
    semester: "1",
    code: "SOCI15105",
    name: "사회학의이해",
    division: "교양",
    credits: "3",
    gpa: "3",
    retakenCode: "null",
    deleted: "null",
    yearterm: "20151"
  },
  {
    year: "2015",
    semester: "2",
    code: "COSE10201",
    name: "컴퓨터프로그래밍II",
    division: "교양",
    credits: "3",
    gpa: "3.5",
    retakenCode: "null",
    deleted: "null",
    yearterm: "20152"
  },
  {
    year: "2015",
    semester: "2",
    code: "COSE11201",
    name: "전산수학II",
    division: "교양",
    credits: "3",
    gpa: "3.5",
    retakenCode: "null",
    deleted: "null",
    yearterm: "20152"
  },
  {
    year: "2015",
    semester: "2",
    code: "GEKS002UT",
    name: "1학년 세미나",
    division: "교양",
    credits: "1",
    gpa: "0",
    retakenCode: "null",
    deleted: "null",
    yearterm: "20152"
  },
  {
    year: "2015",
    semester: "2",
    code: "GEQR03900",
    name: "데이터로표현하는세상",
    division: "교양",
    credits: "3",
    gpa: "2.5",
    retakenCode: "null",
    deleted: "재수강",
    yearterm: "20152"
  },
  {
    year: "2015",
    semester: "2",
    code: "GEST11200",
    name: "바이러스:나노세계의강자",
    division: "교양",
    credits: "3",
    gpa: "3.5",
    retakenCode: "null",
    deleted: "null",
    yearterm: "20152"
  },
  {
    year: "2015",
    semester: "2",
    code: "GETE004C7",
    name: "사고와표현Ⅱ",
    division: "교양",
    credits: "2",
    gpa: "3.5",
    retakenCode: "null",
    deleted: "null",
    yearterm: "20152"
  },
  {
    year: "2015",
    semester: "2",
    code: "IFLS004C7",
    name: "ACADEMIC ENGLISH ∥(영강)",
    division: "교양",
    credits: "2",
    gpa: "3.5",
    retakenCode: "null",
    deleted: "null",
    yearterm: "20152"
  },
  {
    year: "2016",
    semester: "1",
    code: "EGRN15105",
    name: "컴퓨터언어및실습",
    division: "교양",
    credits: "3",
    gpa: "4",
    retakenCode: "null",
    deleted: "null",
    yearterm: "20161"
  },
  {
    year: "2016",
    semester: "1",
    code: "HEED19104",
    name: "결혼과가족의이해",
    division: "교양",
    credits: "3",
    gpa: "4",
    retakenCode: "null",
    deleted: "null",
    yearterm: "20161"
  },
  {
    year: "2016",
    semester: "1",
    code: "COSE21101",
    name: "이산수학(영강)",
    division: "전공선택",
    credits: "3",
    gpa: "4",
    retakenCode: "null",
    deleted: "null",
    yearterm: "20161"
  },
  {
    year: "2016",
    semester: "1",
    code: "COSE21501",
    name: "계산이론(영강)",
    division: "전공선택",
    credits: "3",
    gpa: "4",
    retakenCode: "null",
    deleted: "null",
    yearterm: "20161"
  },
  {
    year: "2016",
    semester: "1",
    code: "COSE22101",
    name: "논리설계(영강)",
    division: "전공선택",
    credits: "3",
    gpa: "4",
    retakenCode: "null",
    deleted: "null",
    yearterm: "20161"
  },
  {
    year: "2016",
    semester: "1",
    code: "COSE21302",
    name: "자료구조",
    division: "전공필수",
    credits: "3",
    gpa: "4",
    retakenCode: "null",
    deleted: "null",
    yearterm: "20161"
  },
  {
    year: "2016",
    semester: "2",
    code: "GEQR03900",
    name: "데이터로표현하는세상",
    division: "교양",
    credits: "3",
    gpa: "4.5",
    retakenCode: "GEQR039",
    deleted: "null",
    yearterm: "20162"
  },
  {
    year: "2016",
    semester: "2",
    code: "GESO13900",
    name: "체제전환기중국의정치및사회에대한이해",
    division: "교양",
    credits: "3",
    gpa: "4.5",
    retakenCode: "null",
    deleted: "null",
    yearterm: "20162"
  },
  {
    year: "2016",
    semester: "2",
    code: "COSE21201",
    name: "프로그래밍언어(영강)",
    division: "전공선택",
    credits: "3",
    gpa: "4.5",
    retakenCode: "null",
    deleted: "null",
    yearterm: "20162"
  },
  {
    year: "2016",
    semester: "2",
    code: "COSE24202",
    name: "데이터통신",
    division: "전공선택",
    credits: "3",
    gpa: "4.5",
    retakenCode: "null",
    deleted: "null",
    yearterm: "20162"
  },
  {
    year: "2016",
    semester: "2",
    code: "COSE21404",
    name: "알고리즘(영강)",
    division: "전공필수",
    credits: "3",
    gpa: "4.5",
    retakenCode: "null",
    deleted: "null",
    yearterm: "20162"
  },
  {
    year: "2016",
    semester: "2",
    code: "COSE22202",
    name: "컴퓨터구조(영강)",
    division: "전공필수",
    credits: "3",
    gpa: "4.5",
    retakenCode: "null",
    deleted: "null",
    yearterm: "20162"
  }
];

/**
       *   {
          "year": "2015",
          "code": "COSE111",
          "semester": "1",
          "name": "수업1-1",
          "division": "교양",
          "credits": "2",
          "gpa": "3",
          "deleted": "",
          "retakenCode": ""
        },
       */
