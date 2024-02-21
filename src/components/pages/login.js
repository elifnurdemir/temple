import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../assets/css/login.css';

const Login = () => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    const giris = async () => {

        if (email === "" && password === "") {
            alert("Lütfen email ve şifre giriniz.")
            return;

        }
        else if (email === "") {
            alert("Lutfen Email Giriniz");
            return;
        }
        else if (password === "") {
            alert("Lütfen şifre giriniz");
            return;
        }
        //merte gidecek verilerimiz sirasiyla:
        // 1 email
        // 2 sifre
        //mertin benden istedigi format:
        /*
            {
                email: kullanicininYazdigiMail,
                password: kullanicininYazidigiSifre
            }
        */

        const endpointeGidecekVeriler = {
            email: email,
            password: password
        };

        //mertin login endpointini yaz:
        //mertin login endpointi : http://109.228.228.154:8080/login

        const endpointLinki = 'http://109.228.228.154:8080/login';

        try {
            const donenVeri = await axios.post(endpointLinki, endpointeGidecekVeriler);

            const jsonData = JSON.stringify(donenVeri.data);

            // Cookie'ye dönen veriyi kaydetme
            document.cookie = `userData=${jsonData}; path=/`;


        }
        catch (error) {
            console.log(error)
            if (error.response.status === 401) {
                alert("kullanici adi veya sifre hatali");

            }
            else {
                alert("bir hata olustu lutfen tekrar deneyin", error.response.data);

            }
        }
    }

   /* const denemeMethodu = async () => {
        try {
            const denemeDonenVerisi = await axios.get('http://109.228.228.154:8080/check');
            console.log(denemeDonenVerisi.data); // response yerine data'ya erişiyoruz
        } catch (error) {
            console.error('Hata:', error.response.data); // Hata durumunda hatayı yakalayıp konsola yazdırıyoruz
        }
    }
    */
   
    return (
        <div className="login-container">
           <div className="login-wrapper">
            <div className="login-title">Welcome!</div>
            <div className="input"> 
            <input className="login-email-input" type="email" placeholder= "email" onChange={(e) => { setEmail(e.target.value) }} />
            <input className="login-password-input" type="password" placeholder= "password" onChange={(e) => { setPassword(e.target.value) }} />
            </div>
          
            <div className="login-button-grad" onClick={() => { giris() }}>Login</div>
       

           </div>
            
        </div>
    )
}
export default Login;