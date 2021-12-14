<template>
    <footer class="footer ">
        <div class="container footer__content">
            <div class="footer__top">
                <img class="footer__logo" src="../assets/logo.png" alt="logo">
                <h3 class="footer__title small-title">Styler</h3>
                <p class="footer__about text-gray">LOREM IPSUM DOLOR SIT AMET CONSE CTETUR ADIPISICING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA. UT ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP EX EA COMMODO CONSEQUAT.</p>
            </div>
            <ul class="footer__events">
                <li class="footer__event">
                    <img src="../assets/footer/1-footer.jpg" alt="img" class="footer__img">
                    <h5 class="footer__name topic-white">LABORE ET DOLORE MAGNA</h5>
                    <p class="footer__descr text-gray">LOREM IPSUM DOLOR SIT AMET CONSE CTETUR ADIPISICING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA. UT ENIM AD.</p>
                    <p class="footer__date text-white">15 / 10 / 2014</p>
                </li>
                <li class="footer__event">
                    <img src="../assets/footer/2-footer.jpg" alt="img" class="footer__img">
                    <h5 class="footer__name topic-white">LABORE ET DOLORE MAGNA</h5>
                    <p class="footer__descr text-gray">LOREM IPSUM DOLOR SIT AMET CONSE CTETUR ADIPISICING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA. UT ENIM AD.</p>
                    <p class="footer__date text-white">15 / 10 / 2014</p>
                </li>
                <li class="footer__event">
                    <img src="../assets/footer/3-footer.jpg" alt="img" class="footer__img">
                    <h5 class="footer__name topic-white">LABORE ET DOLORE MAGNA</h5>
                    <p class="footer__descr text-gray">LOREM IPSUM DOLOR SIT AMET CONSE CTETUR ADIPISICING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA. UT ENIM AD.</p>
                    <p class="footer__date text-white">15 / 10 / 2014</p>
                </li>
            </ul>
            <div class="footer__info">
                <ul 
                    class="footer__list"
                    @click="infFlag = !infFlag"
                    :class="{footer__list_show:infFlag}"
                >
                    <li class="footer__item topic-white">
                        INFORMATIONEN
                    </li>
                    <li class="footer__item ">
                        <a href="#" class="footer__link text-gray">NEUE ARTIKEL</a>
                    </li>
                    <li class="footer__item ">
                        <a href="#" class="footer__link text-gray">VERKAUFSHITS</a>
                    </li>
                    <li class="footer__item ">
                        <a href="#" class="footer__link text-gray">UNSERE FILIALEN</a>
                    </li>
                    <li class="footer__item ">
                        <a href="#" class="footer__link text-gray">KONTAKT</a>
                    </li>
                    <li class="footer__item ">
                        <a href="#" class="footer__link text-gray">SEITEN KONFIGURATION</a>
                    </li>
                    <li class="footer__item ">
                        <a href="#" class="footer__link text-gray">SITEMAP</a>
                    </li>
                </ul>
                <ul 
                    class="footer__list"
                    @click="ihrFlag = !ihrFlag"
                    :class="{footer__list_show:ihrFlag}"
                >
                    <li class="footer__item topic-white">
                        IHR KUNDENBEREICH
                    </li>
                    <li class="footer__item ">
                        <a href="#" class="footer__link text-gray">IHRE BESTELLUNGEN</a>
                    </li>
                    <li class="footer__item ">
                        <a href="#" class="footer__link text-gray">IHRE WARENRÜCKSENDUNGEN</a>
                    </li>
                    <li class="footer__item ">
                        <a href="#" class="footer__link text-gray">IHRE RÜCKVERGÜTUNGEN</a>
                    </li>
                    <li class="footer__item ">
                        <a href="#" class="footer__link text-gray">IHRE ADRESSEN</a>
                    </li>
                    <li class="footer__item ">
                        <a href="#" class="footer__link text-gray">IHRE PERSÖNLICHEN DATEN</a>
                    </li>
                </ul>
                <ul 
                    class="footer__list"
                    @click="katFlag = !katFlag"
                    :class="{footer__list_show:katFlag}"
                >
                    <li class="footer__item topic-white">
                        KATEGORIEN
                    </li>
                    <li class="footer__item ">
                        <a href="#" class="footer__link text-gray">DRESSES</a>
                    </li>
                    <li class="footer__item ">
                        <a href="#" class="footer__link text-gray">SKIRTS</a>
                    </li>
                    <li class="footer__item ">
                        <a href="#" class="footer__link text-gray">OUTERWEAR</a>
                    </li>
                    <li class="footer__item ">
                        <a href="#" class="footer__link text-gray">TOPS</a>
                    </li>
                    <li class="footer__item ">
                        <a href="#" class="footer__link text-gray">BLAZERS</a>
                    </li>
                    <li class="footer__item ">
                        <a href="#" class="footer__link text-gray">SHOES</a>
                    </li>
                </ul>
                <ul class="footer__soc">
                    <li class="footer__item topic-white">
                        NEWSLETTER
                    </li>
                    <li class="footer__item ">
                       <div class="dark-form">
                           <input type="text" placeholder="Email">
                           <button>
                               <font-awesome-icon :icon="['fa','arrow-right']" />
                           </button>
                       </div>
                    </li>
                    <li class="footer__item footer__item_btns">
                        <a href="#" class="small-social">
                            <img src="" alt="facebook">
                        </a>
                        <a href="#" class="small-social">
                            <img src="" alt="tw">
                        </a>
                        <a href="#" class="small-social">
                            <img src="" alt="google">
                        </a>
                    </li>
                    
                </ul>
            </div>
        </div>
        <div class="footer__copyright">
            <div class="container">
                <p class="text-gray">© 2021 E-COMMERCE SOFTWARE VON PRESTASHOP™</p>
            </div>
        </div>
    </footer>
</template>
<script>
import { ref } from '@vue/reactivity'
export default {
    setup() {
        const infFlag = ref(false)
        const ihrFlag = ref(false)
        const katFlag = ref(false)
        return{
            infFlag,ihrFlag,katFlag
        }
    },
}
</script>