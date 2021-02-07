    const app = {
        data() {
            return {
                Name: 'Anuttree Tipmom',
                Position: 'Student',
                Image: 'images/1.jpg'
            }
        }

    }
    var mountedApp = Vue.createApp(app).mount('#app')