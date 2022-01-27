<script setup>
import ContactForm from "./ContactForm.vue"
</script>

<template>
<div class="page">
    <br><br>
    <h1>נשמח לשמוע מכם!</h1>
    <div class="contact-container">
        <div class="form-container">
            <ContactForm/>
        </div>
        <div class="contact-options-container">
            <div class="contact-mail">
                <h2>פנו אלינו במייל:</h2>
                <p>כתובת מייל - zivaharonov@gmail.com</p>
            </div>
            <div class="contact-phone">
                <h2>פנו אלינו whatsapp:</h2>
                <p>מספר טלפון - 0507386157</p>
            </div>
            <div class="contact-facebook">
                <h2>בקרו בעמוד הפייסבוק שלנו:</h2>
                <a href="https://www.facebook.com/zivaharonov" target="_blank">לחצו למעבר לעמוד הפייסבוק</a>
            </div>
            <div class="contact-facebook">
                <h2>בקרו בעמוד האינסטגרם שלנו:</h2>
                <a href="https://www.instagram.com/zivaharonov/" target="_blank">לחצו למעבר לעמוד האינסטגרם</a>
            </div>
        </div>
    </div>
    <p class="bottom-note">לכל שאלה ופנייה ניתן לפנות אלינו בכל אחת מדרכי התפניות הנ"ל, נשמח לשמוע מכם לכל נושא ולכל תהייה</p>
    <br><br><br><br>
</div>

</template>

<style scoped>
.bottom-note{
    font-weight: 500;
    font-size: 20px;
    direction: rtl;
    text-align: center;
}
.page{
    background-color: rgb(236,233,228);
}
h1{
    direction: rtl;
    text-align: center;
}
h2,p{
    direction: rtl;
}
.contact-container{
    margin-top: 3rem;
    padding-bottom: 5rem;
    display: flex;
    direction: rtl;
    
}
.form-container{
    margin-right:auto;
}
.contact-options-container{
    margin-right:3rem;
    margin-left:auto;
    display: flex;
    direction: rtl;
    flex-direction: column;
    justify-content: space-around;
    width: 30rem;
}

</style>