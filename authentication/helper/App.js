import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Navbar from './Navbar';
import Footer from './Footer';
import GjendjaCivile from './client/Sherbimet/GjendjaCivile/GjendjaCivile';
import Sherbime from './client/Sherbimet/Sherbime';
import Tatimet from './client/Sherbimet/Tatimet/Tatimet';
import Familja from './client/Sherbimet/Familja/Familja';
import Shendetesia from './client/Sherbimet/Shendetsia/Shendetesia';
import Automjeti from './client/Sherbimet/Automjeti/Automjeti';
import Policia from './client/Sherbimet/Policia/Policia';
import Komunalite from './client/Sherbimet/Komunalite/Komunalite'; 
import Prona from './client/Sherbimet/Prona/Prona';
import Kontributet from './client/Sherbimet/Kontributet/Kontributet';
import Gjyqesori from './client/Sherbimet/Gjyqesori/Gjyqesori';
import ApLehonat from './client/Sherbimet/Familja/ApLehonat';
import ApFemije from './client/Sherbimet/Familja/ApFemije';
import Ekstrakti from './client/Sherbimet/GjendjaCivile/Ekstrakti';
import CertiFam from './client/Sherbimet/GjendjaCivile/CertiFam';
import EkstraFam from './client/Sherbimet/GjendjaCivile/EkstraFam';
import CertiMa from './client/Sherbimet/GjendjaCivile/CertiMa';
import FaturaPer from './client/Sherbimet/Tatimet/FaturaPer';
import Shend1 from './client/Sherbimet/Shendetsia/Shend1';
import Shend2 from './client/Sherbimet/Shendetsia/Shend2';
import Shend3 from './client/Sherbimet/Shendetsia/Shend3';
import AutoT from './client/Sherbimet/Automjeti/AutoT'; 
import AutoB from './client/Sherbimet/Automjeti/AutoB'; 
import AutoP from './client/Sherbimet/Automjeti/AutoP';
import Policia1 from './client/Sherbimet/Policia/Policia1';
import Policia2 from './client/Sherbimet/Policia/Policia2';
import Policia3 from './client/Sherbimet/Policia/Policia3';
import Kesco from'./client/Sherbimet/Komunalite/Kesco'; 
import Kru from'./client/Sherbimet/Komunalite/Kru'; 
import Prona1 from './client/Sherbimet/Prona/Prona1';
import Kon from './client/Sherbimet/Kontributet/Kon';
import Gjyqesori1 from './client/Sherbimet/Gjyqesori/Gjyqesori1';
import Kryesore from './client/Kryesore/Kryesore';
import Arsimi from './client/Sherbimet/Arsimi/Arsimi';
import EKomuna from './client/Sherbimet/e-Komuna/eKomuna';
import Prishtina from './client/Sherbimet/e-Komuna/prishtina';
import Projektet from './client/Sherbimet/Arsimi/Projektet';
import Participimet from './client/Sherbimet/Arsimi/participimet';
import Informata from './client/Informata/Informata';
import BeA from './client/Informata/BeA';
import LK from './client/Informata/LK';
import Fa from './client/Informata/Fa';
import KL from './client/Informata/KL';
import PB from './client/Informata/PB';
import PrB from './client/Informata/PrB';
import AN from './client/Informata/AN';
import Doc from './client/Informata/Doc';
import ED from './client/Informata/ED';
import IH from './client/Informata/IH';
import Me from './client/Informata/Me';
import She from './client/Informata/She';
import Sig from './client/Informata/Sig';
import Adresa from './client/Sherbimet/Adresa/Adresa';
import AdPostare from './client/Sherbimet/Adresa/adPostre';
import AuditoretLigjore from './client/Sherbimet/AuditoretLigjore/auditoretLigjore';
import Banderolat from './client/Sherbimet/Banderolat/banderolat';
import Verifikimi from './client/Sherbimet/Banderolat/verifikimi';
import FondiSigurise from './client/Sherbimet/FondiSigurise/fondiSigurise';
import Donacioni from './client/Sherbimet/FondiSigurise/donacioni';
import GranteSubvencione from './client/Sherbimet/Grante&Subvencione/Grante&Subvencione';
import Puna from './client/Sherbimet/Puna/Puna';
import Sherbimetkons from './client/Sherbimet/SherbimetKonsulore/SherbimetKons';
import VerifikimiDokumenteve from './client/Sherbimet/VerifikimiDokumenteve/verifikimiDokumenteve';
import DokElektronike from './client/Sherbimet/VerifikimiDokumenteve/dokElektronike';
import PaymentPage from './client/Sherbimet/Prona/PaymentPage';
import ConfirmationPage from './client/Sherbimet/Gjyqesori/ConfirmationPage';
import Deklarimi from './client/Sherbimet/Puna/Deklarimi';
import Vula from './client/Sherbimet/SherbimetKonsulore/Vula';

