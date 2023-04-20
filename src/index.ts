type RowKeys = [string, string];
const DEFAULT_ROW_KEYS = ['value', 'label'];
const text2kv = (inArray: string[], inRowKeys?: RowKeys): any[] => {
  const rowKeys = inRowKeys || DEFAULT_ROW_KEYS;
  return inArray.map((item) => ({
    [rowKeys[0]]: item,
    [rowKeys[1]]: item,
  }));
};

// for commonjs es5 require
if (typeof module !== 'undefined' && module.exports) {
  module.exports = text2kv;
}

export default text2kv;
