// Import Participant model
Participant = require("../model/participantModel");
Session = require("../model/sessionModel");

// Handle index actions
exports.index = function (req, res) {
  Participant.get(function (err, participants) {
    if (err) {
      return res.json({
        status: "error",
        message: err,
      });
    }

    participants = [].concat(participants).reverse();

    return res.json({
      status: "success",
      message: "Participant Added Successfully",
      data: participants,
    });
  });
};

// Handle search actions
exports.search = function (req, res) {
  Participant.find(
    {
      name: {
        $regex: req.params.name,
      },
    },
    function (err, participants) {
      if (err) {
        return res.json({
          status: "error",
          message: err,
        });
      }

      participants = [].concat(participants).reverse();

      return res.json({
        status: "success",
        message: "Participant Added Successfully",
        data: participants,
      });
    }
  ).maxTimeMS(100);;
};

// Handle index actions
exports.indexByPage = async function (req, res) {
  
  var page = req.params.page;
  try {
    var totalParticipant = await Participant.count();
    var participants = await Participant.find()
      .sort({ 'voting': 1 })
      .limit(20)
      .skip((page - 1) * 20)
      .exec();

    return res.json({
      status: "success",
      message: "Participant Added Successfully",
      data: {
        participants: participants,
        totalPage: Math.ceil(totalParticipant / 20),
      },
    });
  } catch (err) {
    return res.send(err);
  }
};

// Handle view actions
exports.view = function (req, res) {
  Participant.findById(req.params.id, function (err, participant) {
    if (err) return res.send(err);
    return res.json({
      message: "participants Detail Loading...",
      data: participant,
    });
  });
};

