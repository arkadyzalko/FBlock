document.addEventListener('DOMContentLoaded', function() {
	function getAllElementsWithAttribute(attribute, value)
	{
		var matchingElements = [];
		var allElements = document.getElementsByTagName('*');
		var valueElement = null;
		for (var i = 0, n = allElements.length; i < n; i++) {
			valueElement = allElements[i].getAttribute(attribute);
			if (valueElement != null) {
			// Element exists with attribute. Add to array.
				if(arguments.length>1) {
					if(valueElement==value) matchingElements.push(allElements[i]);
				} else {
					matchingElements.push(allElements[i]);
				}
			}
		}
		return matchingElements;
	}
	var checkPageButton = document.getElementById('checkPage');
	checkPageButton.addEventListener('click', function() {
		chrome.tabs.getSelected(null, function(tab) {
			d = document;

			var f = d.createElement('form');
			f.action = 'http://gtmetrix.com/analyze.html?bm';
			f.method = 'post';
			var i = d.createElement('input');
			i.type = 'hidden';
			i.name = 'url';
			i.value = tab.url;
			f.appendChild(i);
			d.body.appendChild(f);
			f.submit();
		});
	}, false);
}, false);


