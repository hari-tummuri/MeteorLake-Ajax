var UserList = [
  {
    email: "naveen@gmail.com",
    password: "Demo123",
    profileName: "Naveen",
    profileimage:
      "https://media.licdn.com/dms/image/C4E03AQErNeIsqNvsmA/profile-displayphoto-shrink_800_800/0/1626780671355?e=2147483647&v=beta&t=kDF_HBtmb1RKMgnwak2-p8HNiU2dBe1wd2di_Y3-QFE",
    won: 50,
    loss: 10,
    inProgress: 7,
    profileDp: "NA",
    designation: "Senior Advocate",
    practiceType: "Independent Practice",
    AreasofExpertise: "Criminal Law, Civil Law",
    YearsofExperience: 15,
    Languages: "English, Hindi",
  },
  {
    email: "abhijeet.kadam@gmail.com",
    password: "Abhijeet123",
    profileName: "Abhijeet",
    profileimage:
      "https://media.istockphoto.com/id/503040171/photo/middle-eastern-businessman-portrait.jpg?s=612x612&w=0&k=20&c=7t6c_HQHfUZNgrVtR-G1rQpJAMaCbFsuxppDRKBnXDw=",
    won: 55,
    loss: 11,
    inProgress: 15,
    profileDp: "AK",
    designation: "Senior Advocate",
    practiceType: "Independent Practice",
    AreasofExpertise: "Criminal Law, Corporate Law",
    YearsofExperience: 15,
    Languages: "English, Hindi, Telugu",
  },
];

var aEvents = [
  {
    caseNo: "1024",
    date: "03-03-2024",
    startTime: "9:00 AM",
    endTime: "12:00 PM",
    datestr: "03 MAR 24",
    day: "SUN",
  },
  {
    caseNo: "2728",
    date: "04-03-2024",
    startTime: "10:00 AM",
    endTime: "12:00 PM",
    datestr: "04 MAR 24",
    day: "MON",
  },
  {
    caseNo: "3529",
    date: "04-03-2024",
    startTime: "3:00 PM",
    endTime: "4:00 PM",
    datestr: "04 MAR 24",
    day: "MON",
  },
  {
    caseNo: "4120",
    date: "05-03-2024",
    startTime: "1:00 PM",
    endTime: "4:00 PM",
    datestr: "05 MAR 24",
    day: "TUE",
  },
  {
    caseNo: "6991",
    date: "05-03-2024",
    startTime: "10:00 AM",
    endTime: "11:00 AM",
    datestr: "05 MAR 24",
    day: "TUE",
  },

  {
    caseNo: "5871",
    date: "06-03-2024",
    startTime: "9:00 PM",
    endTime: "10:00 PM",
    datestr: "06 MAR 24",
    day: "WED",
  },
  {
    caseNo: "4136",
    date: "06-03-2024",
    startTime: "10:00 AM",
    endTime: "11:00 AM",
    datestr: "06 MAR 24",
    day: "WED",
  },
  {
    caseNo: "1771",
    date: "06-03-2024",
    startTime: "11:00 AM",
    endTime: "12:00 AM",
    datestr: "06 MAR 24",
    day: "WED",
  },

  {
    caseNo: "1024",
    date: "06-03-2024",
    startTime: "3:00 PM",
    endTime: "4:00 PM",
    datestr: "06 MAR 24",
    day: "WED",
  },

  {
    caseNo: "1024",
    date: "07-03-2024",
    startTime: "10:00 AM",
    endTime: "11:00 AM",
    datestr: "07 MAR 24",
    day: "TUE",
  },
  {
    caseNo: "6991",
    date: "07-03-2024",
    startTime: "11:00 AM",
    endTime: "12:00 AM",
    datestr: "07 MAR 24",
    day: "TUE",
  },
  {
    caseNo: "2728",
    date: "08-03-2024",
    startTime: "10:00 AM",
    endTime: "11:00 AM",
    datestr: "08 MAR 24",
    day: "TUE",
  },

  {
    caseNo: "1024",
    date: "08-03-2024",
    startTime: "11:00 AM",
    endTime: "12:00 AM",
    datestr: "08 MAR 24",
    day: "TUE",
  },
  {
    caseNo: "3529",
    date: "11-03-2024",
    startTime: "10:00 AM",
    endTime: "11:00 AM",
    datestr: "11 MAR 24",
    day: "TUE",
  },
  {
    caseNo: "4120",
    date: "12-03-2024",
    startTime: "10:00 AM",
    endTime: "11:00 AM",
    datestr: "12 MAR 24",
    day: "TUE",
  },
  {
    caseNo: "4136",
    date: "12-03-2024",
    startTime: "1:00 PM",
    endTime: "2:00 PM",
    datestr: "12 MAR 24",
    day: "TUE",
  },
  {
    caseNo: "5870",
    date: "13-03-2024",
    startTime: "10:00 AM",
    endTime: "11:00 AM",
    datestr: "13 MAR 24",
    day: "TUE",
  },
  {
    caseNo: "3529",
    date: "13-03-2024",
    startTime: "1:00 PM",
    endTime: "2:00 PM",
    datestr: "13 MAR 24",
    day: "TUE",
  },
  {
    caseNo: "4120",
    date: "11-03-2024",
    startTime: "1:00 PM",
    endTime: "2:00 PM",
    datestr: "11 MAR 24",
    day: "TUE",
  },
  {
    caseNo: "6991",
    date: "18-03-2024",
    startTime: "10:00 AM",
    endTime: "11:00 AM",
    datestr: "18 MAR 24",
    day: "SAT",
  },
  {
    caseNo: "3529",
    date: "12-03-2024",
    startTime: "3:00 PM",
    endTime: "4:00 PM",
    datestr: "12 MAR 24",
    day: "FRI",
  },
  {
    caseNo: "6991",
    date: "29-02-2024",
    startTime: "10:00 AM",
    endTime: "11:00 AM",
    datestr: "29 FEB 24",
    day: "THU",
  },
  {
    caseNo: "1024",
    date: "14-03-2024",
    startTime: "10:00 AM",
    endTime: "11:00 AM",
    datestr: "14 MAR 24",
    day: "TUE",
  },
  {
    caseNo: "4120",
    date: "14-03-2024",
    startTime: "11:00 AM",
    endTime: "12:00 PM",
    datestr: "14 MAR 24",
    day: "TUE",
  },
  {
    caseNo: "6991",
    date: "18-03-2024",
    startTime: "2:00 PM",
    endTime: "3:00 PM",
    datestr: "18 MAR 24",
    day: "SAT",
  },
  {
    caseNo: "3529",
    date: "19-03-2024",
    startTime: "10:00 AM",
    endTime: "11:00 AM",
    datestr: "19 MAR 24",
    day: "FRI",
  },
  {
    caseNo: "6991",
    date: "20-03-2024",
    startTime: "10:00 AM",
    endTime: "11:00 AM",
    datestr: "20 MAR 24",
    day: "THU",
  },
];

