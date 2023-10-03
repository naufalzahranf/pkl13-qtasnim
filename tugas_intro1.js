//nomor 1
const biodata = {
    name: "naufal",
    age: 18,
    hobies: ["Playing Footbal", "Watching Film", "Swiming"],
    isMaried: false,
    scholList: [
        {name: "TK AL-Madinah", yearIn: 2010, yearOut: 2012, major: null},
        {name: "SDN 090 CIBIRU", yearIn: 2012, yearOut: 2018, major: null},
        {name: "SMPN 1 CILEUNYI", yearIn: 2018, yearOut: 2021, major: null},
        {name: "SMKN 13 BANDUNG", yearIn: 2021, yearOut: 2024, major: "Software Engineering"},
    ],
    skills: [
        {skillsName: "HTML & CSS", level: "Beginer"},
        {skillsName: "Figma", level: "Beginer"},
    ],
    interesInCoding: true
};

// console.log(biodata);

//nomor 2
const mtk = 90;
const bahasaIndonesia = 94;
const bahasaInggris = 91;
const ipa = 86;

if (!mtk || !bahasaIndonesia || !bahasaInggris || !ipa) {
  console.log("Semua nilai harus diisi");
} else {
  const totalNilai = mtk + bahasaIndonesia + bahasaInggris + ipa;
  const rataRata = totalNilai / 4;

  let grade;
  if (rataRata >= 90 && rataRata <= 100) {
    grade = "A";
  } else if (rataRata >= 80 && rataRata < 90) {
    grade = "B";
  } else if (rataRata >= 70 && rataRata < 80) {
    grade = "C";
  } else if (rataRata >= 60 && rataRata < 70) {
    grade = "D";
  } else {
    grade = "E";
  }

//   console.log(`Rata-rata = ${rataRata}`);
//   console.log(`Grade = ${grade}`);
}

//nomor 3
const printSegitiga = 5;

if (typeof printSegitiga === 'number') {
  for (let i = printSegitiga; i >= 1; i--) {
    let output = '';
    for (let j = 1; j <= i; j++) {
      output += j + ' ';
    }
    console.log(output);
  }
} else {
    console.log('Data harus number');
}

//nomor 4
let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
  };
  const newData = {
    ...data,
    name: "Naufal Zahran F",
    email: "naufalzahran1979@gmail.com",
    hobby: "Swimming",
  };
  
  console.log(newData);
  
  const {
    address: { street, city },
  } = data;
  
  console.log(`Street: ${street}`);
  console.log(`City: ${city}`);
  