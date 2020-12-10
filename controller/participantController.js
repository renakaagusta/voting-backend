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
    [{
      "nim": "02211640000006",
      "email": "siamangkk@gmail.com",
      "name": "Riza Miftahul Azmi"
    },
    {
      "nim": "02211640000019",
      "email": "yuananzal19@gmail.com",
      "name": "Yuan Anzal Ramadhan"
    },
    {
      "nim": "02211640000142",
      "email": "farhanhadiputra@gmail.com",
      "name": "Farhan Hadi Putra"
    },
    {
      "nim": "02211640000120",
      "email": "ipang00443@gmail.com",
      "name": "Mochamad Irfan Dwiputro"
    },
    {
      "nim": "02211640000176",
      "email": "emrafighifari@gmail.com",
      "name": "Muhammad Rafi Ghifari"
    },
    {
      "nim": "02211640000134",
      "email": "haryoali46@gmail.com",
      "name": "Raden Haryo Ali Rakhmanto"
    },
    {
      "nim": "02211340000148",
      "email": "ismailfcb10@gmail.com",
      "name": "ISMAIL"
    },
    {
      "nim": "02211640000061",
      "email": "nurtsanifuad@gmail.com",
      "name": "Fuad Nurtsani Afifudin"
    },
    {
      "nim": "02211640000034",
      "email": "ibrohimmhmdimam@gmail.com",
      "name": "Ibrohim Muhammad"
    },
    {
      "nim": "02211640000097",
      "email": "fuadperdana1234@gmail.com",
      "name": "Fuad Naufal Perdana"
    },
    {
      "nim": "02211640000062",
      "email": "mrumaulia@gmail.com",
      "name": "Muhammad Rum Aulia"
    },
    {
      "nim": "02211640000177",
      "email": "mhzirin@gmail.com",
      "name": "Muhammad Hazairin Asyiddiq"
    },
    {
      "nim": "02211640000125",
      "email": "aufal.nawa@gmail.com",
      "name": "Aufal Nawasanjani"
    },
    {
      "nim": "02211640000046",
      "email": "rajjseli@gmail.com",
      "name": "Raja Tamiang Asma'I"
    },
    {
      "nim": "02211640000076",
      "email": "mawazr@gmail.com",
      "name": "Mawaz Rindra Dihari"
    },
    {
      "nim": "02211640000086",
      "email": "reynaldibagaskara24@gmail.com",
      "name": "Reynaldi Bagaskara Kusuma Wardana Putra"
    },
    {
      "nim": "02211640000119",
      "email": "muhariadiharjuno@yahoo.com",
      "name": "Muhariadi Harjuno Kartodirdjo"
    },
    {
      "nim": "02211640000168",
      "email": "aphrodita.luthfania@gmail.com",
      "name": "Aphrodita Luthfania Eka Putri"
    },
    {
      "nim": "02211640000129",
      "email": "Najlameutia@gmail.com",
      "name": "Najlaa Aribah Meutia"
    },
    {
      "nim": "02211640000144",
      "email": "donnyboulanova13@gmail.com",
      "name": "Donny Boulanova"
    },
    {
      "nim": "02211640000140",
      "email": "fauzan.firdaus2205@gmail.com",
      "name": "Muhammad Fauzan Firdaus"
    },
    {
      "nim": "02211640000102",
      "email": "ri.wisesa@gmail.com",
      "name": "Regnanta Lazuardi Wisesa"
    },
    {
      "nim": "02211640000124",
      "email": "handydarmawan1509@yahoo.com",
      "name": "Handy Darmawan"
    },
    {
      "nim": "02211640007001",
      "email": "naulyrahmi@gmail.com",
      "name": "Nauli Rahmi"
    },
    {
      "nim": "02211640000135",
      "email": "luthfikarifushidqi@gmail.com",
      "name": "Luthfi Kurnia Arifushidqi"
    },
    {
      "nim": "02211640000075",
      "email": "azrieligbal76@gmail.com",
      "name": "Azriel Iqbal Hamayaputra"
    },
    {
      "nim": "02211640000046",
      "email": "aditama.yoshi@gmail.com",
      "name": "YOSHIDA ADITAMA KARSONO"
    },
    {
      "nim": "02211740000002",
      "email": "ainunfitrayawati99@gmail.com",
      "name": "AINUN FITRAYAWATI"
    },
    {
      "nim": "02211740000003",
      "email": "meidy.hariawan98@gmail.com",
      "name": "MEIDY HARIAWAN"
    },
    {
      "nim": "02211740000005",
      "email": "Rahmasarinursetyono@gmail.com",
      "name": "RAHMASARI NUR SETYONO"
    },
    {
      "nim": "02211740000007",
      "email": "famybisyauqilhaq@gmail.com",
      "name": "FAMY BISYAUQIL HAQ"
    },
    {
      "nim": "02211740000009",
      "email": "finaanggraini37@gmail.com",
      "name": "FINA ANGGRAINI"
    },
    {
      "nim": "02211740000012",
      "email": "asriwei188@gmail.com",
      "name": "ASRI NUR FADILAH"
    },
    {
      "nim": "02211740000013",
      "email": "febriani.tfajriah@gmail.com",
      "name": "FEBRIANI TRI FAJRIAH"
    },
    {
      "nim": "02211740000014",
      "email": "Balqisnabila31@gmail.com",
      "name": "NABILA FARRAS BALQIS"
    },
    {
      "nim": "02211740000015",
      "email": "nurudinamin0@gmail.com",
      "name": "NURUDDIN AMIN"
    },
    {
      "nim": "02211740000016",
      "email": "sholihatinanggita7@gmail.com",
      "name": "SHOLIHATIN ANGGITA"
    },
    {
      "nim": "02211740000017",
      "email": "ginanisrina.gn@gmail.com",
      "name": "GINA NISRINA"
    },
    {
      "nim": "02211740000018",
      "email": "kharisma.perdanasetiawan1@gmail.com",
      "name": "KHARISMA PERDANA SETIAWAN"
    },
    {
      "nim": "02211740000019",
      "email": "fadhilnurohim@gmail.com",
      "name": "FADHIL KUSUMAH ATMADJA"
    },
    {
      "nim": "02211740000020",
      "email": "Mentarifitria4@gmail.com",
      "name": "MENTARI FITRIA SUSANTO"
    },
    {
      "nim": "02211740000021",
      "email": "shafnur.adin21@gmail.com",
      "name": "SHAFIRA NUR ADININGSIH"
    },
    {
      "nim": "02211740000022",
      "email": "sabrinaamalia7@gmail.com",
      "name": "AMALIA SABRINA SALWATI"
    },
    {
      "nim": "02211740000023",
      "email": "ghozina11@gmail.com",
      "name": "GHOZI NAUFALMI ADNAN"
    },
    {
      "nim": "02211740000024",
      "email": "esubnafeu89@gmail.com",
      "name": "EVAN MIKA SUBNAFEU"
    },
    {
      "nim": "02211740000027",
      "email": "ruzqiyahlailo@gmail.com",
      "name": "RUZQIYAH NAHARO LAILA"
    },
    {
      "nim": "02211740000028",
      "email": "nurdiannar9@gmail.com",
      "name": "NURDIANA RATNA PURI"
    },
    {
      "nim": "02211740000030",
      "email": "gladyselvina14@gmail.com",
      "name": "GLADYS ELVINA ANTOU"
    },
    {
      "nim": "02211740000032",
      "email": "sasya22aisyah@gmail.com",
      "name": "AISYAH ALIFATUL ZAHIDAH ROHMAH"
    },
    {
      "nim": "02211740000035",
      "email": "dinifebriliantip@gmail.com",
      "name": "DINI FEBRILIANTI PUTRI"
    },
    {
      "nim": "02211740000038",
      "email": "maulidahhani@gmail.com",
      "name": "MAULIDAH HANIATI"
    },
    {
      "nim": "02211740000039",
      "email": "n.azmi.baru@gmail.com",
      "name": "MUHAMMAD NAJIB AZMI"
    },
    {
      "nim": "02211740000040",
      "email": "nokidelta15@gmail.com",
      "name": "NOKI DELTA SARI"
    },
    {
      "nim": "02211740000043",
      "email": "raflyariokusuma@gmail.com",
      "name": "RAFLY ARIO KUSUMA"
    },
    {
      "nim": "02211740000044",
      "email": "hananfebrilla@gmail.com",
      "name": "WIRANTIA HANAN FEBRILLA"
    },
    {
      "nim": "02211740000046",
      "email": "adimukhlisun@gmail.com",
      "name": "ADDI MUKHLISUN"
    },
    {
      "nim": "02211740000049",
      "email": "ahmadsat07@gmail.com",
      "name": "AHMAD SATRIO"
    },
    {
      "nim": "02211740000051",
      "email": "edof82@gmail.com",
      "name": "FERNANDO PUJIADHI WIRYAWAN"
    },
    {
      "nim": "02211740000052",
      "email": "farid.auzzin@gmail.com",
      "name": "FARID AUZZIN ASHARI"
    },
    {
      "nim": "02211740000053",
      "email": "nugrahadaffaakmal@gmail.com",
      "name": "DAFFA AKMAL NUGRAHA"
    },
    {
      "nim": "02211740000055",
      "email": "yonathan251099@gmail.com",
      "name": "YONATHAN"
    },
    {
      "nim": "02211740000058",
      "email": "aditmrd@gmail.com",
      "name": "ADITYA MARDIANSYAH"
    },
    {
      "nim": "02211740000059",
      "email": "ajisetyohadi@gmail.com",
      "name": "ADJIE BIMO SETYOHADI ANANTO"
    },
    {
      "nim": "02211740000060",
      "email": "pasaribu.thilda@gmail.com",
      "name": "MATHILDA JOWITO PASARIBU"
    },
    {
      "nim": "02211740000061",
      "email": "hogi.sugiharto@gmail.com",
      "name": "HOGI SUGIHARTO"
    },
    {
      "nim": "02211740000063",
      "email": "berlinayunita9@gmail.com",
      "name": "BERLINA YUNITA SARI ROMAJI"
    },
    {
      "nim": "02211740000064",
      "email": "molgasan@gmail.com",
      "name": "MARIA REGINA OLGA SANTOSO"
    },
    {
      "nim": "02211740000065",
      "email": "novandaradita@gmail.com",
      "name": "NOVANDA RADITA PUTRADHITAMA"
    },
    {
      "nim": "02211740000066",
      "email": "dzaky.gold98@gmail.com",
      "name": "DZAKY HILAL RAMDHAN WAHIDI"
    },
    {
      "nim": "02211740000067",
      "email": "hidan1st@gmail.com",
      "name": "MUHAMMAD HIDAN NOER FADL"
    },
    {
      "nim": "02211740000068",
      "email": "laksmi.Cahya@gmail.com",
      "name": "LAKSMI CAHYANINGATI PUTERI NUGRAHENI"
    },
    {
      "nim": "02211740000069",
      "email": "dhikashinli500@gmail.com",
      "name": "PANNADHIKA SHINLI"
    },
    {
      "nim": "02211740000070",
      "email": "bilapta21@gmail.com",
      "name": "NABIL APTA MAULANA"
    },
    {
      "nim": "02211740000072",
      "email": "andhika.shafian@gmaii.com",
      "name": "ANDHIKA SHAFIAN MAINDO NORMAN"
    },
    {
      "nim": "02211740000073",
      "email": "ivanov.satrya@gmail.com",
      "name": "SATRYA FUAD AFIF SULISTIYO"
    },
    {
      "nim": "02211740000074",
      "email": "riowicaksono17@gmail.com",
      "name": "SATRIO WICAKSANA RUSDIYANTO"
    },
    {
      "nim": "02211740000075",
      "email": "albarsyi@gmail.com",
      "name": "MUHAMMAD IQ`BAL AL`BARSYI"
    },
    {
      "nim": "02211740000076",
      "email": "ferrelhamonangan@gmail.com",
      "name": "FERREL HAMONANGAN"
    },
    {
      "nim": "02211740000077",
      "email": "alifahfajrin@gmail.com",
      "name": "ALIFAH NUR AINI FAJRIN"
    },
    {
      "nim": "02211740000079",
      "email": "Indahrkartikasari@gmail.com",
      "name": "INDAH RIKHA KARTIKASARI"
    },
    {
      "nim": "02211740000081",
      "email": "dianabila99@gmail.com",
      "name": "DIAN NABILA MARTIANA"
    },
    {
      "nim": "02211740000082",
      "email": "aminxharahap@gmail.com",
      "name": "AMIN ABDILLAH HARAHAP"
    },
    {
      "nim": "02211740000084",
      "email": "laksamana9322@gmail.com",
      "name": "MOHAMAD LAKSAMANA ALAM"
    },
    {
      "nim": "02211740000085",
      "email": "kjessicaalya@gmail.com",
      "name": "JESSICA AALYA KAAMILIAA"
    },
    {
      "nim": "02211740000087",
      "email": "bagusali411@gmail.com",
      "name": "BAGUS ALI YAFI"
    },
    {
      "nim": "02211740000088",
      "email": "sella.ramadhani31@gmail.com",
      "name": "SELLA RAMADHANI ALYA SASONO"
    },
    {
      "nim": "02211740000090",
      "email": "ihawhalim@gmail.com",
      "name": "IHAW LIUS HALIM"
    },
    {
      "nim": "02211740000092",
      "email": "kelvin_psp@live.com",
      "name": "KELVIN LETARE.S"
    },
    {
      "nim": "02211740000093",
      "email": "Muhanshorulloh@gmail.com",
      "name": "MUHAMMAD ANSHORULLOH MUKHLISH"
    },
    {
      "nim": "02211740000095",
      "email": "Vincenttedjo@gmail.com",
      "name": "VINCENTIUS"
    },
    {
      "nim": "02211740000096",
      "email": "feryprasetyo7@gmail.com",
      "name": "FERY PRASETYO"
    },
    {
      "nim": "02211740000097",
      "email": "mahdareza22@gmail.com",
      "name": "MAHDAVIKIA SYAHREZA HERMAWAN"
    },
    {
      "nim": "02211740000098",
      "email": "christianhans8@gmail.com",
      "name": "HANS CHRISTIAN"
    },
    {
      "nim": "02211740000099",
      "email": "radzulabyan@gmail.com",
      "name": "RADZUL ABYAN TAQYUDDIN ALY"
    },
    {
      "nim": "02211740000100",
      "email": "doanstinjak@gmail.com",
      "name": "RONALDO PANGIDOAN SITINJAK"
    },
    {
      "nim": "02211740000101",
      "email": "abdwasiik@gmail.com",
      "name": "ABDUL WASI`"
    },
    {
      "nim": "02211740000102",
      "email": "vinkysulistyawati@gmail.com",
      "name": "IDA AYU PUTU VINKY SULISTYAWATI"
    },
    {
      "nim": "02211740000104",
      "email": "hadyanrizwan@gmail.com",
      "name": "MUHAMMAD HADYAN RIZWAN"
    },
    {
      "nim": "02211740000105",
      "email": "kevinrach29@gmail.com",
      "name": "KEVIN RAHMADI SABAR"
    },
    {
      "nim": "02211740000106",
      "email": "danieljananto@gmail.com",
      "name": "DANIEL JANANTO"
    },
    {
      "nim": "02211740000108",
      "email": "adityaganimeda@gmail.com",
      "name": "ADITYA RACHMAN GANIMEDA"
    },
    {
      "nim": "02211740000110",
      "email": "gigakhissoga25@gmail.com",
      "name": "GIGA HUSNIL AZIZI KHISSOGA"
    },
    {
      "nim": "02211740000113",
      "email": "wahyusamuel@gmail.com",
      "name": "SAMUEL BAGAS WAHYU SANTOSO"
    },
    {
      "nim": "02211740000114",
      "email": "aurakinayomi@gmail.com",
      "name": "AURA SELENA KINAYOMI"
    },
    {
      "nim": "02211740000116",
      "email": "ghalymbf@gmail.com",
      "name": "GHALY MUHAMMAD BAHREISY FIRDAUS"
    },
    {
      "nim": "02211740000117",
      "email": "davarachmadi458@gmail.com",
      "name": "MUHAMMAD DAVA RACHMADI ALI"
    },
    {
      "nim": "02211740000119",
      "email": "shafira.alyaa@gmail.com",
      "name": "SHAFIRA ALYA AMBARASTI"
    },
    {
      "nim": "02211740000120",
      "email": "gdhaifullah@gmail.com",
      "name": "GALANG DHAIFULLAH ABDUL AZIZ"
    },
    {
      "nim": "02211740000121",
      "email": "tfakhrymaulana@gmail.com",
      "name": "TRIYALDI FAKHRY MAULANA"
    },
    {
      "nim": "02211740000122",
      "email": "josephinetdn@gmail.com",
      "name": "JOSEPHINE TANDIONO"
    },
    {
      "nim": "02211740000123",
      "email": "dewifarraprasasya@gmail.com",
      "name": "DEWI FARRA PRASASYA"
    },
    {
      "nim": "02211740000125",
      "email": "malikmulki21@gmail.com",
      "name": "ABDUL MALIK AL MULKI"
    },
    {
      "nim": "02211740000126",
      "email": "rosyid99force@gmail.com",
      "name": "ROSYID ADANI ATHA"
    },
    {
      "nim": "02211740000127",
      "email": "ghassanirmdhn@gmail.com",
      "name": "GHASSANI SALSABILA RAMADHANI"
    },
    {
      "nim": "02211740000128",
      "email": "koresypinandito@gmail.com",
      "name": "FILIPPO KORESY PINANDITO"
    },
    {
      "nim": "02211740000129",
      "email": "andhrabonifacius5@gmail.com",
      "name": "BONIFACIUS ANDHRA DWIMA CAESARIO"
    },
    {
      "nim": "02211740000130",
      "email": "Brianfairuz@gmail.com",
      "name": "BRILIAN FAIRUZ IHZA RAMADHAN"
    },
    {
      "nim": "02211740000131",
      "email": "abissantun.priyambodo@gmail.com",
      "name": "ABISSANTUN PRIYAMBODO"
    },
    {
      "nim": "02211740000132",
      "email": "masyabismail@gmail.com",
      "name": "ISMAIL MASY`AB"
    },
    {
      "nim": "02211740000135",
      "email": "farhanmuhammad123456@gmail.com",
      "name": "FARHAN MUHAMMAD"
    },
    {
      "nim": "02211740000136",
      "email": "nadiayuliasari13@gmail.com",
      "name": "NADIA YULIASARI"
    },
    {
      "nim": "02211740000137",
      "email": "ekanabilaa@gmail.com",
      "name": "EKA NABILA PERMATASARI"
    },
    {
      "nim": "02211740000138",
      "email": "nadilask01@gmail.com",
      "name": "NADILA SHAFIRA KUSNADI"
    },
    {
      "nim": "02211740000139",
      "email": "kvinns7@gmail.com",
      "name": "KEVIN NATANIEL SUTANTO"
    },
    {
      "nim": "02211740000142",
      "email": "habib11azizi@gmail.com",
      "name": "HABIB AZIZI"
    },
    {
      "nim": "02211740000143",
      "email": "anindya2408@gmail.com",
      "name": "ANINDYA HEIDI SHAFIRA"
    },
    {
      "nim": "02211740000146",
      "email": "Dokterpandu18@gmail.com",
      "name": "PANDHU DIRGA PRATAMA"
    },
    {
      "nim": 2211740000006,
      "email": "claudyastanila@gmail.com",
      "name": "CLAUDYA STANILA KOESNADI"
    },
    {
      "nim": 2211740000010,
      "email": "amirotussafitri@gmail.coom",
      "name": "AMIROTUS SAFITRI"
    },
    {
      "nim": 2211740000029,
      "email": "",
      "name": "INNEKE ADINEGORO"
    },
    {
      "nim": 2211740000034,
      "email": "dwisantosobp@gmail.com",
      "name": "DWI SANTOSO"
    },
    {
      "nim": 2211740000037,
      "email": "hanifrachma@yahoo.com",
      "name": "HANIF RACHMAWATI"
    },
    {
      "nim": 2211740000041,
      "email": "marinaadc99@gmail.com",
      "name": "MARINA DWI CAHYANI"
    },
    {
      "nim": 2211740000042,
      "email": "fitriasukakimiaindustri@gmail.com",
      "name": "FITRIA NUR LAILY"
    },
    {
      "nim": 2211740000045,
      "email": "evangradyw@yahoo.com",
      "name": "EVAN GRADY"
    },
    {
      "nim": 2211740000045,
      "email": "caroline_fs@yahoo.com",
      "name": "CAROLINE FERNANDA SUTANTO"
    },
    {
      "nim": 2211740000048,
      "email": "Santiips424@gmail.com",
      "name": "SANTI PUSPITA SANJAYA"
    },
    {
      "nim": 2211740000050,
      "email": "andreasdarmaja@@gmail.com",
      "name": "ANDREAS DARMAJA"
    },
    {
      "nim": 2211740000054,
      "email": "kevintokkwawa@gmail.com",
      "name": "KEVIN"
    },
    {
      "nim": 2211740000057,
      "email": "mrw@mma@gmail.com",
      "name": "UMMA AULIA MARWA"
    },
    {
      "nim": 2211740000062,
      "email": "vincentlukas275@gmail.com",
      "name": "VINCENTIUS LUKAS ARIA"
    },
    {
      "nim": 2211740000071,
      "email": "renatavandalia28@gmail.com",
      "name": "RENATA VANDALIA SERONA KAREN PRAWIRA"
    },
    {
      "nim": 2211740000078,
      "email": "kedwardus@yahoo.com",
      "name": "EDWARDUS KEVINNUL DJOHAR"
    },
    {
      "nim": 2211740000083,
      "email": "nristiekaningtuas@yahoo.com",
      "name": "RISTI EKA NINGTYAS"
    },
    {
      "nim": 2211740000086,
      "email": "kautsarmu'afa@gmail.com",
      "name": "KAUTSAR MU`AFA"
    },
    {
      "nim": 2211740000091,
      "email": "salsabilamuthiah@yahoo.co.id",
      "name": "SALSABILA MUTHIAH"
    },
    {
      "nim": 2211740000103,
      "email": "ketutagastya44@gmail.com",
      "name": "KETUT AGASTYA MAHA ANANTA"
    },
    {
      "nim": 2211740000107,
      "email": "cecilenautica@gmail.com",
      "name": "CECILE NIKEN NAUTICA"
    },
    {
      "nim": 2211740000109,
      "email": "gadingdika.smasa@gmail.com",
      "name": "GADING BAGUS MAHARDIKA"
    },
    {
      "nim": 2211740000111,
      "email": "nadiafahira701@yahoo.co.id",
      "name": "NADIA FAHIRA"
    },
    {
      "nim": 2211740000118,
      "email": "ranandhiya.salsabila@yahoo.com",
      "name": "RANANDHIYA SALSABILA"
    },
    {
      "nim": 2211740000124,
      "email": "mrfauzaniam@gmail.com",
      "name": "FAUZAN IMAM AKBAR M"
    },
    {
      "nim": 2211740000133,
      "email": "arsyagemelia@yahoo.com",
      "name": "ARSYA GEMELIA ADINA"
    },
    {
      "nim": 2211740000140,
      "email": "nabilfajri@yahoo.com",
      "name": "MUHAMMAD NABIL FAJRI"
    },
    {
      "nim": 2211740000141,
      "email": "fandaaina@yahoo.co.id",
      "name": "WAFANDA AINA PRASTISARA"
    },
    {
      "nim": 2211740000144,
      "email": "firasyodha@gmail.com",
      "name": "FIRAS YODHA SASKARA"
    },
    {
      "nim": 2211740007001,
      "email": "mhmmdmhjrn@gmail.com",
      "name": "MUHAMMAD MUHAJIRIN"
    }, 
    {
      "nim": "0221184000001",
      "email": "rifkyparampaa@gmail.com",
      "name": "Achmad Rifky"
    },
    {
      "nim": "02211840000002",
      "email": "fikrilutfi10@gmail.com",
      "name": "Fikri Luthfi"
    },
    {
      "nim": "02211840000003",
      "email": "roidanbl225@gmail.com",
      "name": "Roida Nabila"
    },
    {
      "nim": "02211840000004",
      "email": "malpyandalt4@gmail.com",
      "name": "Achmad Luthfi Putra Yogi"
    },
    {
      "nim": "02211840000005",
      "email": "adinataas14@gmail.com",
      "name": "Adinata Setiawan"
    },
    {
      "nim": "02211840000006",
      "email": "amandanovriza76@gmail.com",
      "name": "Amanda Novriza Aurellia"
    },
    {
      "nim": "02211840000008",
      "email": "aulialifnb23400@gmail.com",
      "name": "Aulia Alif Nur Baiti"
    },
    {
      "nim": "02211840000009",
      "email": "fyrax0@gmail.com",
      "name": "Ayu Paramita Firdaus"
    },
    {
      "nim": "02211840000010",
      "email": "bayuy30@gmail.com",
      "name": "Bayu Yusuf Eka Saputra"
    },
    {
      "nim": "02211840000011",
      "email": "briansetiawan16@gmail.com",
      "name": "Brian Setiawan"
    },
    {
      "nim": "02211840000012",
      "email": "cindyshofya@gmail.com",
      "name": "Cindy Shofya Maharany"
    },
    {
      "nim": "02211840000014",
      "email": "farisvirgiansyah@gmail.com",
      "name": "Faris Virgiansyah"
    },
    {
      "nim": "02211840000015",
      "email": "firnafirdaus6899.ff@gmail.com",
      "name": "Firna Firdaus"
    },
    {
      "nim": "02211840000017",
      "email": "gebbymunte@gmail.com",
      "name": "Gabriella Putri Bonita"
    },
    {
      "nim": "02211840000019",
      "email": "pribadi.ihsan@gmail.com",
      "name": "Ihsan Pribadi"
    },
    {
      "nim": "02211840000020",
      "email": "imaenemdepe@gmail.com",
      "name": "Imro'atus Nur Mufidah Dimyati Putri"
    },
    {
      "nim": "02211840000022",
      "email": "kaniaazzahra915@gmail.com",
      "name": "Kania Azzahra"
    },
    {
      "nim": "02211840000023",
      "email": "ksantoso89@gmail.com",
      "name": "Kenny Santoso"
    },
    {
      "nim": "02211840000024",
      "email": "kevinkaruniawan11@gmail.com",
      "name": "Kevin Karuniawan"
    },
    {
      "nim": "02211840000025",
      "email": "michaeladriansubagio88@gmail.com",
      "name": "Michael Adrian Subagio"
    },
    {
      "nim": "02211840000026",
      "email": "aaronsavero29@gmail.com",
      "name": "Muhammad Aaron Savero"
    },
    {
      "nim": "02211840000027",
      "email": "Muhammadfakhri232425@gmail.com",
      "name": "Muhammad Fakhri Jayadi"
    },
    {
      "nim": "02211840000028",
      "email": "fakhrizalfahmi09876@gmail.com",
      "name": "Muhammad Fakhrizal Fahmi"
    },
    {
      "nim": "02211840000029",
      "email": "ndennisyd@gmail.com",
      "name": "Nyoman Dennis Yngwie Darrnawan"
    },
    {
      "nim": "02211840000030",
      "email": "tegarpratama94@gmail.com",
      "name": "Pratama Tegar Parderio"
    },
    {
      "nim": "02211840000031",
      "email": "radifanathalloh@gmail.com",
      "name": "Radifan Athallah Rizky"
    },
    {
      "nim": "02211840000032",
      "email": "renitanurulfitria@gmail.com",
      "name": "Renita Nurul Fitria"
    },
    {
      "nim": "02211840000033",
      "email": "resti.ardiani@gmail.com",
      "name": "Resti Ardiani Ramadhan"
    },
    {
      "nim": "02211840000034",
      "email": "rifdaamalina25@gmail.com",
      "name": "Rifda Amalina"
    },
    {
      "nim": "02211840000035",
      "email": "rifky.arya10@gmail.com",
      "name": "Rifky Arya Maulana"
    },
    {
      "nim": "02211840000036",
      "email": "arasahirah@gmail.com",
      "name": "Sahirah Zahraindy"
    },
    {
      "nim": "02211840000037",
      "email": "salasaa34@gmail.com",
      "name": "Salasa Ariq Sungkono"
    },
    {
      "nim": "02211840000038",
      "email": "tyokadhi@gmail.com",
      "name": "Valentinus Satrio Adhi Cahyono"
    },
    {
      "nim": "02211840000039",
      "email": "yulianaerk@gmail.com",
      "name": "Yuliana Erika Daoed"
    },
    {
      "nim": "02211840000040",
      "email": "zahrinneaf13@gmail.com",
      "name": "Zahrinne Aliefia Firdaus"
    },
    {
      "nim": "02211840000041",
      "email": "zulfahmihawali@gmail.com",
      "name": "Zulfahmi Hawali"
    },
    {
      "nim": "02211840000042",
      "email": "usmarsaid@gmaul.com",
      "name": "Umar Said"
    },
    {
      "nim": "02211840000043",
      "email": "eunikerhiza@gmail.com",
      "name": "Eunike Rhiza Febriana Setyadi"
    },
    {
      "nim": "02211840000044",
      "email": "farhan.11.aji@gmail.com",
      "name": "Farhan Aji Mukti"
    },
    {
      "nim": "02211840000046",
      "email": "miftanugrahini21@gmail.com",
      "name": "Miftahul Hidayah Nugrahini"
    },
    {
      "nim": "02211840000047",
      "email": "Pungkytriwiya@gmail.com",
      "name": "Pungky Triwiya Nugraha"
    },
    {
      "nim": "02211840000048",
      "email": "sfachrudya@gmail.com",
      "name": "Sahara Putri Fachrudya"
    },
    {
      "nim": "02211840000049",
      "email": "jerichoimmanuel1@gmail.com",
      "name": "Jericho Immanuel"
    },
    {
      "nim": "02211840000050",
      "email": "naufal20001700@gmail.com",
      "name": "Naufal Fakhruddin Hasan"
    },
    {
      "nim": "02211840000051",
      "email": "auliyawinter@gmail.com",
      "name": "Auliya Winter Noor Fitraning"
    },
    {
      "nim": "02211840000052",
      "email": "luthfiamumtaz@gmail.com",
      "name": "Rr. Aptaluthfia Mumtaz Februman"
    },
    {
      "nim": "02211840000054",
      "email": "ronaldosaputra1412@gmail.com",
      "name": "Tansio Bunarli Ronaldo Saputra"
    },
    {
      "nim": "02211840000055",
      "email": "mohammadfaizrosidin@gmail.com",
      "name": "Mohammad Faiz Rosidin"
    },
    {
      "nim": "02211840000056",
      "email": "ferdianazizi55@gmail.com",
      "name": "Mochammad Ferdian Azizi"
    },
    {
      "nim": "02211840000057",
      "email": "mitamellenia2000@gmail.com",
      "name": "Mita Mellenia Wisnu Murti"
    },
    {
      "nim": "02211840000058",
      "email": "anggadharmawan08@gmail.com",
      "name": "Angga Dwi Dharmawan"
    },
    {
      "nim": "02211840000059",
      "email": "andrenchenady@gmail.com",
      "name": "Andre Novent Chenady"
    },
    {
      "nim": "02211840000060",
      "email": "mfachorrozi@gmail.com",
      "name": "MOCHAMMAD FACHORROZI"
    },
    {
      "nim": "02211840000061",
      "email": "robinvanrakha20@gmail.com",
      "name": "MUHAMMAD RAKHA WIDIANSYAH"
    },
    {
      "nim": "02211840000062",
      "email": "ayuparamitaf@gmail.com",
      "name": "CINDY AYU ANGGRAINI"
    },
    {
      "nim": "02211840000065",
      "email": "ahmadramadhan51200@gmail.com",
      "name": "AHMAD RAMADHAN"
    },
    {
      "nim": "02211840000066",
      "email": "jasonadityap@gmail.com",
      "name": "JASON ADITYA PURNAMA"
    },
    {
      "nim": "02211840000067",
      "email": "hubal.maulana@gmail.com",
      "name": "HUBBAL MAULANA MUHAMAD"
    },
    {
      "nim": "02211840000068",
      "email": "hazuranf@gmail.com",
      "name": "HAZURA NOORFAIZAH"
    },
    {
      "nim": "02211840000070",
      "email": "latishaa.maheswarii@gmail.com",
      "name": "LATISHA MAHESWARI"
    },
    {
      "nim": "02211840000071",
      "email": "rizkyauliaa0@gmail.com",
      "name": "RIZKY AULIA LARASATI"
    },
    {
      "nim": "02211840000072",
      "email": "haveit27@gmail.com",
      "name": "ABDUL HAFID"
    },
    {
      "nim": "02211840000073",
      "email": "mattbram00@gmail.com",
      "name": "MATTHEW BRAMASTA PUTRA RASETYA"
    },
    {
      "nim": "02211840000074",
      "email": "rafli.andyp@gmail.com",
      "name": "rafly andyka p"
    },
    {
      "nim": "02211840000076",
      "email": "prototype.rdk@gmail.com",
      "name": "RASYID DITO KUSUMO"
    },
    {
      "nim": "02211840000077",
      "email": "leonardojulian6@gmail.com",
      "name": "LEONARDO JULIAN BASKARA"
    },
    {
      "nim": "02211840000078",
      "email": "bismahendra24@gmail.com",
      "name": "BISMA HENDRA SETIYAWAN"
    },
    {
      "nim": "02211840000079",
      "email": "anggiefando@gmail.com",
      "name": "ANGGI AS`RUL EFANDO"
    },
    {
      "nim": "02211840000080",
      "email": "lukmanulhakimforyou@gmail.com",
      "name": "LUKMANUL HAKIM"
    },
    {
      "nim": "02211840000084",
      "email": "eleazarezer262728@gmail.com",
      "name": "ELEAZAR IVESSIDI"
    },
    {
      "nim": "02211840000085",
      "email": "pupundrepe@gmail.com",
      "name": "MUHAMMAD ANDRE PAMUNGKAS"
    },
    {
      "nim": "02211840000086",
      "email": "kucai123@hotmail.com",
      "name": "FRANCIS SJARIFUDIN"
    },
    {
      "nim": "02211840000087",
      "email": "muharrik9@gmail.com",
      "name": "FADHLURRAHMAN MUHARRIK"
    },
    {
      "nim": "02211840000091",
      "email": "firmanaomega@gmail.com",
      "name": "OMEGA ISAI FIRMANA"
    },
    {
      "nim": "02211840000092",
      "email": "irsyad.hart@gmail.com",
      "name": "MUHAMMAD IRSYAD RYANTO PUTRA"
    },
    {
      "nim": "02211840000093",
      "email": "edwin.gunawan28@gmail.com",
      "name": "EDWIN GUNAWAN"
    },
    {
      "nim": "02211840000094",
      "email": "fatiya1711@gmail.com",
      "name": "FATIYA RIZKIYANI"
    },
    {
      "nim": "02211840000095",
      "email": "elenaele.suhadi@gmail.com",
      "name": "ELENA SUHADI"
    },
    {
      "nim": "02211840000099",
      "email": "amanisalsabil21@gmail.com",
      "name": "AMANI SALSABIL HUSODO"
    },
    {
      "nim": "02211840000101",
      "email": "leonardojulian6@gmail.com",
      "name": "FAIRUZA FASYA RAHADISTY"
    },
    {
      "nim": "02211840000104",
      "email": "erinamegaariyanto@gmail.com",
      "name": "ERINA MEGA ARIYANTO"
    },
    {
      "nim": "02211840000106",
      "email": "divineblast17@gmail.com",
      "name": "MUHAMMAD AUNUN `ULYA MUSAFFA"
    },
    {
      "nim": "02211840000108",
      "email": "indrasuk505@gmail.com",
      "name": "TEGUH SUKINDRA"
    },
    {
      "nim": "02211840000110",
      "email": "dadikkidad@gmail.com",
      "name": "MUHAMMAD DADIK AMINNANDA"
    },
    {
      "nim": "02211840000112",
      "email": "muhammadabyann@gmail.com",
      "name": "MUHAMMAD ABYAN ROSYAD"
    },
    {
      "nim": "02211840000113",
      "email": "9325tetukomuditoaji@gmail.com",
      "name": "TETUKO MUDITOAJI KARTODIRDJO"
    },
    {
      "nim": "02211840000114",
      "email": "afifahfaiz@gmail.com",
      "name": "AFIFAH NUR HAMIDAH"
    },
    {
      "nim": "02211840000115",
      "email": "neza.anizar@gmail.com",
      "name": "NEZA ANIZAR"
    },
    {
      "nim": "02211840000116",
      "email": "haziralrs@gmail.com",
      "name": "HAZIRA LARASATI NOVIDA PUTRI"
    },
    {
      "nim": "02211840000117",
      "email": "ramadhanfirar@gmail.com",
      "name": "FIRA RIZKY RAMADHAN"
    },
    {
      "nim": "02211840000119",
      "email": "m.alraedi30@gmail.com",
      "name": "MUHAMMAD ALRAEDI SYUKHARIAL"
    },
    {
      "nim": "02211840000120",
      "email": "annisa.sylviana07@gmail.com",
      "name": "ANNISA SYLVIANA"
    },
    {
      "nim": "02211840000122",
      "email": "valdyrivaldy90@gmail.com",
      "name": "MUHAMMAD RIVALDY KAMANDANU"
    },
    {
      "nim": "02211840000123",
      "email": "thio.xanders@gmail.com",
      "name": "SANG AJI ERMANTANTHIO"
    },
    {
      "nim": "02211840000124",
      "email": "arihcahyaning@gmail.com",
      "name": "ARIH CAHYANING ANANDA"
    },
    {
      "nim": "02211840000126",
      "email": "rafidazaina.setiawan9@gmail.com",
      "name": "RAFIDA ZAINA SETIAWAN"
    },
    {
      "nim": "02211840000127",
      "email": "tadellaassegaf@gmail.com",
      "name": "TALITHA ADELLA ASSEGAF"
    },
    {
      "nim": "02211840000128",
      "email": "alvinfebrianto13@gmail.com",
      "name": "ALVIN FEBRIANTO"
    },
    {
      "nim": "02211840000129",
      "email": "amindarwis10@gmail.com",
      "name": "AMIN DARWIS"
    },
    {
      "nim": "02211840000130",
      "email": "ridhadina28@gmail.com",
      "name": "RIDHA DINA AULIA"
    },
    {
      "nim": "02211840000131",
      "email": "tasyarosa23@gmail.com",
      "name": "TASYA ROSA WULANDARI"
    },
    {
      "nim": "02211840000133",
      "email": "tarisfarizan@gmail.com",
      "name": "TARIS FARIZAN ROCHMAN"
    },
    {
      "nim": "02211840000134",
      "email": "samparia20@gmail.com",
      "name": "DIAN ASRINI SAMPARIA"
    },
    {
      "nim": "02211840000135",
      "email": "widyaarista26@gmail.com",
      "name": "RR. WIDYA ARISTA WIDJOJO SAPUTRO"
    },
    {
      "nim": "02211840000136",
      "email": "divaveryna@gmail.com",
      "name": "DIVA VERYNA WIDIANTARI"
    },
    {
      "nim": "02211840000137",
      "email": "Panduhrysmbd@gmail.com",
      "name": "PANDU HARYA SEMBADA"
    },
    {
      "nim": "02211840000138",
      "email": "raisfakhrirazin3@gmail.com",
      "name": "RAIS FAKHRIRAZIN"
    },
    {
      "nim": "02211840000139",
      "email": "divalathifam@gmail.com",
      "name": "DIVA LATHIFA MAHARANI"
    },
    {
      "nim": "02211840000140",
      "email": "mayarosd05@gmail.com",
      "name": "MAYA ROSDIANA"
    },
    {
      "nim": "02211840000142",
      "email": "ezrabrian21@gmail.com",
      "name": "EZRA FEBRIAN SEMBIRING"
    },
    {
      "nim": "02211840000146",
      "email": "dewisetiyaningsih53@gmail.com",
      "name": "DEWI SETIYANINGSIH"
    },
    {
      "nim": "02211840007002",
      "email": "marisahafied11@gmail.com",
      "name": "MARISA ASRIETD HAFIED"
    },
    {
      "nim": "02211840007003",
      "email": "olinlaturiuw@gmail.com",
      "name": "AULDRIEN PETRA LATURIUW"
    },
    {
      "nim": "02211840000007",
      "email": "arthantacracian@yahoo.com",
      "name": "Arthanta Cracian"
    },
    {
      "nim": "02211840000008",
      "email": "auliaalifnb23400@gmail.com",
      "name": "Aulia Alif N B"
    },
    {
      "nim": "02211840000055",
      "email": "mohammadfaizrosidin@gmail.com",
      "name": "Mohammad Faiz Rosidin"
    },
    {
      "nim": "02211840000081",
      "email": "ahinas99@gmail.com",
      "name": "AHMAD IMAM FATONI"
    },
    {
      "nim": "02211840000082",
      "email": "richardchristian678@gmail.com",
      "name": "RICHARD CHRISTIAN"
    },
    {
      "nim": "02211840000083",
      "email": "sabilarah@gmail.com",
      "name": "FARAH SALSABILA"
    },
    {
      "nim": "02211840000089",
      "email": "merlinsugihita5@gmail.com",
      "name": "MERLIN LIYANTI"
    },
    {
      "nim": "02211840000103",
      "email": "michelleveronica1901@gmail.com",
      "name": "MICHELLE VERONIKA MUTIARA ASALI"
    },
    {
      "nim": "02211840000105",
      "email": "nurindahsari18st@gmail.com",
      "name": "NUR INDAH SARI"
    },
    {
      "nim": "02211840000111",
      "email": "dewukania151@gmail.com",
      "name": "NI NYOMAN KANIYA KUMALA DEWI"
    },
    {
      "nim": "02211840000118",
      "email": "muthiadinda23@gmail.com",
      "name": "Muthia Dinda Shaliha"
    },
    {
      "nim": "02211840000121",
      "email": "fadzilnaaisyah@gmail.com",
      "name": "AISYAH FADZLINA"
    },
    {
      "nim": "02211840000125",
      "email": "farhanmuhammad123456@gmail.com",
      "name": "DARIS RAFID HIRMANDA PUTRA"
    },
    {
      "nim": "02211840000145",
      "email": "zhaoyunrafi55@gmail.com",
      "name": "MUHAMMAD RAFI DARMAWAN"
    },
    {
      "nim": "02211840007001",
      "email": "aimanfatimah22@gmail.com",
      "name": "SITI FATIMA"
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
