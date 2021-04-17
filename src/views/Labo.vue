<template>
  <div class="flex h-screen">
    <div class="m-auto text-md xl:mx-auto">
      <div id="labo">
        <p class="text-center elementlabo" data-aos="fade-up">
          <router-link target="_blank" to="/contact" class="effect labotext5 xl:text-6xl sm:text-4xl">
            Contact Form Single
          </router-link>
        </p>       
        <p class="text-center elementlabo" data-aos="fade-up">
          <a target="_blank" href="/assets/html/meteo.html" class="effect labotext4 xl:text-6xl sm:text-4xl">
            API Météo
          </a>
        </p>
        <p class="text-center elementlabo" data-aos="fade-up">
          <a target="_blank" href="/assets/html/hexaclock.html" class="effect labotext3 xl:text-6xl sm:text-4xl">
            HexaClock
          </a>
        </p>
        <p class="text-center elementlabo" data-aos="fade-up">
          <a target="_blank" href="/assets/html/color-palette-selector.html" class="effect labotext2 xl:text-6xl sm:text-4xl">
            Color Palette Selector
          </a>
        </p>
        <p class="text-center elementlabo" data-aos="fade-up">
          <a target="_blank" href="/assets/html/concept-devis.html" class="effect labotext xl:text-6xl sm:text-4xl">
            Concept Devis
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
metaInfo () {
    return {
      title : 'Martial Escudero | Le Labo',
    }
  },
}
</script>

<style>

#labo a {
  padding: 1rem;
  text-decoration: none;
}

#labo a:hover {
  text-decoration: none;
  color: white;
}

p a {
  list-style: none;
  text-decoration: none;
  display: inline-block;
  position: relative;
  z-index: 0;
}

.effect {
  transition: all 300ms;
}

.effect:hover {
  transform: scale(1.3);
}

.labotext {
  text-align: center;
	background-image: linear-gradient(to right, rgb(217, 139, 228), rgb(198, 129, 255), #c125ff, rgb(198, 129, 255), rgb(217, 139, 228));
  background-size: 200% auto;
  color: #000;
  background-clip: text;
  letter-spacing: 1px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: shine 3.5s linear infinite;
          animation: shine 3.5s linear infinite;
}

.labotext2 {
  text-align: center;
	background-image: linear-gradient(to right, rgb(235, 255, 119), #ffb833, #ff6325, #ffb833, rgb(235, 255, 119));
  background-size: 200% auto;
  color: #000;
  background-clip: text;
  letter-spacing: 1px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: shine 3s linear infinite;
          animation: shine 3s linear infinite;
}

.labotext3 {
  text-align: center;
	background-image: linear-gradient(to right, rgb(167, 248, 181), #30db47, #178b2a, #30db47, rgb(167, 248, 181));
  background-size: 200% auto;
  color: #000;
  background-clip: text;
  letter-spacing: 1px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: shine 3.5s linear infinite;
          animation: shine 3.5s linear infinite;
}

.labotext4 {
  text-align: center;
	background-image: linear-gradient(to right, #77f, #33d0ff, #25ffbb, #33d0ff, #77f);
  background-size: 200% auto;
  color: #000;
  background-clip: text;
  letter-spacing: 1px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: shine 3s linear infinite;
          animation: shine 3s linear infinite;
}

.labotext5 {
  text-align: center;
	background-image: linear-gradient(to right, rgb(128, 128, 128), #bdbdbd, #ffffff, #bdbdbd, rgb(128, 128, 128));
  background-size: 200% auto;
  color: #000;
  background-clip: text;
  letter-spacing: 1px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: shine 3.5s linear infinite;
          animation: shine 3.5s linear infinite;
}

@-webkit-keyframes shine {
  to {
    background-position: 200% center;
  }
}
@keyframes shine {
  to {
    background-position: 200% center;
  }
}
</style>