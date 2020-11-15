let app = new Vue({
    el:"#app",
    data: {
        text_Ru: {
            name_title: 'Денис <br> Новак',
            author_self_text:'UX | UI дизайнер 24 года, Минск',
            aboutMe_Title:"Обо мне",
            aboutMe_Text1:"Привет, я Денис - UX/UI дизайнер из Минска. Меня интересует дизайн и все, что с ним связано.",
            aboutMe_Text2:"Я учусь на курсе \"Веб и мобильный дизайн-интерфейс \" в IT-Академии",
            aboutMe_Text3:"Готовы реализовывать отличные проекты с замечательными людьми.",
            skills_Title:"Навыки",
            skills_subTitle: "Я работаю в таких программах, как"
        },
        text_Eng: {
            name_title: 'Denis <br> Novak',
            author_self_text:'UX | UI designer 24 years old, Minsk',
            aboutMe_Title:"About me",
            aboutMe_Text1:"Hi, I'm Denis – UX/UI designer from Minsk. I'm interested in design and everything connected with it.",
            aboutMe_Text2:"I'm studying at courses \"Web and mobile design interfaces\" in IT-Academy.",
            aboutMe_Text3:"Ready to implement excellent projects with wonderful people.",
            skills_Title:"Skills",
            skills_subTitle:"I work in such programs as",

        },
        language_self_Ru : false
    },
    methods:{
        switchLanguage : function (){
            if(this.language_self_Ru) this.language_self_Ru = false;
            else this.language_self_Ru = true;
        }
    }
})
