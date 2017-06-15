function ajax(path, ok, err) {
	let req = new XMLHttpRequest();
	if (!req) {
		err(null);
		return null;
	}
	req.onreadystatechange = function() {
		if (this.readyState == XMLHttpRequest.DONE) {
			if (this.status == 200) {
				ok && ok(this.responseText);
			} else {
				err && err(this.status);
			}
		}
	};
	req.open("GET", path, true);
	req.send();
	return req;
}
