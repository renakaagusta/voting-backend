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
  var _participants = [
    {
      "nim": "02211940000001",
      "email": "anyanetanya@gmail.com",
      "name": "Netanya Avabel"
    },
    {
      "nim": "02211940000002",
      "email": "athifafisga@gmail.com",
      "name": "Athif Afisga Mathoyah"
    },
    {
      "nim": "02211940000003",
      "email": "natashamandonza@gmail.com",
      "name": "Eugenia Natasha Mandonza Eba"
    },
    {
      "nim": "02211940000004",
      "email": "iswaaar.alqffan@gmail.com",
      "name": "Iswaar Farroosa Alqoffan"
    },
    {
      "nim": "02211940000005",
      "email": "sintiaastuti62@gmail.com",
      "name": "Puji Astuti Sintia Doli"
    },
    {
      "nim": "02211940000006",
      "email": "belindalifiya13@gmail.com",
      "name": "Belinda Alifiya Pambudi"
    },
    {
      "nim": "02211940000007",
      "email": "irfaiddarojat55@gmail.com",
      "name": "Muhammad Irfaid Darojat"
    },
    {
      "nim": "02211940000008",
      "email": "alyanadifa12@gmail.com",
      "name": "Alya Nadifa Salsabilla"
    },
    {
      "nim": "02211940000009",
      "email": "raniask2210@gmail.com",
      "name": "Rania Sekar Kinasih"
    },
    {
      "nim": "02211940000010",
      "email": "rosantyamalia06@gmail.com",
      "name": "Rosanty Amalia Putri Syamsuddin"
    },
    {
      "nim": "02211940000011",
      "email": "dronerobot88@gmail.com",
      "name": "Ferdy Hermawan"
    },
    {
      "nim": "02211940000012",
      "email": "jacquelinetirtadinata@gmail.com",
      "name": "Jacqueline Tirtadinata"
    },
    {
      "nim": "02211940000013",
      "email": "anggitirtasari10@gmail.com",
      "name": "Anggi Tirta Sari Br N"
    },
    {
      "nim": "02211940000014",
      "email": "sriranikusumaningrum21@gmail.com",
      "name": "Sri Rani Kusumaningrum"
    },
    {
      "nim": "02211940000015",
      "email": "mhdsidiq8@gmail.com",
      "name": "Muhammad Sidiq"
    },
    {
      "nim": "02211940000016",
      "email": "ameyliaannisa3@gmail.com",
      "name": "Ameylia Annisa Wardiantara"
    },
    {
      "nim": "02211940000017",
      "email": "cherynayudya.ca@gmail.com",
      "name": "Cheryn Ayudya Ardhaneswara"
    },
    {
      "nim": "02211940000018",
      "email": "rosaliakur@gmail.com",
      "name": "Rosalia Kurniasari"
    },
    {
      "nim": "02211940000019",
      "email": "rafikasalya22@gmail.com",
      "name": "Rafika Aulia Rahmadian Salya"
    },
    {
      "nim": "02211940000020",
      "email": "devitaadela@gmail.com",
      "name": "Devita Adela"
    },
    {
      "nim": "02211940000021",
      "email": "fachmellya03@gmail.com",
      "name": "Fachmellya Zieyan A."
    },
    {
      "nim": "02211940000022",
      "email": "dinandyahdrc@gmail.com",
      "name": "Mochamad Dinandya Hendrico"
    },
    {
      "nim": "02211940000023",
      "email": "astrtys@gmail.com",
      "name": "Astri Nawwar Kusumaningtyas"
    },
    {
      "nim": "02211940000024",
      "email": "nidyahmd@gmail.com",
      "name": "Nidya Ahmadya R."
    },
    {
      "nim": "02211940000025",
      "email": "belindakp321@gmail.com",
      "name": "Belinda Kezia Purwanto"
    },
    {
      "nim": "02211940000026",
      "email": "ricoaditya372@gmail.com",
      "name": "Rico Aditya"
    },
    {
      "nim": "02211940000027",
      "email": "ulwanfahmi@gmail.com",
      "name": "M. Ulwan Fahmi R."
    },
    {
      "nim": "02211940000028",
      "email": "fauzan.agra.sch@gmail.com",
      "name": "Fauzan Agra Ibrahim"
    },
    {
      "nim": "02211940000029",
      "email": "michelliapram@gmail.com",
      "name": "Michellia Pramoryza"
    },
    {
      "nim": "02211940000031",
      "email": "dea.puspa.karinda@gmail.com",
      "name": "Dea Puspa Karinda"
    },
    {
      "nim": "02211940000032",
      "email": "sagitafriska01@gmail.com",
      "name": "Sagita Friska Pangaribuan"
    },
    {
      "nim": "02211940000033",
      "email": "nofiana.arofah@gmail.com",
      "name": "Rosyida Nofiana Arofah"
    },
    {
      "nim": "02211940000034",
      "email": "gloria.islamy@gmail.com",
      "name": "Gloria Islamy Assidiqie"
    },
    {
      "nim": "02211940000035",
      "email": "berlianwidi14@gmail.com",
      "name": "Berlian Widi Bela Pamungkas"
    },
    {
      "nim": "02211940000037",
      "email": "alfiannuryusuf@gmail.com",
      "name": "Alfiannur Rona Fadhly Yusuf"
    },
    {
      "nim": "02211940000038",
      "email": "ajengalmiratarisha@gmail.com",
      "name": "Ajeng Almira Tarisha Asri"
    },
    {
      "nim": "02211940000039",
      "email": "farah.diya32@gmail.com",
      "name": "Farah Diya Oktaviyanti"
    },
    {
      "nim": "02211940000040",
      "email": "albarsutan02@gmail.com",
      "name": "Albar Sutan Bahari Siregar"
    },
    {
      "nim": "02211940000041",
      "email": "pbayugautama@gmail.com",
      "name": "Pramudya Riandana Bhayu Gautama"
    },
    {
      "nim": "02211940000042",
      "email": "nabillahnabs16@gmail.com",
      "name": "Nabillah Rachmawati"
    },
    {
      "nim": "02211940000043",
      "email": "damarario123537@gmail.com",
      "name": "Rio Rizky Damara"
    },
    {
      "nim": "02211940000044",
      "email": "ansyahfer4@gmail.com",
      "name": "Ferdiansyah Iqbil Qouli"
    },
    {
      "nim": "02211940000046",
      "email": "ailsairmaaa@gmail.com",
      "name": "Ailsa Irma Adiani Widjaja"
    },
    {
      "nim": "02211940000047",
      "email": "haritsa.sv@gmail.com",
      "name": "Haritsa Syamsa Vaganza"
    },
    {
      "nim": "02211940000049",
      "email": "ainiyananda@gmail.com",
      "name": "Ainiya Nanda Aurunnisa"
    },
    {
      "nim": "02211940000050",
      "email": "galuhindira1234@gmail.com",
      "name": "Galuh Indira Sayekti"
    },
    {
      "nim": "02211940000051",
      "email": "naningretnoastuti@gmail.com",
      "name": "Naning Retno Astuti"
    },
    {
      "nim": "02211940000052",
      "email": "vickyfirmansyah38@gmail.com",
      "name": "Vicky Firmansyah"
    },
    {
      "nim": "02211940000053",
      "email": "rossesarinailah@gmail.com",
      "name": "Rossesari Nailah Syahbarakat"
    },
    {
      "nim": "02211940000054",
      "email": "dirotsa26@gmail.com",
      "name": "Dirotsa Sukma Wardani"
    },
    {
      "nim": "02211940000056",
      "email": "Aldyfernanda78@gmail.com",
      "name": "Aldy Fernanda Prastianto"
    },
    {
      "nim": "02211940000057",
      "email": "Islaminurul06@gmail.com",
      "name": "Annisa Nurul Islami"
    },
    {
      "nim": "02211940000058",
      "email": "figo.garsya@gmail.com",
      "name": "Degama Figo Garsya"
    },
    {
      "nim": "02211940000059",
      "email": "irfandh47@gmail.com",
      "name": "Irfan Dwi Haryana"
    },
    {
      "nim": "02211940000060",
      "email": "afnians@gmail.com",
      "name": "Ulfiyah Afnian Sari"
    },
    {
      "nim": "02211940000061",
      "email": "delvintheodorus@gmail.com",
      "name": "Delvin Theodorus Hansell"
    },
    {
      "nim": "02211940000062",
      "email": "hoseaah111100@gmail.com",
      "name": "Hosea Amadeus Hariputra"
    },
    {
      "nim": "02211940000063",
      "email": "levinamarch@gmail.com",
      "name": "Levina Mrachyani"
    },
    {
      "nim": "02211940000064",
      "email": "mujiburrosyida@gmail.com",
      "name": "Ahmad mujiburrosyid"
    },
    {
      "nim": "02211940000065",
      "email": "adian777galih@gmail.com",
      "name": "Adian Galihditya Sinarto Wardhana"
    },
    {
      "nim": "02211940000066",
      "email": "naufalramadhani2711@gmail.com",
      "name": "Naufal Ramadhani"
    },
    {
      "nim": "02211940000067",
      "email": "vincentottop@gmail.com",
      "name": "Vincent Otto Pratama"
    },
    {
      "nim": "02211940000068",
      "email": "natanaelkrisnadi100@gmail.com",
      "name": "Natanael Peter"
    },
    {
      "nim": "02211940000069",
      "email": "okahmadariq@gmail.com",
      "name": "ok ahmad ariq"
    },
    {
      "nim": "02211940000070",
      "email": "ahmedinanaf@gmail.com",
      "name": "Ahmed Fanani Sudarto"
    },
    {
      "nim": "02211940000071",
      "email": "raflyputra21@gmail.com",
      "name": "Rafly Putra Ardiansyah"
    },
    {
      "nim": "02211940000072",
      "email": "mikaeldityo@gmail.com",
      "name": "Mikael Sri kurnia Raditya Dwiatmaka"
    },
    {
      "nim": "02211940000073",
      "email": "rizky.sanjaya2001@gmail.com",
      "name": "Muhammad Rizky Sanjaya"
    },
    {
      "nim": "02211940000074",
      "email": "klik.wilbert@gmail.com",
      "name": "Wilbert Chandra"
    },
    {
      "nim": "02211940000076",
      "email": "octavia268@gmail.com",
      "name": "Octavia Cahyani"
    },
    {
      "nim": "02211940000077",
      "email": "krisna.adinarayana@gmail.com",
      "name": "Made Krisna Adinarayana"
    },
    {
      "nim": "02211940000079",
      "email": "mregrockfranco@gmail.com",
      "name": "Enrique Gianfranco"
    },
    {
      "nim": "02211940000080",
      "email": "rastafara48@gmail.com",
      "name": "I Made Deago Nugra Visesa"
    },
    {
      "nim": "02211940000081",
      "email": "faisqolbi17@gmail.com",
      "name": "Fa'izul Qholbi Tamimi"
    },
    {
      "nim": "02211940000083",
      "email": "astianandaps@gmail.com",
      "name": "Asti Paramitha Ananda Santoso"
    },
    {
      "nim": "02211940000084",
      "email": "fabioemig200201@gmail.com",
      "name": "Fabio Emiguel Simanjutak"
    },
    {
      "nim": "02211940000086",
      "email": "mutiaracahyani104@gmail.com",
      "name": "Mutiara Cahyani"
    },
    {
      "nim": "02211940000087",
      "email": "azmifadhi7@gmail.com",
      "name": "Mohd Azmi Fadhi S."
    },
    {
      "nim": "02211940000089",
      "email": "faruqmubaroq13@gmail.com",
      "name": "Ahmad Faruq Mubaroq"
    },
    {
      "nim": "02211940000090",
      "email": "m.majidalifan@gmail.com",
      "name": "Muhammad Majid Alfian"
    },
    {
      "nim": "02211940000091",
      "email": "alfikriabdillah@gmail.com",
      "name": "Moh. Abdillah Al Fikri"
    },
    {
      "nim": "02211940000093",
      "email": "icahyaw@gmail.com",
      "name": "Indra Cahya Widagda"
    },
    {
      "nim": "02211940000094",
      "email": "alfredotarigan12@gmail.com",
      "name": "Alfredo Junianto Tarigan"
    },
    {
      "nim": "02211940000095",
      "email": "bilalfahrizain1@gmail.com",
      "name": "Fachrizan Bilal Masrur"
    },
    {
      "nim": "02211940000096",
      "email": "ilsyah1101@gmail.com",
      "name": "Ilsyahbillah Alrifdah"
    },
    {
      "nim": "02211940000097",
      "email": "emaldiwilhan@gmail.com",
      "name": "Mohamad Emaldi Wilhan Ariawan"
    },
    {
      "nim": "02211940000098",
      "email": "dwinandapramudya@gmail.com",
      "name": "Dwi Nanda Pramudya"
    },
    {
      "nim": "02211940000099",
      "email": "kenyo1384@gmail.com",
      "name": "Muhammad Adafa Kenyo"
    },
    {
      "nim": "02211940000100",
      "email": "faruqakmal15@gmail.com",
      "name": "Muhammad Faruq Akmal"
    },
    {
      "nim": "02211940000101",
      "email": "yusufbakhtiar264@gmail.com",
      "name": "Muhammad Yusuf Bakhtiar"
    },
    {
      "nim": "02211940000102",
      "email": "RISFAN.ali@gmail.com",
      "name": "Risfanali Raja"
    },
    {
      "nim": "02211940000103",
      "email": "nadhifauria@gmail.com",
      "name": "Nadhifa Auria Andini"
    },
    {
      "nim": "02211940000104",
      "email": "nissacandra27@gmail.com",
      "name": "Anissa Candraningtyas"
    },
    {
      "nim": "02211940000105",
      "email": "adidoyo01prakoso@gmail.com",
      "name": "Adidoyo Prakoso"
    },
    {
      "nim": "02211940000106",
      "email": "rheinand4r@gmail.com",
      "name": "Rheinanda Rachmaditasari"
    },
    {
      "nim": "02211940000107",
      "email": "petrieuodia@gmail.com",
      "name": "Petri Euodia Simanjuntak"
    },
    {
      "nim": "02211940000108",
      "email": "erfiraisnainatu28@gmail.com",
      "name": "Erfira Isnainatu Purmadini"
    },
    {
      "nim": "02211940000109",
      "email": "auliarnb09@gmail.com",
      "name": "Aulia Rahma Nabila"
    },
    {
      "nim": "02211940000111",
      "email": "acchanpf02@gmail.com",
      "name": "Achyani Putri Fadila"
    },
    {
      "nim": "02211940000112",
      "email": "mfaiqurrifqi05@gmail.com",
      "name": "M Faiqur Rifqi"
    },
    {
      "nim": "02211940000113",
      "email": "nindyatsabitah180902@gmail.com",
      "name": "Nindya Tsabitah"
    },
    {
      "nim": "02211940000114",
      "email": "mevlana.spensa@gmail.com",
      "name": "Mevlana Arvamusa"
    },
    {
      "nim": "02211940000115",
      "email": "sihabadha32@gmail.com",
      "name": "Sihab Adha Muntaha"
    },
    {
      "nim": "02211940000116",
      "email": "stanleyabel7@gmail.com",
      "name": "Stanley Abel Hartanto"
    },
    {
      "nim": "02211940000117",
      "email": "ihwanrifki@gmail.com",
      "name": "M. Ihwan Nur Rifki"
    },
    {
      "nim": "02211940000118",
      "email": "alifsby28@gmail.com",
      "name": "Muhammad Alif Aditya Febriyadi"
    },
    {
      "nim": "02211940000121",
      "email": "naisningrum@gmail.com",
      "name": "Nais Septianingrum"
    },
    {
      "nim": "02211940000122",
      "email": "mukhlissss28@gmail.com",
      "name": "Mukhlis Sholehudin"
    },
    {
      "nim": "02211940000124",
      "email": "mochammadfahmizachri@gmail.com",
      "name": "Mochammad Fahmi Zachri"
    },
    {
      "nim": "02211940000125",
      "email": "ibrahim.ichsan@gmail.com",
      "name": "Ibrahim Ichsan"
    },
    {
      "nim": "02211940000126",
      "email": "azrielrifki24@gmail.com",
      "name": "Rifki Azriel Fahrezi"
    },
    {
      "nim": "02211940000128",
      "email": "faisalwildan22@gmail.com",
      "name": "Faisal Akbar"
    },
    {
      "nim": "02211940000132",
      "email": "fathanudinahmad15@gmail.com",
      "name": "Fathanudin Ahmad"
    },
    {
      "nim": "02211940000133",
      "email": "danarramadhan56@gmail.com",
      "name": "Dhanar Kurnia Ramadhan"
    },
    {
      "nim": "02211940000134",
      "email": "alfiennaufal@gmail.com",
      "name": "Alfien Naufal Prahandika"
    },
    {
      "nim": "02211940000136",
      "email": "riorizal76@gmail.com",
      "name": "Rio Fachrizal"
    },
    {
      "nim": "02211940000137",
      "email": "viano.radjamin@gmail.com",
      "name": "Irviano P. Radjamin"
    },
    {
      "nim": "02211940000138",
      "email": "thariqjangkrik@gmail.com",
      "name": "Muhammad Thariq Kurnia T"
    },
    {
      "nim": "02211940000140",
      "email": "ertsampel@gmail.com",
      "name": "Ampeldenta Kertsaning"
    },
    {
      "nim": "02211940000142",
      "email": "farisadrian628@gmail.com",
      "name": "Faris Adnan"
    },
    {
      "nim": "02211940000144",
      "email": "merisaveronica@gmail.com",
      "name": "Merisa Veronika Suparto"
    },
    {
      "nim": "02211940000145",
      "email": "elmasalfarizky9000@gmail.com",
      "name": "Elmas Alfarizky"
    },
    {
      "nim": "02211940000146",
      "email": "amrimp126@gmail.com",
      "name": "Amri Maulana"
    },
    {
      "nim": "02211940000147",
      "email": "hamdanihsan83@gmail.com",
      "name": "Hamdan Ihsan"
    },
    {
      "nim": "02211940000148",
      "email": "hekalhafes@gmail.com",
      "name": "Muhammad Husin Haykal"
    },
    {
      "nim": "02211940000150",
      "email": "afifahnuraini2410@gmail.com",
      "name": "Afifah Nur Aini"
    },
    {
      "nim": "02211940000152",
      "email": "xxxnafisnaufalxxx@gmail.com",
      "name": "Naufal Nafis Trismawan"
    },
    {
      "nim": "02211940000154",
      "email": "kelbenrckk@gmail.com",
      "name": "Kelben Roostewen"
    },
    {
      "nim": "02211940000155",
      "email": "tiaranadilla4@gmail.com",
      "name": "Tiara Nadilla"
    },
    {
      "nim": "02211940000158",
      "email": "hanifahnisrinaa@gmail.com",
      "name": "Hanifah Nisrina F"
    },
    {
      "nim": "02211940000159",
      "email": "oktavira2001@gmail.com",
      "name": "Oktavira Nanda Nugraha"
    },
    {
      "nim": "02211940000160",
      "email": "syifarika@gmail.com",
      "name": "Syifa Arika Rangkuti"
    },
    {
      "nim": "02211940000161",
      "email": "kautsarina21@gmail.com",
      "name": "Kautsarina Rachmayanti"
    },
    {
      "nim": "02211940000162",
      "email": "zalfafiryal050301@gmail.com",
      "name": "Firyal Zalfa Arafatyananda"
    },
    {
      "nim": "02211940000163",
      "email": "fauzaaanharun@gmail.com",
      "name": "Muhammad Fauzan Harun"
    },
    {
      "nim": "02211940000164",
      "email": "aiwadalu@gmail.com",
      "name": "Aisyah Mawaddah Irda Lubis"
    },
    {
      "nim": "02211940000165",
      "email": "yazidhendra93@gmail.com",
      "name": "R. Muhammad Yazid Budihendrawan"
    },
    {
      "nim": "02211940000166",
      "email": "miftahimam246@gmail.com",
      "name": "Miftah Imam Ma'arif"
    },
    {
      "nim": "02211940000168",
      "email": "Syariefhidayatullah08@gmail.com",
      "name": "Syarief Hidayatullah"
    },
    {
      "nim": "02211940000169",
      "email": "fadhilfatchur1871@gmail.com",
      "name": "Fadhil Fatchur R"
    },
    {
      "nim": "02211940000170",
      "email": "hafizhakim3884@gmail.com",
      "name": "Al Hafiz Taufiqul Hakim"
    },
    {
      "nim": "02211940000171",
      "email": "fahri.ashary@gmail.com",
      "name": "Fahri Raihan Ashary"
    },
    {
      "nim": "02211940000172",
      "email": "shidqi.m23@gmail.com",
      "name": "Muhammad Shidqi"
    },
    {
      "nim": "02211940000173",
      "email": "mzakyr11@gmail.com",
      "name": "Muhammad Zaky Rahardyanto"
    },
    {
      "nim": "02211940000174",
      "email": "dsokhmajawie@gmail.com",
      "name": "DiANINDERAMAYANGKARA S"
    },
    {
      "nim": "02211940000175",
      "email": "khefinaas@gmail.com",
      "name": "Khefina Athifiyah Safiaputri"
    },
    {
      "nim": "02211940000176",
      "email": "lilian.lianti27@gmail.com",
      "name": "Lianti Nur Izza"
    },
    {
      "nim": "02211940000178",
      "email": "aqiblangit400@gmail.com",
      "name": "Aqib Sekarlangit Murtadha"
    },
    {
      "nim": "02211940000179",
      "email": "wandaoktavia300@gmail.com",
      "name": "Wanda Oktavia Maharani"
    },
    {
      "nim": "02211940000180",
      "email": "fredykurniawan07@gmail.com",
      "name": "Fredy Kurniawan Sutawijaya"
    },
    {
      "nim": "02211940000181",
      "email": "hanif30701@gmail.com",
      "name": "Hanif Irbah Firdaus Anam"
    },
    {
      "nim": "02211940000182",
      "email": "hmayongga@gmail.com",
      "name": "Mayongga HerizFebrada"
    },
    {
      "nim": "02211940000183",
      "email": "bungawidianan@gmail.com",
      "name": "Bunga Widiana Nurrahmadhanti"
    },
    {
      "nim": "02211940000185",
      "email": "zafira.mirza@gmail.com",
      "name": "Zafira Mirza Ramadhani"
    },
    {
      "nim": "02211940000186",
      "email": "raffi.mcmxcvi@gmail.com",
      "name": "Muhammad Bagus Rafidhya"
    },
    {
      "nim": "02211940000187",
      "email": "vanianaufalin@gmail.com",
      "name": "Vania Naufalin"
    },
    {
      "nim": "02211940000188",
      "email": "divaadmaritaa@gmail.com",
      "name": "Diva Admarita"
    },
    {
      "nim": "02211940000189",
      "email": "narendraaditama07@gmail.com",
      "name": "Narendra Yudha Aditama"
    },
    {
      "nim": "'02211940000190",
      "email": "arufdc@gmail.com",
      "name": "Ma'ruf Bintang Dwi Cahyo"
    },
    {
      "nim": "02211940000191",
      "email": "asgharfachri11@gmail.com",
      "name": "Fachri Kurniawan Asghar"
    },
    {
      "nim": "02211940000192",
      "email": "ardnov009@gmail.com",
      "name": "Arditya Novan F"
    },
    {
      "nim": "02211940000193",
      "email": "aisyahputrirme@gmail.com",
      "name": "Aisyah Putri Prameswari Jasmine"
    },
    {
      "nim": "02211940000194",
      "email": "alfinajaneta@gmail.com",
      "name": "Alfina Janeta"
    },
    {
      "nim": "02211940007001",
      "email": "ovelly.amamehi12@gmail.com",
      "name": "Ovelly Miryam Amamehi"
    },
    {
      "nim": "02211942000001",
      "email": "hafidzakbar.hr@gmail.com",
      "name": "HAFIDZ AKBAR FARIDZI RAHIM"
    },
    {
      "nim": "02211942000003",
      "email": "putridwivicka2601@gmail.com",
      "name": "NI MADE PUTRI DWI VICKA ARTHA"
    },
    {
      "nim": "02211942000004",
      "email": "Msampurnaaltitan@gmail.com",
      "name": "MUHAMMAD SAMPURNA ALTITAN"
    },
    {
      "nim": "02211942000006",
      "email": "zetittycesario@gmail.com",
      "name": "ZETITTY CESARIO NANARICKA"
    },
    {
      "nim": "02211942000007",
      "email": "virginiamasokansiri@gmail.com",
      "name": "VIRGINIA MASOKAN SIRI"
    },
    {
      "nim": "02211942000009",
      "email": "balqisnajwat56@gmail.com",
      "name": "BALQIS NAJWA TSABITHA"
    },
    {
      "nim": "02211942000010",
      "email": "adi.makayasa254001@gmail.com",
      "name": "ADI MAKAYASA MAHA PUTRA"
    },
    {
      "nim": "02211942000011",
      "email": "Luthfiyyah.annisa@gmail.com",
      "name": "LUTHFIYYAH ANNISA NUR AZIZAH"
    },
    {
      "nim": "02211942000013",
      "email": "zakiaufar19@gmail.com",
      "name": "HAFID ZAKI AUFAR"
    },
    {
      "nim": "02211940000156",
      "email": "mauludandruhp@gmail.com",
      "name": "Mauludandru Heradiprakoso"
    },
    {
      "nim": "2211940000141",
      "email": "jesslyn.mc10@gmail.com",
      "name": "Jesslyn Marteen Clarissa"
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
  
      Session.findById(req.body.sessionId, function (err, session) {
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
  
      return res.json({
        message: "New Participant Created!",
        data: participant,
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