var aCaseItems = [
  {
    caseno: "1024",
    lawyer: "Fali Sam Nariman",
    casetype: "Civil law",
    judge: "DAS J.",
    status: "closed",
    summary:
      "The appeal case number 182 of 1952 is about an appellant, Hoosein Kasam Dada (India) Ltd., who submitted a Sales Tax return to the Sales Tax Officer, Akola. \nThe officer, not being satisfied with the account books produced by the appellant, submitted the case to the Assistant Commissioner of Sales Tax, Amravati, for assessment. \nThe Assistant Commissioner issued a notice under section 11 and fixed the case for disposal. After several proceedings, the Assistant Commissioner assessed the appellant to the sum of Rs. 58,657140.\n The appellant appealed to the Sales Tax Commissioner, Madhya Pradesh, under section 22(l) of the Central Provinces and Berar Sales Tax Act, 1947. \nHowever, the appeal was not admitted as it was not accompanied by any proof of the payment of the tax. The appellant then moved the Board of Revenue, Madhya Pradesh, by a revision application against the order of the Sales Tax Commissioner. \nThe High Court dismissed the application and the appellant applied for leave to appeal to the Supreme Court. \nThe Supreme Court granted special leave to appeal, but limited to the question of the effect of the amendment to section 22 of the Act on the appellant's appeal to the Sales Tax Commissioner, Madhya Pradesh.",
    files:
      "jugdement_1024.pdf,AppealAmendmentPrecedent_1024.pdf,AppealAmendmentContention_1024.pdf",
    email: "naveen@gmail.com",
    client: "Adarsh TR",
  },
  {
    caseno: "2728",
    lawyer: "Mukul Rohatgi",
    casetype: "Criminal law",
    judge: "BHAGWATI, J",
    status: "closed",
    summary:
      "The Civil Appeal No. 2728 of 1972 revolves around the question of whether there was any material evidence to justify the finding that a sum of Rs. 1,07,350 was remitted by the appellant firm, M/s. Kishinchand Chellaram, from Madras to Bombay, and that it represented the undisclosed income of the firm.\nThe firm had challenged the decision of the Bombay High Court, which had upheld the Income Tax Officer's view that the firm failed to satisfactorily explain the source of the remittance, resulting in it being added to the firm's taxable income.\nHowever, the Supreme Court ruled that the evidence relied upon by the Income Tax Officer and the High Court, namely two letters from the Punjab National Bank Limited, did not constitute material evidence justifying the decision. \nThe court highlighted that the letters were not supported by any documents or papers and were based on hearsay. \nThe Supreme Court concluded that the highest evidence that could be established was that an employee of the firm remitted the amount to another employee, but it didn't necessarily imply that the amount belonged to the firm. \nThe burden was on the revenue to prove that the remitted amount belonged to the firm, which they failed to do.\n The Supreme Court thus allowed the appeal, setting aside the judgement of the High Court.",
    files: "judgement_2728.pdf",
    email: "naveen@gmail.com",
    client: "Adarsh TR",
  },
  {
    caseno: "3529",
    lawyer: "K k venugopal",
    casetype: "Employment law",
    judge: "Khanna, J. V. R. Krishna Iyer",
    status: "next hearing",
    summary:
      "The appeal case number 910 of 1970 concerns the election of Jugal Kishore Patnaik to the Orissa Legislative Assembly from Bhadrak constituency, which was declared void by the Orissa High Court due to an election petition filed by Ratnakar Mohanty.\nThe High Court found that Mohanty's nomination papers had been improperly rejected by the Returning Officer, due to an objection that Mohanty was disqualified under section 9A of the Representation of the People Act, 1951, for having contracts with the Government of Orissa.\n The Supreme Court of India dismissed the appeal, upholding the High Court's decision, stating that Mohanty's contracts were not personal, but were undertaken as the Sarpanch of Rahanj Gram Panchayat, and therefore, he was not disqualified from running for election. \nThe Supreme Court's judgment highlighted the need for clearer electoral regulations to prevent such misunderstandings from occurring.",
    files: "judgement_3529.pdf",
    email: "naveen@gmail.com",
    client: "Adarsh TR",
  },
  {
    caseno: "4120",
    lawyer: "Abhishek Singhvi",
    casetype: "Family law",
    judge: "VENKATARAMIAH, J.",
    status: "closed",
    summary:
      "The Civil Appeal No. 2005 of 1978 was filed under section 123 of the Jammu and Kashmir Representation of People Act, 1957, challenging the dismissal of an election petition due to non-compliance with section 89(3) of the Act.\n The appellant and respondent were candidates in the 1977 general election for the Handwara Assembly Constituency, with the respondent being declared the successful candidate. \nThe appellant subsequently filed an election petition challenging the validity of the respondent's election on various grounds.\n The High Court dismissed the petition on the grounds that the appellant had not complied with section 89(3) of the Act, which requires that every copy of the election petition be attested by the petitioner under his own signature to be a true copy of the petition.\n The Supreme Court upheld the High Court's decision, stating that the requirement for the petitioner to attest the copies of the petition under his own signature is mandatory, and non-compliance results in the dismissal of the petition as per section 94 of the Act. The appeal was therefore dismissed.",
    files: "judgement_4120.pdf",
    email: "naveen@gmail.com",
    client: "Adarsh TR",
  },
  {
    caseno: "6991",
    lawyer: "Gopal Subramanium",
    casetype: "Civil law",
    judge: "MOHAN, J",
    status: "dismissal of suit",
    summary:
      "The case, Appeal Nos. 266 267 of 1993, centers on a charge memorandum issued against the respondent, who was working as an Income Tax Officer, Muktsar in 1982-83.\n The memorandum alleges that the respondent completed certain assessments in an irregular manner, hastily, and with the intent to confer undue favors on the assessees.\n The Central Administrative Tribunal Principal Bench, New Delhi ruled in favor of the respondent and quashed the charge memorandum, leading to the current appeal. \nThe Supreme Court of India reversed the Tribunal's decision, upholding the validity of the charge memorandum.\n The Court concluded that disciplinary action can be taken in cases where the officer had acted in a manner that reflects negatively on his reputation for integrity, good faith or devotion to duty, or if there's evidence of recklessness, misconduct, negligence or undue favoritism in the discharge of his duty. \nThe court emphasized that the disciplinary action is not based on the correctness or legality of the respondent's decision, but on his conduct in discharging his duties.\n The court made it clear that the respondent can put forth all defenses open to him in the departmental inquiry which will be considered on its merit.",
    files: "judgement_6991.pdf",
    email: "naveen@gmail.com",
    client: "Adarsh TR",
  },
  {
    caseno: "5871",
    lawyer: "Mahesh Jethmalani",
    casetype: "Criminal law",
    judge: "VENKATACHALIAH, J.",
    status: "dismissal of suit",
    summary:
      "The petition under Article 32 of the Indian Constitution questions the validity of Regulation 7 along with Schedule I of State Bank of Patiala (Officers') Service Regulations,1979.\n It concerns the placement and fitment of existing officers in the new grades and scales of pay. The State Bank of Patiala, a subsidiary of the State Bank of India, revised and restructured pay scales based on the recommendations of the Pillai Committee.\nThe petitioners, Sri Tarsem Lal Gautam and Sri C. V. Madan, who are Grade A officers, challenged the classification of existing officers into different categories for fitment in the revised pay scales based solely on the date of their promotion as arbitrary and violative of Article 14 of the Constitution of India. \nThe bank argued that the Regulations did not bring about a mere revision of pay, but a rationalisation, standardisation and restructuring of the whole administrative set-up of the management cadres.\n The court ruled that the principle of classification among the existing officers for purposes of fitment was not unreasonable and arbitrary, and therefore, not violative of Article 14. The petition was dismissed.",
    files: "judgement_5871.pdf",
    email: "naveen@gmail.com",
    client: "Adarsh TR",
  },
  {
    caseno: "4136",
    lawyer: "KTS Tulsi",
    casetype: "Employment law",
    judge: "BHAGWATI, J",
    status: "closed",
    summary:
      "The appeals concern the valuation of shares of Mafatlal Gagalbhai Pvt. Ltd., an investment company. \nThe appellant, Pritam Singh, was elected to the Haryana State Legislative Assembly in 1972, but his election was challenged by respondent Balbir Singh on the grounds that Singh committed corrupt practices, including the hiring of vehicles for free conveyance of electors to polling stations.\n The main issue was the method of valuation of the company's shares. The Gift Tax and Wealth Tax officers used the break-up method, which the appellant contested, advocating for the profit-earning method instead.\n The Appellate Assistant Commissioner applied a combination of both methods, resulting in a higher valuation than the appellant claimed.\n The appellant appealed to the Tribunal, which ruled in favor of the profit-earning method, rejecting the combination method. The Revenue appealed to the Supreme Court, arguing that the High Court should have called for a reference on the question of the appropriate method of valuation.\n The Supreme Court dismissed the appeal, upholding the Tribunal's decision. The court stated that the profit-earning method was the appropriate method for valuing shares of a going concern and that the combination of the two methods was not a valid principle of valuation.\n The court also dismissed the Revenue's argument that the break-up method should apply due to a rule in the Gift Tax Act, as the question was not raised before the Tribunal.",
    files: "judgement_4136.pdf",
    email: "naveen@gmail.com",
    client: "Adarsh TR",
  },
  {
    caseno: "1771",
    lawyer: "Aryama Sundaram",
    casetype: "Employment law",
    judge: "AYYANGAR J. SHAH, J",
    status: "dismissal of suit",
    summary:
      "The appellant owned several estates where tea was grown and was assessed to sales tax for the years 1954-55 and 1955-56.\n The appellant claimed that certain sales of its tea conducted by auction at Fort Cochin, a place then in the Madras State, were sales outside the Travancore Cochin State and therefore exempt from taxation.\n This claim was rejected by the assessing authority, the Appellate Assistant Commissioner, and the Sales Tax Appellate Tribunal. The appellant appealed to the Supreme Court, arguing that the High Court should have called for a reference on the question of the appropriate method of valuation.\n The Supreme Court dismissed the appeal, ruling that the profit-earning method was the appropriate method for valuing shares of a going concern and that the combination of the two methods was not a valid principle of valuation.\n The court also dismissed the Revenue's argument that the break-up method should apply due to a rule in the Gift Tax Act, as the question was not raised before the Tribunal.\n The Supreme Court concluded that the present appeals dependent on the correctness of the meaning of the expression 'outside sales' in article 286(1)(a), which the High Court adopted in A. V. Thomas's case, had to be allowed.\n The court also declined to permit the respondent to argue a point about the property in the goods not having passed at Fort Cochin in the Madras State, as the point was not raised before the High Court.\n The appeals were thus allowed and the order of the High Court reversed.",
    files:
      "judgement_1771.pdf,Interpretation_of_Goods_and _Commodity-1771.pdf,SalesTax_and_Export_Transactions_1771.pdf",
    email: "naveen@gmail.com",
    client: "Adarsh TR",
  },
  {
    caseno: "2031",
    lawyer: "Ramayya",
    casetype: "Family law",
    judge: "Justice Surya Kant",
    status: "case dismissed",
    summary:
      "The appeal case number 116 of 1964 pertains to the election of Jugal Kishore Patnaik to the Orissa Legislative Assembly from Bhadrak constituency.\n This election was declared void by the Orissa High Court due to an election petition filed by Ratnakar Mohanty. Mohanty claimed that his nomination papers were improperly rejected by the Returning Officer, leading to the invalidation of the election.\n The case reached the Supreme Court of India, which dismissed the appeal and upheld the High Court's decision.\n The Supreme Court emphasized the need for clearer electoral regulations to avoid similar misunderstandings in the future.\nThe court noted that the jurisdiction of civil courts can be excluded by a statutory provision, however, it does not necessarily mean that the plea against the validity of the order passed by the District Magistrate cannot be raised in a civil court.\n The case highlighted the complexities in the electoral law and the need for its reform.",
    files:
      "Judgement_2031.pdf,HighCourtMisinterpretation_Conclusion_2031.pdf,CaseBackground_Contentions_Trial Proceedings_2031.pdf",
    email: "abhijeet.kadam@wipro.com",
    client: "Adarsh TR",
  },
];

