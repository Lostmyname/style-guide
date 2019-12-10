const path = require('path');
const package = require('./package');

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
  ],
  styleguideComponents: {
    Editor: path.join(__dirname, 'src/styleguide/components/Editor'),
    JsDoc: path.join(__dirname, 'src/styleguide/components/JsDoc'),
    PathlineRenderer: path.join(__dirname, 'src/styleguide/components/PathlineRenderer'),
    Playground: path.join(__dirname, 'src/styleguide/components/Playground'),
    ReactComponentRenderer: path.join(__dirname, 'src/styleguide/components/ReactComponentRenderer'),
  },
  getComponentPathLine(componentPath) {
    if (!package && !package.repository) {
      return componentPath;
    }
    return `[${componentPath}](${package.repository}/blob/master/${componentPath})`
  },
  updateDocs(docs) {
    if (docs && docs.displayName) {
      docs.visibleName = docs.displayName.replace(/([a-z])([A-Z])/g, '$1 $2');
    }
    return docs
  },
  updateExample(props, exampleFilePath) {
    const { lang, content } = props;

    if (lang === 'javascript' || lang === 'js' || lang === 'jsx') {
      const examplePath = exampleFilePath.replace(`${__dirname}/`, '');
      const dir = path.dirname(examplePath).replace('src/components', 'wonderbly-components');
      const name = dir.split('/').pop();
      const importString = `import ${name} from '${dir}';`;

      if (content !== importString) {
        props.content = `${importString}\n\n${content}`
      }
    }

    return props
  }
};
