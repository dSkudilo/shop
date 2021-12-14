import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.scss'
import components from '@/components/ui'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCartPlus,faSearch,faLock,faCompass,faUserPlus,faBars,faArrowRight,faBan, faArrowLeft} from '@fortawesome/free-solid-svg-icons'

const app = createApp(App)

components.forEach(component => app.component(component.name,component))

library.add(faCartPlus,faSearch,faLock,faCompass,faUserPlus,faBars,faBan,faArrowRight,faArrowLeft)
app
    .use(store)
    .use(router)
        .component("font-awesome-icon", FontAwesomeIcon)
    .mount('#app')
