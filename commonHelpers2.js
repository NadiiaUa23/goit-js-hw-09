import"./assets/styles-b7c6d020.js";document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".feedback-form"),s=()=>{const t={email:e.email.value.trim(),message:e.message.value.trim()};localStorage.setItem("feedback-form-state",JSON.stringify(t))};(()=>{const t=localStorage.getItem("feedback-form-state");if(t){const a=JSON.parse(t);e.email.value=a.email,e.message.value=a.message}})(),e.addEventListener("input",s),e.addEventListener("submit",t=>{t.preventDefault();const a=e.email.value.trim(),o=e.message.value.trim();a&&o?(console.log({email:a,message:o}),localStorage.removeItem("feedback-form-state"),e.reset()):alert("Please fill out all fields!")})});
//# sourceMappingURL=commonHelpers2.js.map