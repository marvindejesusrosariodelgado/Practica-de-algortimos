
let checkPermutationASCII = (st, ts) => {
	const CHAR_ASCII = 255;
	let chars = new Array(CHAR_ASCII);

	for (s of st) {
		let code = s.charCodeAt(0);
		if (chars[code]) {
			++chars[code];
		} else {
			chars[code] = 1;
		}
	}

	for (s of ts) {
		let code = s.charCodeAt(0);
		if (chars[code]) {
			--chars[code];
		} else {
			return false;
		}
	}

	return true;
};

console.log(checkPermutationASCII('xvcaa', 'acv'));
