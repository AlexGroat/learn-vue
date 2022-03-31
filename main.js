Vue.component("duelist-list", {
    // slot user tags inside the list item
    template: `<div><agent v-for="agent in agents" v-if="agent.duelist">{{ agent.name }}</agent></div>`,

    data() {
        
        return {
            agents: [
                { name: 'Raze', duelist: true },
                { name: 'Omen', duelist: false },
                { name: 'Jett', duelist: false },
                { name: 'Reyna', duelist: true },
                { name: 'Viper', duelist: false },
                { name: 'Yoru', duelist: true },
            ]
        }
    }
  });

Vue.component("agent-list", {
    // slot user tags inside the list item
    template: `<div><agent v-for="agent in agents">{{ agent.name }}</agent></div>`,

    data() {
        
        return {
            agents: [
                { name: 'Raze', duelist: true },
                { name: 'Omen', duelist: false },
                { name: 'Jett', duelist: false },
                { name: 'Reyna', duelist: true },
                { name: 'Viper', duelist: false },
                { name: 'Yoru', duelist: true },
            ]
        }
    }
  });

Vue.component("agent", {
  // slot user tags inside the list item
  template: "<li><slot></slot></li>",
});

new Vue({
    el: '#root'
});
