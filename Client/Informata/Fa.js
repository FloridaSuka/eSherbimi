import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './BeA.css';

const FA = () => {
  const [selectedButton, setSelectedButton] = useState('');
  
  const buttons = [
    { 
      text: 'Benefitet dhe asistenca', 
      link: 'Informata/BeA',
      content: `
        <p>Skema e ndihmës sociale në Kosovë për shkak të buxhetit të kufizuar ende e njeh familjen si njësi bazë.</p>
        <p>Për të përfituar ndihmën sociale të gjithë anëtarët e familjes duhen të jenë banorë të përhershëm të Kosovës.</p>
        <p>Skema ka për qëllim për të ndihmuar financiarisht familjet, anëtarët e të cilëve janë ose me aftësi të kufizuara të përhershme ose në moshën mbi 65 vjeçare,</p>
        <p>si dhe për familjet të cilët kanë vetëm një apo asnjë familjar të punësuar dhe i kanë të hyrat nën standardin e caktuar nga Ministria e Punës dhe Mirëqenies Sociale.</p>
        <p>Aplikimi për përkrahje sociale bëhet në Qendrën e Punëve Sociale, ndaj drejtohuni aty për më shumë informata.</p>
      `
    },
    { 
      text: 'Levizja dhe komunikimi', 
      link: 'Informata/LK',
      content: ` <p>Mjet, në Ligjin për Sigurinë në Komunikacionin Rrugor, nënkupton çdo mjet transporti i destinuar për të lëvizur nëpër rrugë, përveç karrocave lëvizëse pa motor për persona me aftësi të kufizuara dhe të mjeteve transportuese të fëmijëve.</p>
      <p>Mjet special, nënkupton mjetin me veprim motorik ose mjet bashkangjitës i një qëllimi të veçantë (transportimi i ngarkesave speciale apo bartja speciale e njerëzve që për nga veçoritë dhe karakteristikat, bën pjesë në njërën prej kategorive ose llojeve të mjeteve me lëvizje motorike të cilat përdoren për polici, siguri e zjarrfikësve, TMK e të ngjashme (kombinim i veturave ose bashkangjitëse).</p>`
    },
    { 
        text: 'Familja', 
        link: 'Informata/Fa',
        content: ` <p>Me rastin e lindjes së fëmijës duhet të bëhet regjistrimi i tij në regjistrat përkatës për regjistrimin e lindjeve. Kjo realizohet në zyrat përkatëse në kuvendin komunal të vendit në të cilin ka lindur fëmija me ç’rast fëmijës i lëshohet certifikata e lindjes. Gjatë regjistrimit të fëmijës është e nevojshme të caktohet emri i fëmijës e gjithashtu edhe mbiemri në rast se e merr ndonjë mbiemër të ndryshëm nga mbiemri i babait. Prezent në procesin e regjistrimit të lindjes mjafton të jetë njëri nga prindërit në rastin kur prindërit janë të kurorëzuar por në rastin e kundërt duhet të jenë prezent të dy prindërit.</p>
        <p>Varësisht se a është kryer lindja në institucione shëndetësore (spital), jashtë tyre (shtëpi) apo jashtë territorit të Kosovës gjatë regjistrimit duhet të paraqiten dokumente të ndryshme. Më shumë rreth dokumenteve të cilat duhet të paraqiten me rastin e regjistrimit mund të gjeni tek dokumentet “Formulari dhe procedura për regjistrimin e lindjes”. Formulari i kërkesës mund të shkarkohet nga këtu ose mund të merret në zyrat e ofiqarisë.</p>
        <p>Afati i zgjidhjes së kërkesës 1-2 ditë me ç’rast edhe bëhet lëshimi i Certifikatës së Lindjes.</p>`
    },
    { 
        text: 'Siguria', 
        link: 'Informata/Sig',
        content: ` Forca e Sigurisë së Kosovës (FSK) është Forcë e re, profesionale, shumetnike, lehtë e armatosur dhe e uniformuar e Sigurisë e cila i nënshtrohet kontrollit demokratik, civil.</p>
        <p>Misioni i FSK-së është që të kryej operacionet e reagimit ndaj krizave në Kosovë dhe jashtë saj; operacionet e mbrojtjes civile brenda Kosovës; si dhe t’i ndihmoj autoriteteve civile në përgjigje ndaj katastrofave natyrore dhe emergjencave të tjera.</p>
        <p>Detyra të tilla do të përfshijnë operacionet e kërkim shpëtimit; mënjanimin e mjeteve shpërthyese; kontrollin dhe pastrimin e materieve të rrezikshme; zjarrfikjen; si dhe detyrat tjera të ndihmës humanitare. FSK-ja do t’i përfaqësoj dhe mbroj të gjithë njerëzit e Kosovës.</p>
        <h4>Ministria e Forcës së Sigurisë së Kosovës: Deklaratë Mision</h4>
        <p>Ministria e Forcës së Sigurisë së Kosovës (MFSK) është përgjegjëse për ushtrimin e kontrollit civil mbi Forcën e Sigurisë së Kosovës (FSK), përfshirë edhe menaxhimin dhe administrimin. Përbëhet nga një përzierje e civilëve dhe personelit të FSK-së dhe përmes Kryeministrit i jep llogari Kuvendit të Kosovës.</p>
        <p>Misioni i MFSK-së, e cila është edhe Shtabi i nivelit më të lartë të FSK-së, është që të formuloj, zbatoj, vlerësoj dhe zhvilloj politikat dhe aktivitetet e FSK-së brenda kornizës së qeverisjes demokratike dhe në pajtim me Kushtetutën dhe ligjet e Republikës së Kosovës.</p>`
    },
    { 
        text: 'Shendetesia', 
        link: 'Informata/She',
        content: ` <p>Kujdesi shëndetësor ofrohet falas në institucionet publike shëndetësore për grupe të posaçme të popullatës si vijon:</p>
        <ul>
        <li>Fëmijët dhe të rinjtë deri në moshën 15 vjeçare;</li>
        <li>Nxënësit dhe studentët deri në fund të shkollimit të rregullt;</li>
        <li>Qytetarët mbi moshën 65 vjeçare;</li>
        <li>Qytetarët, anëtarët e ngushtë të familjeve të dëshmorëve, invalidët e luftës dhe invalidët e tjerë, anëtarët e ngushtë të familjeve të tyre;</li>
        <li>Shfrytëzuesit e skemave të ndihmës sociale dhe anëtarët e ngushtë të familjeve të tyre;</li>
        <li>Personat me aftësi të kufizuara;</li>
        <li>Të sëmurët nga diabeti dhe kanceri;</li>
        </ul>`
    },
    { 
        text: 'Ambienti dhe natyra', 
        link: 'Informata/AN',
        content: ` <p>Përgjegjës për mbrojtjen e ambientit është Drejtoria për Planifikim, Urbanizëm dhe Ndërtim e cila ushtron këto detyra në mbrojtje të ambientit:</p>
        <ul>
        <li>Planifikimin e zhvillimit hapësinor dhe urbanistik</li>
        <li>Lejet e ndërtimit</li>
        <li>Lejet e përdorimit dhe shfrytëzimit</li>
        <li>Caktimin e komisioneve për mbikëqyrje të objekteve</li>
        <li>Rregullimin e Infrastrukturës, etj.</li>
        </ul>
        <p>Në kuadër të drejtorisë për planifikim, urbanizim dhe ndërtim ekziston Departamenti për Shërbime Publike dhe Emergjencë i cili është përgjegjës për zbatimin e ligjeve, rregulloreve dhe urdhëresave me të cilat rregullon shërbimet publike duke bërë rregullimin e qytetit dhe mbrojtjen e ambientit. Rol të rëndësishëm në mbrojtje të ambientit luajnë aktivitetet për mbrojtje të kualitetit të ajrit, mbrojtje të klimës dhe mbështjellësit të ozonit, mbrojtje nga ndotjet industriale, mbrojtje nga zhurma dhe rrezatimi jonizues.</p>`
    },
    { 
        text: 'Edukimi', 
        link: 'Informata/ED',
        content: ` <p>Fëmijët që kanë arritur moshën 6 vjeç deri në shtator janë të detyruar nga ligji mbi arsimin të regjistrohen në klasën e parë të arsimit fillor. Me kërkesën e prindit, një fëmijë mund të regjistrohet në klasën e parë dhe nëse nuk i ka mbushur 6 vjeç duke pasur një vlerësim të mjekut dhe të psikologut. Vendimin përfundimtar e merr Drejtoria Komunale e Arsimit. Detyrimi për të shkuar në shkollë mund të shtyhet për shkaqe të ndryshme shëndetësore të fëmijës. Asnjë student nuk mund të përjashtohet nga arsimi i detyruar për shkak të aftësive të kufizuara fizike ose mendore. Në këto raste arsimi i detyruar mund të merret në shkollat e arsimit special me një program të veçantë të bazuar në nevojat speciale të fëmijës. Shkollimi i detyruar mbaron me përfundimin e vitit të nëntë të shkollimit ose në datën kur nxënësi i mbush 15 vjeç, varësisht cila nga këto përputhet e para.</p>
        <p>Shkollat kanë zonën e vet të mbulimit dhe të gjithë nxënësit e moshës së arsimit të detyruar, që banojnë në atë zonë kanë të drejtë të regjistrohen dhe të ndjekin shkollën e nivelit përkatës. Prindërit janë të detyruar sipas ligjit që të regjistrojnë fëmijët për të ndjekur arsimin e detyruar 9 vjeçar (5+4). Prindërit duhet të krijojnë kushte normale të favorshme në shtëpi që fëmijët të kenë mundësi për të mësuar dhe që të përmbushin detyrimin për të shkuar në shkollë. E drejta e fëmijëve të minoriteteve nacionale për të studiuar gjuhën a tyre amtare - Ligji për arsimin u garanton arsimim të barabartë të gjitha komuniteteve në Kosovë.</p>
      
        `
    },
    { 
        text: 'Mergata', 
        link: 'Informata/Me',
        content: ` <p>SQeveria e Kosovës, respektivisht Ministria e Arsimit e Shkencës dhe e Teknologjisë ka filluar me programin kombëtar Brain Gain (Kthimi i Trurit).Qëllimi i këtij programi është të involvojë diasporën në procesin e zhvillimit të Kosovës.</p>
        <p>Diaspora kosovare është 17% e popullësisë së Kosovës, llogaritur numrin e përgjithshëm 2.5 milion kosovarë, 450 mijë prej tyre jetojnë jashtë kufijve të vendit të tyre të origjinës (amë)..</p>
        <p>Duke u bazuar në këtë numër të madh të qytetarëve të kosovës që jetojnë jashtë vendit dhe duke përcjellur përvojat e shteteve tjera që kanë kaluar nëpër këtë fazë të tranzicionit, ku diaspora ka luajtur rol shumë të rëndësishëm në zhvillimin e shtetit. Qeveria e Kosovës ka vendosur të involvojë diasporën në procesin e zhvillimit të Kosovës.,</p>
        `
    },
    { 
        text: 'Puna dhe biznesi', 
        link: 'Informata/PB',
        content: ` <p>Financat e qytetarëve të Kosovës kanë burimin e të ardhurave në disa forma:</p>
        <ul>
        <li>nëpërmjet punësimit shtetëror</li>
        <li>nëpërmjet punësimit privat</li>
        <li>nëpërmjet vetëpunësimi</li>
        <li>nëse qytetari ka mbushur moshën 65- vjeçare nëpërmjet pensionit</li>
        <li>nëpërmjet përkrahjes financiare të familjeve dhe individëve në raste të jashtëzakonshme</li>
        <li>ndihmave sociale, asistencave dhe të ardhurave ndihmëse të tjera</li>
        </ul>`
    },
    { 
        text: 'Informata per te huajt', 
        link: 'Informata/IH',
        content: ` <p>Me marrëveshje në portalin e Kosovës do i referohemi me termin i/e huaj një personi i cili nuk është shtetas i Kosovës. Për të hyrë në Kosovë të gjithë të huajve (jo shtetas Kosovar) ju duhet të paraqesin pasaportën e shtetit të tyre dhe deri në këtë moment nuk nevojiten viza hyrëse për në Kosovë. Mund të kërkohet dhe një dokument që justifikon arsyen e vizitës tuaj në Kosovë.</p>`
    },
    { 
        text: 'Prona dhe banimi', 
        link: 'Informata/PrB',
        content: ` <p>Banimi është qështje vendimtare për stabilitet social, shëndet dhe zhvillim kualitativ të mirëqenies njerëzore. Banimi si shfrytëzues më i madh i hapsirës, ndikon në rrjedhën e zhvillimit të gjithmbatshëm të shoqrisëdhe njëherit është komponent e rëndesishme e zhvillimit social-ekonomik, gjegjësisht të standardit jetësor. Banimi është e drejtë sociale e qytetarve në shumicën e vendeve të zhvilluara. E drejta në banim gjithnjë e më shume ësht preznete në kuadër të politikave globale dhe në luftë për të drjtat e njerëzore, e sanksionuar edhe me konventa ndërkombëtare.`
    },
    { 
        text: 'Kultura dhe koha e lire', 
        link: 'Informata/KL',
        content: ` <p>Në Kosovë, zhvillohet një jetë e pasur kulturore me aktivitete, organizime e ngjarje të shumta të karakterit lokal, kombëtar e ndërkombëtar. Përpos përpilimit dhe zhvillimit të politikave kulturore, në vend, realizohet edhe promovimi dhe dialogu kulturor me qëllim të depërtimit të kulturës sonë në rrafshin ndërkombëtar jo vetëm si pjesëmarrje por edhe si konkurrencë.</p>`
    },
    { 
        text: 'Dokumentet', 
        link: 'Informata/Doc',
        content: ` <p>Nëpunësi civil, si banorë të përhershëm, do të regjistrojë personat e mëposhtëm:</p>
        <ul>
        <li>Personat e lindur në Kosovë ose që kanë një nga prindërit në Kosovë,</li>
        <li>Personat të cilët mund të dëshmojnë se kanë jetuar vazhdimisht në Kosovë për së paku 5 (pesë) vjet,</li>
        <li>Personat e tjerë, të cilët sipas nëpunësit civil ishin të detyruar të largoheshin nga Kosova dhe për këtë arsye nuk ishin në gjendje të përmbushnin kërkesat për kohëzgjatjen e qëndrimit sipas paragrafit b të këtij neni,
        </li>
        <li>Fëmijë të tjerë të varur të personave, të cilët nuk kanë të drejtë për regjistrim, fëmijët e moshës 18 vjeç ose 23 vjeç, por që mund të dëshmojnë se janë pjesëtarë të rregullt të një institucioni të pavarur arsimor.</li>
        </ul>`
    },
   
  ];
  useEffect(() => {
    setSelectedButton(buttons[2].text);
  }, []);

  const handleClick = (buttonText) => {
    setSelectedButton(buttonText);
  };

  return (
    <div className="bea">
      <div className="cards-container">
        <div className="colu">
          {buttons.map((button, index) => (
            <div key={index} className="card">
              <Link to="#" onClick={() => handleClick(button.text)} className={`card-link ${selectedButton === button.text ? 'selected' : ''}`}>{button.text}</Link>
            </div>
          ))}
        </div>
        <div className="column">
          <div className="bea-container">
            <h3>{selectedButton}</h3>
            <div dangerouslySetInnerHTML={{ __html: buttons.find(button => button.text === selectedButton)?.content }} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default FA;
