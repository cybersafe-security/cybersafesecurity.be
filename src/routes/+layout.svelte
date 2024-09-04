<script>
    import { waitLocale } from 'svelte-i18n';
    import "../app.css";
    import "$lib/scss/global.scss";
    </script>
    
    {#await waitLocale()}
      <div class="overlay">
        <div class="loading-overlay">
          <img src="/images/logo.png" alt="Logo" class="logo">
          <div class="loading-spinner"></div>
        </div>
      </div>
    {:then}
      <slot />
    {/await}
    
    <style>
      .overlay {
        position: fixed;
        background-color: black;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 9998;
      }
    
      .loading-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 9999;
      }
    
      .logo {
        height: 100px;
        width: 100px;
        margin-bottom: 20px;
      }
    
      .loading-spinner {
        width: 50px;
        height: 50px;
        border: 5px solid #f3f3f3;
        border-top: 5px solid #6d1583;
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }
    
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    </style>
