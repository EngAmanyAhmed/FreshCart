import{a as l}from"./chunk-G5KA7DMQ.js";import{h as n}from"./chunk-4O2Q52FJ.js";import{a as r}from"./chunk-D5JVNGYT.js";import{Ac as a,U as o,_ as i}from"./chunk-WI4R3LZG.js";var d=(()=>{let e=class e{constructor(){this._HttpClient=i(a),this._Router=i(n),this.userDate=null}setRegisterForm(t){return this._HttpClient.post(`${r.baseUrl}/api/v1/auth/signup`,t)}setLoginForm(t){return this._HttpClient.post(`${r.baseUrl}/api/v1/auth/signin`,t)}saveUserDate(){localStorage.getItem("userName")!==null&&(this.userDate=l(localStorage.getItem("userName")))}logOut(){localStorage.removeItem("userName"),this.userDate=null,this._Router.navigate(["/login"])}setEmailVerify(t){return this._HttpClient.post(`${r.baseUrl}/api/v1/auth/forgotPasswords`,t)}setCodeVerify(t){return this._HttpClient.post(`${r.baseUrl}/api/v1/auth/verifyResetCode`,t)}setResatPassword(t){return this._HttpClient.put(`${r.baseUrl}/api/v1/auth/resetPassword`,t)}};e.\u0275fac=function(u){return new(u||e)},e.\u0275prov=o({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})();export{d as a};
