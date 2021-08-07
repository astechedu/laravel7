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