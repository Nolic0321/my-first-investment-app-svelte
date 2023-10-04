<script lang="ts">
</script>
<style global>
  @import 'tailwindcss/base';
  @import 'tailwindcss/components';
  @import 'tailwindcss/utilities';


  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    height: 3rem;
    background-color: #333;
    color: #fff;
  }

  nav a {
    color: #fff;
    text-decoration: none;
  }
</style>
<nav>
    <a href="/">Home</a>
    <a href="/auth">Login/Signup</a>
</nav>
<div class="mt-4">

    <slot/>
</div>
