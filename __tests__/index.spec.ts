import text2kv from '../src';

describe('api.basic', () => {
  test('text list to kv: value/label', () => {
    const list = ['a', 'b', 'c'];
    const result = text2kv(list);
    expect(result).toEqual([
      { value: 'a', label: 'a' },
      { value: 'b', label: 'b' },
      { value: 'c', label: 'c' },
    ]);
  });

  test('customize kv rowKeys', () => {
    const rowKeys = ['id', 'name'] as any;
    const list = ['a', 'b', 'c'];
    const result = text2kv(list, rowKeys);
    expect(result).toEqual([
      { id: 'a', name: 'a' },
      { id: 'b', name: 'b' },
      { id: 'c', name: 'c' },
    ]);
  });
});
