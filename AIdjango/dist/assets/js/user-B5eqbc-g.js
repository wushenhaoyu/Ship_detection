import{ao as e,ap as s}from"./index-jvtWBQTx.js";const n=t=>e.post(s+"/patientadvice/",t),a=t=>e.post(s+"/getpatientwaittinglist/",t),o=t=>e.post(s+"/getpatienthistorylist/",t),i=t=>e.post(s+"/getpatientalllist/",t),p=t=>e.post(s+"/user/add",t),d=t=>e.post(s+"/user/import",t),u=t=>e.post(s+"/user/edit",t),c=t=>e.post(s+"/user/delete",t),g=t=>e.download(s+"/user/export",t),l=()=>e.get(s+"/user/gender"),U=()=>e.get(s+"/user/department",{},{cancel:!1});export{d as B,i as a,p as b,u as c,l as d,g as e,c as f,U as g,o as h,n as i,a as j};
