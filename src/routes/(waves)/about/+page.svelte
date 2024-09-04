<script>
    import Waves from '$lib/components/organisms/Waves.svelte';
    import { fade,fly,slide } from 'svelte/transition'

    import { _, locale, time, date, number, t } from 'svelte-i18n';
</script>


<Waves />

<div class="error-page">
	<div class="container">
        <img width="100" height="100" src="images/logo.png" alt="fingerprint--v1" />
		<h1 in:fly="{{ y: 50, duration: 1000 }}">{$_('/about.titre')}</h1>
	</div>
</div>

<div class="about-section" in:fly={{ y: 50, duration: 2000 }}>
    <h1 class="card-title">{$_('/about.mission.titre')}</h1>
    <br>
    <div class="card">
        <h5><strong>{$_('/about.mission.p1')}</strong></h5>
        <hr class="custom-hr">
        <br>
        <h5>{$_('/about.mission.p2')}<h5>
        <hr class="custom-hr">
        <br>
        <h5>{$_('/about.mission.p3')}</h5>
        <hr class="custom-hr">
        <br>
        <h5>{$_('/about.mission.p4')}</h5>
        <hr class="custom-hr">
        <br>
        <h4><strong>{$_('/about.mission.p5')}</strong></h4>
    </div>
    <br>
   
</div>

<main>
    <section class="hero">
      <h2>{$_('/about.valeur.titre')}</h2>
    </section>
  
    <section class="blog-posts">
        <div class="post-card">
          <h3>{$_('/about.valeur.t1')}</h3>
          {$_('/about.valeur.p1')}
        </div>
        <div class="post-card">
          <h3>{$_('/about.valeur.t2')}</h3>
          {$_('/about.valeur.p2')}
        </div>
        <div class="post-card">
          <h3>{$_('/about.valeur.t3')}</h3>
          {$_('/about.valeur.p3')}
        </div>
        <div class="post-card">
          <h3>{$_('/about.valeur.t4')}</h3>
          {$_('/about.valeur.p4')}
        </div>
    </section>
  </main>
<br>
<main>
  <section class="hero">
    <h2>{$_('/about.choix.titre')}</h2>
  </section>

  <section class="blog-posts">
      <div class="post-card">
        <h3>{$_('/about.choix.t1')}</h3>
        {$_('/about.choix.p1')}
      </div>
      <div class="post-card">
        <h3>{$_('/about.choix.t2')}</h3>
        {$_('/about.choix.p2')}
      </div>
      <div class="post-card">
        <h3>{$_('/about.choix.t3')}</h3>
        {$_('/about.choix.p3')}
      </div>
      <div class="post-card">
        <h3>{$_('/about.choix.t4')}</h3>
        {$_('/about.choix.p4')}
      </div>
  </section>
</main>



<style lang="scss">
	.error-page {
		position: relative;
	}
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 60vh;
		text-align: center;

		.svg-wrapper {
			width: 300px;
			margin-top: -60px;
			margin-bottom: -30px;

			:global(svg) {
				filter: drop-shadow(2px 6px 0px rgba(0, 0, 0, 0.1));
			}
		}
	}

    .card {
    background-color: #32343e;
    border-bottom:solid 1px #6e1481;
    color: white;
    border-radius: 20px;
    padding: 20px;
    min-width: 300px;
    width: 80%;
    box-shadow: 0 0px 2px black;
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

  .post-card:hover {
    box-shadow: 0 0px 2px white;
}

  .documentation-btn {
    background-color: transparent;
    border: 1px solid #8e44ad;
    color: #8e44ad;
  }
</style>
