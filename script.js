

function getTopics(callback) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
    	if (this.readyState == 4 && this.status == 200) {
    		callback(JSON.parse(xhttp.responseText));
    	}
	};
	xhttp.open('GET', 'http://localhost:3000/topic', true);
	xhttp.send();
}

function initTopics() {
	getTopics(function(topics) {
		for (var counter = 0; counter < topics.length; counter++) {
			appendTopic(topics[counter]);
		}
	});
}

function appendTopic(topic) {
	var list = document.getElementsByTagName('ul')[0];
	var item = document.createElement('li');
	var text = document.createTextNode(topic.name);
	console.log(topic)
	var date = document.createTextNode(" "+ "created at: " + topic.topic_time)
	item.addEventListener('click', function() {
		onTopicClick(topic);
	});
	item.appendChild(text);
	item.appendChild(date);
	list.appendChild(item);

}

function onTopicClick(topic) {
	location.href = 'topic.html?id=' + topic.id;
}

initTopics();