// Handle create actions
exports.new = function (req, res) {
  var _participants = 
  [
    {
      "no": 1,
      "name": "Riza Miftahul Azmi",
      "nim": "02211640000006",
      "email": "siamangkk@gmail.com"
    },
    {
      "no": 2,
      "name": "Yuan Anzal Ramadhan",
      "nim": "02211640000019",
      "email": "yuananzal19@gmail.com"
    },
    {
      "no": 3,
      "name": "Fuad Nurtsani Afifudin",
      "nim": "02211640000061",
      "email": "nurtsanifuad@gmail.com"
    },
    {
      "no": 4,
      "name": "Ibrohim Muhammad",
      "nim": "02211640000034",
      "email": "ibrohimmhmdimam@gmail.com"
    },
    {
      "no": 5,
      "name": "Azriel Iqbal Hamayaputra",
      "nim": "02211640000075",
      "email": "azrieligbal76@gmail.com"
    },
    {
      "no": 6,
      "name": "Fuad Naufal Perdana",
      "nim": "02211640000097",
      "email": "fuadperdana1234@gmail.com"
    },
    {
      "no": 7,
      "name": "Muhammad Rum Aulia",
      "nim": "02211640000062",
      "email": "mrumaulia@gmail.com"
    },
    {
      "no": 8,
      "name": "Farhan Hadi Putra",
      "nim": "02211640000142",
      "email": "farhanhadiputra@gmail.com"
    },
    {
      "no": 9,
      "name": "Mohammad Irfan Dwiputro",
      "nim": "02211640000120",
      "email": "ipang00443@gmail.com"
    },
    {
      "no": 10,
      "name": "Luthfi Kurnia Arifushidqi",
      "nim": "02211640000135",
      "email": "luthfikarifushidqi@gmail.com"
    },
    {
      "no": 11,
      "name": "Muhammad Hazairin Asyiddiq",
      "nim": "02211640000177",
      "email": "mhzirin@gmail.com"
    },
    {
      "no": 12,
      "name": "Aufal Nawasanjani",
      "nim": "02211640000125",
      "email": "aufal.nawa@gmail.com"
    },
    {
      "no": 13,
      "name": "Raja Tamiang Asma'I",
      "nim": "02211640000046",
      "email": "rajjseli@gmail.com"
    },
    {
      "no": 14,
      "name": "Mawaz Rindra Dihari",
      "nim": "02211640000076",
      "email": "mawazr@gmail.com"
    },
    {
      "no": 15,
      "name": "Reynaldi Bagaskara Kusuma Wardana Putra",
      "nim": "02211640000086",
      "email": "reynaldibagaskara24@gmail.com"
    },
    {
      "no": 16,
      "name": "Muhammad Rafi Ghifari",
      "nim": "02211640000176",
      "email": "emrafighifari@gmail.com"
    },
    {
      "no": 17,
      "name": "Muhariadi Harjuno Kartodirdjo",
      "nim": "02211640000119",
      "email": "muhariadiharjuno@yahoo.com"
    },
    {
      "no": 18,
      "name": "Aphrodita Luthfania Eka Putri",
      "nim": "02211640000168",
      "email": "aphrodita.luthfania@gmail.com"
    },
    {
      "no": 19,
      "name": "Raden Haryo Ali Rakhmanto",
      "nim": "02211640000134",
      "email": "haryoali46@gmail.com"
    },
    {
      "no": 20,
      "name": "Najlaa Aribah Meutia",
      "nim": "02211640000129",
      "email": "Najlameutia@gmail.com"
    },
    {
      "no": 21,
      "name": "Donny Boulanova",
      "nim": "02211640000144",
      "email": "donnyboulanova13@gmail.com"
    },
    {
      "no": 22,
      "name": "Muhammad Fauzan Firdaus",
      "nim": "02211640000140",
      "email": "fauzan.firdaus2205@gmail.com"
    },
    {
      "no": 23,
      "name": "Regnanta Lazuardi Wisesa",
      "nim": "02211640000102",
      "email": "ri.wisesa@gmail.com"
    },
    {
      "no": 24,
      "name": "Handy Darmawan",
      "nim": "02211640000124",
      "email": "handydarmawan1509@yahoo.com"
    },
    {
      "no": 25,
      "name": "Nauli Rahmi",
      "nim": "02211640007001",
      "email": "naulyrahmi@gmail.com"
    },
    {
      "no": 1,
      "name": "YOSHIDA ADITAMA KARSONO",
      "nim": "02211640000046",
      "email": "aditama.yoshi@gmail.com"
    },
    {
      "no": 2,
      "name": "AINUN FITRAYAWATI",
      "nim": "02211740000002",
      "email": "ainunfitriyawati99@gmail.com"
    },
    {
      "no": 3,
      "name": "MEIDY HARIAWAN",
      "nim": "02211740000003",
      "email": "meidy.hariawan98@gmail.com"
    },
    {
      "no": 4,
      "name": "RAHMASARI NUR SETYONO",
      "nim": "02211740000005",
      "email": "Rahmasarinursetyono@gmail.com"
    },
    {
      "no": 5,
      "name": "CLAUDYA STANILA KOESNADI",
      "nim": "02211740000006",
      "email": "claudyastanila@gmail.com"
    },
    {
      "no": 6,
      "name": "FAMY BISYAUQIL HAQ",
      "nim": "02211740000007",
      "email": "famybisyauqilhaq@gmail.com"
    },
    {
      "no": 7,
      "name": "FINA ANGGRAINI",
      "nim": "02211740000009",
      "email": "finaanggraini37@gmail.com"
    },
    {
      "no": 8,
      "name": "AMIROTUS SAFITRI",
      "nim": "02211740000010",
      "email": "amirotussafitri@gmail.com"
    },
    {
      "no": 9,
      "name": "ASRI NUR FADILAH",
      "nim": "02211740000012",
      "email": "asriwei188@gmail.com"
    },
    {
      "no": 10,
      "name": "FEBRIANI TRI FAJRIAH",
      "nim": "02211740000013",
      "email": "febriani.tfajriah@gmail.com"
    },
    {
      "no": 11,
      "name": "NABILA FARRAS BALQIS",
      "nim": "02211740000014",
      "email": "Balqisnabila31@gmail.com"
    },
    {
      "no": 12,
      "name": "NURUDDIN AMIN",
      "nim": "02211740000015",
      "email": "nurudinamin0@gmail.com"
    },
    {
      "no": 13,
      "name": "SHOLIHATIN ANGGITA",
      "nim": "02211740000016",
      "email": "sholihatinanggita7@gmail.com"
    },
    {
      "no": 14,
      "name": "GINA NISRINA",
      "nim": "02211740000017",
      "email": "ginanisrina.gn@gmail.com"
    },
    {
      "no": 15,
      "name": "KHARISMA PERDANA SETIAWAN",
      "nim": "02211740000018",
      "email": "kharisma.perdanasetiawan1@gmail.com"
    },
    {
      "no": 16,
      "name": "FADHIL KUSUMAH ATMADJA",
      "nim": "02211740000019",
      "email": "fadhilnurohim@gmail.com"
    },
    {
      "no": 17,
      "name": "MENTARI FITRIA SUSANTO",
      "nim": "02211740000020",
      "email": "Mentarifitria4@gmail.com"
    },
    {
      "no": 18,
      "name": "SHAFIRA NUR ADININGSIH",
      "nim": "02211740000021",
      "email": "shafnur.adin21@gmail.com"
    },
    {
      "no": 19,
      "name": "AMALIA SABRINA SALWATI",
      "nim": "02211740000022",
      "email": "sabrinaamalia7@gmail.com"
    },
    {
      "no": 20,
      "name": "GHOZI NAUFALMI ADNAN",
      "nim": "02211740000023",
      "email": "ghozina11@gmail.com"
    },
    {
      "no": 21,
      "name": "EVAN MIKA SUBNAFEU",
      "nim": "02211740000024",
      "email": "esubnafeu89@gmail.com"
    },
    {
      "no": 22,
      "name": "RUZQIYAH NAHARO LAILA",
      "nim": "02211740000027",
      "email": "ruzqiyahlailo@gmail.com"
    },
    {
      "no": 23,
      "name": "NURDIANA RATNA PURI",
      "nim": "02211740000028",
      "email": "nurdiannar9@gmail.com"
    },
    {
      "no": 24,
      "name": "INNEKE ADINEGORO",
      "nim": "02211740000029",
      "email": "innekeadinegoro@gmail.com"
    },
    {
      "no": 25,
      "name": "GLADYS ELVINA ANTOU",
      "nim": "02211740000030",
      "email": "glaadysantou@yahoo.com"
    },
    {
      "no": 26,
      "name": "AISYAH ALIFATUL ZAHIDAH ROHMAH",
      "nim": "02211740000032",
      "email": "sasya22aisyah@gmail.com"
    },
    {
      "no": 27,
      "name": "DWI SANTOSO",
      "nim": "02211740000034",
      "email": "dwisantosobp@gmail.com"
    },
    {
      "no": 28,
      "name": "DINI FEBRILIANTI PUTRI",
      "nim": "02211740000035",
      "email": "dinifebriliantip@gmail.com"
    },
    {
      "no": 29,
      "name": "HANIF RACHMAWATI",
      "nim": "02211740000037",
      "email": "hanifrachma@yahoo.com"
    },
    {
      "no": 30,
      "name": "MAULIDAH HANIATI",
      "nim": "02211740000038",
      "email": "maulidahhani@gmail.com"
    },
    {
      "no": 31,
      "name": "MUHAMMAD NAJIB AZMI",
      "nim": "02211740000039",
      "email": "n.azmi.baru@gmail.com"
    },
    {
      "no": 32,
      "name": "NOKI DELTA SARI",
      "nim": "02211740000040",
      "email": "nokidelta15@gmail.com"
    },
    {
      "no": 33,
      "name": "MARINA DWI CAHYANI",
      "nim": "02211740000041",
      "email": "marinaadc99@gmail.com"
    },
    {
      "no": 34,
      "name": "FITRIA NUR LAILY",
      "nim": "02211740000042",
      "email": "fitriasukakimiaindustri@gmail.com"
    },
    {
      "no": 35,
      "name": "RAFLY ARIO KUSUMA",
      "nim": "02211740000043",
      "email": "raflyariokusuma@gmail.com"
    },
    {
      "no": 36,
      "name": "WIRANTIA HANAN FEBRILLA",
      "nim": "02211740000044",
      "email": "hananfebrilla@gmail.com"
    },
    {
      "no": 37,
      "name": "EVAN GRADY",
      "nim": "02211740000045",
      "email": "evangrady19@gmail.com"
    },
    {
      "no": 38,
      "name": "ADDI MUKHLISUN",
      "nim": "02211740000046",
      "email": "adimukhlisun@gmail.com"
    },
    {
      "no": 39,
      "name": "CAROLINE FERNANDA SUTANTO",
      "nim": "02211740000047",
      "email": "caroline_fs@yahoo.com"
    },
    {
      "no": 40,
      "name": "SANTI PUSPITA SANJAYA",
      "nim": "02211740000048",
      "email": "Santiips424@gmail.com"
    },
    {
      "no": 41,
      "name": "AHMAD SATRIO",
      "nim": "02211740000049",
      "email": "ahmadsat07@gmail.com"
    },
    {
      "no": 42,
      "name": "ANDREAS DARMAJA",
      "nim": "02211740000050",
      "email": "andreasdarmaja@@gmail.com"
    },
    {
      "no": 43,
      "name": "FERNANDO PUJIADHI WIRYAWAN",
      "nim": "02211740000051",
      "email": "edof82@gmail.com"
    },
    {
      "no": 44,
      "name": "FARID AUZZIN ASHARI",
      "nim": "02211740000052",
      "email": "farid.auzzin@gmail.com"
    },
    {
      "no": 45,
      "name": "DAFFA AKMAL NUGRAHA",
      "nim": "02211740000053",
      "email": "nugrahadaffaakmal@gmail.com"
    },
    {
      "no": 46,
      "name": "KEVIN",
      "nim": "02211740000054",
      "email": "kevintokkwawa@gmail.com"
    },
    {
      "no": 47,
      "name": "YONATHAN",
      "nim": "02211740000055",
      "email": "yonathan251099@gmail.com"
    },
    {
      "no": 48,
      "name": "UMMA AULIA MARWA",
      "nim": "02211740000057",
      "email": "mrwumma@gmail.com"
    },
    {
      "no": 49,
      "name": "ADITYA MARDIANSYAH",
      "nim": "02211740000058",
      "email": "aditmrd@gmail.com"
    },
    {
      "no": 50,
      "name": "ADJIE BIMO SETYOHADI ANANTO",
      "nim": "02211740000059",
      "email": "ajisetyohadi@gmail.com"
    },
    {
      "no": 51,
      "name": "MATHILDA JOWITO PASARIBU",
      "nim": "02211740000060",
      "email": "pasaribu.thilda@gmail.com"
    },
    {
      "no": 52,
      "name": "HOGI SUGIHARTO",
      "nim": "02211740000061",
      "email": "hogi.sugiharto@gmail.com"
    },
    {
      "no": 53,
      "name": "VINCENTIUS LUKAS ARIA",
      "nim": "02211740000062",
      "email": "vincentlukas275@gmail.com"
    },
    {
      "no": 54,
      "name": "BERLINA YUNITA SARI ROMAJI",
      "nim": "02211740000063",
      "email": "berlinayunita9@gmail.com"
    },
    {
      "no": 55,
      "name": "MARIA REGINA OLGA SANTOSO",
      "nim": "02211740000064",
      "email": "molgasan@gmail.com"
    },
    {
      "no": 56,
      "name": "NOVANDA RADITA PUTRADHITAMA",
      "nim": "02211740000065",
      "email": "novandaradita@gmail.com"
    },
    {
      "no": 57,
      "name": "DZAKY HILAL RAMDHAN WAHIDI",
      "nim": "02211740000066",
      "email": "dzaky.gold98@gmail.com"
    },
    {
      "no": 58,
      "name": "MUHAMMAD HIDAN NOER FADL",
      "nim": "02211740000067",
      "email": "hidan1st@gmail.com"
    },
    {
      "no": 59,
      "name": "LAKSMI CAHYANINGATI PUTERI NUGRAHENI",
      "nim": "02211740000068",
      "email": "laksmi.Cahya@gmail.com"
    },
    {
      "no": 60,
      "name": "PANNADHIKA SHINLI",
      "nim": "02211740000069",
      "email": "dhikashinli500@gmail.com"
    },
    {
      "no": 61,
      "name": "NABIL APTA MAULANA",
      "nim": "02211740000070",
      "email": "bilapta21@gmail.com"
    },
    {
      "no": 62,
      "name": "RENATA VANDALIA SERONA KAREN PRAWIRA",
      "nim": "02211740000071",
      "email": "renatavandalia28@gmail.com"
    },
    {
      "no": 63,
      "name": "ANDHIKA SHAFIAN MAINDO NORMAN",
      "nim": "02211740000072",
      "email": "andhika.shafian@gmail.com"
    },
    {
      "no": 64,
      "name": "SATRYA FUAD AFIF SULISTIYO",
      "nim": "02211740000073",
      "email": "ivanov.satrya@gmail.com"
    },
    {
      "no": 65,
      "name": "SATRIO WICAKSANA RUSDIYANTO",
      "nim": "02211740000074",
      "email": "riowicaksono17@gmail.com"
    },
    {
      "no": 66,
      "name": "MUHAMMAD IQ`BAL AL`BARSYI",
      "nim": "02211740000075",
      "email": "albarsyi@gmail.com"
    },
    {
      "no": 67,
      "name": "FERREL HAMONANGAN",
      "nim": "02211740000076",
      "email": "ferrelhamonangan@gmail.com"
    },
    {
      "no": 68,
      "name": "ALIFAH NUR AINI FAJRIN",
      "nim": "02211740000077",
      "email": "alifahfajrin@gmail.com"
    },
    {
      "no": 69,
      "name": "EDWARDUS KEVINNUL DJOHAR",
      "nim": "02211740000078",
      "email": "kedwardus@gmail.com"
    },
    {
      "no": 70,
      "name": "INDAH RIKHA KARTIKASARI",
      "nim": "02211740000079",
      "email": "Indahrkartikasari@gmail.com"
    },
    {
      "no": 71,
      "name": "DIAN NABILA MARTIANA",
      "nim": "02211740000081",
      "email": "dianabila99@gmail.com"
    },
    {
      "no": 72,
      "name": "AMIN ABDILLAH HARAHAP",
      "nim": "02211740000082",
      "email": "aminxharahap@gmail.com"
    },
    {
      "no": 73,
      "name": "RISTI EKA NINGTYAS",
      "nim": "02211740000083",
      "email": "nristiekaningtuas@yahoo.com"
    },
    {
      "no": 74,
      "name": "MOHAMAD LAKSAMANA ALAM",
      "nim": "02211740000084",
      "email": "laksamana9322@gmail.com"
    },
    {
      "no": 75,
      "name": "JESSICA AALYA KAAMILIAA",
      "nim": "02211740000085",
      "email": "kjessicaalya@gmail.com"
    },
    {
      "no": 76,
      "name": "KAUTSAR MU`AFA",
      "nim": "02211740000086",
      "email": "kautsarmu'afa@gmail.com"
    },
    {
      "no": 77,
      "name": "BAGUS ALI YAFI",
      "nim": "02211740000087",
      "email": "bagusali411@gmail.com"
    },
    {
      "no": 78,
      "name": "SELLA RAMADHANI ALYA SASONO",
      "nim": "02211740000088",
      "email": "sella.ramadhani31@gmail.com"
    },
    {
      "no": 79,
      "name": "IHAW LIUS HALIM",
      "nim": "02211740000090",
      "email": "ihawhalim@gmail.com"
    },
    {
      "no": 80,
      "name": "SALSABILA MUTHIAH",
      "nim": "02211740000091",
      "email": "sasabxrrr@gmail.com"
    },
    {
      "no": 81,
      "name": "KELVIN LETARE.S",
      "nim": "02211740000092",
      "email": "kelvin_psp@live.com"
    },
    {
      "no": 82,
      "name": "MUHAMMAD ANSHORULLOH MUKHLISH",
      "nim": "02211740000093",
      "email": "Muhanshorulloh@gmail.com"
    },
    {
      "no": 83,
      "name": "VINCENTIUS",
      "nim": "02211740000095",
      "email": "Vincenttedjo@gmail.com"
    },
    {
      "no": 84,
      "name": "FERY PRASETYO",
      "nim": "02211740000096",
      "email": "feryprasetyo7@gmail.com"
    },
    {
      "no": 85,
      "name": "MAHDAVIKIA SYAHREZA HERMAWAN",
      "nim": "02211740000097",
      "email": "mahdareza22@gmail.com"
    },
    {
      "no": 86,
      "name": "HANS CHRISTIAN",
      "nim": "02211740000098",
      "email": "christianhans8@gmail.com"
    },
    {
      "no": 87,
      "name": "RADZUL ABYAN TAQYUDDIN ALY",
      "nim": "02211740000099",
      "email": "radzulabyan@gmail.com"
    },
    {
      "no": 88,
      "name": "RONALDO PANGIDOAN SITINJAK",
      "nim": "02211740000100",
      "email": "doanstinjak@gmail.com"
    },
    {
      "no": 89,
      "name": "ABDUL WASI`",
      "nim": "02211740000101",
      "email": "abdwasiik@gmail.com"
    },
    {
      "no": 90,
      "name": "IDA AYU PUTU VINKY SULISTYAWATI",
      "nim": "02211740000102",
      "email": "vinkysulistyawati@gmail.com"
    },
    {
      "no": 91,
      "name": "KETUT AGASTYA MAHA ANANTA",
      "nim": "02211740000103",
      "email": "ketutagastya44@gmail.com"
    },
    {
      "no": 92,
      "name": "MUHAMMAD HADYAN RIZWAN",
      "nim": "02211740000104",
      "email": "hadyanrizwan@gmail.com"
    },
    {
      "no": 93,
      "name": "KEVIN RAHMADI SABAR",
      "nim": "02211740000105",
      "email": "kevinrach29@gmail.com"
    },
    {
      "no": 94,
      "name": "DANIEL JANANTO",
      "nim": "02211740000106",
      "email": "danieljananto@gmail.com"
    },
    {
      "no": 95,
      "name": "CECILE NIKEN NAUTICA",
      "nim": "02211740000107",
      "email": "cecilenautica@gmail.com"
    },
    {
      "no": 96,
      "name": "ADITYA RACHMAN GANIMEDA",
      "nim": "02211740000108",
      "email": "adityaganimeda@gmail.com"
    },
    {
      "no": 97,
      "name": "GADING BAGUS MAHARDIKA",
      "nim": "02211740000109",
      "email": "gadingdika.smasa@gmail.com"
    },
    {
      "no": 98,
      "name": "GIGA HUSNIL AZIZI KHISSOGA",
      "nim": "02211740000110",
      "email": "gigakhissoga25@gmail.com"
    },
    {
      "no": 99,
      "name": "NADIA FAHIRA",
      "nim": "02211740000111",
      "email": "nadiafahira701@yahoo.co.id"
    },
    {
      "no": 100,
      "name": "SAMUEL BAGAS WAHYU SANTOSO",
      "nim": "02211740000113",
      "email": "wahyusamuel@gmail.com"
    },
    {
      "no": 101,
      "name": "AURA SELENA KINAYOMI",
      "nim": "02211740000114",
      "email": "aurakinayomi@gmail.com"
    },
    {
      "no": 102,
      "name": "GHALY MUHAMMAD BAHREISY FIRDAUS",
      "nim": "02211740000116",
      "email": "ghalymbf@gmail.com"
    },
    {
      "no": 103,
      "name": "MUHAMMAD DAVA RACHMADI ALI",
      "nim": "02211740000117",
      "email": "davarachmadi458@gmail.com"
    },
    {
      "no": 104,
      "name": "RANANDHIYA SALSABILA",
      "nim": "02211740000118",
      "email": "ranandhiya.salsabila@yahoo.com"
    },
    {
      "no": 105,
      "name": "SHAFIRA ALYA AMBARASTI",
      "nim": "02211740000119",
      "email": "shafira.alyaa@gmail.com"
    },
    {
      "no": 106,
      "name": "GALANG DHAIFULLAH ABDUL AZIZ",
      "nim": "02211740000120",
      "email": "gdhaifullah@gmail.com"
    },
    {
      "no": 107,
      "name": "TRIYALDI FAKHRY MAULANA",
      "nim": "02211740000121",
      "email": "tfakhrymaulana@gmail.com"
    },
    {
      "no": 108,
      "name": "JOSEPHINE TANDIONO",
      "nim": "02211740000122",
      "email": "josephinetdn@gmail.com"
    },
    {
      "no": 109,
      "name": "DEWI FARRA PRASASYA",
      "nim": "02211740000123",
      "email": "dewifarraprasasya@gmail.com"
    },
    {
      "no": 110,
      "name": "FAUZAN IMAM AKBAR M",
      "nim": "02211740000124",
      "email": "mrfauzaniam@gmail.com"
    },
    {
      "no": 111,
      "name": "ABDUL MALIK AL MULKI",
      "nim": "02211740000125",
      "email": "malikmulki21@gmail.com"
    },
    {
      "no": 112,
      "name": "ROSYID ADANI ATHA",
      "nim": "02211740000126",
      "email": "rosyid99force@gmail.com"
    },
    {
      "no": 113,
      "name": "GHASSANI SALSABILA RAMADHANI",
      "nim": "02211740000127",
      "email": "ghassanirmdhn@gmail.com"
    },
    {
      "no": 114,
      "name": "FILIPPO KORESY PINANDITO",
      "nim": "02211740000128",
      "email": "koresypinandito@gmail.com"
    },
    {
      "no": 115,
      "name": "BONIFACIUS ANDHRA DWIMA CAESARIO",
      "nim": "02211740000129",
      "email": "andhrabonifacius5@gmail.com"
    },
    {
      "no": 116,
      "name": "BRILIAN FAIRUZ IHZA RAMADHAN",
      "nim": "02211740000130",
      "email": "Brianfairuz@gmail.com"
    },
    {
      "no": 117,
      "name": "ABISSANTUN PRIYAMBODO",
      "nim": "02211740000131",
      "email": "abissantun.priyambodo@gmail.com"
    },
    {
      "no": 118,
      "name": "ISMAIL MASY`AB",
      "nim": "02211740000132",
      "email": "masyabismail@gmail.com"
    },
    {
      "no": 119,
      "name": "ARSYA GEMELIA ADINA",
      "nim": "02211740000133",
      "email": "arsyagemeliaa@gmail.com"
    },
    {
      "no": 120,
      "name": "FARHAN MUHAMMAD",
      "nim": "02211740000135",
      "email": "farhanmuhammad123456@gmail.com"
    },
    {
      "no": 121,
      "name": "NADIA YULIASARI",
      "nim": "02211740000136",
      "email": "nadiayuliasari13@gmail.com"
    },
    {
      "no": 122,
      "name": "EKA NABILA PERMATASARI",
      "nim": "02211740000137",
      "email": "ekanabilaa@gmail.com"
    },
    {
      "no": 123,
      "name": "NADILA SHAFIRA KUSNADI",
      "nim": "02211740000138",
      "email": "nadilask01@gmail.com"
    },
    {
      "no": 124,
      "name": "KEVIN NATANIEL SUTANTO",
      "nim": "02211740000139",
      "email": "kvinns7@gmail.com"
    },
    {
      "no": 125,
      "name": "MUHAMMAD NABIL FAJRI",
      "nim": "02211740000140",
      "email": "nabilfajri@yahoo.com"
    },
    {
      "no": 126,
      "name": "WAFANDA AINA PRASTISARA",
      "nim": "02211740000141",
      "email": "fandaaina@gmail.com"
    },
    {
      "no": 127,
      "name": "HABIB AZIZI",
      "nim": "02211740000142",
      "email": "habib11azizi@gmail.com"
    },
    {
      "no": 128,
      "name": "ANINDYA HEIDI SHAFIRA",
      "nim": "02211740000143",
      "email": "anindya2408@gmail.com"
    },
    {
      "no": 129,
      "name": "FIRAS YODHA SASKARA",
      "nim": "02211740000144",
      "email": "firasyodha@gmail.com"
    },
    {
      "no": 130,
      "name": "PANDHU DIRGA PRATAMA",
      "nim": "02211740000146",
      "email": "Dokterpandu18@gmail.com"
    },
    {
      "no": 131,
      "name": "MUHAMMAD MUHAJIRIN",
      "nim": "02211740007001",
      "email": "mhmmdmhjrn@gmail.com"
    },
    {
      "no": 1,
      "name": "Achmad Rifky",
      "nim": "02211840000001",
      "email": "rifkyparampaa@gmail.com"
    },
    {
      "no": 2,
      "name": "Fikri Luthfi",
      "nim": "02211840000002",
      "email": "fikrilutfi10@gmail.com"
    },
    {
      "no": 3,
      "name": "Roida Nabila",
      "nim": "02211840000003",
      "email": "roidanbl225@gmail.com"
    },
    {
      "no": 4,
      "name": "Achmad Luthfi Putra Yogi",
      "nim": "02211840000004",
      "email": "malpyandalt4@gmail.com"
    },
    {
      "no": 5,
      "name": "Adinata Setiawan",
      "nim": "02211840000005",
      "email": "adinataas14@gmail.com"
    },
    {
      "no": 6,
      "name": "Amanda Novriza Aurellia",
      "nim": "02211840000006",
      "email": "amandanovriza76@gmail.com"
    },
    {
      "no": 7,
      "name": "Arthanta Cracian",
      "nim": "02211840000007",
      "email": "arthantacracian@yahoo.com"
    },
    {
      "no": 8,
      "name": "Aulia Alif N B",
      "nim": "02211840000008",
      "email": "auliaalifnb23400@gmail.com"
    },
    {
      "no": 9,
      "name": "Ayu Paramita Firdaus",
      "nim": "02211840000009",
      "email": "fyrax0@gmail.com"
    },
    {
      "no": 10,
      "name": "Bayu Yusuf Eka Saputra",
      "nim": "02211840000010",
      "email": "bayuy30@gmail.com"
    },
    {
      "no": 11,
      "name": "Brian Setiawan",
      "nim": "02211840000011",
      "email": "briansetiawan16@gmail.com"
    },
    {
      "no": 12,
      "name": "Cindy Shofya Maharani",
      "nim": "02211840000012",
      "email": "cindyshofya@gmail.com"
    },
    {
      "no": 13,
      "name": "Faris Virgiansyah",
      "nim": "02211840000014",
      "email": "farisvirgiansyah@gmail.com"
    },
    {
      "no": 14,
      "name": "Firna Firdaus",
      "nim": "02211840000015",
      "email": "firnafirdaus6899.ff@gmail.com"
    },
    {
      "no": 15,
      "name": "Gabriella Putri Bonita",
      "nim": "02211840000017",
      "email": "gebbymunte@gmail.com"
    },
    {
      "no": 16,
      "name": "Ihsan Pribadi",
      "nim": "02211840000019",
      "email": "pribadi.ihsan@gmail.com"
    },
    {
      "no": 17,
      "name": "Imro'atus Nur Mufidah Dimyati Putri",
      "nim": "02211840000020",
      "email": "imaenemdepe@gmail.com"
    },
    {
      "no": 18,
      "name": "Kania Azzahra",
      "nim": "02211840000022",
      "email": "kaniaazzahra915@gmail.com"
    },
    {
      "no": 19,
      "name": "Kenny Santoso",
      "nim": "02211840000023",
      "email": "ksantoso89@gmail.com"
    },
    {
      "no": 20,
      "name": "Kevin Kurniawan",
      "nim": "02211840000024",
      "email": "kevinkaruniawan11@gmail.com"
    },
    {
      "no": 21,
      "name": "Michael Adrian Subagio",
      "nim": "02211840000025",
      "email": "michaeladriansubagio88@gmail.com"
    },
    {
      "no": 22,
      "name": "Muhammad Aaron Savero",
      "nim": "02211840000026",
      "email": "aaronsavero29@gmail.com"
    },
    {
      "no": 23,
      "name": "Muhammad Fakhri Jayadi",
      "nim": "02211840000027",
      "email": "Muhammadfakhri232425@gmail.com"
    },
    {
      "no": 24,
      "name": "Muhammad Fakhrizal Fahmi",
      "nim": "02211840000028",
      "email": "fakhrizalfahmi09876@gmail.com"
    },
    {
      "no": 25,
      "name": "Nyoman Dennis Yngwie Darrnawan",
      "nim": "02211840000029",
      "email": "ndennisyd@gmail.com"
    },
    {
      "no": 26,
      "name": "Pratama Tegar Parderio",
      "nim": "02211840000030",
      "email": "tegarpratama94@gmail.com"
    },
    {
      "no": 27,
      "name": "Radifan Athallah Rizky",
      "nim": "02211840000031",
      "email": "radifanathallah@gmail.com"
    },
    {
      "no": 28,
      "name": "Renita Nurul Fitria",
      "nim": "02211840000032",
      "email": "renitanurulfitria@gmail.com"
    },
    {
      "no": 29,
      "name": "Resti Ardiani Ramadhan",
      "nim": "02211840000033",
      "email": "resti.ardiani@gmail.com"
    },
    {
      "no": 30,
      "name": "Rifda Amalina",
      "nim": "02211840000034",
      "email": "rifdaamalina25@gmail.com"
    },
    {
      "no": 31,
      "name": "Rifky Arya Maulana",
      "nim": "02211840000035",
      "email": "rifky.arya10@gmail.com"
    },
    {
      "no": 32,
      "name": "Sahirah Zahraindy",
      "nim": "02211840000036",
      "email": "arasahirah@gmail.com"
    },
    {
      "no": 33,
      "name": "Salasa Ariq Sungkomo",
      "nim": "02211840000037",
      "email": "salasaa34@gmail.com"
    },
    {
      "no": 34,
      "name": "Valentinus Satrio Adhi Cahyono",
      "nim": "02211840000038",
      "email": "tyokadhi@gmail.com"
    },
    {
      "no": 35,
      "name": "Yuliana Erika Daoed",
      "nim": "02211840000039",
      "email": "yulianaerk@gmail.com"
    },
    {
      "no": 36,
      "name": "Zahrinne Aliefia Firdaus",
      "nim": "02211840000040",
      "email": "zahrinneaf@gmail.com"
    },
    {
      "no": 37,
      "name": "Zulfahmi Hawali",
      "nim": "02211840000041",
      "email": "zulfahmihawali@gmail.com"
    },
    {
      "no": 38,
      "name": "Umar Said",
      "nim": "02211840000042",
      "email": "usmarsaid@gmail.com"
    },
    {
      "no": 39,
      "name": "Eunike Rhiza Febriana Setyadi",
      "nim": "02211840000043",
      "email": "eunikerhiza@gmail.com"
    },
    {
      "no": 40,
      "name": "Farhan Aji Mukti",
      "nim": "02211840000044",
      "email": "farhan.11.aji@gmail.com"
    },
    {
      "no": 41,
      "name": "Miftahul Hidayah Nugrahini",
      "nim": "02211840000046",
      "email": "miftanugrahini21@gmail.com"
    },
    {
      "no": 42,
      "name": "Pungky Triwiya Nugraha",
      "nim": "02211840000047",
      "email": "Pungkytriwiya@gmail.com"
    },
    {
      "no": 43,
      "name": "Sahara Putri Fachrudya",
      "nim": "02211840000048",
      "email": "sfachrudya@gmail.com"
    },
    {
      "no": 44,
      "name": "Jericho Immanuel",
      "nim": "02211840000049",
      "email": "jericoimmanuel1@gmail.com"
    },
    {
      "no": 45,
      "name": "Naufal Fakhruddin Hasan",
      "nim": "02211840000050",
      "email": "naufal20001700@gmail.com"
    },
    {
      "no": 46,
      "name": "Auliya Winter Noor Fitraning",
      "nim": "02211840000051",
      "email": "auliyawinter@gmail.com"
    },
    {
      "no": 47,
      "name": "Rr. Aptaluthfia Mumtaz Februman",
      "nim": "02211840000052",
      "email": "luthfiamumtaz@gmail.com"
    },
    {
      "no": 48,
      "name": "Tansio Bunarli Ronaldo Saputra",
      "nim": "02211840000054",
      "email": "ronaldosaputra1412@gmail.com"
    },
    {
      "no": 49,
      "name": "Mohammad Faiz Rosidin",
      "nim": "02211840000055",
      "email": "mohammadfaizrosidin@gmail.com"
    },
    {
      "no": 50,
      "name": "Mochammad Ferdian Azizi",
      "nim": "02211840000056",
      "email": "ferdianazizi55@gmail.com"
    },
    {
      "no": 51,
      "name": "Mita Mellenia Wisnu Murti",
      "nim": "02211840000057",
      "email": "mitamellenia2000@gmail.com"
    },
    {
      "no": 52,
      "name": "Angga Dwi Dharmawan",
      "nim": "02211840000058",
      "email": "anggadharmawan08@gmail.com"
    },
    {
      "no": 53,
      "name": "Andre Novent Chenady",
      "nim": "02211840000059",
      "email": "andrenchenady@gmail.com"
    },
    {
      "no": 54,
      "name": "MOCHAMMAD FACHORROZI",
      "nim": "02211840000060",
      "email": "mfachorrozi@gmail.com"
    },
    {
      "no": 55,
      "name": "MUHAMMAD RAKHA WIDIANSYAH",
      "nim": "02211840000061",
      "email": "robinvanrakha20@gmail.com"
    },
    {
      "no": 56,
      "name": "CINDY AYU ANGGRAINI",
      "nim": "02211840000062",
      "email": "cindyayuanggraini@gmail.com"
    },
    {
      "no": 57,
      "name": "AHMAD RAMADHAN",
      "nim": "02211840000065",
      "email": "ahmadramadhan51200@gmail.com"
    },
    {
      "no": 58,
      "name": "JASON ADITYA PURNAMA",
      "nim": "02211840000066",
      "email": "jasonadityap@gmail.com"
    },
    {
      "no": 59,
      "name": "HUBBAL MAULANA MUHAMAD",
      "nim": "02211840000067",
      "email": "hubal.maulana@gmail.com"
    },
    {
      "no": 60,
      "name": "HAZURA NOORFAIZAH",
      "nim": "02211840000068",
      "email": "hazuranf@gmail.com"
    },
    {
      "no": 61,
      "name": "LATISHA MAHESWARI",
      "nim": "02211840000070",
      "email": "latishaa.maheswarii@gmail.com"
    },
    {
      "no": 62,
      "name": "RIZKY AULIA LARASATI",
      "nim": "02211840000071",
      "email": "rizkyauliaa0@gmail.com"
    },
    {
      "no": 63,
      "name": "ABDUL HAFID",
      "nim": "02211840000072",
      "email": "haveit27@gmail.com"
    },
    {
      "no": 64,
      "name": "MATTHEW BRAMASTA PUTRA RASETYA",
      "nim": "02211840000073",
      "email": "mattbram00@gmail.com"
    },
    {
      "no": 65,
      "name": "rafly andyka p",
      "nim": "02211840000074",
      "email": "rafli.andyp@gmail.com"
    },
    {
      "no": 66,
      "name": "RASYID DITO KUSUMO",
      "nim": "02211840000076",
      "email": "prototype.rdk@gmail.com"
    },
    {
      "no": 67,
      "name": "LEONARDO JULIAN BASKARA",
      "nim": "02211840000077",
      "email": "leonardojulian6@gmail.com"
    },
    {
      "no": 68,
      "name": "BISMA HENDRA SETIYAWAN",
      "nim": "02211840000078",
      "email": "bismahendra24@gmail.com"
    },
    {
      "no": 69,
      "name": "ANGGI AS`RUL EFANDO",
      "nim": "02211840000079",
      "email": "anggiefando@gmail.com"
    },
    {
      "no": 70,
      "name": "LUKMANUL HAKIM",
      "nim": "02211840000080",
      "email": "lukmanulhakimforyou@gmail.com"
    },
    {
      "no": 71,
      "name": "AHMAD IMAM FATONI",
      "nim": "02211840000081",
      "email": "ahinas99@gmail.com"
    },
    {
      "no": 72,
      "name": "RICHARD CHRISTIAN",
      "nim": "02211840000082",
      "email": "richardchristian678@gmail.com"
    },
    {
      "no": 73,
      "name": "FARAH SALSABILA",
      "nim": "02211840000083",
      "email": "sabilarah@gmail.com"
    },
    {
      "no": 74,
      "name": "ELEAZAR IVESSIDI",
      "nim": "02211840000084",
      "email": "eleazarezer262728@gmail.com"
    },
    {
      "no": 75,
      "name": "MUHAMMAD ANDRE PAMUNGKAS",
      "nim": "02211840000085",
      "email": "pupundrepe@gmail.com"
    },
    {
      "no": 76,
      "name": "FRANCIS SJARIFUDIN",
      "nim": "02211840000086",
      "email": "kucai123@hotmail.com"
    },
    {
      "no": 77,
      "name": "FADHLURRAHMAN MUHARRIK",
      "nim": "02211840000087",
      "email": "muharrik9@gmail.com"
    },
    {
      "no": 78,
      "name": "MERLIN LIYANTI",
      "nim": "02211840000089",
      "email": "merlinsugihita5@gmail.com"
    },
    {
      "no": 79,
      "name": "OMEGA ISAI FIRMANA",
      "nim": "02211840000091",
      "email": "firmanaomega@gmail.com"
    },
    {
      "no": 80,
      "name": "MUHAMMAD IRSYAD RYANTO PUTRA",
      "nim": "02211840000092",
      "email": "irsyad.hart@gmail.com"
    },
    {
      "no": 81,
      "name": "EDWIN GUNAWAN",
      "nim": "02211840000093",
      "email": "edwin.gunawan28@gmail.com"
    },
    {
      "no": 82,
      "name": "FATIYA RIZKIYANI",
      "nim": "02211840000094",
      "email": "fatiya1711@gmail.com"
    },
    {
      "no": 83,
      "name": "ELENA SUHADI",
      "nim": "02211840000095",
      "email": "elenaele.suhadi@gmail.com"
    },
    {
      "no": 84,
      "name": "AMANI SALSABIL HUSODO",
      "nim": "02211840000099",
      "email": "amanisalsabil21@gmail.com"
    },
    {
      "no": 85,
      "name": "FAIRUZA FASYA RAHADISTY",
      "nim": "02211840000101",
      "email": "fairuza.fasya@gmail.com"
    },
    {
      "no": 86,
      "name": "MICHELLE VERONIKA MUTIARA ASALI",
      "nim": "02211840000103",
      "email": "michelleveronica1901@gmail.com"
    },
    {
      "no": 87,
      "name": "ERINA MEGA ARIYANTO",
      "nim": "02211840000104",
      "email": "erinamegaariyanto@gmail.com"
    },
    {
      "no": 88,
      "name": "NUR INDAH SARI",
      "nim": "02211840000105",
      "email": "nurindahsari18st@gmail.com"
    },
    {
      "no": 89,
      "name": "MUHAMMAD AUNUN `ULYA MUSAFFA",
      "nim": "02211840000106",
      "email": "divineblast17@gmail.com"
    },
    {
      "no": 90,
      "name": "TEGUH SUKINDRA",
      "nim": "02211840000108",
      "email": "indrasuk505@gmail.com"
    },
    {
      "no": 91,
      "name": "MUHAMMAD DADIK AMINNANDA",
      "nim": "02211840000110",
      "email": "dadikkidad@gmail.com"
    },
    {
      "no": 92,
      "name": "NI NYOMAN KANIYA KUMALA DEWI",
      "nim": "02211840000111",
      "email": "Dewikania151@gmail.com"
    },
    {
      "no": 93,
      "name": "MUHAMMAD ABYAN ROSYAD",
      "nim": "02211840000112",
      "email": "muhammadabyann@gmail.com"
    },
    {
      "no": 94,
      "name": "TETUKO MUDITOAJI KARTODIRDJO",
      "nim": "02211840000113",
      "email": "9325tetukomuditoaji@gmail.com"
    },
    {
      "no": 95,
      "name": "AFIFAH NUR HAMIDAH",
      "nim": "02211840000114",
      "email": "afifahfaiz@gmail.com"
    },
    {
      "no": 96,
      "name": "NEZA ANIZAR",
      "nim": "02211840000115",
      "email": "neza.anizar@gmail.com"
    },
    {
      "no": 97,
      "name": "HAZIRA LARASATI NOVIDA PUTRI",
      "nim": "02211840000116",
      "email": "haziralrs@gmail.com"
    },
    {
      "no": 98,
      "name": "FIRA RIZKY RAMADHAN",
      "nim": "02211840000117",
      "email": "ramadhanfirar@gmail.com"
    },
    {
      "no": 99,
      "name": "Muthia Dinda Shaliha",
      "nim": "02211840000118",
      "email": "muthiadinda23@gmail.com"
    },
    {
      "no": 100,
      "name": "MUHAMMAD ALRAEDI SYUKHARIAL",
      "nim": "02211840000119",
      "email": "m.alraedi30@gmail.com"
    },
    {
      "no": 101,
      "name": "ANNISA SYLVIANA",
      "nim": "02211840000120",
      "email": "annisa.sylviana07@gmail.com"
    },
    {
      "no": 102,
      "name": "AISYAH FADZLINA",
      "nim": "02211840000121",
      "email": "fadzlinaaisyah@gmail.com"
    },
    {
      "no": 103,
      "name": "MUHAMMAD RIVALDY KAMANDANU",
      "nim": "02211840000122",
      "email": "valdyrivaldy90@gmail.com"
    },
    {
      "no": 104,
      "name": "SANG AJI ERMANTANTHIO",
      "nim": "02211840000123",
      "email": "thio.xanders@gmail.com"
    },
    {
      "no": 105,
      "name": "ARIH CAHYANING ANANDA",
      "nim": "02211840000124",
      "email": "arihcahyaning@gmail.com"
    },
    {
      "no": 106,
      "name": "DARIS RAFID HIRMANDA PUTRA",
      "nim": "02211840000125",
      "email": "farhanmuhammad123456@gmail.com"
    },
    {
      "no": 107,
      "name": "RAFIDA ZAINA SETIAWAN",
      "nim": "02211840000126",
      "email": "rafidazaina.setiawan9@gmail.com"
    },
    {
      "no": 108,
      "name": "TALITHA ADELLA ASSEGAF",
      "nim": "02211840000127",
      "email": "tadellaassegaf@gmail.com"
    },
    {
      "no": 109,
      "name": "ALVIN FEBRIANTO",
      "nim": "02211840000128",
      "email": "alvinfebrianto13@gmail.com"
    },
    {
      "no": 110,
      "name": "AMIN DARWIS",
      "nim": "02211840000129",
      "email": "amindarwis10@gmail.com"
    },
    {
      "no": 111,
      "name": "RIDHA DINA AULIA",
      "nim": "02211840000130",
      "email": "ridhadina28@gmail.com"
    },
    {
      "no": 112,
      "name": "TASYA ROSA WULANDARI",
      "nim": "02211840000131",
      "email": "tasyarosa23@gmail.com"
    },
    {
      "no": 113,
      "name": "TARIS FARIZAN ROCHMAN",
      "nim": "02211840000133",
      "email": "tarisfarizan@gmail.com"
    },
    {
      "no": 114,
      "name": "DIAN ASRINI SAMPARIA",
      "nim": "02211840000134",
      "email": "samparia20@gmail.com"
    },
    {
      "no": 115,
      "name": "RR. WIDYA ARISTA WIDJOJO SAPUTRO",
      "nim": "02211840000135",
      "email": "widyaarista26@gmail.com"
    },
    {
      "no": 116,
      "name": "DIVA VERYNA WIDIANTARI",
      "nim": "02211840000136",
      "email": "divaveryna@gmail.com"
    },
    {
      "no": 117,
      "name": "PANDU HARYA SEMBADA",
      "nim": "02211840000137",
      "email": "Panduhrysmbd@gmail.com"
    },
    {
      "no": 118,
      "name": "RAIS FAKHRIZARIN",
      "nim": "02211840000138",
      "email": "raisfakhrirazin3@gmail.com"
    },
    {
      "no": 119,
      "name": "DIVA LATHIFA MAHARANI",
      "nim": "02211840000139",
      "email": "divalathifam@gmail.com"
    },
    {
      "no": 120,
      "name": "MAYA ROSDIANA",
      "nim": "02211840000140",
      "email": "mayarosd05@gmail.com"
    },
    {
      "no": 121,
      "name": "EZRA FEBRIAN SEMBIRING",
      "nim": "02211840000142",
      "email": "ezrabrian21@gmail.com"
    },
    {
      "no": 122,
      "name": "MUHAMMAD RAFI DARMAWAN",
      "nim": "02211840000145",
      "email": "zhaoyunrafi55@gmail.com"
    },
    {
      "no": 123,
      "name": "DEWI SETIYANINGSIH",
      "nim": "02211840000146",
      "email": "dewisetiyaningsih53@gmail.com"
    },
    {
      "no": 124,
      "name": "YAWO SERGE MARCEL EWOXO",
      "nim": "02211840000147",
      "email": "ewaxoserge@gmail.com"
    },
    {
      "no": 125,
      "name": "SITI FATIMA",
      "nim": "02211840007001",
      "email": "aimanfatimah22@gmail.com"
    },
    {
      "no": 126,
      "name": "MARISA ASRIETD HAFIED",
      "nim": "02211840007002",
      "email": "marisahafied11@gmail.com"
    },
    {
      "no": 127,
      "name": "AULDRIEN PETRA LATURIUW",
      "nim": "02211840007003",
      "email": "olinlaturiuw@gmail.com"
    },
    {
      "no": 1,
      "name": "Netanya Avabel",
      "nim": "02211940000001",
      "email": "anyanetanya@gmail.com"
    },
    {
      "no": 2,
      "name": "Athif Afisga Mathoyah",
      "nim": "02211940000002",
      "email": "athifafisga@gmail.com"
    },
    {
      "no": 3,
      "name": "Eugenia Natasha Mandonza Eba",
      "nim": "02211940000003",
      "email": "natashamandonza@gmail.com"
    },
    {
      "no": 4,
      "name": "Iswaar Farroosa Alqoffan",
      "nim": "02211940000004",
      "email": "iswaaar.alqffan@gmail.com"
    },
    {
      "no": 5,
      "name": "Puji Astuti Sintia Doli",
      "nim": "02211940000005",
      "email": "sintiaastuti62@gmail.com"
    },
    {
      "no": 6,
      "name": "Belinda Alifiya Pambudi",
      "nim": "02211940000006",
      "email": "belindalifiya13@gmail.com"
    },
    {
      "no": 7,
      "name": "Muhammad Irfaid Darojat",
      "nim": "02211940000007",
      "email": "irfaiddarojat55@gmail.com"
    },
    {
      "no": 8,
      "name": "Alya Nadifa Salsabilla",
      "nim": "02211940000008",
      "email": "alyanadifa12@gmail.com"
    },
    {
      "no": 9,
      "name": "Rania Sekar Kinasih",
      "nim": "02211940000009",
      "email": "raniask2210@gmail.com"
    },
    {
      "no": 10,
      "name": "Rosanty Amalia Putri Syamsuddin",
      "nim": "02211940000010",
      "email": "rosantyamalia06@gmail.com"
    },
    {
      "no": 11,
      "name": "Ferdy Hermawan",
      "nim": "02211940000011",
      "email": "dronerobot88@gmail.com"
    },
    {
      "no": 12,
      "name": "Jacqueline Tirtadinata",
      "nim": "02211940000012",
      "email": "jacquelinetirtadinata@gmail.com"
    },
    {
      "no": 13,
      "name": "Anggi Tirta Sari Br N",
      "nim": "02211940000013",
      "email": "anggitirtasari10@gmail.com"
    },
    {
      "no": 14,
      "name": "Sri Rani Kusumaningrum",
      "nim": "02211940000014",
      "email": "sriranikusumaningrum21@gmail.com"
    },
    {
      "no": 15,
      "name": "Muhammad Sidiq",
      "nim": "02211940000015",
      "email": "mhdsidiq8@gmail.com"
    },
    {
      "no": 16,
      "name": "Ameylia Annisa Wardiantara",
      "nim": "02211940000016",
      "email": "ameyliaannisa3@gmail.com"
    },
    {
      "no": 17,
      "name": "Cheryn Ayudya Ardhaneswara",
      "nim": "02211940000017",
      "email": "cherynayudya.ca@gmail.com"
    },
    {
      "no": 18,
      "name": "Rosalia Kurniasari",
      "nim": "02211940000018",
      "email": "rosaliakur@gmail.com"
    },
    {
      "no": 19,
      "name": "Rafika Aulia Rahmadian Salya",
      "nim": "02211940000019",
      "email": "rafikasalya22@gmail.com"
    },
    {
      "no": 20,
      "name": "Devita Adela",
      "nim": "02211940000020",
      "email": "devitaadela@gmail.com"
    },
    {
      "no": 21,
      "name": "Fachmellya Zieyan A.",
      "nim": "02211940000021",
      "email": "fachmellya03@gmail.com"
    },
    {
      "no": 22,
      "name": "Mochamad Dinandya Hendrico",
      "nim": "02211940000022",
      "email": "dinandyahdrc@gmail.com"
    },
    {
      "no": 23,
      "name": "Astri Nawwar Kusumaningtyas",
      "nim": "02211940000023",
      "email": "astrtys@gmail.com"
    },
    {
      "no": 24,
      "name": "Nidya Ahmadya R.",
      "nim": "02211940000024",
      "email": "nidyahmd@gmail.com"
    },
    {
      "no": 25,
      "name": "Belinda Kezia Purwanto",
      "nim": "02211940000025",
      "email": "belindakp321@gmail.com"
    },
    {
      "no": 26,
      "name": "Rico Aditya",
      "nim": "02211940000026",
      "email": "ricoaditya372@gmail.com"
    },
    {
      "no": 27,
      "name": "M. Ulwan Fahmi R.",
      "nim": "02211940000027",
      "email": "ulwanfahmi@gmail.com"
    },
    {
      "no": 28,
      "name": "Fauzan Agra Ibrahim",
      "nim": "02211940000028",
      "email": "fauzan.agra.sch@gmail.com"
    },
    {
      "no": 29,
      "name": "Michellia Pramoryza",
      "nim": "02211940000029",
      "email": "michelliapram@gmail.com"
    },
    {
      "no": 30,
      "name": "Dea Puspa Karinda",
      "nim": "02211940000031",
      "email": "dea.puspa.karinda@gmail.com"
    },
    {
      "no": 31,
      "name": "Sagita Friska Pangaribuan",
      "nim": "02211940000032",
      "email": "sagitafriska01@gmail.com"
    },
    {
      "no": 32,
      "name": "Rosyida Nofiana Arofah",
      "nim": "02211940000033",
      "email": "nofiana.arofah@gmail.com"
    },
    {
      "no": 33,
      "name": "Gloria Islamy Assidiqie",
      "nim": "02211940000034",
      "email": "gloria.islamy@gmail.com"
    },
    {
      "no": 34,
      "name": "Berlian Widi Bela Pamungkas",
      "nim": "02211940000035",
      "email": "berlianwidi14@gmail.com"
    },
    {
      "no": 35,
      "name": "Alfiannur Rona Fadhly Yusuf",
      "nim": "02211940000037",
      "email": "alfiannuryusuf@gmail.com"
    },
    {
      "no": 36,
      "name": "Ajeng Almira Tarisha Asri",
      "nim": "02211940000038",
      "email": "ajengalmiratarisha@gmail.com"
    },
    {
      "no": 37,
      "name": "Farah Diya Oktaviyanti",
      "nim": "02211940000039",
      "email": "farah.diya32@gmail.com"
    },
    {
      "no": 38,
      "name": "Albar Sutan Bahari Siregar",
      "nim": "02211940000040",
      "email": "albarsutan02@gmail.com"
    },
    {
      "no": 39,
      "name": "Pramudya Riandana Bhayu Gautama",
      "nim": "02211940000041",
      "email": "pbayugautama@gmail.com"
    },
    {
      "no": 40,
      "name": "Nabillah Rachmawati",
      "nim": "02211940000042",
      "email": "nabillahnabs16@gmail.com"
    },
    {
      "no": 41,
      "name": "Rio Rizky Damara",
      "nim": "02211940000043",
      "email": "damarario123537@gmail.com"
    },
    {
      "no": 42,
      "name": "Ferdiansyah Iqbil Qouli",
      "nim": "02211940000044",
      "email": "ansyahfer4@gmail.com"
    },
    {
      "no": 43,
      "name": "Ailsa Irma Adiani Widjaja",
      "nim": "02211940000046",
      "email": "ailsairmaaa@gmail.com"
    },
    {
      "no": 44,
      "name": "Haritsa Syamsa Vaganza",
      "nim": "02211940000047",
      "email": "haritsa.sv@gmail.com"
    },
    {
      "no": 45,
      "name": "Ainiya Nanda Aurunnisa",
      "nim": "02211940000049",
      "email": "ainiyananda@gmail.com"
    },
    {
      "no": 46,
      "name": "Galuh Indira Sayekti",
      "nim": "02211940000050",
      "email": "galuhindira1234@gmail.com"
    },
    {
      "no": 47,
      "name": "Naning Retno Astuti",
      "nim": "02211940000051",
      "email": "naningretnoastuti@gmail.com"
    },
    {
      "no": 48,
      "name": "Vicky Firmansyah",
      "nim": "02211940000052",
      "email": "vickyfirmansyah38@gmail.com"
    },
    {
      "no": 49,
      "name": "Rossesari Nailah Syahbarakat",
      "nim": "02211940000053",
      "email": "rossesarinailah@gmail.com"
    },
    {
      "no": 50,
      "name": "Ditrosa Sukma Wardani",
      "nim": "02211940000054",
      "email": "dirotsa26@gmail.com"
    },
    {
      "no": 51,
      "name": "Aldi Fernanda Prastianto",
      "nim": "02211940000056",
      "email": "Aldyfernanda78@gmail.com"
    },
    {
      "no": 52,
      "name": "Annisa Nurul Islami",
      "nim": "02211940000057",
      "email": "Islaminurul06@gmail.com"
    },
    {
      "no": 53,
      "name": "Degama Figo Garsya",
      "nim": "02211940000058",
      "email": "figo.garsya@gmail.com"
    },
    {
      "no": 54,
      "name": "Irfan Dwi Haryana",
      "nim": "02211940000059",
      "email": "irfandh47@gmail.com"
    },
    {
      "no": 55,
      "name": "Ulfiyah Afnian Sari",
      "nim": "02211940000060",
      "email": "afnians@gmail.com"
    },
    {
      "no": 56,
      "name": "Delvin Theodorus Hansell",
      "nim": "02211940000061",
      "email": "delvintheodorus@gmail.com"
    },
    {
      "no": 57,
      "name": "Hosea Amadeus Hariputra",
      "nim": "02211940000062",
      "email": "hoseaah111100@gmail.com"
    },
    {
      "no": 58,
      "name": "Levina Mrachyani",
      "nim": "02211940000063",
      "email": "levinamarch@gmail.com"
    },
    {
      "no": 59,
      "name": "Ahmad mujiburrosyid",
      "nim": "02211940000064",
      "email": "mujiburrosyida@gmail.com"
    },
    {
      "no": 60,
      "name": "Adian Galihditya Sinarto Wardhana",
      "nim": "02211940000065",
      "email": "adian777galih@gmail.com"
    },
    {
      "no": 61,
      "name": "Naufal Ramadhani",
      "nim": "02211940000066",
      "email": "naufalramadhani2711@gmail.com"
    },
    {
      "no": 62,
      "name": "Vincent Otto Pratama",
      "nim": "02211940000067",
      "email": "vincentottop@gmail.com"
    },
    {
      "no": 63,
      "name": "Natanael Peter",
      "nim": "02211940000068",
      "email": "natanaelkrisnadi100@gmail.com"
    },
    {
      "no": 64,
      "name": "ok ahmad ariq",
      "nim": "02211940000069",
      "email": "okahmadariq@gmail.com"
    },
    {
      "no": 65,
      "name": "Ahmad Fanani Sudarto",
      "nim": "02211940000070",
      "email": "ahmedinanaf@gmail.com"
    },
    {
      "no": 66,
      "name": "Rafly Putra Ardiansyah",
      "nim": "02211940000071",
      "email": "raflyputra21@gmail.com"
    },
    {
      "no": 67,
      "name": "Mikael Sri kurnia Raditya Dwiatmoko",
      "nim": "02211940000072",
      "email": "mikaeldityo@gmail.com"
    },
    {
      "no": 68,
      "name": "Muhammad Rizky Sanjaya",
      "nim": "02211940000073",
      "email": "rizky.sanjaya2001@gmail.com"
    },
    {
      "no": 69,
      "name": "Wilbert Chandra",
      "nim": "02211940000074",
      "email": "klik.wilbert@gmail.com"
    },
    {
      "no": 70,
      "name": "Octavia Cahyani",
      "nim": "02211940000076",
      "email": "octavia268@gmail.com"
    },
    {
      "no": 71,
      "name": "Made Krisna Adinaranarya",
      "nim": "02211940000077",
      "email": "krisna.adinarayana@gmail.com"
    },
    {
      "no": 72,
      "name": "Enrique Gianfranco",
      "nim": "02211940000079",
      "email": "mregrockfranco@gmail.com"
    },
    {
      "no": 73,
      "name": "I Made Daego Nugra Visesa",
      "nim": "02211940000080",
      "email": "rastafara48@gmail.com"
    },
    {
      "no": 74,
      "name": "fa'izul Qholbi Tamimi",
      "nim": "02211940000081",
      "email": "faisqolbi17@gmail.com"
    },
    {
      "no": 75,
      "name": "Asti Paramitha Ananda Santoso",
      "nim": "02211940000083",
      "email": "astianandaps@gmail.com"
    },
    {
      "no": 76,
      "name": "Fabio Emiguel Simanjutak",
      "nim": "02211940000084",
      "email": "fabioemig200201@gmail.com"
    },
    {
      "no": 77,
      "name": "Mutiara Cahyani",
      "nim": "02211940000086",
      "email": "mutiaracahyani104@gmail.com"
    },
    {
      "no": 78,
      "name": "Mohd Azmi Fadhi S.",
      "nim": "02211940000087",
      "email": "azmifadhi7@gmail.com"
    },
    {
      "no": 79,
      "name": "Ahmad Faruq Mubaroq",
      "nim": "02211940000089",
      "email": "faruqmubaroq13@gmail.com"
    },
    {
      "no": 80,
      "name": "Muhammad Majid Alfian",
      "nim": "02211940000090",
      "email": "m.majidalifan@gmail.com"
    },
    {
      "no": 81,
      "name": "Moh. Abdillah Al Fikri",
      "nim": "02211940000091",
      "email": "alfikriabdillah@gmail.com"
    },
    {
      "no": 82,
      "name": "Indra Cahyo Widaqdo",
      "nim": "02211940000093",
      "email": "icahyaw@gmail.com"
    },
    {
      "no": 83,
      "name": "Alfredo Junianto Tarigan",
      "nim": "02211940000094",
      "email": "alfredotarigan12@gmail.com"
    },
    {
      "no": 84,
      "name": "Fachrizan Bilal Masrur",
      "nim": "02211940000095",
      "email": "bilalfahrizain1@gmail.com"
    },
    {
      "no": 85,
      "name": "Ilsyahbillah Alrifdah",
      "nim": "02211940000096",
      "email": "ilsyah1101@gmail.com"
    },
    {
      "no": 86,
      "name": "Mohamad Emaldi Wilhan Ariawan",
      "nim": "02211940000097",
      "email": "emaldiwilhan@gmail.com"
    },
    {
      "no": 87,
      "name": "Dwi Nanda Pramudya",
      "nim": "02211940000098",
      "email": "dwinandapramudya@gmail.com"
    },
    {
      "no": 88,
      "name": "Muhammad Adafa Kenyo",
      "nim": "02211940000099",
      "email": "kenyo1384@gmail.com"
    },
    {
      "no": 89,
      "name": "Muhammad Faruq Akmal",
      "nim": "02211940000100",
      "email": "faruqakmal15@gmail.com"
    },
    {
      "no": 90,
      "name": "Muhammad Yusuf Bakhtiar",
      "nim": "02211940000101",
      "email": "yusufbakhtiar264@gmail.com"
    },
    {
      "no": 91,
      "name": "Risfanali Raja",
      "nim": "02211940000102",
      "email": "RISFAN.ali@gmail.com"
    },
    {
      "no": 92,
      "name": "Nadhifa Auria Andini",
      "nim": "02211940000103",
      "email": "nadhifauria@gmail.com"
    },
    {
      "no": 93,
      "name": "Anissa Candraningtyas",
      "nim": "02211940000104",
      "email": "nissacandra27@gmail.com"
    },
    {
      "no": 94,
      "name": "Adidoyo Prakoso",
      "nim": "02211940000105",
      "email": "adidoyo01prakoso@gmail.com"
    },
    {
      "no": 95,
      "name": "Rheinanda Rachmaditasari",
      "nim": "02211940000106",
      "email": "rheinand4r@gmail.com"
    },
    {
      "no": 96,
      "name": "Petri Euodia Simanjuntak",
      "nim": "02211940000107",
      "email": "petrieuodia@gmail.com"
    },
    {
      "no": 97,
      "name": "Erfira Isnainatu Purmadini",
      "nim": "02211940000108",
      "email": "erfiraisnainatu28@gmail.com"
    },
    {
      "no": 98,
      "name": "Aulia Rahma Nabila",
      "nim": "02211940000109",
      "email": "auliarnb09@gmail.com"
    },
    {
      "no": 99,
      "name": "Achyani Putri Fadila",
      "nim": "02211940000111",
      "email": "acchanpf02@gmail.com"
    },
    {
      "no": 100,
      "name": "M Faiqur Rifqi",
      "nim": "02211940000112",
      "email": "mfaiqurrifqi05@gmail.com"
    },
    {
      "no": 101,
      "name": "Nindya Tsabitah",
      "nim": "02211940000113",
      "email": "nindyatsabitah180902@gmail.com"
    },
    {
      "no": 102,
      "name": "Mevlana Arvamusa",
      "nim": "02211940000114",
      "email": "mevlana.spensa@gmail.com"
    },
    {
      "no": 103,
      "name": "Sihab Adha Muntaha",
      "nim": "02211940000115",
      "email": "sihabadha32@gmail.com"
    },
    {
      "no": 104,
      "name": "Stanley Abel Hartanto",
      "nim": "02211940000116",
      "email": "stanleyabel7@gmail.com"
    },
    {
      "no": 105,
      "name": "M. Ihwan Nur Rifki",
      "nim": "02211940000117",
      "email": "ihwanrifki@gmail.com"
    },
    {
      "no": 106,
      "name": "Muhammad Alif Aditya Febriyadi",
      "nim": "02211940000118",
      "email": "alifsby28@gmail.com"
    },
    {
      "no": 107,
      "name": "Nais Septianingrum",
      "nim": "02211940000121",
      "email": "naisningrum@gmail.com"
    },
    {
      "no": 108,
      "name": "Mukhlis Sholehudin",
      "nim": "02211940000122",
      "email": "mukhlissss28@gmail.com"
    },
    {
      "no": 109,
      "name": "Mochammad Fahmi Zachri",
      "nim": "02211940000124",
      "email": "mochammadfahmizachri@gmail.com"
    },
    {
      "no": 110,
      "name": "Ibrahim Ichsan",
      "nim": "02211940000125",
      "email": "ibrahim.ichsan@gmail.com"
    },
    {
      "no": 111,
      "name": "Rifki Azriel Fahrezi",
      "nim": "02211940000126",
      "email": "azrielrifki24@gmail.com"
    },
    {
      "no": 112,
      "name": "Faisal Akbar",
      "nim": "02211940000128",
      "email": "faisalwildan22@gmail.com"
    },
    {
      "no": 113,
      "name": "Fathanudin Ahmad",
      "nim": "02211940000132",
      "email": "fathanudinahmad15@gmail.com"
    },
    {
      "no": 114,
      "name": "Dhanar Kurnia Ramadhan",
      "nim": "02211940000133",
      "email": "danarramadhan56@gmail.com"
    },
    {
      "no": 115,
      "name": "Alfien Naufal Prahandika",
      "nim": "02211940000134",
      "email": "alfiennaufal@gmail.com"
    },
    {
      "no": 116,
      "name": "Rio Fachrizal",
      "nim": "02211940000136",
      "email": "riorizal76@gmail.com"
    },
    {
      "no": 117,
      "name": "Irviano P. Radjamin",
      "nim": "02211940000137",
      "email": "viano.radjamin@gmail.com"
    },
    {
      "no": 118,
      "name": "Muhammad Thariq Kurnia T",
      "nim": "02211940000138",
      "email": "thariqjangkrik@gmail.com"
    },
    {
      "no": 119,
      "name": "Ampeldenta Kertsaning",
      "nim": "02211940000140",
      "email": "ertsampel@gmail.com"
    },
    {
      "no": 120,
      "name": "Jesslyn Marteen Clarissa",
      "nim": "02211940000141",
      "email": "jesslyn.mc10@gmail.com"
    },
    {
      "no": 121,
      "name": "Faris Adnan",
      "nim": "02211940000142",
      "email": "farisadrian628@gmail.com"
    },
    {
      "no": 122,
      "name": "Merisa Veronika Suparto",
      "nim": "02211940000144",
      "email": "merisaveronica@gmail.com"
    },
    {
      "no": 123,
      "name": "Elmas Alfarizky",
      "nim": "02211940000145",
      "email": "elmasalfarizky9000@gmail.com"
    },
    {
      "no": 124,
      "name": "Amri Maulana",
      "nim": "02211940000146",
      "email": "amrimp126@gmail.com"
    },
    {
      "no": 125,
      "name": "Hamdan Ihsan",
      "nim": "02211940000147",
      "email": "hamdanihsan83@gmail.com"
    },
    {
      "no": 126,
      "name": "Muhammad Husin Haykal",
      "nim": "02211940000148",
      "email": "hekalhafes@gmail.com"
    },
    {
      "no": 127,
      "name": "Afifah Nur Aini",
      "nim": "02211940000150",
      "email": "afifahnuraini2410@gmail.com"
    },
    {
      "no": 128,
      "name": "Naufal Nafis Trismawan",
      "nim": "02211940000152",
      "email": "xxxnafisnaufalxxx@gmail.com"
    },
    {
      "no": 129,
      "name": "Kelben Roostewen",
      "nim": "02211940000154",
      "email": "kelbenrckk@gmail.com"
    },
    {
      "no": 130,
      "name": "Tiara Nadilla",
      "nim": "02211940000155",
      "email": "tiaranadilla4@gmail.com"
    },
    {
      "no": 131,
      "name": "Mauludandru Heradiprakoso",
      "nim": "02211940000156",
      "email": "mauludandruhp@gmail.com"
    },
    {
      "no": 132,
      "name": "Hanifah Nisrina F",
      "nim": "02211940000158",
      "email": "hanifahnisrinaa@gmail.com"
    },
    {
      "no": 133,
      "name": "Oktavira Nanda Nugraha",
      "nim": "02211940000159",
      "email": "oktavira2001@gmail.com"
    },
    {
      "no": 134,
      "name": "Syifa Arika Rangkuti",
      "nim": "02211940000160",
      "email": "syifarika@gmail.com"
    },
    {
      "no": 135,
      "name": "Kautsarina Rachmayanti",
      "nim": "02211940000161",
      "email": "kautsarina21@gmail.com"
    },
    {
      "no": 136,
      "name": "Firyal Zalfa Arafatyananda",
      "nim": "02211940000162",
      "email": "zalfafiryal050301@gmail.com"
    },
    {
      "no": 137,
      "name": "Muhammad Fauzan Harun",
      "nim": "02211940000163",
      "email": "fauzaaanharun@gmail.com"
    },
    {
      "no": 138,
      "name": "Aisyah Mawaddah Irda Lubis",
      "nim": "02211940000164",
      "email": "aiwadalu@gmail.com"
    },
    {
      "no": 139,
      "name": "R. Muhammad Yazid Budihendrawan",
      "nim": "02211940000165",
      "email": "yazidhendra93@gmail.com"
    },
    {
      "no": 140,
      "name": "Miftah Imam Ma'arif",
      "nim": "02211940000166",
      "email": "miftahimam246@gmail.com"
    },
    {
      "no": 141,
      "name": "Syarief Hidayatullah",
      "nim": "02211940000168",
      "email": "Syariefhidayatullah08@gmail.com"
    },
    {
      "no": 142,
      "name": "Fadhil Fatchur R",
      "nim": "02211940000169",
      "email": "fadhilfatchur1871@gmail.com"
    },
    {
      "no": 143,
      "name": "Al Hafiz Taufiqul Hakim",
      "nim": "02211940000170",
      "email": "hafizhakim3884@gmail.com"
    },
    {
      "no": 144,
      "name": "Fahri Raihan Ashary",
      "nim": "02211940000171",
      "email": "fahri.ashary@gmail.com"
    },
    {
      "no": 145,
      "name": "Muhammad Shidqi",
      "nim": "02211940000172",
      "email": "shidqi.m23@gmail.com"
    },
    {
      "no": 146,
      "name": "Muhammad Zaky Rahardyanto",
      "nim": "02211940000173",
      "email": "mzakyr11@gmail.com"
    },
    {
      "no": 147,
      "name": "DiANINDERAMAYANGKARA S",
      "nim": "02211940000174",
      "email": "dsokhmajawie@gmail.com"
    },
    {
      "no": 148,
      "name": "Khefina Athifiyah Safiaputri",
      "nim": "02211940000175",
      "email": "khefinaas@gmail.com"
    },
    {
      "no": 149,
      "name": "Lianti Nur Izza",
      "nim": "02211940000176",
      "email": "lilian.lianti27@gmail.com"
    },
    {
      "no": 150,
      "name": "Aqib Sekarlangit Murtadha",
      "nim": "02211940000178",
      "email": "aqiblangit400@gmail.com"
    },
    {
      "no": 151,
      "name": "Wanda Oktavia Maharani",
      "nim": "02211940000179",
      "email": "wandaoktavia300@gmail.com"
    },
    {
      "no": 152,
      "name": "Fredy Kurniawan Sutawijaya",
      "nim": "02211940000180",
      "email": "fredykurniawan07@gmail.com"
    },
    {
      "no": 153,
      "name": "Hanif Irbah Firdaus Anam",
      "nim": "02211940000181",
      "email": "hanif30701@gmail.com"
    },
    {
      "no": 154,
      "name": "Mayongga HerizFebrada",
      "nim": "02211940000182",
      "email": "hmayongga@gmail.com"
    },
    {
      "no": 155,
      "name": "Bunga Widiana Nurrahmadhanti",
      "nim": "02211940000183",
      "email": "bungawidianan@gmail.com"
    },
    {
      "no": 156,
      "name": "Zafira Mirza Ramadhani",
      "nim": "02211940000185",
      "email": "zafira.mirza@gmail.com"
    },
    {
      "no": 157,
      "name": "Muhammad Bagus Rafidhya",
      "nim": "02211940000186",
      "email": "raffi.mcmxcvi@gmail.com"
    },
    {
      "no": 158,
      "name": "Vania Naufalin",
      "nim": "02211940000187",
      "email": "vanianaufalin@gmail.com"
    },
    {
      "no": 159,
      "name": "Diva Admarita",
      "nim": "02211940000188",
      "email": "divaadmaritaa@gmail.com"
    },
    {
      "no": 160,
      "name": "Narendra Yudha Aditama",
      "nim": "02211940000189",
      "email": "narendraaditama07@gmail.com"
    },
    {
      "no": 161,
      "name": "Ma'ruf Bintang Dwi Cahyo",
      "nim": "02211940000190",
      "email": "arufdc@gmail.com"
    },
    {
      "no": 162,
      "name": "Fachri Kurniawan Asghar",
      "nim": "02211940000191",
      "email": "asgharfachri11@gmail.com"
    },
    {
      "no": 163,
      "name": "Arditya Novan F",
      "nim": "02211940000192",
      "email": "ardnov009@gmail.com"
    },
    {
      "no": 164,
      "name": "Aisyah Putri Prameswari Jasmine",
      "nim": "02211940000193",
      "email": "aisyahputrirme@gmail.com"
    },
    {
      "no": 165,
      "name": "Alfina Janeta",
      "nim": "02211940000194",
      "email": "alfinajaneta@gmail.com"
    },
    {
      "no": 166,
      "name": "Ovelly Miryam Amamehi",
      "nim": "02211940007001",
      "email": "ovelly.amamehi12@gmail.com"
    },
    {
      "no": 167,
      "name": "HAFIDZ AKBAR FARIDZI RAHIM",
      "nim": "02211942000001",
      "email": "hafidzakbar.hr@gmail.com"
    },
    {
      "no": 168,
      "name": "NI MADE PUTRI DWI VICKA ARTHA",
      "nim": "02211942000003",
      "email": "putridwivicka2601@gmail.com"
    },
    {
      "no": 169,
      "name": "MUHAMMAD SAMPURNA ALTITAN",
      "nim": "02211942000004",
      "email": "Msampurnaaltitan@gmail.com"
    },
    {
      "no": 170,
      "name": "ZETITTY CESARIO NANARICKA",
      "nim": "02211942000006",
      "email": "zetittycesario@gmail.com"
    },
    {
      "no": 171,
      "name": "VIRGINIA MASOKAN SIRI",
      "nim": "02211942000007",
      "email": "virginiamasokansiri@gmail.com"
    },
    {
      "no": 172,
      "name": "BALQIS NAJWA TSABITHA",
      "nim": "02211942000009",
      "email": "balqisnajwat56@gmail.com"
    },
    {
      "no": 173,
      "name": "ADI MAKAYASA MAHA PUTRA",
      "nim": "02211942000010",
      "email": "adi.makayasa254001@gmail.com"
    },
    {
      "no": 174,
      "name": "LUTHFIYYAH ANNISA NUR AZIZAH",
      "nim": "02211942000011",
      "email": "Luthfiyyah.annisa@gmail.com"
    },
    {
      "no": 175,
      "name": "HAFID ZAKI AUFAR",
      "nim": "02211942000013",
      "email": "zakiaufar19@gmail.com"
    }
  ];

  _participants.forEach((_participant)=>{
    var participant = new Participant();
    participant.name = _participant.name;
    participant.nim = _participant.nim;
    participant.email = _participant.email;
    participant.session.id = "5fd22c2c38ec7b1a1b27fbc6";
    participant.session.number = 1;
    participant.session.min = new Date("2020-12-10T21:09:00.000Z");
    participant.session.max = new Date("2020-12-11T21:09:00.000Z");

    participant.save(function (err) {
      if (err) return res.status(500).json(err);
  
      Session.findById("5fd22c2c38ec7b1a1b27fbc6", function (err, session) {
        if (err) return res.status(500).json(err);
        session.total_participant++;
        Session.findOneAndUpdate({ _id: session._id }, { $set: session }).then(
          (session) => {
            if (session) {
            } else {
            }
          }
        );
      });
    });
  })


  // Save and validate
  
};

