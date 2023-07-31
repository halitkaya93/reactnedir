import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react';

function App() {
  function sayiAzalt() {
    setSayi(sayi-1);
  }
  //const benimAdim = "Halit";
  //let benimSoyadim = "KAYA";
  const ogrenci = { ad: "Halit", Soyad:"KAYA", yas:30};
  const activeClass = "active"; // activeClass içindeki değer active hale getirilidi.
  //const sehirler = ["İstanbul", "Ankara", "İzmir", "Edirne", "Çorum"];
  function callback(sehir)
  {
    return <li>{sehir}</li>

  }

  //State yapıları

  const [sayi,setSayi] = useState(0); //state imizin adı sayi state i set edecek function ismi setSayi dır. bunun bir state olduğunu göstermesi için = useState(0) kullanılmaktadır ilk değeri de 0 dır.
  const [left, setLeft] = useState(20);
  const [sehirler, setSehirler] = useState(["İstanbul", "Ankara", "İzmir", "Edirne", "Çorum"]);
  const [yeniSehir, setYeniSehir] = useState("");
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className={activeClass}>
          {/*Math.floor(Math.random()*100*/}
        {sayi}
        </h1>
        <div style={{backgroundColor:"#3f2abb", border:"1px solid white", padding:"20px", borderRadius:"5px", position : 'absolute', top: '%10', left: `${left}px`}}>
          <h1>{ogrenci.ad} {ogrenci.Soyad} </h1>
          <h4>{ogrenci.yas}</h4>
        </div>
        <p>{sehirler.length}</p>
        <ul>
          {sehirler.map((s, i, a)=>{
            return <li key= {i}>{s}  </li>
             })} 
        </ul>
        
        <button type="button" className="btn btn-primary" onClick={(e)=> {
          setSayi(sayi+1);  // onclick ile sayıyı 1 arttırmak için kullanılan function
        }}>Sayıyı Arttır</button>

        <button type="button" className="btn btn-danger" onClick={()=> {
          sayiAzalt();  

        }}>Sayıyı Azalt

        </button>
        <button type="button" className="btn-btn info" onClick={()=>setLeft(left+10)}>
          Div'i Kaydır
        </button>
        <input type="text" className="form-control" placeholder='Yeni Şehri Yazın' onChange={(e) => setYeniSehir(e.target.value)}/>
        <button type='button' className='btn btn-info' onClick={()=>{setSehirler([...sehirler, yeniSehir]);
        }
      }
      >Yeni Şehir Ekle</button>
      </header>
    </div>
  );
}

export default App;
