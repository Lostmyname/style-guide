const path = require('path');

const addSection = (name, path) => ([{
  name,
  sectionDepth: 1,
  content: `${path}/Readme.md`,
  components: `${path}/**/*.js`,
}]);

module.exports = {
  title: 'Wonderbly Style Guide',
  moduleAliases: {
    'src': path.resolve(__dirname, 'src'),
    'wonderbly-components': path.resolve(__dirname, 'src/components'),
    'styleguide-components': path.resolve(__dirname, 'node_modules/react-styleguidist/lib/client/rsg-components')
  },
  ignore: [
    'src/styleguide/**/*',
    '**/__tests__/**',
    '**/index.{js,jsx,ts,tsx}',
    '**/*.styled.{js,jsx,ts,tsx}',
    '**/*.test.{js,jsx,ts,tsx}',
    '**/*.spec.{js,jsx,ts,tsx}',
    '**/*.d.ts'
  ],
  pagePerSection: true,
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Inconsolata&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Poppins&display=swap'
        },
      ],
    }
  },
  theme: {
    fontFamily: {
      base: '"Poppins", sans-serif',
      monospace: '"Inconsolata", monospace'
    }
  },
  sections: [
    {
      name: 'Wonderbly Style Guide',
      content: 'src/docs/introduction.md',
      sectionDepth: 1,
    },
    {
      name: 'Rules',
      content: 'src/docs/rules.md',
      sectionDepth: 1,
      sections: [
        {
          name: 'Type',
          content: 'src/docs/type.md',
          sectionDepth: 1,
        }
      ],
    },
    {
      name: 'Components',
      content: 'src/components/Readme.md',
      sectionDepth: 1,
      sections: [
        ...addSection('Atoms', 'src/components/atoms'),
        // ...addSection('Molecules', 'src/components/molecules'),
        // ...addSection('Organisms', 'src/components/organisms'),
      ]
    }
  ]
};
