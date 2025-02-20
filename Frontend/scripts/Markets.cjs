const MARKETS = {
  Abia: [
    { name: "Aba International Market", img: "./markets/abia/aba-international.png", address:"Aba" },
    { name: "Alaoji Market", img: "./markets/abia/alaoji.jpg", address:"Alaoji" },
    { name: "Ariaria International Market", img: "./markets/abia/ariaria.jpeg", address:"Aba" },
    { name: "Eziukwu Market", img: "./markets/abia/eziukwu.jpeg", address:"Eziukwu" },
    { name: "Ikwuano Market", img: "./markets/abia/ikwuano.jpg", address:"Ikwuano" },
    { name: "Ndiegoro Market", img: "./markets/abia/ndiegoro.jpg", address:"Ndiegoro" },
    { name: "Ohia Market", img: "./markets/abia/ohia.jpg", address:"Ohia" },
    { name: "Oke Ikpe Market", img: "./markets/abia/okeikpe.jpg", address:"Okeikpe" },
    { name: "Oriendu Market", img: "./markets/abia/oriendu.jpeg", address:"Oriendu" },
    { name: "Ubakala Market", img: "./markets/abia/ubakala.jpg", address:"Ubakala" },
    { name: "Umuahia Main Market", img: "./markets/abia/umuahia.jpg", address:"Umuahia" },
    { name: "Umuocham Market", img: "./markets/abia/umuocham.jpeg", address:"Umuocham" },
    { name: "Uzuakoli Market", img: "./markets/abia/uzuakoli.jpeg", address:"Uzuakoli" },
  ],

  AkwaIbom: [
    { name: "Akamkpa Timber Market", img: "./markets/akwa-ibom/akamkpa.jpg", address:"Akamkpa" },
    { name: "Akpabuyo Main Market", img: "./markets/akwa-ibom/akpabuyo.jpg", address:"Akpabuyo" },
    { name: "Boki Market", img: "./markets/akwa-ibom/boki.jpg", address:"Boki" },
    { name: "Eket Fish Market", img: "./markets/akwa-ibom/eket-fish.jpg", address:"Eket, Akwa Ibom" },
    { name: "Eket Main Market", img: "./markets/akwa-ibom/eket-main.jpg", address:"Eket, Akwa Ibom" },
    { name: "Esuk Mba Market", img: "./markets/akwa-ibom/esuk-mba.jpg", address:"Akpabuyo" },
    { name: "Etinan Main Market", img: "./markets/akwa-ibom/etinan.jpeg", address:"Etinan, Akwa Ibom" },
    { name: "Ikono Main Market", img: "./markets/akwa-ibom/ikono.jpeg", address:"Ikono, Akwa Ibom" },
    { name: "Ikot Abasi Main Market", img: "./markets/akwa-ibom/ikot-abasi.jpg", address:"Ikot Abasi, Akwa Ibom" },
    { name: "Ikot Akpan Market", img: "./markets/akwa-ibom/ikot-akpan.jpg", address:"Ikot Akpan, Akwa Ibom" },
    { name: "Itam Market", img: "./markets/akwa-ibom/itam.jpeg", address:"Itam, Akwa Ibom" },
    { name: "Nto Edino Market", img: "./markets/akwa-ibom/ntoedino.jpeg", address:"Nto Edino, Akwa Ibom" },
    { name: "Oron Fish Market", img: "./markets/akwa-ibom/oron-fish.jpeg", address:"Oron, Akwa Ibom" },
    { name: "Urua Akpan Ete Market", img: "./markets/akwa-ibom/urua-akpan-ete.jpeg", address:"Urua Akpan Ete, Akwa Ibom" },
    { name: "Urua Ikono Market", img: "./markets/akwa-ibom/urua-ikono.jpeg", address:"Urua Ikono, Akwa Ibom" },
  ],

  Anambra: [
    { name: "Afor Igwe Market", img: "./markets/anambra/afor-igwe.jpg", address:"Afor Igwe, Anambra" },
    { name: "Amaenyi Market", img: "./markets/anambra/amaenyi.jpeg", address:"Amaenyi, Anambra" },
    { name: "Bridgehead Market", img: "./markets/anambra/bridgehead.jpg", address:"Bridgehead, Anambra" },
    { name: "Eke Amaobi Market", img: "./markets/anambra/ekeamaobi.jpg", address:"Eke Amaobi, Anambra" },
    { name: "Eke Awka Market", img: "./markets/anambra/ekeawka.jpeg", address:"Eke Awka, Anambra" },
    { name: "Eke Ekwulobia Market", img: "./markets/anambra/ekeekwulobia.jpeg", address:"Eke Ekwulobia, Anambra" },
    { name: "Eke Market", img: "./markets/anambra/eke.jpeg", address:"Eke Aguleri, Anambra" },
    { name: "Nkwo Ekwulobia Market", img: "./markets/anambra/nkwo-ekwulobia.jpg", address:"Nkwo Ekwulobia, Anambra" },
    { name: "Nkwo Nnewi Market", img: "./markets/anambra/nkwo-nnewi.jpeg", address:"Nkwo Nnewi, Anambra" },
    { name: "Nkwelle Market", img: "./markets/anambra/nkwelle.jpg", address:"Nkwelle, Anambra" },
    { name: "Nnewi Spare Parts Market", img: "./markets/anambra/nnewi-spareparts.png", address:"Nnewi, Anambra" },
    { name: "Ochanja Market", img: "./markets/anambra/ochanja.jpg", address:"Ochanja, Anambra" },
    { name: "Onitsha Main Market", img: "./markets/anambra/onitsha.jpg", address:"Onitsha, Anambra" },
    { name: "Relief Market", img: "./markets/anambra/relief.jpg", address:"Relief, Anambra" },
    { name: "Uru Market", img: "./markets/anambra/uru.jpg", address:"Uru, Anambra" },
  ],

  Bauchi: [
    { name: "Alkaleri Central Market", img: "./markets/bauchi/alkaleri.jpg", address: "Alkaleri" },
    { name: "Badara Market", img: "./markets/bauchi/badara.jpg", address: "Badara" },
    { name: "Bagel Market", img: "./markets/bauchi/bagel.jpg", address: "Bagel" },
    { name: "Bakin Kura Market", img: "./markets/bauchi/bakin-kura.jpg", address: "Bakin Kura" },
    { name: "Bogoro Market", img: "./markets/bauchi/bogoro.jpg", address: "Bogoro" },
    { name: "Central Market Bauchi", img: "./markets/bauchi/central.jpg", address: "Bauchi" },
    { name: "Dagu Market", img: "./markets/bauchi/dagu.jpg", address: "Dagu" },
    { name: "Lusa Market", img: "./markets/bauchi/lusa.jpg", address: "Lusa" },
    { name: "Magama Gumau Market", img: "./markets/bauchi/magama-gumau.jpg", address: "Magama Gumau" },
    { name: "Misau Main Market", img: "./markets/bauchi/misau.jpg", address: "Misau" },
    { name: "Muda Lawal Market", img: "./markets/bauchi/muda-lawal.jpg", address: "Muda Lawal" },
    { name: "Wanka Market", img: "./markets/bauchi/wanka.jpg", address: "Wanka" },
    { name: "Warji Market", img: "./markets/bauchi/warji.jpg", address: "Warji" },
    { name: "Wunti Market", img: "./markets/bauchi/wunti.jpg", address: "Wunti" },
    { name: "Yelwa Market", img: "./markets/bauchi/yelwa.jpg", address: "Yelwa" },
    { name: "Yuli Market", img: "./markets/bauchi/yuli.jpg", address: "Yuli" },
    { name: "Zindi Market", img: "./markets/bauchi/zindi.jpg", address: "Zindi" },
  ],

  Bayelsa: [
    { name: "Agudama Market", img: "./markets/bayelsa/agudama.jpg", address: "Agudama Town" },
    { name: "Amassoma Market", img: "./markets/bayelsa/amassoma.jpg", address: "Amassoma Town" },
    { name: "Brass Market", img: "./markets/bayelsa/brass.jpeg", address: "Brass Town" },
    { name: "Ekeremor Market", img: "./markets/bayelsa/ekeremor.jpg", address: "Ekeremor Town" },
    { name: "Kaiama Market", img: "./markets/bayelsa/kaiama.jpg", address: "Kaiama Town" },
    { name: "Nembe Market", img: "./markets/bayelsa/nembe.jpg", address: "Nembe Town" },
    { name: "Odi Market", img: "./markets/bayelsa/odi.jpg", address: "Odi Town" },
    { name: "Ogbia Market", img: "./markets/bayelsa/ogbia.jpg", address: "Ogbia Town" },
    { name: "Okolobiri Market", img: "./markets/bayelsa/okolobiri.jpg", address: "Okolobiri Town" },
    { name: "Oporoma Market", img: "./markets/bayelsa/oporoma.jpg", address: "Oporoma Town" },
    { name: "Otueke Market", img: "./markets/bayelsa/otueke.jpg", address: "Otueke Town" },
    { name: "Sagbama Market", img: "./markets/bayelsa/sagbama.jpg", address: "Sagbama Town" },
    { name: "Swali Market", img: "./markets/bayelsa/swali.jpg", address: "Yenagoa" },
    { name: "Tombia Market", img: "./markets/bayelsa/tombia.jpg", address: "Tombia Town" },
    { name: "Yenagoa Main Market", img: "./markets/bayelsa/yenagoa.jpg", address: "Yenagoa" },
  ],

  Benue: [
    { name: "Akaajime Market", img: "./markets/benue/akaajime.jpg", address: "Akaajime" },
    { name: "Enugu Road Market", img: "./markets/benue/enugu-road.jpg", address: "Enugu Road" },
    { name: "Gboko Main Market", img: "./markets/benue/gboko-main.jpg", address: "Gboko" },
    { name: "Gboko North Market", img: "./markets/benue/gboko-north.jpg", address: "Gboko North" },
    { name: "Gboko South Market", img: "./markets/benue/gboko-south.jpg", address: "Gboko South" },
    { name: "GRA Market", img: "./markets/benue/gra.jpg", address: "GRA" },
    { name: "Katsina-Ala Market", img: "./markets/benue/katsina-ala.jpg", address: "Katsina-Ala" },
    { name: "Makurdi Main Market", img: "./markets/benue/makurdi-main.jpg", address: "Makurdi" },
    { name: "Makurdi Modern Market", img: "./markets/benue/makurdi-modern.jpg", address: "Makurdi" },
    { name: "Mbalagh Market", img: "./markets/benue/mbalagh.jpg", address: "Mbalagh" },
    { name: "Naka Road Market", img: "./markets/benue/naka-road.jpg", address: "Naka Road" },
    { name: "North Bank Market", img: "./markets/benue/north-bank.jpg", address: "North Bank" },
    { name: "Ugbokolo Market", img: "./markets/benue/ugbokolo.jpg", address: "Ugbokolo" },
    { name: "Wurukum Market", img: "./markets/benue/wurukum.jpg", address: "Wurukum" },
  ],

  Borno: [
    { name: "Baga Market", img: "./markets/borno/baga.jpg", address: "Baga" },
    { name: "Bama Main Market", img: "./markets/borno/bama-main.jpg", address: "Bama" },
    { name: "Bama Sunday Market", img: "./markets/borno/bama-sunday.jpg", address: "Bama" },
    { name: "Biu Central Market", img: "./markets/borno/biu-central.jpg", address: "Biu" },
    { name: "Biu Friday Market", img: "./markets/borno/biu-friday.jpg", address: "Biu" },
    { name: "Biu Main Market", img: "./markets/borno/biu-main.jpg", address: "Biu" },
    { name: "Biu Motor Park Market", img: "./markets/borno/biu-motor.jpg", address: "Biu" },
    { name: "Customs Market", img: "./markets/borno/customs.jpg", address: "Customs" },
    { name: "Gamboru Market", img: "./markets/borno/gamboru.jpg", address: "Gamboru" },
    { name: "Kadamari Market", img: "./markets/borno/kadamari.jpg", address: "Kadamari" },
    { name: "Kwanan Gashu'a Market", img: "./markets/borno/kwanan-gashua.jpg", address: "Kwanan Gashu'a" },
    { name: "Kwaya Kusar Market", img: "./markets/borno/kwaya-kusar.jpg", address: "Kwaya Kusar" },
    { name: "Maiduguri Main Market", img: "./markets/borno/maiduguri-main.jpg", address: "Maiduguri" },
    { name: "Ngamdu Market", img: "./markets/borno/ngamdu.jpg", address: "Ngamdu" },
    { name: "Old Maiduguri Market", img: "./markets/borno/old-maiduguri.jpg", address: "Old Maiduguri" },
    { name: "Wulgo Market", img: "./markets/borno/wulgo.jpg", address: "Wulgo" },
  ],

  CrossRiver: [
    { name: "Akamkpa Timber Market", img: "./markets/cross-river/akamkpa.jpg", address: "Akamkpa" },
    { name: "Akpabuyo Main Market", img: "./markets/cross-river/akpabuyo.jpg", address: "Akpabuyo" },
    { name: "Boki Market", img: "./markets/cross-river/boki.jpg", address: "Boki" },
    { name: "Esuk Mba Market", img: "./markets/cross-river/esuk-mba.jpg", address: "Akpabuyo" },
    { name: "Marian Market", img: "./markets/cross-river/marian.jpg", address: "Calabar" },
    { name: "Mbube Market", img: "./markets/cross-river/mbube.jpg", address: "Ogoja" },
    { name: "Ogoja Market", img: "./markets/cross-river/ogoja.jpg", address: "Ogoja" },
    { name: "Okuku Market", img: "./markets/cross-river/okuku.jpg", address: "Yala" },
    { name: "Watt Market", img: "./markets/cross-river/watt.jpg", address: "Calabar" },
  ],

  Delta: [
    { name: "Abraka Market", img: "./markets/delta/abraka.jpg", address: "Asaba" },
    { name: "Bomadi Market", img: "./markets/delta/bomadi.jpg", address: "Bomadi" },
    { name: "Burutu Market", img: "./markets/delta/burutu.jpg", address: "Burutu" },
    { name: "Igbudu Market", img: "./markets/delta/igbudu.jpg", address: "Warri" },
    { name: "Issele-Uku Market", img: "./markets/delta/issele-uku.jpeg", address: "Issele-Uku" },
    { name: "Koko Market", img: "./markets/delta/koko.jpg", address: "Koko" },
    { name: "Kwale Market", img: "./markets/delta/kwale.jpg", address: "Kwale" },
    { name: "Ogbe-Ijoh Market", img: "./markets/delta/ogbe-ijoh.jpg", address: "Warri" },
    { name: "Ogbogonogo Market", img: "./markets/delta/ogbogonogo.jpg", address: "Asaba" },
    { name: "Ogwashi-Uku Market", img: "./markets/delta/ogwashi-uku.jpg", address: "Ogwashi-Uku" },
    { name: "Oleh Market", img: "./markets/delta/oleh.jpg", address: "Oleh" },
    { name: "Ozoro Market", img: "./markets/delta/ozoro.jpg", address: "Ozoro" },
    { name: "Patani Market", img: "./markets/delta/patani.jpg", address: "Patani" },
    { name: "Sapele Main Market", img: "./markets/delta/sapele-main.jpg", address: "Sapele" },
    { name: "Ughelli Main Market", img: "./markets/delta/ughelli.jpg", address: "Ughelli" },
  ],

  Ebonyi: [
    { name: "Abakaliki International Market", img: "./markets/ebonyi/abakaliki.jpg", address: "Abakaliki" },
    { name: "Aho Market", img: "./markets/ebonyi/aho.jpg", address: "Ezza" },
    { name: "Ahia Ofu Market", img: "./markets/ebonyi/ahia-ofu.jpg", address: "Abakaliki" },
    { name: "Eke Imoha Market", img: "./markets/ebonyi/eke-imoha.jpg", address: "Ezza" },
    { name: "Eke Afikpo Market", img: "./markets/ebonyi/eke-afikpo.jpg", address: "Afikpo" },
    { name: "Eke Ishiagu Market", img: "./markets/ebonyi/eke-ishiagu.jpg", address: "Ishiagu" },
    { name: "Eke Okposi Market", img: "./markets/ebonyi/eke-okposi.jpg", address: "Okposi" },
    { name: "Mgbukobe Market", img: "./markets/ebonyi/mgbukobe.jpg", address: "Abakaliki" },
    { name: "Nkwo Market", img: "./markets/ebonyi/nkwo.jpg", address: "Ezza" },
    { name: "Onueke Market", img: "./markets/ebonyi/onueke.jpg", address: "Onueke" },
    { name: "Orie Egbe Market", img: "./markets/ebonyi/orie-egbe.jpg", address: "Amudo" },
    { name: "Orie Market", img: "./markets/ebonyi/orie.jpg", address: "Ezza" },
    { name: "St. Margaret Umahi International Market", img: "./markets/ebonyi/st-margaret.jpg", address: "Abakaliki" },
    { name: "Ugwuachara Market", img: "./markets/ebonyi/ugwuachara.jpg", address: "Abakaliki" },
    { name: "Ukwuagba Market", img: "./markets/ebonyi/ukwuagba.jpg", address: "Ngbo" },
  ],

  Edo: [
    { name: "Auchi Main Market", img: "./markets/edo/auchi.jpg", address: "Auchi" },
    { name: "Ekiosa Market", img: "./markets/edo/ekiosa.jpg", address: "Benin City" },
    { name: "Ekiuwa Market", img: "./markets/edo/ekiuwa.jpg", address: "Benin City" },
    { name: "Ekpoma Market", img: "./markets/edo/ekpoma.jpg", address: "Ekpoma" },
    { name: "Igarra Market", img: "./markets/edo/igarra.jpg", address: "Igarra" },
    { name: "Igueben Market", img: "./markets/edo/igueben.jpg", address: "Igueben" },
    { name: "Ikpoba Hill Market", img: "./markets/edo/ikpoba-hill.jpg", address: "Benin City" },
    { name: "New Benin Market", img: "./markets/edo/new-benin.jpg", address: "Benin City" },
    { name: "Oba Market", img: "./markets/edo/oba.jpg", address: "Benin City" },
    { name: "Okada Market", img: "./markets/edo/okada.jpg", address: "Okada" },
    { name: "Oliha Market", img: "./markets/edo/oliha.jpg", address: "Benin City" },
    { name: "Oregbeni Market", img: "./markets/edo/oregbeni.jpg", address: "Benin City" },
    { name: "Ubiaja Market", img: "./markets/edo/ubiaja.jpg", address: "Ubiaja" },
    { name: "Uromi Market", img: "./markets/edo/uromi.jpg", address: "Uromi" },
    { name: "Uselu Market", img: "./markets/edo/uselu.jpg", address: "Benin City" },
  ],

  Ekiti: [
    { name: "Aramoko Market", img: "./markets/ekiti/aramoko.jpg", address:"Aramoko-Ekiti" },
    { name: "Bisi Market", img: "./markets/ekiti/bisi.jpg", address:"Ado-Ekiti" },
    { name: "Erekesan Market", img: "./markets/ekiti/erekesan.jpg", address:"Ado-Ekiti" },
    { name: "Ifaki Market", img: "./markets/ekiti/ifaki.jpeg", address:"Ifaki-Ekiti" },
    { name: "Igede Market", img: "./markets/ekiti/igede.jpg", address:"Igede-Ekiti" },
    { name: "Ikere Ekiti Market", img: "./markets/ekiti/ikere.jpeg", address:"Ikere-Ekiti" },
    { name: "Iye Ekiti Market", img: "./markets/ekiti/iye.jpeg", address:"Iye-Ekiti" },
    { name: "Oja Oba Market", img: "./markets/ekiti/oja-oba.jpg", address:"Ado-Ekiti" },
    { name: "Oja Odo Oro Market", img: "./markets/ekiti/odo-oro.jpg", address:"Odo Oro-Ekiti" },
    { name: "Otun Ekiti Market", img: "./markets/ekiti/otun.jpeg", address:"Otun-Ekiti" },
  ],

  Enugu: [
    { name: "9th Mile Corner Market", img: "./markets/enugu/9th-mile.jpg", address: "Udi" },
    { name: "Abakpa Market", img: "./markets/enugu/abakpa.jpg", address: "Abakpa, Enugu" },
    { name: "Akwata Market", img: "./markets/enugu/akwata.jpg", address: "Enugu" },
    { name: "Artisan Market", img: "./markets/enugu/artisan.jpg", address: "Enugu" },
    { name: "Coal Camp Market", img: "./markets/enugu/coal-camp.jpg", address: "Enugu" },
    { name: "Eke Agbani Market", img: "./markets/enugu/eke-agbani.jpg", address: "Agbani" },
    { name: "Emene Market", img: "./markets/enugu/emene.jpg", address: "Emene" },
    { name: "Garki Market", img: "./markets/enugu/garki.jpg", address: "Enugu" },
    { name: "Kenyatta Market", img: "./markets/enugu/kenyatta.jpg", address: "Uwani, Enugu" },
    { name: "Mayor Market", img: "./markets/enugu/mayor.jpg", address: "Enugu" },
    { name: "New Market", img: "./markets/enugu/new.jpg", address: "Enugu" },
    { name: "Nsukka Market", img: "./markets/enugu/nsukka.jpg", address: "Nsukka" },
    { name: "Ogbete Main Market", img: "./markets/enugu/ogbete.jpg", address: "Enugu" },
    { name: "Orie Orba Market", img: "./markets/enugu/orie-orba.jpg", address: "Orba" },
  ],

  Imo: [
    { name: "Afor Ogbe Market", img: "./markets/imo/afor-ogbe.jpg", address: "Ahiazu Mbaise" },
    { name: "Anhara Market", img: "./markets/imo/anhara.jpg", address: "Isiala Mbano" },
    { name: "Christ Church Market", img: "./markets/imo/christ-church.jpg", address: "Owerri" },
    { name: "Eke Onuwa Market", img: "./markets/imo/eke-onuwa.jpg", address: "Owerri" },
    { name: "Eke Ukwu Owerri Market", img: "./markets/imo/ekeukwu.jpg", address: "Owerri" },
    { name: "Ekpe Ikpa Market", img: "./markets/imo/ekpeikpa.jpg", address: "Isinweke" },
    { name: "International Market", img: "./markets/imo/international.jpg", address: "Orlu" },
    { name: "Okigwe Market", img: "./markets/imo/okigwe.jpg", address: "Okigwe" },
    { name: "Orie Agu Nsu Market", img: "./markets/imo/orie-agu.jpg", address: "Ehime Mbano" },
    { name: "Orlu Main Market", img: "./markets/imo/orlu-main.jpg", address: "Orlu" },
    { name: "Owerri Market", img: "./markets/imo/owerri.jpg", address: "Owerri" },
    { name: "Relief Market", img: "./markets/imo/relief.jpg", address: "Owerri" },
  ],

  Jigawa: [
    { name: "Babura Market", img: "./markets/jigawa/babura.jpg", address: "Babura" },
    { name: "Birnin Kudu Market", img: "./markets/jigawa/birnin-kudu.jpg", address: "Birnin Kudu town" },
    { name: "Dutse Market", img: "./markets/jigawa/dutse.jpg", address: "Dutse" },
    { name: "Garki Market", img: "./markets/jigawa/garki.jpg", address: "Garki" },
    { name: "Gumel Market", img: "./markets/jigawa/gumel.jpg", address: "Gumel town" },
    { name: "Gwaram Market", img: "./markets/jigawa/gwaram.jpg", address: "Gwaram town" },
    { name: "Gwiwa Market", img: "./markets/jigawa/gwiwa.jpg", address: "Gwiwa" },
    { name: "Hadejia Market", img: "./markets/jigawa/hadejia.jpg", address: "Hadejia town" },
    { name: "Jahun Market", img: "./markets/jigawa/jahun.jpg", address: "Jahun town" },
    { name: "Kafin Hausa Market", img: "./markets/jigawa/kafin-hausa.jpg", address: "Kafin Hausa town" },
    { name: "Kazaure Market", img: "./markets/jigawa/kazaure.jpg", address: "Kazaure town" },
    { name: "Maigatari Market", img: "./markets/jigawa/maigatari.jpg", address: "Maigatari town" },
    { name: "Malam Madori Market", img: "./markets/jigawa/malam-madori.jpg", address: "Malam Madori town" },
    { name: "Ringim Market", img: "./markets/jigawa/ringim.jpg", address: "Ringim town" },
    { name: "Roni Market", img: "./markets/jigawa/roni.jpg", address: "Roni" },
  ],

  Kaduna: [
    { name: "Birnin Gwari Market", img: "./markets/kaduna/birnin-gwari.jpg", address: "Birnin Gwari town" },
    { name: "Giwa Market", img: "./markets/kaduna/giwa.jpg", address: "Giwa town" },
    { name: "Hunkuyi Market", img: "./markets/kaduna/hunkuyi.jpg", address: "Hunkuyi town" },
    { name: "Ikara Market", img: "./markets/kaduna/ikara.jpg", address: "Ikara town" },
    { name: "Kafanchan Market", img: "./markets/kaduna/kafanchan.jpg", address: "Kafanchan town" },
    { name: "Kasuwan Magani Market", img: "./markets/kaduna/kasuwan-magani.jpg", address: "Kasuwan Magani town" },
    { name: "Kawo Market", img: "./markets/kaduna/kawo.jpg", address: "Kawo area, Kaduna city" },
    { name: "Kujama Market", img: "./markets/kaduna/kujama.jpg", address: "Kujama town" },
    { name: "Makarfi Market", img: "./markets/kaduna/makarfi.jpg", address: "Makarfi town" },
    { name: "Maƙarfi Market", img: "./markets/kaduna/makarfi.jpg", address: "Maƙarfi town" },
    { name: "Pambegua Market", img: "./markets/kaduna/pambegua.jpg", address: "Pambegua town" },
    { name: "Sabo Market", img: "./markets/kaduna/sabo.jpg", address: "Sabo area, Kaduna city" },
    { name: "Saminaka Market", img: "./markets/kaduna/saminaka.jpg", address: "Saminaka town" },
    { name: "Unguwar Rimi Market", img: "./markets/kaduna/unguwar-rimi.jpg", address: "Unguwar Rimi area, Kaduna city" },
    { name: "Zaria City Market", img: "./markets/kaduna/zaria.jpg", address: "Zaria city" },
  ],

  Kano: [
    { name: "Bichi Market", img: "./markets/kano/bichi.jpg", address: "Bichi town" },
    { name: "Dawanau Market", img: "./markets/kano/dawanau.jpg", address: "Dawakin Tofa LGA" },
    { name: "Gezawa Market", img: "./markets/kano/gezawa.jpg", address: "Gezawa town" },
    { name: "Gwarzo Market", img: "./markets/kano/gwarzo.jpg", address: "Gwarzo town" },
    { name: "Kofar Wambai Market", img: "./markets/kano/kofar-wambai.jpg", address: "Kano city" },
    { name: "Kura Market", img: "./markets/kano/kura.jpg", address: "Kura town" },
    { name: "Kurmi Market", img: "./markets/kano/kurmi.jpg", address: "Kano city" },
    { name: "Rano Market", img: "./markets/kano/rano.jpg", address: "Rano town" },
    { name: "Sabon Gari Market", img: "./markets/kano/sabon-gari.jpg", address: "Sabon Gari area, Kano city" },
    { name: "Singer Market", img: "./markets/kano/singer.jpg", address: "Kano city" },
    { name: "Tarauni Market", img: "./markets/kano/tarauni.jpg", address: "Tarauni area, Kano city" },
    { name: "Tofa Market", img: "./markets/kano/tofa.jpg", address: "Tofa town" },
    { name: "Ungogo Market", img: "./markets/kano/ungogo.jpg", address: "Ungogo town" },
    { name: "Wudil Market", img: "./markets/kano/wudil.jpg", address: "Wudil town" },
    { name: "Yankaba Market", img: "./markets/kano/yankaba.jpg", address: "Yankaba area, Kano city" },
  ],

  Katsina: [
    { name: "Bakori Market", img: "./markets/katsina/bakori.jpg", address: "Bakori Town" },
    { name: "Batsari Market", img: "./markets/katsina/batsari.jpg", address: "Batsari Town" },
    { name: "Charanchi Central Market", img: "./markets/katsina/charanchi.jpg", address: "Charanchi Town" },
    { name: "Dandume Market", img: "./markets/katsina/dandume.jpg", address: "Dandume Town" },
    { name: "Danja Market", img: "./markets/katsina/danja.jpg", address: "Danja Town" },
    { name: "Dutsin-Ma Market", img: "./markets/katsina/dutsin-ma.jpg", address: "Dutsin-Ma Town" },
    { name: "Funtua Market", img: "./markets/katsina/funtua.jpg", address: "Funtua Town" },
    { name: "Jibia Border Market", img: "./markets/katsina/jibia.jpg", address: "Jibia Town" },
    { name: "Kafur Market", img: "./markets/katsina/kafur.jpg", address: "Kafur Town" },
    { name: "Kankara Market", img: "./markets/katsina/kankara.jpg", address: "Kankara Town" },
    { name: "Katsina Central Market", img: "./markets/katsina/central.jpg", address: "Katsina City" },
    { name: "Katsina Dubai Market", img: "./markets/katsina/dubai.jpg", address: "Katsina City" },
    { name: "Maiadua International Market", img: "./markets/katsina/maiadua.jpg", address: "Maiadua Town" },
    { name: "Mashi Market", img: "./markets/katsina/mashi.jpg", address: "Mashi Town" },
    { name: "Sheme Market", img: "./markets/katsina/sheme.jpg", address: "Sheme Town" },
  ],

  Kebbi: [
    { name: "Aliero Market", img: "./markets/kebbi/aliero.jpg", address: "Aliero" },
    { name: "Argungu Central Market", img: "./markets/kebbi/argungu.jpg", address: "Argungu" },
    { name: "Augie Market", img: "./markets/kebbi/augie.jpg", address: "Augie" },
    { name: "Besse Market", img: "./markets/kebbi/besse.jpg", address: "Besse" },
    { name: "Bunza Market", img: "./markets/kebbi/bunza.jpg", address: "Bunza" },
    { name: "Central Market", img: "./markets/kebbi/central.jpg", address: "Birnin Kebbi" },
    { name: "Dodoru Market", img: "./markets/kebbi/dodoru.jpg", address: "Dodoru" },
    { name: "Gwandu Market", img: "./markets/kebbi/gwandu.jpg", address: "Gwandu" },
    { name: "Jega Market", img: "./markets/kebbi/jega.jpg", address: "Jega" },
    { name: "Kalgo Market", img: "./markets/kebbi/kalgo.jpg", address: "Kalgo" },
    { name: "Koko Market", img: "./markets/kebbi/koko.jpg", address: "Koko" },
    { name: "Maiyama Market", img: "./markets/kebbi/maiyama.jpg", address: "Maiyama" },
    { name: "Suru Market", img: "./markets/kebbi/suru.jpg", address: "Suru" },
    { name: "Yauri Market", img: "./markets/kebbi/yauri.jpg", address: "Yauri" },
    { name: "Zuru Market", img: "./markets/kebbi/zuru.jpg", address: "Zuru" },
  ],

  Kwara: [
    { name: "Aremu Market", img: "./markets/kwara/aremu.jpg", address: "Ilorin South" },
    { name: "Isale Oja Market", img: "./markets/kwara/isale-oja.jpg", address: "Ilorin East" },
    { name: "Jebba Market", img: "./markets/kwara/jebba.png", address: "Jebba" },
    { name: "Offa Central Market", img: "./markets/kwara/offa-central.jpg", address: "Offa" },
    { name: "Oja Agbo Market", img: "./markets/kwara/oja-agbo.jpg", address: "Ilorin" },
    { name: "Oja Aje Market", img: "./markets/kwara/oja-aje.jpg", address: "Ilorin" },
    { name: "Oja Ipata Market", img: "./markets/kwara/oja-ipata.jpg", address: "Ilorin" },
    { name: "Oja Oba Market", img: "./markets/kwara/oja-oba.jpg", address: "Ilorin" },
    { name: "Oja Oke Market", img: "./markets/kwara/oja-oke.jpg", address: "Ilorin" },
    { name: "Oja Tuntun Market", img: "./markets/kwara/oja-tuntun.jpg", address: "Ilorin" },
    { name: "Omu-Aran Main Market", img: "./markets/kwara/omu-aran.jpg", address: "Omu-Aran" },
    { name: "Sabo Market", img: "./markets/kwara/sabo.jpg", address: "Ilorin" },
  ],

  Lagos: [
    { name: "Agbalata Market", img: "./markets/lagos/agbalata.jpg", address:"Badagry" },
    { name: "Agboju Market", img: "./markets/lagos/agboju.jpg", address:"Festac Town" },
    { name: "Agege Market", img: "./markets/lagos/agege.jpg", address:"Agege" },
    { name: "Ajah Market", img: "./markets/lagos/ajah.jpg", address:"Ajah" },
    { name: "Alaba Market", img: "./markets/lagos/alaba.jpeg", address:"Alaba" },
    { name: "Aratumi Market", img: "./markets/lagos/aratumi.jpg", address:"Ojo" },
    { name: "Balogun Market", img: ".yy[[/markets/lagos/balogun.jpg", address:"Lagos Island" },
    { name: "Bar Beach Market", img: "./markets/lagos/barbeach.jpg", address:"Elegushi" },
    { name: "Computer Village", img: "./markets/computervillage.jpg", address:"Computer Village" },
    { name: "Daleko Market", img: "./markets/lagos/daleko.png", address:"Mushin" },
    { name: "Idumota Market", img: "./markets/lagos/idumota.jpg", address:"Idumota" },
    { name: "Ikotun Market", img: "./markets/lagos/ikotun.jpg", address:"Ikotun" },
    { name: "Ladipo Market", img: "./markets/lagos/ladipo.jpg", address:"Ladipo" },
    { name: "Lekki Market", img: "./markets/lagos/lekki.webp", address:"Lekki Penninsula" },
    { name: "Mile 12 Market", img: "./markets/lagos/BodijaMarket.jpg", address:"Ikotun Ketu" },
    { name: "Mushin Market", img: "./markets/lagos/mushin.jpg", address:"Mushin" },
    { name: "Oniru New Market", img: "./markets/lagos/oniru.webp", address:"Maroko Road" },
    { name: "Oshodi Market", img: "./markets/lagos/oshodi.jpg", address:"Oshodi" },
    { name: "Oyingbo Market", img: "./markets/lagos/oyingbo.jpg", address:"Ebute Metta" },
  ],

  Ogun: [
    { name: "Adire Market", img: "./markets/ogun/adire.jpg", address:"Sapon, Abeokuta" },
    { name: "Ago Iwoye Market", img: "./markets/ogun/ago-iwoye.jpg", address:"Ago Iwoye, Ijebu North" },
    { name: "Ifo Market", img: "./markets/ogun/ifo.jpg", address:"Ifo Town" },
    { name: "Ijebu Ode Market", img: "./markets/ogun/ijebu-ode.jpg", address:"Ijebu Ode Town" },
    { name: "Ijoko Market", img: "./markets/ogun/ijoko.jpg", address:"Ijoko, Ado-Odo/Ota" },
    { name: "Ilaro Market", img: "./markets/ogun/ilaro.jpg", address:"Ilaro Town" },
    { name: "Kuto Market", img: "./markets/ogun/kuto.jpg", address:"Kuto, Abeokuta" },
    { name: "Lafenwa Market", img: "./markets/ogun/lafenwa.jpg", address:"Lafenwa, Abeokuta" },
    { name: "Lusada Market", img: "./markets/ogun/lusada.jpg", address:"Agbara, Ogun" },
    { name: "Obantoko Market", img: "./markets/ogun/obantoko.jpg", address:"Obantoko, Abeokuta" },
    { name: "Oja Odan Market", img: "./markets/ogun/oja-odan.jpg", address:"Oja Odan, Yewa North" },
    { name: "Owode Market", img: "./markets/ogun/owode.jpg", address:"Owode, Yewa South" },
    { name: "Sagamu Market", img: "./markets/ogun/sagamu.jpg", address:"Sagamu Town" },
    { name: "Sango Ota Market", img: "./markets/ogun/ota.jpg", address:"Sango Ota, Ado-Odo/Ota" },
  ],

  Ondo: [
    { name: "Agadagba Market", img: "./markets/ondo/agadagba.jpg", address:"Agadagba, Ese-Odo" },
    { name: "Bolorunduro Market", img: "./markets/ondo/bolorunduro.jpg", address:"Bolorunduro, Ondo East" },
    { name: "Idanre Market", img: "./markets/ondo/idanre.jpg", address:"Idanre" },
    { name: "Ifon Market", img: "./markets/ondo/ifon.jpg", address:"Ifon, Ose LGA" },
    { name: "Igbokoda Market", img: "./markets/ondo/igbokoda.jpg", address:"Igbokoda, Ilaje" },
    { name: "Ikare Akoko Market", img: "./markets/ondo/ikare.jpg", address:"Ikare Akoko" },
    { name: "Irele Market", img: "./markets/ondo/irele.jpg", address:"Irele" },
    { name: "Isikan Market", img: "./markets/ondo/isikan.jpeg", address:"Akure" },
    { name: "Oja Oba Market", img: "./markets/ondo/oja-oba.jpg", address:"Akure" },
    { name: "Oja Oshodi Market", img: "./markets/ondo/oja-oshodi.jpg", address:"Ondo Town" },
    { name: "Oja Owo Market", img: "./markets/ondo/oja-owo.jpg", address:"Owo" },
    { name: "Ore Market", img: "./markets/ondo/ore.jpg", address:"Ore, Odigbo" },
    { name: "Shasha Market", img: "./markets/ondo/shasha.jpg", address:"Akure" },
    { name: "Supare Market", img: "./markets/ondo/supare.jpg", address:"Supare Akoko" },
  ],

  Osun: [
    { name: "Alekuwodo Market", img: "./markets/osun/alekuwodo.jpg", address:"Osogbo" },
    { name: "Atakumosa Market", img: "./markets/osun/atakumosa.jpg", address:"Ilesa" },
    { name: "Erin Osun Market", img: "./markets/osun/erin-osun.jpg", address:"Erin-Osun" },
    { name: "Gbongan Market", img: "./markets/osun/gbongan.jpg", address:"Gbongan" },
    { name: "Ife Central Market", img: "./markets/osun/ife-central.jpg", address:"Ile-Ife" },
    { name: "Igbona Market", img: "./markets/osun/igbona.jpg", address:"Osogbo" },
    { name: "Ikirun Market", img: "./markets/osun/ikirun.jpg", address:"Ikirun" },
    { name: "Ila Orangun Market", img: "./markets/osun/ila-orangun.jpg", address:"Ila-Orangun" },
    { name: "Odo Ori Market", img: "./markets/osun/odo-ori.jpg", address:"Iwo" },
    { name: "Oja Ejigbo Market", img: "./markets/osun/ejigbo.jpeg", address:"Ejigbo" },
    { name: "Oja Oba Market", img: "./markets/osun/oja-oba.jpg", address:"Osogbo" },
    { name: "Oja Sekona Market", img: "./markets/osun/sekona.jpg", address:"Sekona" },
    { name: "Oja Timi Market", img: "./markets/osun/oja-timi.jpg", address:"Ede" },
    { name: "Okuku Market", img: "./markets/osun/okuku.jpg", address:"Okuku" },
    { name: "Owode Ede Market", img: "./markets/osun/owode-ede.jpg", address:"Ede" },
  ],

  Sokoto: [
    { name: "Binji Market", img: "./markets/sokoto/binji.jpg", address: "Binji" },
    { name: "Bodinga Market", img: "./markets/sokoto/bodinga.jpg", address: "Bodinga" },
    { name: "Dange Market", img: "./markets/sokoto/dange.jpg", address: "Dange" },
    { name: "Goronyo Market", img: "./markets/sokoto/goronyo.jpg", address: "Goronyo" },
    { name: "Gwadabawa Market", img: "./markets/sokoto/gwadabawa.jpg", address: "Gwadabawa" },
    { name: "Illela Market", img: "./markets/sokoto/illela.jpg", address: "Illela" },
    { name: "Kebbe Market", img: "./markets/sokoto/kebbe.jpg", address: "Kebbe" },
    { name: "Kware Market", img: "./markets/sokoto/kware.jpg", address: "Kware" },
    { name: "Old Market", img: "./markets/sokoto/old.jpg", address: "Sokoto" },
    { name: "Rabah Market", img: "./markets/sokoto/rabah.jpg", address: "Rabah" },
    { name: "Shagari Market", img: "./markets/sokoto/shagari.jpg", address: "Shagari" },
    { name: "Silame Market", img: "./markets/sokoto/silame.jpg", address: "Silame" },
    { name: "Tambuwal Market", img: "./markets/sokoto/tambuwal.jpg", address: "Tambuwal" },
    { name: "Tureta Market", img: "./markets/sokoto/tureta.jpg", address: "Tureta" },
    { name: "Wurno Market", img: "./markets/sokoto/wurno.jpg", address: "Wurno" },
  ],

  Zamfara: [
    { name: "Anka Market", img: "./markets/zamfara/anka.jpg", address: "Anka" },
    { name: "Bakura Market", img: "./markets/zamfara/bakura.jpg", address: "Bakura" },
    { name: "Bukkuyum Market", img: "./markets/zamfara/bukkuyum.jpg", address: "Bukkuyum" },
    { name: "Bungudu Market", img: "./markets/zamfara/bungudu.jpg", address: "Bungudu" },
    { name: "Chafe Market", img: "./markets/zamfara/chafe.jpg", address: "Chafe" },
    { name: "Danjibga Market", img: "./markets/zamfara/danjibga.jpg", address: "Danjibga" },
    { name: "Gummi Market", img: "./markets/zamfara/gummi.jpg", address: "Gummi" },
    { name: "Gusau Market", img: "./markets/zamfara/gusau.jpg", address: "Gusau" },
    { name: "Kaura Namoda Market", img: "./markets/zamfara/kaura-namoda.jpg", address: "Kaura Namoda" },
    { name: "Maradun Market", img: "./markets/zamfara/maradun.jpg", address: "Maradun" },
    { name: "Maru Market", img: "./markets/zamfara/maru.jpg", address: "Maru" },
    { name: "Shinkafi Market", img: "./markets/zamfara/shinkafi.jpg", address: "Shinkafi" },
    { name: "Talata Mafara Market", img: "./markets/zamfara/talata-mafara.jpg", address: "Talata Mafara" },
    { name: "Tsafe Market", img: "./markets/zamfara/tsafe.jpg", address: "Tsafe" },
    { name: "Zurmi Market", img: "./markets/zamfara/zurmi.jpg", address: "Zurmi" },
  ],
};

module.exports = MARKETS; 
