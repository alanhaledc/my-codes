/*
 * @Author: Hale
 * @Description: Observable 类 - 终极版
 * @Date: 2020/01/04
 * @LastEditTime : 2020/01/04
 */

class SafeObserver {
  constructor(destination) {
    this.destination = destination;
  }

  next(value) {
    const destination = this.destination;
    if (destination.next && !this.isUnsubscribed) {
      destination.next && destination.next(value);
    }
  }

  error(err) {
    const destination = this.destination;
    if (!this.isUnsubscribed) {
      this.isUnsubscribed = true;
      if (destination.error) {
        destination.error(err);
      }
    }
  }

  complete() {
    const destination = this.destination;
    if (!this.isUnsubscribed) {
      this.isUnsubscribed = true;
      if (destination.complete) {
        destination.complete();
      }
    }
  }

  unsubscribe() {
    this.isUnsubscribed = true;
    if (this._unsubscribe) {
      this._unsubscribe();
    }
  }
}

class Observable {
  constructor(_subscribe) {
    this._subscribe = _subscribe;
  }

  subscribe(observer) {
    const safeObserver = new SafeObserver(observer);
    safeObserver._unsubscribe = this._subscribe(safeObserver);
    return () => safeObserver.unsubscribe();
  }
}

const simpleObservable = new Observable((observer) => {
  let i = 0;

  const id = setInterval(() => {
    if (i < 10) {
      observer.next(i++);
    } else {
      observer.complete();
      observer.next("stop me!");
      clearInterval(id);
    }
  }, 200);

  return () => {
    console.log("disposed!");
    clearInterval(id);
  };
});

const observer = {
  next: (value) => console.log(`next -> ${value}`),
  error: () => {},
  complete: () => console.log("complete"),
};

console.log("Observable 类");
const unSub = simpleObservable.subscribe(observer);
setTimeout(unSub, 1000);