function App() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/Kryesore" />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Sherbime" element={<Sherbime />} />
          <Route path="/Kryesore" element={<Kryesore />} />
          <Route path="/Informata" element={<Informata />} />
          <Route path="/Sherbimet/GjendjaCivile" element={<GjendjaCivile />} />
          <Route path="/Sherbimet/Tatimet" element={<Tatimet />} />
          <Route path="/Sherbimet/Familja" element={<Familja />} />
          <Route path="/Sherbimet/Shendetesia" element={<Shendetesia />} />
          <Route path="/Sherbimet/Automjeti" element={<Automjeti />} />
          <Route path="/Sherbimet/Policia" element={<Policia />} />
          <Route path="/Sherbimet/Komunalite" element={<Komunalite />} />
          <Route path="/Sherbimet/Prona" element={<Prona />} />
          <Route path="/Sherbimet/Kontributet" element={<Kontributet />} />
          <Route path="/Sherbimet/Gjyqesori" element={<Gjyqesori />} />
          <Route path="/Familja/ApLehonat" element={<ApLehonat />} />
          <Route path="/Familja/ApFemije" element={<ApFemije />} />
          <Route path="/GjendjaCivile/Ekstrakti" element={<Ekstrakti />} />
          <Route path="/GjendjaCivile/CertiFam" element={<CertiFam />} />
          <Route path="/GjendjaCivile/EkstraFam" element={<EkstraFam />} />
          <Route path="/GjendjaCivile/CertiMa" element={<CertiMa />} />
          <Route path="/Tatimet/FaturaPer" element={<FaturaPer />} />
          <Route path="/Shendetsia/Shend1" element={<Shend1 />} />
          <Route path="/Shendetsia/Shend2" element={<Shend2 />} />
          <Route path="/Shendetsia/Shend3" element={<Shend3 />} />
          <Route path="/Automjeti/AutoT" element={<AutoT />} />
          <Route path="/Automjeti/AutoB" element={<AutoB />} />
          <Route path="/Automjeti/AutoP" element={<AutoP />} />
          <Route path="/Policia/Policia1" element={<Policia1 />} />
          <Route path="/Policia/Policia2" element={<Policia2 />} />
          <Route path="/Policia/Policia3" element={<Policia3 />} />
          <Route path="/Komunalite/Kesco" element={<Kesco />} />
          <Route path="/Komunalite/Kru" element={<Kru />} />
          <Route path="/Prona/Prona1" element={<Prona1 />} />
          <Route path="/Prona/PaymentPage" element={<PaymentPage/>} />
          <Route path="/Kontributet/Kon" element={<Kon />} />
          <Route path="/Gjyqesori/Gjyqesori1" element={<Gjyqesori1 />} />
          <Route path="/Gjyqesori/ConfirmationPage" element={<ConfirmationPage />} />
          <Route path="/Sherbimet/Arsimi" element={<Arsimi />} />
          <Route path="/Arsimi/Projektet" element={<Projektet />} />
          <Route path="/Arsimi/Participimet" element={<Participimet />} />
          <Route path="/Sherbimet/eKomuna" element={<EKomuna />} />
          <Route path="/eKomuna/Prishtina" element={<Prishtina/>} />
          <Route path="Informata/BeA" element={<BeA/>}/>
          <Route path="Informata/LK" element={<LK/>}/>
          <Route path="Informata/AN" element={<AN/>}/>
          <Route path="Informata/Doc" element={<Doc/>}/>
          <Route path="Informata/ED" element={<ED/>}/>
          <Route path="Informata/Fa" element={<Fa/>}/>
          <Route path="Informata/IH" element={<IH/>}/>
          <Route path="Informata/KL" element={<KL/>}/>
          <Route path="Informata/Me" element={<Me/>}/>
          <Route path="Informata/PB" element={<PB/>}/>
          <Route path="Informata/PrB" element={<PrB/>}/>
          <Route path="Informata/She" element={<She/>}/>
          <Route path="Informata/Sig" element={<Sig/>}/>
          <Route path="Sherbimet/Adresa" element={<Adresa/>}/>
          <Route path="Adresa/AdPostare" element={<AdPostare/>}/>
          <Route path="Sherbimet/AuditoretLigjore" element={<AuditoretLigjore/>}/>
          <Route path="Sherbimet/Banderolat" element={<Banderolat/>}/>
          <Route path="Banderolat/Verifikimi" element={<Verifikimi/>}/>
          <Route path="Sherbimet/FondiSigurise" element={<FondiSigurise/>}/>
          <Route path="FondiSigurise/Donacioni" element={<Donacioni/>}/>
          <Route path="Sherbimet/Grante&Subvencione" element={<GranteSubvencione/>}/>
          <Route path="Sherbimet/Puna" element={<Puna/>}/>
          <Route path="Puna/Deklarimi" element={<Deklarimi/>}/>
          <Route path="Sherbimet/SherbimetKonsulore" element={<Sherbimetkons/>}/>
          <Route path="SherbimetKonsulore/Vula" element={<Vula/>}/>
          <Route path="Sherbimet/VerifikimiDokumenteve" element={<VerifikimiDokumenteve/>}/>
          <Route path="VerifikimiDokumenteve/DokElektronike" element={<DokElektronike/>}/>

        </Routes>
        <Footer/>
      </BrowserRouter>
    );
}

export default App;
