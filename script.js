
const osex = document.querySelector('.osex');
const ostd = document.querySelector('.ostd');
const ntex = document.querySelector('.ntex');
const nttd = document.querySelector('.nttd');
const iseex = document.querySelector('.iseex');
const isetd = document.querySelector('.isetd');
const dbex = document.querySelector('.dbex');
const dbtd = document.querySelector('.dbtd');
const ltex = document.querySelector('.ltex');
const lttd = document.querySelector('.lttd');
const naex = document.querySelector('.naex');
const natd = document.querySelector('.natd');
const orex = document.querySelector('.orex');
const ortd = document.querySelector('.ortd');
const elex = document.querySelector('.elex');
const eltd = document.querySelector('.eltd');
const btn = document.querySelector('.btn');
const total = document.querySelector('.Total');
const model_1 = document.getElementById('model-1');
const model_2 = document.getElementById('model-2');
const model_3 = document.getElementById('model-3');
const model_4 = document.getElementById('model-4');
const model_5 = document.getElementById('model-5');
const model_6 = document.getElementById('model-6');
const model_7 = document.getElementById('model-7');
const model_8 = document.getElementById('model-8');
const semester = document.getElementById('s1');
const reset = document.getElementById('reset');
const cp1 = document.getElementById('1cp');
const cp2 = document.getElementById('2cp');
const cs1 = document.getElementById('1cs');
const cs2 = document.getElementById('2cs');
const cs3 = document.getElementById('3cs');


 function calcaverage(){
    
    
        let average = ((osex.value * 0.6 + ostd.value*0.4)*4 + (ntex.value * 0.6 + nttd.value*0.4)*4 + (iseex.value * 0.6 + isetd.value*0.4)*4 + (dbex.value * 0.6 + dbtd.value*0.4)*5 + (ltex.value * 0.6 + lttd.value*0.4)*4 + (naex.value * 0.6 + natd.value*0.4)*4 + (orex.value * 0.6 + ortd.value*0.4)*3 + (elex.value * 0.6 + eltd.value*0.4)*2)/ 30;
    
     
     total.innerHTML = average;
     setdata();
}

btn.addEventListener('click',calcaverage);

// const sem1_1cp = () => {
//     semester.innerHTML = 'Go to semester 2';
    
//    model_1.innerHTML = '';
//    model_2.innerHTML = '';
//    model_3.innerHTML = '';
//    model_4.innerHTML = 'algorithmes';
//    model_5.innerHTML = '';
//    model_6.innerHTML = '';
//    model_7.innerHTML = '';
//    model_8.innerHTML = '';
// }

// const sem2_1cp = () => {
//     semester.innerHTML = 'Go to semester 1';

//    model_1.innerHTML = '';
//    model_2.innerHTML = 'Networking 2';
//    model_3.innerHTML = '';
//    model_4.innerHTML = 'Analysis and Design of Information Systems';
//    model_5.innerHTML = 'Web Languages and Tools';
//    model_6.innerHTML = 'Introduction to Computer Security';
//    model_7.innerHTML = 'Project Management';
//    model_8.innerHTML = 'English Language 2';
// }
// const sem1_2cp = () => {
//     semester.innerHTML = 'Go to semester 2';
    
//    model_1.innerHTML = 'Operating Systems 1';
//    model_2.innerHTML = 'Networking';
//    model_3.innerHTML = 'Introduction to software Engineering';
//    model_4.innerHTML = 'Databases';
//    model_5.innerHTML = 'Language Theory';
//    model_6.innerHTML = 'Numerical Analysis';
//    model_7.innerHTML = 'Operational Research';
//    model_8.innerHTML = 'English Language 1';
// }

// const sem2_2cp = () => {
//     semester.innerHTML = 'Go to semester 1';

//    model_1.innerHTML = 'Operating Systems 2';
//    model_2.innerHTML = 'Networking 2';
//    model_3.innerHTML = 'Advanced Computer Architecture';
//    model_4.innerHTML = 'Analysis and Design of Information Systems';
//    model_5.innerHTML = 'Web Languages and Tools';
//    model_6.innerHTML = 'Introduction to Computer Security';
//    model_7.innerHTML = 'Project Management';
//    model_8.innerHTML = 'English Language 2';
// }
const sem1_1cs = () => {
    semester.innerHTML = 'Go to semester 2';
    
   model_1.innerHTML = 'Operating Systems 1';
   model_2.innerHTML = 'Networking';
   model_3.innerHTML = 'Introduction to software Engineering';
   model_4.innerHTML = 'Databases';
   model_5.innerHTML = 'Language Theory';
   model_6.innerHTML = 'Numerical Analysis';
   model_7.innerHTML = 'Operational Research';
   model_8.innerHTML = 'English Language 1';
}

const sem2_1cs = () => {
    semester.innerHTML = 'Go to semester 1';

   model_1.innerHTML = 'Operating Systems 2';
   model_2.innerHTML = 'Networking 2';
   model_3.innerHTML = 'Advanced Computer Architecture';
   model_4.innerHTML = 'Analysis and Design of Information Systems';
   model_5.innerHTML = 'Web Languages and Tools';
   model_6.innerHTML = 'Introduction to Computer Security';
   model_7.innerHTML = 'Project Management';
   model_8.innerHTML = 'English Language 2';
}
// const sem1_2cs = () => {
//     semester.innerHTML = 'Go to semester 2';
    