// Handle update actions
exports.update = function (req, res) {

  var moveSession = false;
  var oldSession = {};
  var newSession = {};

  Participant.findById(req.params.id, function (err, participant) {
    if (err) throw err;
    if (participant.session.id != req.body.sessionId) {
      moveSession = true;
      oldSession = participant.session;
      newSession = {
        id: req.body.sessionId,
        number: req.body.sessionNumber,
        start: new Date(req.body.sessionMin),
        end: new Date(req.body.sessionMax),
      };
    }
  });

  Participant.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        name: req.body.name,
        nim: req.body.nim,
        email: req.body.email,
        "session.id": req.body.sessionId,
        "session.number": req.body.sessionNumber,
        "session.min": new Date(req.body.sessionMin),
        "session.max": new Date(req.body.sessionMax),
      },
    }
  )
    .then((participant) => {
      if (participant) {
        if (moveSession) {
          Session.findById(newSession.id, function (err, session) {
            if (err) throw err;
            session.total_participant++;
            Session.findOneAndUpdate(
              { _id: session._id },
              { $set: session }
            ).then((session) => {
              if (session) {
              } else {
              }
            });
          });

          Session.findById(oldSession.id, function (err, session) {
            if (err) throw err;
            session.total_participant--;
            Session.findOneAndUpdate(
              { _id: session._id },
              { $set: session }
            ).then((session) => {
              if (session) {
              } else {
              }
            });
          });
        }

        return res.json({
          message: "participant updated",
          data: participant,
        });
      } else {
        return res.json({
          message: "participant not found",
          data: {},
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "error",
        data: err,
      });
    });
};

