const Tabs = {
  parts: ['tab'],
  variants: {
    'solid-rounded-gradient': {
      tab: {
        _selected: {
          borderRadius: 'full',
          bgGradient: 'linear(to-l, #7928CA, #FF0080)',
          color: 'white',
          fontWeight: 'bold',
        },

      },

    },
    'solid-gradient': {
      tab: {
        _selected: {
          bgGradient: 'linear(to-l, #7928CA, #FF0080)',
          color: 'white',
          fontWeight: 'bold',
        },

      },

    },
  },

};

export default Tabs;
