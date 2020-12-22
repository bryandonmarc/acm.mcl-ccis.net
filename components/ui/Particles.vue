<template>
  <div :id="id" class="particles-js"></div>
</template>
<script>
import { tsParticles } from 'tsparticles'

export default {
  data() {
    return {
      id: 'particles-instance-' + Math.floor(Math.random() * 5000),
    }
  },
  destroyed() {
    if (Array.isArray(tsParticles.dom()) && tsParticles.dom().length > 0) {
      for (let i = 0; i < tsParticles.dom().length; i++)
        if (tsParticles.dom()[i].id === this.id) {
          tsParticles.dom()[i].destroy()
          tsParticles.dom().splice(i, 1)
        }
    }
  },
  mounted() {
    this.$nextTick(async () => {
      await tsParticles.load(this.id, {
        fpsLimit: this.$mq === 'sm' ? 30 : 60,
        interactivity: {
          detectsOn: 'canvas',
          events: {
            onClick: {
              enable: true,
              mode: 'repulse',
            },
            onHover: {
              enable: true,
              mode: 'grab',
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: '#dedede',
          },
          links: {
            color: '#dedede',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 1200,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'triangle',
          },
          size: {
            random: true,
            value: 3,
          },
        },
        detectRetina: true,
      })
    })
  },
}
</script>
