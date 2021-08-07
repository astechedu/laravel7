##This is Demo for absolute beginners how to use vue-router in laravel 7 framework
##Create new files
Path: resources/js/components
1. App.vue 

<template>
    <main>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <router-link to="/" class="navbar-brand">Dashboard</router-link>                       
                <router-link to="/contact" class="navbar-brand">Contact</router-link>
                <router-link to="/services" class="navbar-brand">Services</router-link>          
            </div>
        </nav>

        <div class="container mt-5">

            <router-view></router-view>
            
        </div>

    </main>

</template>
 
<script>
    export default {}
</script>

2. Dashboard.vue
3. Contact.vue
4. Services.vue

##Changing in fille
1. resources/js/app.js

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.