//    model_1.innerHTML = 'Operating Systems 1';
//    model_2.innerHTML = 'Networking';
//    model_3.innerHTML = 'Introduction to software Engineering';
//    model_4.innerHTML = 'Databases';
//    model_5.innerHTML = 'Language Theory';
//    model_6.innerHTML = 'Numerical Analysis';
//    model_7.innerHTML = 'Operational Research';
//    model_8.innerHTML = 'English Language 1';
// }

// const sem2_2cs = () => {
//     semester.innerHTML = 'Go to semester 1';

//    model_1.innerHTML = 'Operating Systems 2';
//    model_2.innerHTML = 'Networking 2';
//    model_3.innerHTML = 'Advanced Computer Architecture';
//    model_4.innerHTML = 'Analysis and Design of Information Systems';
//    model_5.innerHTML = 'Web Languages and Tools';
//    model_6.innerHTML = 'Introduction to Computer Security';
//    model_7.innerHTML = 'Project Management';
//    model_8.innerHTML = 'English Language 2';
// }
// const sem1_3cs = () => {
//     semester.innerHTML = 'Go to semester 2';
    
//    model_1.innerHTML = 'Operating Systems 1';
//    model_2.innerHTML = 'Networking';
//    model_3.innerHTML = 'Introduction to software Engineering';
//    model_4.innerHTML = 'Databases';
//    model_5.innerHTML = 'Language Theory';
//    model_6.innerHTML = 'Numerical Analysis';
//    model_7.innerHTML = 'Operational Research';
//    model_8.innerHTML = 'English Language 1';
// }

// const sem2_3cs = () => {
//     semester.innerHTML = 'Go to semester 1';

//    model_1.innerHTML = 'Operating Systems 2';
//    model_2.innerHTML = 'Networking 2';
//    model_3.innerHTML = 'Advanced Computer Architecture';
//    model_4.innerHTML = 'Analysis and Design of Information Systems';
//    model_5.innerHTML = 'Web Languages and Tools';
//    model_6.innerHTML = 'Introduction to Computer Security';
//    model_7.innerHTML = 'Project Management';
//    model_8.innerHTML = 'English Language 2';
// }


semester.addEventListener('click',function (){
  resetdata();
    if (semester.innerHTML === "Go to semester 2"){
        sem2_1cs();
    }else {
        sem1_1cs();
    }
})


// set data in local storage : 

const setdata = () => {

    localStorage.setItem('model-1 exam',osex.value);
    localStorage.setItem('model-1 Td',ostd.value);
    localStorage.setItem('model-2 exam',ntex.value);
    localStorage.setItem('model-2 Td',nttd.value);
    localStorage.setItem('model-3 exam',iseex.value);
    localStorage.setItem('model-3 Td',isetd.value);
    localStorage.setItem('model-4 exam',dbex.value);
    localStorage.setItem('model-4 Td',dbtd.value);
    localStorage.setItem('model-5 exam',ltex.value);
    localStorage.setItem('model-5 Td',lttd.value);
    localStorage.setItem('model-6 exam',naex.value);
    localStorage.setItem('model-6 Td',natd.value);
    localStorage.setItem('model-7 exam',orex.value);
    localStorage.setItem('model-7 Td',ortd.value);
    localStorage.setItem('model-8 exam',elex.value);
    localStorage.setItem('model-8 Td',eltd.value);
    localStorage.setItem('Average',total.innerHTML);

}
const getdata = () => {

    osex.value = localStorage.getItem('model-1 exam');
    ostd.value = localStorage.getItem('model-1 Td');
    ntex.value = localStorage.getItem('model-2 exam');
    nttd.value = localStorage.getItem('model-2 Td');
    iseex.value = localStorage.getItem('model-3 exam');
    isetd.value = localStorage.getItem('model-3 Td');
    dbex.value = localStorage.getItem('model-4 exam');
    dbtd.value = localStorage.getItem('model-4 Td');
    ltex.value = localStorage.getItem('model-5 exam');
    lttd.value = localStorage.getItem('model-5 Td');
    naex.value = localStorage.getItem('model-6 exam');
    natd.value = localStorage.getItem('model-6 Td');
    orex.value = localStorage.getItem('model-7 exam');
    ortd.value = localStorage.getItem('model-7 Td');
    elex.value = localStorage.getItem('model-8 exam');
    eltd.value = localStorage.getItem('model-8 Td');
     total.innerHTML = localStorage.getItem('Average');

}

const resetdata = () => {
    localStorage.clear();
    osex.value = '';
    ostd.value = '';
    ntex.value = '';
    nttd.value = '';
    iseex.value = '';
    isetd.value = '';
    dbex.value = '';
    dbtd.value = '';
    ltex.value = '';
    lttd.value = '';
    naex.value = '';
    natd.value = '';
    orex.value = '';
    ortd.value = '';
    elex.value = '';
    eltd.value = '';
    total.innerHTML = '';
}

reset.addEventListener('click', resetdata);

// cp1.addEventListener('click',sem1_1cp);



getdata();
