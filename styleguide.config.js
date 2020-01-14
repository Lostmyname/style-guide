const path = require('path');
const fs = require('fs');

const pkg = require('./package');

const getContentPath = (name) => {
  const contentPath = `src/docs/${name.toLowerCase()}.md`;
  if (fs.existsSync(contentPath)) {
    return contentPath;
  }
};

const addSection = (name, sections = null) => ({
  name,
  sections,
  sectionDepth: 1,
  content: getContentPath(name),
});

const addComponents = (name, path = `src/components/${name.toLowerCase()}`) => ({
  name,
  sectionDepth: 1,
  components: `${path}/**/*.js`,
  content: getContentPath(name),
});

module.exports = {
  title: 'Wonderbly Style Guide',
  moduleAliases: {
    'src': path.resolve(__dirname, 'src'),
    'wonderbly-components': path.resolve(__dirname, 'src/components'),
    'styleguide-client': path.resolve(__dirname, 'node_modules/react-styleguidist/lib/client'),
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
  theme: {
    fontFamily: { base: ['inherit'] },
  },
  styleguideComponents: {
    Editor: path.join(__dirname, 'src/styleguide/components/overrides/Editor'),
    JsDoc: path.join(__dirname, 'src/styleguide/components/overrides/JsDoc'),
    PathlineRenderer: path.join(__dirname, 'src/styleguide/components/overrides/PathlineRenderer'),
    Playground: path.join(__dirname, 'src/styleguide/components/overrides/Playground'),
    ReactComponent: path.join(__dirname, 'src/styleguide/components/overrides/ReactComponent'),
    SectionRenderer: path.join(__dirname, 'src/styleguide/components/overrides/SectionRenderer'),
    SectionHeadingRenderer: path.join(__dirname, 'src/styleguide/components/overrides/SectionHeadingRenderer'),
    TableOfContents: path.join(__dirname, 'src/styleguide/components/overrides/TableOfContents'),
    StyleGuideRenderer: path.join(__dirname, 'src/styleguide/components/overrides/StyleGuideRenderer'),
  },
  getComponentPathLine(componentPath) {
    if (!pkg && !pkg.repository) {
      return componentPath;
    }
    return `[${componentPath}](${pkg.repository}/blob/master/${componentPath})`
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
      const importStringRegex = /import [a-zA-z0-9]+ from ["'][\w-/]+["'];/gm;

      const examplePath = exampleFilePath.replace(`${__dirname}/`, '');
      const dir = path.dirname(examplePath).replace('src/components', 'wonderbly-components');
      const name = dir.split('/').pop();
      const importString = `import ${name} from '${dir}';`;

      if (!content.match(importStringRegex)) {
        props.content = `${importString}\n\n${content}`
      }
    }

    return props
  },
  require: [ path.resolve(__dirname, 'src/styleguide/setup.js') ],

  sections: [
    addSection('Overview'),
    addSection('Rules', [
      addSection('Type')
    ]),
    addSection('Components', [
      addComponents('Atoms'),
      addComponents('Molecules'),
      addComponents('Organisms'),
    ]),
  ],
};
