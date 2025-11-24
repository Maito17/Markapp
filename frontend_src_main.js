// main.js
import { createApp } from "/node_modules/.vite/deps/vue.js?v=309643ee"
import { createPinia } from "/node_modules/.vite/deps/pinia.js?v=ec9db84c"
import App from "/src/App.vue"
import router from "/src/router/index.js"
import "/src/assets/main.css"

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

app.mount('#app')
