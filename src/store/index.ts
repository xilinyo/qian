const files = import.meta.globEager('../modules/*/store/index.ts');

export interface Store {
  [name: string]: any;
}

const store: Store = {};
for (const key in files) {
  const module: string = key.replace(
    /..\/modules\/(.*)\/store\/index.ts|js/g,
    '$1'
  );
  store[module] = files[key].default();
}

export default () => store;
