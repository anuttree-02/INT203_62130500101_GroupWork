    const app = {
        data() {
            return {
                Name: 'Anuttree Tipmom',
                Position: 'Student',
                Image: 'profileimages/1.jpg'
            }
        }

    }
    var mountedApp = Vue.createApp(app).mount('#app')