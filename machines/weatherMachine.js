import { createMachine } from 'xstate';
const weatherMachine = 
/** @xstate-layout N4IgpgJg5mDOIC5QHcwEMAuALMAnAdAOpoCWGJAdlAMQDKAogIIBKAwgBIDaADALqKgADgHtYZEsIoCQAD0QBaAEwBWAJz5FigGwAOACzKAjAGZlx4zoDsygDQgAnoiP49xxYcWrl3V4dXdLAF9Au1RMHAIAGWE0CEoaABsYuKp6XFxhXB5+JBARMXJJaTkEeRNLfB1uVQtXLS01Qy1FO0cEYy0KnVUdQ0sTZSNLPU7g0PRsPHxo2PjqMMncGYhIbOl88SLckvkjHXxlS0U9Yc8tQx0rVsRDExddXUtLVXOawzGQBYjp5PiAAjSGVwdCYbC4fHWok2Um2CkM3G4B1MqhGOnqjWa1wQt0UlR6fQGQxGQRCnwm32WkBBLA4a1yG0KMNAOz0qkM+ARF26CJGqmOWI6ygOxysPUsCOOL2CpIowhW8FyXymxHEVEhBQkTNkChUenwhj01W43h8qksxjNWPkunwxj0vPhegGhkGHyVUV+avpUMZxR1hw5inF7ksWjZQZRWKauPhF0UaLNxm4o1J7p+syoAPSmXV0L9CB0Ma09qabzcVR0WMU1Xw53qTtZx0U5mMbvJU0pEFzvthpT0l3w1lUZu47hRxj8VZrdeLBr5emb5jb4Tw3c1+d29QORxOC5eXMsVpdFTtvKDIoRKeCQA */
createMachine({
  id: "weather",
  initial: "Waiting",
  states: {
    Waiting: {
      on: {
        SEARCH: {
          target: "Loading",
        },
      },
    },
    Loading: {
        invoke: {
          
          src: 'Loading'
        },
      on: {
        loadingError: {
          target: "Loading Error",
        },
        weatherLoaded: {
          target: "Loaded",
        },
      },
    },
    "Loading Error": {
      on: {
        SEARCH: {
          target: "Loading",
        },
      },
    },
    Loaded: {
      on: {
        SEARCH: {
          target: "Loading",
        },
      },
    },
  },
});