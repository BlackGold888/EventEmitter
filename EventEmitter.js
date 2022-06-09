class EventEmitter extends EventTarget {
    add(eventName, callback) {
        this.addEventListener(eventName, callback);
    }

    emit(eventName) {
        try {
            this.dispatchEvent(new Event(eventName));
            return true;
        } catch (e) {
            return false;
        }
    }
}

const eventEmitter = new EventEmitter();

eventEmitter.add('hello', () => {
    console.log('Hello BlackGold');
});

eventEmitter.emit('hello');