var aUserId = "";
function DoAuth() {
  aUserId = getCookie("user-id");
  if (aUserId == "" || aUserId == undefined) {
    location.href = "login.html";
  } else {
    var aUserNm = "";
    var aUserDp = "";
    $.each(UserList, function (i, user) {
      if (user.email == aUserId) {
        aUserNm = user.profileName;
        aUserDp = user.profileimage;
      }
    });
    // $(".submenu-dp").html(aUserDp);
    // $("[for=check01]").html(
    //   "<span class='uname-dp'>" + aUserDp + "</span>" + aUserNm
    // );
    $(".submenu li")
      .eq(0)
      .html("<img width='230'  src='" + aUserDp + "'/>");
    $("[for=check01]").html(
      "<img  height='40' style='border-radius: 50%;margin-right:10px' src='" +
        aUserDp +
        "'/>" +
        aUserNm
    );
  }
  var aRssHtm = "";
  $.each(rssFeed, function (i, feedt) {
    aRssHtm +=
      "<span  style='color:white;'>&nbsp;&nbsp;<span style='color:#0c0c4f;'>||</span>&nbsp;&nbsp;" +
      feedt.title +
      "</span>";
  });
  if (aRssHtm == "") {
    aRssHtm = "<span style='color:white;'>Feed Not Available</span>";
  }
  aRssHtm =
    "<li style='width:40%!important; margin-left:30px'> <marquee direction='left' >" +
    aRssHtm +
    "</marquee></li>";

  $(".main-menu-section>.nav-dark").append(aRssHtm);
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

rssFeed = [
  {
    title:
      "Controversial Electoral Bond Schemes Sparks Constitutional Concerns",
    details:
      "Author – Arpit Garg (IMS Unison University, Dehradun) Co-Author – Daksh Sharma (IMS Unison University, Dehradun) Introduction:- On February 15, a bench of five judges headed by Chief Justice DY Chandrachud declared the electoral bond unconstitutional, citing violations of the right to information and Article 19(1)(a) of the Indian Constitution, which guarantees freedom of speech.",
  },
  {
    title:
      "The Surge of Cyber Crimes: Unraveling 10 Reasons Behind the Alarming Increase",
    details:
      "Introduction: In an era dominated by technology, the exponential growth of cyber crimes has become a grave concern for individuals, businesses, and governments alike. The digital landscape, while offering unprecedented connectivity and convenience, has also become a breeding ground for malicious activities. In this comprehensive article, we will delve into the ten key reasons behind",
  },
  {
    title:
      "Law Student Urges Chief Justice and Secretary-General to Embrace Eco-Friendly Practices: Calls for Nationwide Adoption of Double-Sided A4 Paper in Judicial Forums",
    details:
      "Vikhyaat Maheshwari, a 3rd year law student, writes a letter to the Hon’ble Chief Justice D.Y. Chandrachud and the Secretary-General Atul M. Kurhekar, emphasising the need for uniformity in the usage of A4 papers with printing on both sides across all the judicial forums of the country, keeping in mind the tremendous environmental and legal",
  },
];
