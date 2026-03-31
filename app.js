function nextStep(step){
  ['step1','step2'].forEach(id=>document.getElementById(id).style.display='none');
  document.getElementById('step'+step).style.display='block';
  document.getElementById('bar').style.width = step===2?'50%':'100%';
}

async function submitData(){
  const name=document.getElementById('name').value;
  const email=document.getElementById('email').value;
  const password=document.getElementById('password').value;
  const mobile=document.getElementById('mobile').value;
  const gender=document.getElementById('gender').value;
  const dob=document.getElementById('dob').value;

  firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(res=>{
      const uid=res.user.uid;
      localStorage.setItem("user",JSON.stringify(res.user));
      firebase.firestore().collection("users").doc(uid).set({
        name,email,mobile,gender,dob
      });
      window.location.href="home.html";
    })
    .catch(err=>alert(err.message));
}