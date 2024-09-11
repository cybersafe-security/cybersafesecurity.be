<script>
   import Tag from '$lib/components/atoms/Tag.svelte';
   import { fade,fly,slide } from 'svelte/transition'

   import { _, locale, time, date, number, t } from 'svelte-i18n';
   import { get } from 'svelte/store'

   import Features from '$lib/data/features'
</script>

<div in:fly={{ y: 100, duration: 1000 }}>
<div class="error-page">
   <div class="container">
	   <img style="margin-top:100px;" src={Features[5].image}>
	   <h1>{$_('/.features.data.5.name')}</h1>
	   <div class="post-card">
		   <h5>{$_('/.features.data.5.description')}</h5>
	   </div>
	   <br>
	   <h3>{$_('/services/routeur.titre')}</h3><br>
	   <section class="blog-posts">
		   <div class="post-card">
			   <img src="/images/routeur-chiffrage.avif">
         <h3>{$_('/services/routeur.t1')}</h3>
			   <p>{$_('/services/routeur.p1')}</p>
         <br>
			   <Tag redirect={$locale+"/vpn-tor"}>{$_('/services/routeur.tag1')}</Tag>
		   </div>
		   <div class="post-card">
			<img src="/images/routeur-speedtest.webp">
      <h3>{$_('/services/routeur.t2')}</h3>
      <p>{$_('/services/routeur.p2')}</p>
      <br>
		</div>
        <div class="post-card">
            <img src="/images/pc-ufw.jpg">
            <h3>{$_('/services/routeur.t3')}</h3>
            <p>{$_('/services/routeur.p3')}</p>
            <br>
        </div>	 
	   </section>
<br>
       <section class="blog-posts">
        <div class="post-card">
            <img src="/images/routeur-restraint.png">
            <h3>{$_('/services/routeur.t4')}</h3>
            <p>{$_('/services/routeur.p4')}</p>
            <br>
        </div>
        <div class="post-card">
         <img src="/images/routeur-portable.jpg">
         <h3>{$_('/services/routeur.t5')}</h3>
			   <p>{$_('/services/routeur.p5')}</p>
         <br>
     </div>
    </section>
   </div>
</div>
</div>

<br>
<div class="card">
   <div class="card-header">
	 <h2>{$_('/services/routeur.tarif.titre')}</h2>
	 <div class="price">
	   <span class="currency">€</span>
	   <span class="amount">{Features[5].prix}</span>
	 </div>
   </div>
   <div class="card-body">
	 <ul>
    {#each $_('/services/routeur.tarif.value') as value}
    <li>{value}</li>
  {/each}
	 </ul>
   </div>
 </div>

<style lang="scss">
   .error-page {
	   background: var(--color--page-background);
	   position: relative;
   }
   .container {
	   display: flex;
	   flex-direction: column;
	   align-items: center;
	   justify-content: center;
	   min-height: 60vh;
	   text-align: center;
   }

.about-section{
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   height: 100%;
   padding: 20px;
   box-sizing: border-box;
}

.card-title {
   font-size: 1.5em;
   margin-bottom: 10px;
   text-align: center;
}

.card-time {
   font-size: 0.9em;
   color: #CCCCCC;
   margin-bottom: 10px;
}

.card-description {
   margin-bottom: 20px;
}

.card-button {
   display: inline-block;
   padding: 10px 20px;
   background-color: #5C2D91;
   color: white;
   text-decoration: none;
   border-radius: 5px;
   transition: background-color 0.3s;
}

.card-button:hover {
   background-color: #4A2373; 
}


.hero {
   text-align: center;
   margin-bottom: 2rem;
 }

 .custom-hr {
		   border: none;
		   height: 1px;
		   background-color: #9a989a; 
		   margin: 20px 20%; 
	   }

 .blog-posts {
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
   gap: 1rem;
 }

 .post-card {
   background-color: #32343e;
   box-shadow: 0 0px 2px black;
   padding: 1rem;
   border-radius: 5px;
   text-align: center;
   border-bottom:solid 1px #6e1481;
 }

 .post-card img{
   box-shadow: 0px 0px 4px black;
   border-radius: 20px;
 }

 .post-card:hover {
   box-shadow: 0 0px 2px white;
}

 .documentation-btn {
   background-color: transparent;
   border: 1px solid #8e44ad;
   color: #8e44ad;
 }
 h2{
   text-align: center;
 }

 .card {
   background: #32343e;
   border-radius: 20px;
   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
   padding: 2rem;
   max-width: 100%;
   transition: transform 0.3s ease, box-shadow 0.3s ease;
   text-align: center;

 }

 @media (min-width: 1024px) {
   .card {
   margin-left: 20%;
		   margin-right: 20%;
 	}
	.tag-info{
		display: flex;justify-content: space-evenly;
	}
	   }

 .card:hover {
   transform: translateY(-5px);
   box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
 }

 .card-header {
   text-align: center;
   margin-bottom: 2rem;
 }

 .price {
   font-size: 2.5rem;
   color: #402cf2;
   font-weight: bold;
 }

 .currency, .period {
   font-size: 1rem;
   vertical-align: super;
 }

 .card-body ul {
   list-style-type: none;
   padding: 0;
 }

 .card-body li {
   padding: 0.5rem 0;
   align-items: center;
 }

 .card-body li::before {
   content: "✓";
   color: #4CAF50;
   font-weight: bold;
   margin-right: 0.5rem;
 }

 .card-footer {
   margin-top: 2rem;
   text-align: center;
 }

 button {
   background: linear-gradient(45deg, #6a11cb 0%, #2575fc 100%);
   border: none;
   color: white;
   padding: 1rem 2rem;
   border-radius: 50px;
   font-size: 1rem;
   font-weight: bold;
   cursor: pointer;
   transition: transform 0.2s ease, box-shadow 0.2s ease;
 }

 button:hover {
   transform: translateY(-2px);
   box-shadow: 0 5px 15px rgba(37, 117, 252, 0.4);
 }
</style>