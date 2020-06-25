function escapeshellarg(arg) {
	arg = String(arg).replace(/'/g, "'\\''");
	return "'" + arg + "'";
}

module.exports = escapeshellarg;
