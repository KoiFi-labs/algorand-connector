module.exports = configurations => ({
	...require('./blockchain')(configurations),
	...require('./configurations')(configurations),
	...require('./mongoose')(configurations),
	...require('./notifications')(configurations),
})