// Handle vote actions
exports.vote = function (req, res) {
  Participant.findOneAndUpdate(
    { _id: req.body.id_participant },
    {
      $set: {
        "voting.id_candidate": req.body.id_candidate,
        "voting.time": Date(),
        "voting.counted": 0,
      },
    }
  )
    .then((participant) => {
      if (participant) {
        return res.json({
          message: "participant voted",
          data: participant,
        });
      } else {
        return res.json({
          message: "participant not found",
          data: {},
        });
      }
    })
    .catch((err) => {
      return res.json({
        message: "error",
        data: err,
      });
    });
};

// Handle delete actions
exports.delete = function (req, res) {

  Participant.findById(req.params.id, function (err, participant) {
    if (err) return res.send(err);

    Session.findById(participant.session.id, function (err, session) {
      if (err) throw err;
      session.total_participant--;
      console.log("sessions id:" + session._id);
      Session.findOneAndUpdate({ _id: session._id }, { $set: session }).then(
        (session) => {
          if (session) {
            Participant.deleteOne(
              {
                _id: req.params.id,
              },
              function (err, participant) {
                if (err) res.send(err);

                return res.json({
                  status: "success",
                  message: "Participant Deleted!",
                });
              }
            );
          } else {
          }
        }
      );
    });
  });
};

// Handle delete actions
exports.force_delete = function (req, res) {
 
  Participant.deleteOne(
    {
      _id: req.params.id,
    },
    function (err, participant) {
      if (err) res.send(err);

      res.json({
        status: "success",
        message: "Participant Deleted!",
      });
    }
  );
};
