// controllo vue
const { createApp } = Vue

// vue
const app = createApp({
    data() {
      return {
        greeting : ``,
        pic : `https://th.bing.com/th/id/OIP.N8JsMyHQFiHkOq-ppMCokAHaCO?w=336&h=105&c=7&r=0&o=5&dpr=1.5&pid=1.7`
      }
    }
  })
  
// stampa vue
  app.mount('#root')