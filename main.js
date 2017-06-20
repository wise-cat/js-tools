tools = {}

tools.ajax = function (path, ok, err) {
	$.ajax(path).done(ok).error(err);
}

tools.mousepos = function (e) {
	var pos = [0, 0];
	if(e.offsetX) {
		pos[0] = e.offsetX;
		pos[1] = e.offsetY;
	} else if(e.layerX) {
		pos[0] = e.layerX;
		pos[1] = e.layerY;
	}
	return pos;
}

tools.Mouse = function (elem) {
	var self = this;
	self.elem = elem;

	self.pos = [0, 0];
	self.left = false;
	self.middle = false;
	self.right = false;

	self.elem.addEventListener("mousemove", function(e) {
		var mp = tools.mousepos(e);
		self.pos[0] = mp[0];
		self.pos[1] = mp[1];
		self.move(self.pos);
	});

	self.elem.addEventListener("wheel", function(e) {
		var dz = (e.deltaY > 0) - (e.deltaY < 0);
		self.wheel(dz);
	});
}