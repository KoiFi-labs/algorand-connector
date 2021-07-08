module.exports = configurations => ({
	...require('./algorand')(configurations),
	...require('./blockchain')(configurations),
	...require('./configurations')(configurations),
	...require('./mongoose')(configurations),
	...require('./notifications')(configurations),
})