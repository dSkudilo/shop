<template>
    <section class="product-description">
        <ul class="product-description__list">
            <li 
                class="product-description__item " 
                v-for="(item,id) in pnt"
                :key="item.name"
                @click="currentStep = id"
                :class="{'product-description__item_active':id === currentStep}"
            >
              
                {{item.name}}
                
            </li>
        </ul>
        <div class="product-description__content text-gray">
            <iframe 
                v-if="pnt[currentStep].name === 'video'"
                :src="pnt[currentStep].content" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
                class="product-description__video"
            >
            </iframe>
            <p v-else>{{pnt[currentStep].content}}</p>
            
        </div>
    </section>
</template>
<script>
import { ref } from '@vue/reactivity'
export default {
    setup() {
        const currentStep = ref(0)
        const pnt = ref ([
            {
                name:'описание',
                content:'FASHION HAS ALWAYS BEEN SO TEMPORARY AND UNCERTAIN. YOU CAN’T KEEP UP WITH IT.  THIS SOCIAL PHENOMENON IS VERY WHIMSICAL, THUS WE AS THE CONSUMERS ALWAYS TRY TO STAY IN TOUCH WITH ALL THE LATEST FASHION TENDENCIES. OBVIOUSLY THERE IS NOTHING WRONG ABOUT IT BECAUSE FASHION SATISFIES OUR WILLINGNESS TO BE ATTRACTIVE. AND ALSO FASHION IS THE DETECTOR OF PROSPERITY AND SOCIAL RANK. SO, OUR NATURAL DESIRE TO WEAR FASHIONABLE CLOTHES HAS MANY REASONS SUCH AS HISTORICAL, SOCIAL AND OTHERS. THEREFORE BEING FASHIONABLE COSTS A LOT OF MONEY. BUT NOWADAYS FASHION IS NOT SUCH UNAVAILABLE AS IT WAS A COUPLE OF CENTURIES AGO. WE ARE LUCKY TO HAVE AN OPPORTUNITY TO BUY QUALITATIVE, FASHIONABLE AND AFFORDABLE CLOTHES.SO, WITH THE GREAT PLEASURE WE ARE OFFERING YOU OUR GOODS, AND WE ARE SURE THAT ONLY OUR CHOICES OF GARMENTS WILL SUIT YOU BEST. OUR PRODUCT IS UNIVERSAL BECAUSE IT SUITS DIFFERENT CUSTOMERS WITH DIFFERENT DEMANDS. WE ASSURE YOU IT IS REALLY IMPORTANT, IT SHOWS THAT OUR GOOD HAS SUCH CAPACITY AS FLEXIBILITY. AND IT IS GOOD FOR YOU BECAUSE AS WE ALL KNOW PEOPLE CHANGE THEIR CLAIMS WITH THE COURSE OF TIME, AND OUR GOOD WILL BE ACTUAL FOR A LONG TIME. THE MAIN REASON OF BUYING OUR CLOTHES IS THE UNIQUE COMBINATION OF FAIR PRICE, EXTRAORDINARY STYLE AND PERFECT QUALITY.  HERE YOU CAN FIND GARMENTS OF ALL SIZES, COLORS, STYLES AND FABRICS.IT WILL SUIT YOU BEST OF ALL. BECAUSE WE ALL LIVE IN THE TIME OF TOTAL CONSUMING OF UNCOUNTABLE GOODS AND SERVICES, AND THIS HAS BECOME THE MAIN REASON FOR THE RAPID GROWTH OF A SO-CALLED CULTURE OF CONSUMPTION IN OUR SOCIETY. SO, THIS CIRCUMSTANCE FORCED ALL LEADING SUCCESSFUL COMPANIES TO EXPLORE ALL NEEDS AND WISHES OF DIFFERENT GROUPS OF POTENTIAL CLIENTS VERY DEEPLY. AND THAT IS WHY WE ARE OFFERING YOU THE RESULT OF GREAT MARKET AND TECHNOLOGICAL RESEARCH – OUR MAGNIFICENT PRODUCT. OUR EMPLOYEES PUT IN GREAT EFFORTS TO MAKE THIS COMMODITY. OUR GOOD WAS MADE UP BY BEST EXPERTS WITH THE HELP OF MOST ADVANCED TECHNOLOGIES, AND IT GIVES US RIGHT TO CONSIDER THIS PRODUCT TO BE A PREMIUM ONE.'
            },
            {
                name:'характеристики',
                content:'характеристики'
            },
            {
                name:'video',
                content:`https://www.youtube.com/embed/fw9uB_6bktU`
            }
        ])

        return{
            pnt,currentStep
        }
    },
}
</script>