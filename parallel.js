//https://rubaxa.github.io/playground/#parallel

function parallel(funcs, callback) {
  const results = [];
  let remaining = funcs.length;

  if (!remaining) return callback(results);

  funcs.forEach((f, i) => {
    const done = (value) => {
      results[i] = value;
      if (!--remaining) {
          callback(results)
      };
    };

    f.length ? f(done) : done(f());
  });
}

parallel([
	function (resolve) {
		setTimeout(function () {
			resolve(10);
		}, 50);
	},
	function () {
		return 5;
	},
	function (resolve) {
		setTimeout(function () {
			resolve(0);
		}, 10)
	}
], function (results) {
	console.log(results); // [10, 5, 0]
});