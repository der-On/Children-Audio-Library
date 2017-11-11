function store() {
  const store = {};
  store.set = function (key, value) {
    window.localStorage[key] = JSON.stringify(value);
    m.redraw();
  };
  store.get = function (key, defaultValue) {
    let value;
    const parts = key.split('.');

    try {
      value = JSON.parse(window.localStorage[parts[0]]);
    } catch (err) {
      return defaultValue;
    }

    return typeof value !== 'undefined'
      ? (parts.length === 1 ? value : _.get(value, parts.slice(1), defaultValue))
      : defaultValue;
  };

  return store;
}
