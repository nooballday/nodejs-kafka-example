const kafka = require('kafka-node')
const client = new kafka.KafkaClient({kafkaHost: 'localhost:9092'})

const Producer = kafka.Producer,
	producer = new Producer(client)

/** send keyed message **/
const KeyedMessage = kafka.KeyedMessage
const km = new KeyedMessage('cetak', {
	hello: 'world'
})
const payloads = [
	{ topic: 'test', messages: km }
]

producer.on('ready', ()=> {
	producer.send(payloads, (err,data) => {
		console.log(data)
	})
})

producer.on('error', function (err) {console.error(err)})
