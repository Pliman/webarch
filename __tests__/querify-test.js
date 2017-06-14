import querify from '../app/utils/querify';

describe('querify', () => {
	it(`{a: 'a'} => a=a`, () => {
		expect(querify({ a: 'a' })).toBe('a=a');
	});

	it(`{a: 'a', b: 'b'} => a=a&b=b`, () => {
		expect(querify({ a: 'a', b: 'b' })).toBe('a=a&b=b');
	});

	it(`{a: 'a', b: null, c: undefined, d: ''} => a=a`, () => {
		expect(querify({ a: 'a', b: null, c: undefined, d: '' })).toBe('a=a');
	});
});